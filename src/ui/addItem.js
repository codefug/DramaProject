import { saveToStorage } from "../function/storage";
import { makeThatSomething } from "./reactionItem";
import { removeTabInput } from "./removeItem";
import { removeTab } from "./removeItem";
import { removeOneItemFromStorage } from "../function/storage";
import { readImageFile } from "./readImage";
import { sort } from "./sort";

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
function addTab(save, inputvalue) {
    const menu = document.querySelector('menu');
    const plustab = document.querySelector('#plustab');
    const newdiv = document.createElement('div');
    newdiv.classList.add('tabcomponent');
    const newp2 = document.createElement('p');
    newdiv.addEventListener('pointerover', (event) => { makeThatSomething(event.target, 'hovered', 'tab'); });

    const newButton = document.createElement('button');
    const addTabInput = document.querySelector('.addTabInput');
    let value;
    if (inputvalue == true) {
        value = addTabInput.value;
        removeTabInput();
    } else {
        value = inputvalue;
    }
    newdiv.addEventListener('click', (event) => { makeThatSomething(event.target, 'selected', 'tab');sort(value);});
    newButton.classList.add('removeTabButton');
    newButton.addEventListener('click', () => { removeTab(newdiv); removeOneItemFromStorage("tabList", value) });
    newButton.innerHTML = `<span class="material-symbols-outlined minusbutton">remove</span>`;
    newp2.textContent = value;
    newp2.classList.add('tab');
    newdiv.appendChild(newp2);
    newdiv.appendChild(newButton);
    menu.insertBefore(newdiv, plustab);
    if (save == true) {
        saveToStorage("tabList", value);
    }
}

// TodoCard Dom처리, object를 받아서 카드로 만들어서 content에 놓음.
function addTodoCard(save = false, object) {
    // content 요소 선택
    const contentElement = document.getElementById("content");
    // 새로운 contentItem 요소 생성
    const newContentItem = document.createElement("div");
    newContentItem.classList.add("contentItem");
    // contentItemTitle 요소 생성 및 텍스트 설정
    const titleElement = document.createElement("p");
    titleElement.classList.add("contentItemTitle");
    titleElement.textContent = object.title;
    // contentItemImage 요소 생성
    const imageElement = document.createElement("img");
    imageElement.classList.add("contentItemImage");
    imageElement.setAttribute("src", object.file);
    imageElement.setAttribute("alt", object.title);
    // contentDescription 요소 생성 및 텍스트 설정
    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("contentDescription");
    descriptionElement.textContent = object.description;
    // contentDate 요소 생성
    const dateElement = document.createElement("p");
    dateElement.classList.add("contentDate");
    dateElement.textContent = object.date;
    // todobuttons 요소 생성
    const todoButtonsElement = document.createElement("div");
    todoButtonsElement.classList.add("todobuttons");
    // highPriority 버튼 요소 생성
    const buttonElement = document.createElement("button");
    buttonElement.classList.add(object.priority, "Priority");
    buttonElement.textContent = object.priority;
    // removePriority 버튼 요소 생성
    const removePriorityButtonElement = document.createElement("button");
    removePriorityButtonElement.classList.add("removePriority");
    removePriorityButtonElement.textContent = "remove";
    // 생성한 요소들을 contentItem에 추가
    newContentItem.appendChild(titleElement);
    newContentItem.appendChild(imageElement);
    newContentItem.appendChild(descriptionElement);
    descriptionElement.appendChild(dateElement);
    newContentItem.appendChild(todoButtonsElement);
    todoButtonsElement.appendChild(buttonElement);
    todoButtonsElement.appendChild(removePriorityButtonElement);
    removePriorityButtonElement.addEventListener("click",()=>{removeTab(newContentItem);removeOneItemFromStorage("todoList",object.title,true)});
    // content에 새로운 contentItem 추가
    contentElement.appendChild(newContentItem);

    if (save == true) {
        saveToStorage("todoList", object, true);
    }
}

function addTodoInput() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
    const imageSelector = document.querySelector('#imageSelector');
    imageSelector.addEventListener("change", () => { readImageFile(); });
}

export { addTabInput, addTodoCard, addTab, addTodoInput }