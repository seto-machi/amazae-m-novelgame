import {
    menu,
    txt,
    thumb_berta,
    thumb_rikka
} from "./helper.js";
import { btnbox } from "./home.js"
import {
    beerButtonHandler,
    potatoButtonHandler,
    teaButtonHandler
} from "./maidEventhandler.js";

export function xiaolan_event() {
    txt.innerHTML = "・・・いらっしゃいませ";
    const xiaolan_classname = "xiaolan";
    btnbox.classList.add(xiaolan_classname);

    menu();

    const xiaolan = document.querySelectorAll(`.${xiaolan_classname} button`);
    thumb_berta.innerHTML = "";
    thumb_rikka.innerHTML = "";

    const teaButton_xiaolan = xiaolan[0];
    const potatoButton_xiaolan = xiaolan[1];
    const beerButton_xiaolan = xiaolan[2];

    const xiaolan_koucha_before = "紅茶、１つね。熱いよ";
    const xiaolan_poteto_before = "ポテト、１つね。熱いよ";
    const xiaolan_beer_before = "ビール、１つね。冷えてるからね";
    const xiaolan_photo_clazz = 'xiaolan';
    const xiaolan_photo_address = "sr.png";
    const xiaolan_serif_after = (menu) => {
        return `おまちどうさま。${menu}でございます。いつもありがとね`
    }

    teaButton_xiaolan.addEventListener('click', function () {
        teaButtonHandler(
            xiaolan_koucha_before,
            xiaolan_photo_clazz,
            xiaolan_photo_address,
            xiaolan_serif_after("紅茶")
        )
    });
    potatoButton_xiaolan.addEventListener('click', function () {
        potatoButtonHandler(
            xiaolan_poteto_before,
            xiaolan_photo_clazz,
            xiaolan_photo_address,
            xiaolan_serif_after("ポテト")
        )
    });
    beerButton_xiaolan.addEventListener('click', function () {
        beerButtonHandler(
            xiaolan_beer_before,
            xiaolan_photo_clazz,
            xiaolan_photo_address,
            xiaolan_serif_after("ビール")
        )
    });
}