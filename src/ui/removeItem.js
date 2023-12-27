import { removeitemFromStorage } from "../function/storage";
// 갖고 있는 input을 없애라.
function removeTabInput(){
    const addTabForm = document.querySelector('.addTabForm');
    addTabForm.remove();
}

function clearTab(){
    const tabList = document.querySelectorAll('.tab');
    tabList.forEach((value)=>{removeTab(value)});
    removeitemFromStorage('tabList');
}

// tab element를 받아서 삭제하는 함수;
function removeTab(element){
    element.remove();
}

export {removeTabInput, clearTab};