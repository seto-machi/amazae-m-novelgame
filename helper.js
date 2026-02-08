import { btnbox } from "./home.js";

const btnbox_inner_f = "<button><p>";
const btnbox_inner_b = "</p></button>";

export function createBtn(name) {
    return btnbox_inner_f + name + btnbox_inner_b
}

// export function createBtn(clazz, name) {
//     return `<button class =${clazz}><p>${name}</p></button>`
// }

export function select_class(classname) {
    return window.document.querySelector(classname)
}

export const txt = window.document.querySelector('.txt');

export const rikka_classname = "rikka";
export const berta_classname = "berta";
export const xiaolan_classname = "xiaolan";
export const koucha_classname = "koucha";
export const poteto_classname = "poteto";
export const beer_classname = "beer";

export function menu() {
    const koucha_button = createBtn("紅茶を頼む");
    const poteto_button = createBtn("ポテトを頼む");
    const beer_button = createBtn("ビールを頼む");
    return btnbox.innerHTML = `${koucha_button}${poteto_button}${beer_button}`;
}

export const bg = select_class('.bg');

export function background_transfar() {
    bg.classList.add("black");
    const thumb_nail = window.document.querySelector('.rikka,.berta,.xiaolan');
    thumb_nail.innerHTML = "";
}

export function background_change(food_class) {
    bg.classList.remove("black");
    bg.classList.add(food_class);
}

export function food_img(clazz, src, serif) {
    return `<div class="pc">
    <figure class="${clazz}"><img src="img/${src}" alt="" width="200"></figure>
    <div class="txtbox"><p class="txt">${serif}</p>
    <div class="btnbox return"><button><a href="">最初から遊ぶ</a></button></div>
    </div>`;
}

export function rikka_serif(menu_img) {
    return `お待たせいたしました。${menu_img}でございます。ごゆるりとおくつろぎくださいませ。`
}

export function berta_serif(menu_img) {
    return `お待たせ！${menu_img}だよ！たくさん食べて飲んでいってね！`
}

export function xiaolan_serif(menu_img) {
    return `おまちどうさま。${menu_img}でございます。いつもありがとね`
}