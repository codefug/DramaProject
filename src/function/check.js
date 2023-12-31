import { addTab, addTabInput } from "../ui/addItem.js";

function checktab() {
  const form = document.querySelector(".addTabForm");
  if (form == undefined) {
    return addTabInput();
  } else {
    const addTabInput = document.querySelector(".addTabInput");
    if (addTabInput.value == "") {
      addTabInput.focus();
    } else {
      addTab(true, true);
    }
  }
}

export { checktab };
