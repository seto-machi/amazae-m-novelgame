import {
    menu,
    txt,
    thumb_rikka,
    thumb_xiaolan
} from "./helper.js";
import { btnbox } from "./home.js"
import {
    beerButtonHandler,
    potatoButtonHandler,
    teaButtonHandler
} from "./maidEventhandler.js";

export function berta_event() {
    txt.innerHTML = "こんにちは！何頼みますか？";
    const berta_classname = "berta";
    btnbox.classList.add(berta_classname);

    menu();

    const berta = document.querySelectorAll(`.${berta_classname} button`);
    thumb_rikka.innerHTML = "";
    thumb_xiaolan.innerHTML = "";

    const teaButton_berta = berta[0];
    const potatoButton_berta = berta[1];
    const beerButton_berta = berta[2];

    const berta_koucha_before = "紅茶だね！気を付けて持ってきます～";
    const berta_poteto_before = "ポテトだね！うちのポテトはおいしいよ～";
    const berta_beer_before = "ビールだね！ぬるいほうが好きだったりする？";
    const berta_photo_clazz = 'berta';
    const berta_photo_address = "br.png";
    const berta_serif_after = (menu) => {
        return `お待たせ！${menu}だよ！たくさん食べて飲んでいってね！`
    }

    teaButton_berta.addEventListener('click', function () {
        teaButtonHandler(
            berta_koucha_before,
            berta_photo_clazz,
            berta_photo_address,
            berta_serif_after("紅茶")
        )
    });
    potatoButton_berta.addEventListener('click', function () {
        potatoButtonHandler(
            berta_poteto_before,
            berta_photo_clazz,
            berta_photo_address,
            berta_serif_after("ポテト")
        )
    });
    beerButton_berta.addEventListener('click', function () {
        beerButtonHandler(
            berta_beer_before,
            berta_photo_clazz,
            berta_photo_address,
            berta_serif_after("ビール")
        )
    });
}