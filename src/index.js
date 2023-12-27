import './css/style.css'
import './css/content.css'
import './css/tab.css'

import logo from './asset/image/symbol/homelogo.png';
import { checktab } from './function/check';

const Homepage = (function(){
    const h1=document.querySelector('h1');
    const mylogo = new Image();
    const plustab = document.querySelector('#plustab');

    mylogo.classList.add('homelogo');
    mylogo.src=logo;
    h1.appendChild(mylogo);
    plustab.addEventListener("click",checktab);
})();