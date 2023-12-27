import {saveToStorage} from "../function/storage";

function addTabInput(){
    const newform = document.createElement('form');
    newform.classList.add('addTabForm');
    const newTabInput = document.createElement("input");
    const newbutton = document.createElement("button");
    newTabInput.classList.add('addTabInput');
    newbutton.classList.add('addTabButton');
    newbutton.addEventListener("click",()=>{addTab();});
    const plustab = document.querySelector('#plustab');
    const menu = document.querySelector('menu');
    newform.appendChild(newTabInput);
    newform.appendChild(newbutton);
    menu.insertBefore(newform,plustab);
    newTabInput.focus();
}

function addTab(){    
    const addTabForm = document.querySelector('.addTabForm');
    const addTabInput = document.querySelector('.addTabInput');
    const menu = document.querySelector('menu');
    const newp = document.createElement('p');
    const newButton = document.createElement('button');
    newButton.classList.add('removeTabButton');
    const value = addTabInput.value;
    newp.textContent=value;
    newp.appendChild(newButton);
    menu.insertBefore(newp,addTabForm);
    addTabForm.remove();
    saveToStorage("tabList",value);
}

function addTodoItem(){

}

function addTodoInput(){

}

export{addTabInput,addTodoItem,addTab,addTodoInput}