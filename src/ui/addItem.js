import { saveToStorage } from "../function/storage";
import { makeTabSomething } from "./reactionItem";
import { removeTabInput } from "./removeItem";
import { removeTab } from "./removeItem";
import { removeOneItemFromStorage } from "../function/storage";

function addTabInput() {
    const newform = document.createElement('form');
    newform.classList.add('addTabForm');
    const newTabInput = document.createElement("input");
    const newbutton = document.createElement("button");
    newTabInput.classList.add('addTabInput');
    newbutton.classList.add('addTabButton');
    newbutton.addEventListener("click", (event) => { event.preventDefault(); addTab(true, true); });
    const plustab = document.querySelector('#plustab');
    const menu = document.querySelector('menu');
    newform.appendChild(newTabInput);
    newform.appendChild(newbutton);
    menu.insertBefore(newform, plustab);
    newTabInput.focus();
}

// save = localstorage에 저장여부, inputvalue = input의 정보를 사용하는지 여부
function addTab(save = false, inputvalue = false) {
    const menu = document.querySelector('menu');
    const plustab = document.querySelector('#plustab');
    const newdiv = document.createElement('div');
    newdiv.classList.add('tabcomponent');
    const newp2 = document.createElement('p');
    newdiv.addEventListener('click', (event) => { makeTabSomething(event.target,'selected') });
    newdiv.addEventListener('pointerover', (event) => { makeTabSomething(event.target,'hovered'); });

    const newButton = document.createElement('button');
    const addTabInput = document.querySelector('.addTabInput');
    let value;
    if (inputvalue == true) {
        value = addTabInput.value;
        removeTabInput();
    } else {
        value = inputvalue;
    }
    newButton.classList.add('removeTabButton');
    newButton.addEventListener('click',()=>{removeTab(newdiv); removeOneItemFromStorage("tabList",value)});
    newButton.innerHTML = `<span class="material-symbols-outlined minusbutton">remove</span>`;
    newp2.textContent=value;
    newp2.classList.add('tab');
    newdiv.appendChild(newp2);
    newdiv.appendChild(newButton);
    menu.insertBefore(newdiv, plustab);
    if (save == true) {
        saveToStorage("tabList", value);
    }
}

function addTodoItem() {

}

function addTodoInput() {

}

export { addTabInput, addTodoItem, addTab, addTodoInput }