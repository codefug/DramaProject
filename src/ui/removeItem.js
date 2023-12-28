import { removeitemFromStorage } from "../function/storage";

// 갖고 있는 input을 없애라.
function removeTabInput(){
    const addTabForm = document.querySelector('.addTabForm');
    addTabForm.remove();
}

//  tabcomponent를 받아서 다 삭제한 후 localstorage에서 tabList를 비우는 함수
function clearTab(){
    const tabList = document.querySelectorAll('.tabcomponent');
    tabList.forEach((value)=>{if (value.childNodes[0].textContent!='TOTAL')removeTab(value)});
    removeitemFromStorage('tabList');
}

// tab element를 받아서 삭제하는 함수;
function removeTab(element){
    element.remove();
}

export {removeTabInput, clearTab, removeTab};