class Toys {
    constructor(name, price, ageRange, rating, imageFile) {
      this.name = name;
      this.price = price;
      this.ageRange = ageRange;
      this.rating = rating;
      this.imageFile = imageFile;
    }
  
    get details() {
      return `${this.name}\n$${this.price}\n${this.ageRange}\n${this.rating}`;
    }
  
    get ToyItem() {
      const section = document.createElement("section");
      section.classList.add("toys");
  
      const h2 = document.createElement("h2");
      h2.innerHTML = this.name;
      section.append(h2);
  
      const ul = document.createElement("ul");
      section.append(ul);
      ul.append(this.toyItemlist("Price: " + this.price));
      ul.append(this.toyItemlist("Age Range: " + this.ageRange));
      ul.append(this.toyItemlist("Rating: " + this.rating));
  
      const image = this.images(this.imageFile);
      section.append(image);
  
      return section;
    }
  
    images(info) {
      const image = document.createElement("img");
      image.src = "images/" + info;
      return image;
    }
  
    toyItemlist(info) {
      const li = document.createElement("li");
      li.textContent = info;
      return li;
    }
  }
  
  const Toy = () => {
    const toyList = document.getElementById("toys-list");
    const toys = [];
    toys.push(new Toys("Kirby plush", "$16.00", "4+", "4.8 stars", "kirby.webp"));
    toys.push(new Toys("Monster High Doll", "$15.99", "3+", "4.8 stars", "mhd.jpg"));
    toys.push(new Toys("Baby GUND  Plush", "$11.99", "1+", "5 stars", "scary.jpg"));
    toys.push(new Toys("Dino Figure", "$34.99", "10+", "5 stars", "dino.jpg"));
    toys.push(new Toys("Plush", "$17.99", "3+", "4.8 stars", "autism.jpg"));
    toys.push(new Toys("Pop Tubes", "$5.99", "5+", "2 stars", "tube.jpg"));
  
    toys.forEach((toy) => {
      toyList.append(toy.ToyItem);
    });
  };
  
window.onload = () => {
    Toy();
}