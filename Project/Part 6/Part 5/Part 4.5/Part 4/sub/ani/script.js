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
    ul.appendChild(getLi( animal.description));
    ul.appendChild(getLi(`Traits: ${animal.traits.join(', ')}`));
  
    return section;
  };
  
  const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };
  
  window.onload = () => showAnimals();