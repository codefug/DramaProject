// localstorage에 name에 맞는 배열을 꺼내서 value를 배열에 넣고 저장
function saveToStorage(name, value, isobject = false) {
    let data = getFromStorage(name, isobject);
    if (isobject == true) {
        data.push(value);
        localStorage.setItem(name, JSON.stringify(data));
    } else {
        data.push(value);
        localStorage.setItem(name, data);
    }
}

// item 하나만 지우는 함수
function removeOneItemFromStorage(name, target, isobject = false) {
    let data = getFromStorage(name, isobject);

    if (isobject == true) {
        data = data.filter((element) => element.title != target);
        localStorage.setItem("todoList",JSON.stringify(data));
    } else {
        data = data.filter((element) => element != target);
        if (data != undefined) {
            localStorage.setItem(name, data);
        } else {
            removeitemFromStorage(name);
        }
    }
}

// name에 맞는 string있으면 배열로 바꿔서 리턴 없으면 null
function getFromStorage(name, isobject = false) {
    if (isobject == true) {
        return localStorage.getItem(name) != null ? JSON.parse(localStorage.getItem(name)) : [];
    }
    return localStorage.getItem(name) ? localStorage.getItem(name).split(",") : [];
}

// name에 맞는 item remove
function removeitemFromStorage(name) {
    localStorage.removeItem(name);
}

// 모든 localStorage clear
function clearStorage() {
    return localStorage.clear();
}

export { saveToStorage, getFromStorage, removeitemFromStorage, removeOneItemFromStorage }