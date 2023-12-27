// localstorage에 name에 맞는 배열을 꺼내서 value를 배열에 넣고 저장
function saveToStorage(name, value) {
    let data = getFromStorage(name);
    if (data == null) 
        { data = [];
        data.push(value); }
    else {
        data.push(value);
    }
        localStorage.setItem(name, data);
}

// name에 맞는 string있으면 배열로 바꿔서 리턴 없으면 null
function getFromStorage(name) {
    return localStorage.getItem(name) ? localStorage.getItem(name).split(",") : null;
}

// name에 맞는 item remove
function removeitemFromStorage(name) {
    localStorage.removeItem(name);
}

// 모든 localStorage clear
function clearStorage(){
    return localStorage.clear();
}

export { saveToStorage, getFromStorage, removeitemFromStorage, clearStorage }