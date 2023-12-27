function todo (title,file,description,date,priority){
    return {title, file, description, date, priority};
}

function tab (title){
    return {title}
}

function additem(title,file=false,description=false,date=false,priority=false,type){
    let newitem;
    if (type=="todoitem"){
        newitem = todo(title,file,description,date,priority);
    }else{
        newitem = tab(title);
    }
    return newitem;
}

export {additem}