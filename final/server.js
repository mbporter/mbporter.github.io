const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());

//create multer storage and file filter function
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//App Start
mongoose
  .connect("mongodb+srv://Mbporter:Macmac123123@cluster0.sefh4en.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect to mongodb...", err));

  const animalSchema = new mongoose.Schema({
    name: String,
    species: String,
    habitat: String,
    description: String,
    traits: String,
  });
  const Animal = mongoose.model("Animal", animalSchema);
  
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  
  app.get("/api/animals", async (req, res) => {
    try {
      const animals = await Animal.find();
      res.send(animals);
    } catch (error) {
      console.error("Error retrieving animals:", error);
      res.status(500).send("Error retrieving animals");
    }
  });
  
  app.post("/api/animals", upload.single("img"), async (req, res) => {
    try {
      const newAnimal = new Animal({
        name: req.body.name,
        species: req.body.species,
        habitat: req.body.habitat,
        description: req.body.description,
        traits: req.body.traits,
      });
  

  
      await newAnimal.save();
      res.send(newAnimal);
    } catch (error) {
      console.error("Error adding animal:", error);
      res.status(500).send("Error adding animal");
    }
  });
  
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/animals", (req, res) => {
  getAnimals(res);
});

const getAnimals = async (res) => {
  const animals = await Animal.find();
  res.send(animals);
};

app.post("/api/animals", upload.single("img"), (req, res) => {
  console.log("Received POST request to /api/animals");
  const result = validateAnimal(req.body);

  if (result.error) {
    console.log("Validation error:", result.error.details[0].message);
    res.status(400).send(result.error.details[0].message);
    return;
  }

  console.log("Validated input:", req.body);

  const newAnimal = new Animal({
    name: req.body.name,
    date: req.body.date,
    authenticity: req.body.authenticity,
    condition: req.body.condition,
    description: req.body.description,
  });



  createAnimal(newAnimal, res);
});

const createAnimal = async (animal, res) => {
  const result = await animal.save();
  res.send(animal);
};

app.put("/api/animals/:id", (req, res) => {
  console.log(`Received PUT request to /api/animals/${req.params.id}`);
  const result = validateAnimal(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  updateAnimal(req, res);
});

const updateAnimal = async (req, res) => {
  let fieldsToUpdate = {
    name: req.body.name,
    species: req.body.species,
    habitat: req.body.habitat,
    description: req.body.description,
    traits: req.body.traits
};




  const result = await Animal.updateOne({ _id: req.params.id }, fieldsToUpdate);
  const animal = await Animal.findById(req.params.id);
  res.send(animal);
};

app.delete("/api/animals/:id", (req, res) => {
  console.log(`Received DELETE request to /api/animals/${req.params.id}`);
  removeAnimal(res, req.params.id);
});

const removeAnimal = async (res, id) => {
  const animal = await Animal.findByIdAndDelete(id);
  res.send(animal);
};

const validateAnimal = (animal) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    species: Joi.string().required(),
    habitat: Joi.string().required(),
    description: Joi.string().required(),
    traits: Joi.string().required()
});

  console.log("Validating animal:", animal);
  return schema.validate(animal);
};

app.listen(3000, () => {
  console.log("I'm Listening");
});