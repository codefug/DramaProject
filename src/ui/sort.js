import { getFromStorage } from "../function/storage";
import { addTodoCard } from "./addItem";
import { clearContent } from "./removeItem";

function sort(tabName){
    const data = getFromStorage("todoList",true);
    clearContent();
    if (tabName=='TOTAL'){
        data.forEach((e)=>{addTodoCard(false,e)});
    }
    data.filter((value)=>value.type == tabName).forEach((e)=>{addTodoCard(false,e)});
}

export {sort};