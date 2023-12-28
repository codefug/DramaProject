function makeTabSomething(element,name){
    const tabList = document.querySelectorAll(`.${name}`);

    if (!element.classList.contains("tab")){return;}

    tabList.forEach((value)=>value.classList.contains(name)?value.classList.remove(name):null);
    element.classList.add(name);
}

export {makeTabSomething}