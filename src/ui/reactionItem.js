function makeTabSelected(element){
    const tabList = document.querySelectorAll('.tab');

    console.log(element.target);
    if (element.classList.contains('removeTabButton')){return;}

    tabList.forEach((value)=>value.classList.contains('selected')?value.classList.remove('selected'):null);
    element.classList.add('selected');
}

export {makeTabSelected}