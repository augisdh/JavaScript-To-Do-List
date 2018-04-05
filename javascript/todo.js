"use strict";

//-- Pirmas To Do sąrašas --//

//-- Susiradau klases ir priskyriau naujus kintamuosius --/
let toDoList = document.querySelector(".toDo");
let inputEl = document.querySelector(".my-input");
const dataEl = document.querySelector(".data");
const btnEl = document.querySelector(".my-btn");

//stiliai h1 ir pirmo <li>//
toDoList.style.color = "#000";

//-- Event kuris ideda info i nauja <li> --//
btnEl.addEventListener("click", function(){
    let inputValue = inputEl.value; // Nuskaito ivesta reiksme
        if (inputValue === ""){
            alert("Privaloma užpildyti laukelį -nauja užduotis-"); // Jeigu nieko neivesta praso ivesti... 
        } else {
            const newLi = document.createElement("li"); // Sukuria naujus <li> tag
            dataEl.appendChild(newLi);  // Ideda naujus <li> po pirmo <li saraso su klase>
            newLi.append(inputValue);   // Ideda value i naujus <li> tag

            //stiliai nauju <li>//
            newLi.style.paddingBottom = "10px";
            newLi.style.color = "#3f3f3f";

            inputEl.value = ""; // Isvalo input'a

            // Istrinimo mygtukas, istrina visus naujus <li> tag
            const btnClear = document.querySelector(".clear-btn");
            btnClear.addEventListener("click", function(){
                newLi.remove();
            });
        }
});

//-- Naujo sąrašo sukūrimas mygtukas --//
let createList = document.querySelector(".naujas-btn");

//-- Sukuria nauja sarasa --//
createList.addEventListener("click", function(){
    let newHeadingName = prompt("Įveskite pavadinimą"); // Duoda ivesti pavadinima saraso
        if (newHeadingName === "" || newHeadingName === null){ // Tikrina ar yra ivestas pavadinimas
            alert("Privaloma įvesti pavadinimą");   // Jei pavadinomo nera = alert
        } else {
    let newDiv = document.createElement("div"); // Sukuria nauja <div> tag kurio viduje bus naujas sarasas
    newDiv.className = "praktika";
    createList.before(newDiv); // Ikelia <div> tag virs "naujas sarasas" <button>

    let newHeading = document.createElement("h1"); // Sukuria nauja <h1> 
    newDiv.appendChild(newHeading); // Ikelia <h1> i nauja <div> tag
    newHeading.innerHTML = newHeadingName;  // i <h1> paraso ivesta pavadinima

    const newUl = document.createElement("ul"); // Sukuriu nauja <ul>
    newHeading.after(newUl); // Idedu <ul> po <h1>

    let newInput = document.createElement("input"); // Sukuriu nauja input 
    newInput.placeholder = "naujas"; 
    newUl.after(newInput); // Idedu input po <ul>

    const newDivBtn = document.createElement("div"); // sukuriu div 
    newInput.after(newDivBtn); // Idedu <div> po input

    // Sukuriu mygtuka (prideti) ji idedu i nauja <div>
    const newBtnAdd = document.createElement("button");
    newBtnAdd.type = "button";
    newBtnAdd.className = "my-btnNew";
    newBtnAdd.append("Pridėti");
    newDivBtn.appendChild(newBtnAdd);

    // Sukuriu mygtuka (istrinti) kuris yra idetas po (prideti) mygtuko
    const newBtnRemove = document.createElement("button");
    newBtnRemove.type = "button";
    newBtnRemove.className = "clear-btnNew";
    newBtnRemove.append("Išvalyti");
    newBtnAdd.after(newBtnRemove);

    // Naujas event kai paspaudziamas (Prideti) mygtukas
    newBtnAdd.addEventListener("click", function(){
        let newInputValue = newInput.value;
            if(newInputValue === ""){
                alert("Privaloma užpildyti laukelį -naujas-")
            } else {
                let newLi = document.createElement("li");
                newUl.appendChild(newLi);
                newLi.append(newInputValue);
                newInput.value = "";

                // Stiliai <li> //
                newLi.style.paddingBottom = "10px";
                newLi.style.color = "#3f3f3f";
                
                // Naujas event kai paspaudziamas (Istrinti) mygtukas
                newBtnRemove.addEventListener("click", function(){
                    newLi.remove();
                });
    }});
}});