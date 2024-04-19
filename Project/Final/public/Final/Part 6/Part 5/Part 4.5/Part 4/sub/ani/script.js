const getAnimals = async () => {
  const url = "https://mbporter.github.io/Project/Part%205/Part%204.5/Part%204/json/animals.json";
  try {
      const response = await fetch(url);
      return await response.json();
  } catch (error) {
      console.log(error);
  }
};

const showAnimals = async () => {
  let animals = await getAnimals();
  let animalsSection = document.getElementById("animal-section");

  animals.forEach(animal => {
      animalsSection.appendChild(getAnimalItem(animal));
  });
};

const getAnimalItem = animal => {
  let section = document.createElement("section");

  let h3 = document.createElement("h3");
  h3.innerText = animal.name;
  section.appendChild(h3);

  let img = document.createElement("img");
  img.src = `images/${animal.img_name}`;
  img.alt = animal.name;
  section.appendChild(img);

  let ul = document.createElement("ul");
  section.appendChild(ul);
  ul.appendChild(getLi(`Species: ${animal.species}`));
  ul.appendChild(getLi(`Habitat: ${animal.habitat}`));
  ul.appendChild(getLi(animal.description));
  ul.appendChild(getLi(`Traits: ${animal.traits.join(', ')}`));

  return section;
};

const getLi = data => {
  const li = document.createElement("li");
  li.textContent = data;
  return li;
};

window.onload = () => {
  showAnimals();

  const form = document.getElementById('add-animal-form');
  const successMessage = document.getElementById('success-message');
  const animalDetailsContainer = document.getElementById('animal-details-container');

  form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const species = document.getElementById('species').value;
      const habitat = document.getElementById('habitat').value;
      const description = document.getElementById('description').value;
      const traits = document.getElementById('traits').value.split(',');

      const newAnimal = {
          name: name,
          species: species,
          habitat: habitat,
          description: description,
          traits: traits
      };
      const animalDetails = document.createElement('div');
      animalDetails.classList.add('animal-details');

      animalDetails.innerHTML = `
          <h3>${name}</h3>
          <p><strong>Species:</strong> ${species}</p>
          <p><strong>Habitat:</strong> ${habitat}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Traits:</strong> ${traits.join(', ')}</p>
      `;
      animalDetailsContainer.appendChild(animalDetails);

      successMessage.textContent = 'Animal added successfully!';
      successMessage.style.display = 'block';

      form.reset();

      setTimeout(() => {
          successMessage.textContent = '';
          successMessage.style.display = 'none';
      }, 2000);
  });
};