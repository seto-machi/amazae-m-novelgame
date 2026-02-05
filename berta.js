import { menu, berta_classname, select_class, txt } from "./helper.js";
import { btnbox } from "./home.js"

export function berta_event() {
    txt.innerHTML = "こんにちは！何頼みますか？";
    btnbox.classList.add(berta_classname);
    menu();
    const berta = document.querySelectorAll(`.${berta_classname} button`);
    const thumb_rikka = select_class('.rikka');
    const thumb_xiaolan = select_class('.xiaolan');
    thumb_rikka.innerHTML = "";
    thumb_xiaolan.innerHTML = "";
    berta[0].addEventListener('click', function () {
        txt.innerHTML = "紅茶だね！気を付けて持ってきます～";
        btnbox.innerHTML = "";
    });
    berta[1].addEventListener('click', function () {
        txt.innerHTML = "ポテトだね！うちのポテトはおいしいよ～";
        btnbox.innerHTML = "";
    });
    berta[2].addEventListener('click', function () {
        txt.innerHTML = "ビールだね！ぬるいほうが好きだったりする？";
        btnbox.innerHTML = "";
    });
}