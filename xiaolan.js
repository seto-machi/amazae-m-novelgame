import { menu, txt, thumb_berta, thumb_rikka } from "./helper.js";
import { btnbox } from "./home.js"

export function xiaolan_event() {
    txt.innerHTML = "・・・いらっしゃいませ";
    const xiaolan_classname = "xiaolan";
    btnbox.classList.add(xiaolan_classname);

    menu();
    const xiaolan = document.querySelectorAll(`.${xiaolan_classname} button`);
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