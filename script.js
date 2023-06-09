let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let notes = document.getElementById("notes");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('button clicked');
    formValidation();
});
let formValidation = () => {
    if (input.value === "") {
        console.log('failure');
        msg.innerText = "Note cannot be empty!!!"
    } else {
        console.log('success');
        msg.innerText = ""
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createNote();
}

let createNote = () => {
    notes.innerHTML +=
        ` <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editNote(this)" class="fa-solid fa-edit"></i>
            <i onClick="deleteNote(this)" class="fa-solid fa-trash-can"></i>
        </span>
    </div>`
    input.value = "";
};


let deleteNote = (e) => {
    e.parentElement.parentElement.remove();
}
let editNote = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}
