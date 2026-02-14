import {
    background_change,
    background_transfar,
    beer_classname,
    bg,
    food_img,
    poteto_classname,
    txt,
    koucha_classname
} from "./helper.js";
import { btnbox } from "./home.js";

export const teaButtonHandler = (before_serif, clazz, chara, after_serif) => {
    txt.innerHTML = before_serif;
    btnbox.innerHTML = "";
    setTimeout(() => {
        background_transfar(clazz);
        txt.innerHTML = "5分後";
        setTimeout(() => {
            bg.innerHTML = food_img(clazz, chara, after_serif);
            background_change(koucha_classname);
        }, 3000);
    }, 3000);

}

export const potatoButtonHandler = (before_serif, clazz, chara, after_serif) => {
    txt.innerHTML = before_serif;
    btnbox.innerHTML = "";
    setTimeout(() => {
        background_transfar(clazz);
        txt.innerHTML = "15分後";
        setTimeout(() => {
            bg.innerHTML = food_img(clazz, chara, after_serif);
            background_change(poteto_classname);
        }, 3000);
    }, 3000);
}

export const beerButtonHandler = (before_serif, clazz, chara, after_serif) => {
    txt.innerHTML = before_serif;
    btnbox.innerHTML = "";
    setTimeout(() => {
        background_transfar(clazz);
        txt.innerHTML = "3分後";
        setTimeout(() => {
            bg.innerHTML = food_img(clazz, chara, after_serif);
            background_change(beer_classname);
        }, 3000);
    }, 3000);
}