class Tree {
    constructor(name, info, pic) {
        this.name = name;
        this.info = info;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("tree");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        section.append(h3);

        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x2964;";
        arrow.classList.add("arrow");
        h3.append(arrow);
        arrow.onclick = () => this.showModal();
        
        const moreSection = document.createElement("section");
        moreSection.classList.add("hidden", "more");
        moreSection.append(this.paragraph("Info", this.info));
        section.append(moreSection);

        return section;
    }

    showModal() {
        const modal = document.getElementById('id01');
        const modalContent = modal.querySelector('.w3-modal-content');
        const modalHeader = modalContent.querySelector('header h2');
        const modalBody = modalContent.querySelector('.w3-container');
        
        modalHeader.textContent = this.name;
        modalBody.innerHTML = `<p>${this.info}</p>`;
        
        modal.style.display = 'block';
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}:</strong> ${info}`;
        return p;
    }
}

const trees = [];
trees.push(new Tree(
    "Palm",
    "Palm trees are known for their tropical appearance and are often associated with warm climates.",
    "palm.jpg"
));
trees.push(new Tree(
    "Willow",
    "Willow trees are characterized by their drooping branches and slender leaves, often found near water bodies.",
    "willow.jpg"
));
trees.push(new Tree(
    "Elm",
    "Elm trees are known for their tall stature and distinctive serrated leaves.",
    "elm.jpg"
));
trees.push(new Tree(
    "Maple",
    "Maple trees are famous for their vibrant foliage in the autumn and are often tapped for maple syrup production.",
    "maple.jpg"
));

trees.forEach((tree) => {
    document.getElementById("content").append(tree.item);
});

function showModal(index) {
    const tree = trees[index];
    const modal = document.getElementById('id01');
    const modalHeader = modal.querySelector('#modal-header');
    const modalBody = modal.querySelector('#modal-body');

    modalHeader.textContent = tree.name;
    modalBody.innerHTML = `<img src="images/${tree.pic}" alt="${tree.name}" style="max-width: 100%;"><p>${tree.info}</p>`;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('id01');
    modal.style.display = 'none';
}
