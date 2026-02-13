import { menu, txt, thumb_rikka, thumb_xiaolan } from "./helper.js";
import { btnbox } from "./home.js"

export function berta_event() {
    txt.innerHTML = "こんにちは！何頼みますか？";
    const berta_classname = "berta";
    btnbox.classList.add(berta_classname);

    menu();
    const berta = document.querySelectorAll(`.${berta_classname} button`);
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