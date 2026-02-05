import { createBtn, txt } from "./helper.js";
import { rikka_event } from "./rikka.js";
import { berta_event } from "./berta.js";
import { xiaolan_event } from "./xiaolan.js";


txt.innerHTML = "誰に話しかけますか？";

const rikka_button = createBtn("リッカ");
const berta_button = createBtn("ベルタ");
const xiaolan_button = createBtn("小藍");

export const btnbox = window.document.querySelector('.btnbox');
btnbox.innerHTML = rikka_button + berta_button + xiaolan_button;

const btn = document.querySelectorAll('.btnbox button');
btn[0].addEventListener('click', function () {
    rikka_event()
});
btn[1].addEventListener('click', function () {
    berta_event()
});
btn[2].addEventListener('click', function () {
    xiaolan_event()
});

