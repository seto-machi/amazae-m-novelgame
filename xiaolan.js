import { menu, xiaolan_classname, select_class, txt } from "./helper.js";
import { btnbox } from "./home.js"

export function xiaolan_event() {
    txt.innerHTML = "・・・いらっしゃいませ";
    btnbox.classList.add(xiaolan_classname);
    menu();
    const xiaolan = document.querySelectorAll(`.${xiaolan_classname} button`);
    const thumb_rikka = select_class('.rikka');
    const thumb_berta = select_class('.berta');
    thumb_berta.innerHTML = "";
    thumb_rikka.innerHTML = "";
    xiaolan[0].addEventListener('click', function () {
        txt.innerHTML = "紅茶、１つね。熱いよ";
        btnbox.innerHTML = "";
    });
    xiaolan[1].addEventListener('click', function () {
        txt.innerHTML = "ポテト、１つね。熱いよ";
        btnbox.innerHTML = "";
    });
    xiaolan[2].addEventListener('click', function () {
        txt.innerHTML = "ビール、１つね。冷えてるからね";
        btnbox.innerHTML = "";
    });
}