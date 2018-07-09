"use strict";

let toDoList = document.querySelector(".toDo");
let inputEl = document.querySelector(".my-input");
const dataEl = document.querySelector(".data");
const btnEl = document.querySelector(".my-btn");

toDoList.style.color = "#000";

btnEl.addEventListener("click", function(){
    let inputValue = inputEl.value;
        if (inputValue === ""){
            alert("Privaloma užpildyti laukelį -nauja užduotis-"); 
        } else {
            const newLi = document.createElement("li"); 
            dataEl.appendChild(newLi);  
            newLi.append(inputValue);   

            newLi.style.paddingBottom = "10px";
            newLi.style.color = "#3f3f3f";

            inputEl.value = "";

            const btnClear = document.querySelector(".clear-btn");
            btnClear.addEventListener("click", function(){
                newLi.remove();
            });
        }
});

let createList = document.querySelector(".naujas-btn");
createList.addEventListener("click", function(){
    let newHeadingName = prompt("Įveskite pavadinimą");
        if (newHeadingName === "" || newHeadingName === null){
            alert("Privaloma įvesti pavadinimą");   
        } else {
    let newDiv = document.createElement("div"); 
    newDiv.className = "praktika";
    createList.before(newDiv); 

    let newHeading = document.createElement("h1"); 
    newDiv.appendChild(newHeading); 
    newHeading.innerHTML = newHeadingName; 

    const newUl = document.createElement("ul"); 
    newHeading.after(newUl); 

    let newInput = document.createElement("input"); 
    newInput.placeholder = "naujas"; 
    newUl.after(newInput); 

    const newDivBtn = document.createElement("div");
    newInput.after(newDivBtn); 

    const newBtnAdd = document.createElement("button");
    newBtnAdd.type = "button";
    newBtnAdd.className = "my-btnNew";
    newBtnAdd.append("Pridėti");
    newDivBtn.appendChild(newBtnAdd);

    const newBtnRemove = document.createElement("button");
    newBtnRemove.type = "button";
    newBtnRemove.className = "clear-btnNew";
    newBtnRemove.append("Išvalyti");
    newBtnAdd.after(newBtnRemove);

    newBtnAdd.addEventListener("click", function(){
        let newInputValue = newInput.value;
            if(newInputValue === ""){
                alert("Privaloma užpildyti laukelį -naujas-")
            } else {
                let newLi = document.createElement("li");
                newUl.appendChild(newLi);
                newLi.append(newInputValue);
                newInput.value = "";

                newLi.style.paddingBottom = "10px";
                newLi.style.color = "#3f3f3f";
                
                newBtnRemove.addEventListener("click", function(){
                    newLi.remove();
                });
    }});
}});
