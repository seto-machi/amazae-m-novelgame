import {
    menu,
    rikka_classname,
    select_class,
    txt,
} from "./helper.js";
import { btnbox } from "./home.js";
import { beerButtonHandler, potatoButtonHandler, teaButtonHandler } from "./rikkaEventHandlers.js";

export function rikka_event() {
    txt.innerHTML = "いらっしゃいませ。何をご注文ですか？";
    btnbox.classList.add(rikka_classname);

    menu();

    const rikka = select_class(`.${rikka_classname} button`);
    const thumb_berta = select_class(".berta");
    const thumb_xiaolan = select_class(".xiaolan");
    thumb_berta.innerHTML = "";
    thumb_xiaolan.innerHTML = "";

    const teaButton = rikka[0]
    const potatoButton = rikka[1]
    const beerButton = rikka[2]

    teaButton.addEventListener("click", teaButtonHandler);
    potatoButton.addEventListener("click", potatoButtonHandler);
    beerButton.addEventListener("click", beerButtonHandler);
}
