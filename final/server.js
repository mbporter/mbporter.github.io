const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

mongoose
  .connect("mongodb+srv://Mbporter:Macmac123123@cluster0.sefh4en.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const animalSchema = new mongoose.Schema({
  name: String,
  species: String,
  habitat: String,
  description: String,
  traits: String,
});
const Animal = mongoose.model("Animal", animalSchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
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

    if (req.file) {
      newAnimal.img = "images/" + req.file.filename;
    }

    await newAnimal.save();
    res.send(newAnimal);
  } catch (error) {
    console.error("Error adding animal:", error);
    res.status(500).send("Error adding animal");
  }
});

app.put("/api/animals/:id", upload.single("img"), async (req, res) => {
  try {
    const result = validateAnimal(req.body);

    if (result.error) {
      res.status(400).send(result.error.details[0].message);
      return;
    }

    let fieldsToUpdate = {
      name: req.body.name,
      species: req.body.species,
      habitat: req.body.habitat,
      description: req.body.description,
      traits: req.body.traits,
    };

    if (req.file) {
      fieldsToUpdate.img = "images/" + req.file.filename;
    }

    const animal = await Animal.findByIdAndUpdate(req.params.id, fieldsToUpdate, {
      new: true,
    });

    if (!animal) {
      return res.status(404).send("The animal with the given ID was not found.");
    }

    res.send(animal);
  } catch (error) {
    console.error("Error updating animal:", error);
    res.status(500).send("Error updating animal");
  }
});

app.delete("/api/animals/:id", async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) {
      return res.status(404).send("The animal with the given ID was not found.");
    }
    res.send(animal);
  } catch (error) {
    console.error("Error deleting animal:", error);
    res.status(500).send("Error deleting animal");
  }
});

const validateAnimal = (animal) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    species: Joi.string().required(),
    habitat: Joi.string().required(),
    description: Joi.string().required(),
    traits: Joi.string().required(),
  });
  console.log("Validating animal:", animal);
  return schema.validate(animal);
};

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
