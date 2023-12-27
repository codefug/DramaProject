function saveToStorage(name, value) {
    let data = getFromStorage(name);
    if (data == null) {data=[]}
    else{
    data=data.split(",");}
    data.push(value);
    localStorage.setItem(name,data);
}

function getFromStorage(name) {
    return localStorage.getItem(name);
}

function removeitemFromStorage(name) {
    localStorage.removeItem(name);
}

export { saveToStorage, getFromStorage, removeitemFromStorage }