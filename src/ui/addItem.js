import { saveToStorage } from "../function/storage";
import { makeTabSelected } from "./reactionItem";
import { removeTabInput } from "./removeItem";

function addTabInput() {
    const newform = document.createElement('form');
    newform.classList.add('addTabForm');
    const newTabInput = document.createElement("input");
    const newbutton = document.createElement("button");
    newTabInput.classList.add('addTabInput');
    newbutton.classList.add('addTabButton');
    newbutton.addEventListener("click", (event) => { event.preventDefault();addTab(true,true); });
    const plustab = document.querySelector('#plustab');
    const menu = document.querySelector('menu');
    newform.appendChild(newTabInput);
    newform.appendChild(newbutton);
    menu.insertBefore(newform, plustab);
    newTabInput.focus();
}

// save = localstorage에 저장여부, inputvalue = input의 정보를 사용하는지 여부
function addTab(save = false,inputvalue=false) {
    const menu = document.querySelector('menu');
    const plustab = document.querySelector('#plustab');
    const newp = document.createElement('p');
    newp.classList.add('tab');
    newp.addEventListener('pointerover',(event)=>{makeTabSelected(event.target)});

    const newButton = document.createElement('button');
    const addTabInput = document.querySelector('.addTabInput');
    let value;
    if (inputvalue==true){
        value = addTabInput.value;
        removeTabInput();
    }else{
        value = inputvalue;
    }
    newButton.classList.add('removeTabButton');
    newp.textContent = value;
    newp.appendChild(newButton);
    menu.insertBefore(newp, plustab);
    if (save == true) {
        saveToStorage("tabList", value);
    }
}

function addTodoItem() {

}

function addTodoInput() {

}

export { addTabInput, addTodoItem, addTab, addTodoInput }