import './css/style.css'
import './css/content.css'
import './css/tab.css'
import './css/dialog.css'

import logo from './asset/image/symbol/homelogo.png';
import { checktab } from './function/check';
import { getFromStorage } from './function/storage';
import { addTab, addTodoCard, addTodoInput} from './ui/addItem';
import { clearTab } from './ui/removeItem';
import { makeThatSomething } from './ui/reactionItem';
import { removeForm } from './ui/removeItem';
import { maketodo } from './function/item';

const Homepage = (function(){
    const h1=document.querySelector('h1');
    const mylogo = new Image();
    const plustab = document.querySelector('#plustab');
    const cleartab = document.querySelector('#clearTab');
    const tabObjectList = getFromStorage("tabList");
    const todoObjectList = getFromStorage("todoList",true);
    const openFormButton =document.querySelector('#openForm');
    const submitFormButton = document.querySelector('#SubmitForm');
    const cancelFormButton = document.querySelector('#CancelForm');

    mylogo.classList.add('homelogo');
    mylogo.src=logo;
    h1.appendChild(mylogo);
    plustab.addEventListener("click",checktab);
    cleartab.addEventListener("click",clearTab);
    openFormButton.onclick=()=>{addTodoInput()};
    
    addTab(false,"TOTAL");
    const removeTabButton = document.querySelector('.removeTabButton');
    removeTabButton.remove();
    const totaltab = document.querySelector('.tab');
    totaltab.click();

    const radiobuttons = document.querySelectorAll('input[type="radio"]');
    radiobuttons.forEach((element)=>{
        element.addEventListener("click",(event)=>{
            const label = document.querySelector(`.${element.id}`);
            makeThatSomething(label,"selectedPriority","Priority")
        })
    });

    if (tabObjectList!=null){
        Array.from(tabObjectList).map((value)=>{addTab(false,value);});
    }

    submitFormButton.addEventListener('click',(event)=>{event.preventDefault;totaltab.click(),addTodoCard(true,maketodo());});
    cancelFormButton.addEventListener('click',(event)=>{event.defaultPrevented;removeForm();});
})();