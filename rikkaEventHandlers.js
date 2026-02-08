import {
    background_change,
    background_transfar,
    beer_classname,
    bg,
    food_img,
    poteto_classname,
    rikka_serif,
    txt,
} from "./helper.js";

export const teaButtonHandler = () => {
    txt.innerHTML = "紅茶ですね。しばしお待ちくださいませ";
    btnbox.innerHTML = "";
    setTimeout(() => {
        background_transfar()
        txt.innerHTML = "5分後";
        setTimeout(() => {
            bg.innerHTML = food_img(clazz, src, serif)
            background_change(koucha_classname)
        }, 3000);
    }, 3000);

}

export const potatoButtonHandler = () => {
    txt.innerHTML =
        "ポテトですね。今から揚げますのでお時間がかかります。しばしお待ちくださいませ";
    btnbox.innerHTML = "";
    setTimeout(() => {
        background_transfar();
        txt.innerHTML = "15分後";
        setTimeout(() => {
            bg.innerHTML = food_img(rikka, "rr.png", rikka_serif("ポテト"));
            background_change(poteto_classname);
        }, 3000);
    }, 3000);
}

export const beerButtonHandler = () => {
    txt.innerHTML = "ビールですね。すぐにお持ちします";
    btnbox.innerHTML = "";
    setTimeout(() => {
        background_transfar();
        txt.innerHTML = "3分後";
        setTimeout(() => {
            bg.innerHTML = food_img(rikka, "rr.png", rikka_serif("ビール"));
            background_change(beer_classname);
        }, 3000);
    }, 3000);
}