function makeThatSomething(element,name,container){
    const List = document.querySelectorAll(`.${name}`);

    if (!element.classList.contains(container)){return;}

    List.forEach((value)=>value.classList.contains(name)?value.classList.remove(name):null);
    element.classList.add(name);
}

export {makeThatSomething}