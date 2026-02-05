import {
    background_change, background_transfar, beer_classname,
    bg, food_img, menu, poteto_classname, rikka_classname,
    rikka_serif, select_class, txt, weit_five_minute
} from "./helper.js";
import { btnbox } from "./home.js"

export function rikka_event() {
    txt.innerHTML = "いらっしゃいませ。何をご注文ですか？";
    btnbox.classList.add(rikka_classname);
    menu();
    const rikka = document.querySelectorAll(`.${rikka_classname} button`);
    const thumb_berta = select_class('.berta');
    const thumb_xiaolan = select_class('.xiaolan');
    thumb_berta.innerHTML = "";
    thumb_xiaolan.innerHTML = "";
    rikka[0].addEventListener('click', function () {
        txt.innerHTML = "紅茶ですね。しばしお待ちくださいませ";
        btnbox.innerHTML = "";
        weit_five_minute(rikka, 'rr.png', rikka_serif('紅茶'));
    });
    rikka[1].addEventListener('click', function () {
        txt.innerHTML = "ポテトですね。今から揚げますのでお時間がかかります。しばしお待ちくださいませ";
        btnbox.innerHTML = "";
        setTimeout(() => {
            background_transfar()
            txt.innerHTML = "15分後";
            setTimeout(() => {
                bg.innerHTML = food_img(rikka, 'rr.png', rikka_serif('ポテト'))
                background_change(poteto_classname)
            }, 3000);
        }, 3000);
    });
    rikka[2].addEventListener('click', function () {
        txt.innerHTML = "ビールですね。すぐにお持ちします";
        btnbox.innerHTML = "";
        setTimeout(() => {
            background_transfar()
            txt.innerHTML = "3分後";
            setTimeout(() => {
                bg.innerHTML = food_img(rikka, 'rr.png', rikka_serif('ビール'))
                background_change(beer_classname)
            }, 3000);
        }, 3000);
    });
}