import { addTab, addTabInput } from "../ui/clickDOM";

function checktab() {
    const form = document.querySelector('.addTabForm');
    if (form == undefined) {
        return addTabInput();
    } else {
        const addTabInput = document.querySelector('.addTabInput');
        if (addTabInput.value == 0) {
            form.focus();
        }
        else {
            addTab();
        }
    }
}

export { checktab }