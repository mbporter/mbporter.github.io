const getShoes = async () => {
 const url = "...........";
 try {
    const responce = await fetch(url); 
    return await responce.json();
 } catch (error){
    console.log(error);
 }
};


const showShoes = async () => {
    let shoes = await getShoes();
    let shoesSection = document.getElementById(animal-Section);
    
    shoes.forEach(shoe => {
        shoesSection.apped(getShoeItem(shoe));
    });
};

const getShoeItem = shoe => {
    let section = document.createElement("section");

    return section;
}

window.onload = () => showShoes ();