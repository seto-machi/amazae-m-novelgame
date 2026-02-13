import {
    menu,
    thumb_berta,
    thumb_xiaolan,
    txt
} from "./helper.js";
import { btnbox } from "./home.js"
import {
    beerButtonHandler,
    potatoButtonHandler,
    teaButtonHandler
} from "./maidEventhandler.js";

export function rikka_event() {
    txt.innerHTML = "いらっしゃいませ。何をご注文ですか？";
    const rikka_classname = "rikka";
    btnbox.classList.add(rikka_classname);

    menu();

    const rikka = document.querySelectorAll(`.${rikka_classname} button`);
    thumb_berta.innerHTML = "";
    thumb_xiaolan.innerHTML = "";

    const teaButton_rikka = rikka[0];
    const potatoButton_rikka = rikka[1];
    const beerButton_rikka = rikka[2];

    const rikka_koucha_before = "紅茶ですね。しばしお待ちくださいませ";
    const rikka_poteto_before =
        "ポテトですね。今から揚げますのでお時間がかかります。しばしお待ちくださいませ";
    const rikka_beer_before = "ビールですね。すぐにお持ちします";
    const rikka_photo_clazz = 'rikka';
    const rikka_photo_address = "rr.png";
    const rikka_serif_after = (menu) => {
        return `お待たせいたしました。${menu}でございます。ごゆるりとおくつろぎくださいませ。`
    }

    teaButton_rikka.addEventListener('click', function () {
        teaButtonHandler(
            rikka_koucha_before,
            rikka_photo_clazz,
            rikka_photo_address,
            rikka_serif_after("紅茶")
        )
    });
    potatoButton_rikka.addEventListener('click', function () {
        potatoButtonHandler(
            rikka_poteto_before,
            rikka_photo_clazz,
            rikka_photo_address,
            rikka_serif_after("ポテト")
        )
    });
    beerButton_rikka.addEventListener('click', function () {
        beerButtonHandler(
            rikka_beer_before,
            rikka_photo_clazz,
            rikka_photo_address,
            rikka_serif_after("ビール")
        )
    });
}