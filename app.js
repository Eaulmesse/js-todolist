// Récupérer le INPUT
// Envoyer le contenue en li dans liste-courses

let inputText 
let btnSubmit = document.getElementById('form-submit');
let input = document.getElementById('input-text');
let listeCourse = document.getElementById('liste-courses');
let boxAchat = document.getElementsByClassName('achat');
let item;




btnSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    inputText = input.value;
    console.log(inputText);
    createLi();
})

function createLi() {


    let newLi = document.createElement("li");
    newLi.setAttribute('draggable', true);
    newLi.classList.add("li-style");
    listeCourse.appendChild(newLi);


    let titleInput = document.createElement("input");
    titleInput.value = inputText;
    newLi.appendChild(titleInput);
    titleInput.classList.add("input-hidden");

    titleInput.addEventListener("click", function() {
        titleInput.classList.remove("input-hidden");
    })

    newLi.classList.add("input-zoom");

    let newInput = document.createElement("input");
    newInput.setAttribute("type", "number");
    newInput.setAttribute("min", "0");
    newInput.setAttribute("max", "99");
    newInput.innerText = "1";
    newLi.appendChild(newInput);

    let newBtn = document.createElement("button");
    newBtn.innerText = "⊗";
    newLi.appendChild(newBtn);
    

    newBtn.addEventListener("click", function() {
        newLi.remove();
    })

    newInput.addEventListener("keydown", function(e) {
        let invalidChars = [
            "-",
            "+",
        ];
        if(invalidChars.includes(event.key)) {
            event.preventDefault();
        }
    })


    let liTitle = newLi.innerText;

    liTitle.addEventListener("click", function() {
        liTitle.replaceChild("input");
    })
}


document.addEventListener("dragstart", function(e){
    console.log("cible:",e.target);
    item = e.target;
});

for(const element of boxAchat) {
    element.addEventListener('drop', dragDrop);
    element.addEventListener('dragover', dragOver);
    element.addEventListener('dragenter', dragEnter);
}

function dragDrop() {
    this.appendChild(item);
}

function dragOver(e) {
    e.preventDefault();
    
}

function dragEnter(e) {
    e.preventDefault();
}




