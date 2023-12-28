// event가 발생되면 object로 만드는 함수
function maketodo (){
    const nameSelector = document.querySelector('#nameSelector').value;
    const imageSelector = document.querySelector('#imageSelectorLabel').attributes.value.value;
    const descriptionSelector = document.querySelector('#descriptionSelector').value;
    const typeSelector = document.querySelector('#setType').value;
    const prioritySelector = document.querySelector('.selectedPriority').id;
    const dateSelector= document.querySelector('#dateSelector').value;

    return {title:nameSelector, file: imageSelector, description:descriptionSelector, date:dateSelector, priority:prioritySelector,type:typeSelector};
}

export {maketodo}