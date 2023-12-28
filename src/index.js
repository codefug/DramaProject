import './css/style.css'
import './css/content.css'
import './css/tab.css'
import './css/dialog.css'

import logo from './asset/image/symbol/homelogo.png';
import { checktab } from './function/check';
import { getFromStorage } from './function/storage';
import { addTab } from './ui/addItem';
import { clearTab } from './ui/removeItem';
import { openForm } from './function/open';

const Homepage = (function(){
    const h1=document.querySelector('h1');
    const mylogo = new Image();
    const plustab = document.querySelector('#plustab');
    const cleartab = document.querySelector('#clearTab');
    const tabObjectList = getFromStorage("tabList");
    const openFormButton =document.querySelector('#openForm');

    mylogo.classList.add('homelogo');
    mylogo.src=logo;
    h1.appendChild(mylogo);
    plustab.addEventListener("click",checktab);
    cleartab.addEventListener("click",clearTab);
    openFormButton.onclick=()=>{openForm()};
    
    addTab(false,"TOTAL");
    const removeTabButton = document.querySelector('.removeTabButton');
    removeTabButton.remove();
    
    if (tabObjectList!=null){
        Array.from(tabObjectList).map((value)=>{addTab(false,value);});
    }
})();