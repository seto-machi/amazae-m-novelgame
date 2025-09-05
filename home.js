const txt = window.document.querySelector('.txt');
txt.innerHTML = "誰に話しかけますか？";

const btnbox = window.document.querySelector('.btnbox');
btnbox.innerHTML = "<button><p>リッカ</p></button><button><p>ベルタ</p></button><button><p>小藍</p></button>";

var btn = document.querySelectorAll('.btnbox button');
console.log(btn);
btn[0].addEventListener('click', function () {
    txt.innerHTML = "いらっしゃいませ。何をご注文ですか？";
    btnbox.classList.add("rikka");
    btnbox.innerHTML = "<button><p>紅茶を頼む</p></button><button><p>ポテトを頼む</p></button><button><p>ビールを頼む</p></button>";
    const rikka = document.querySelectorAll('.rikka button');
    rikka[0].addEventListener('click', function () {
        txt.innerHTML = "紅茶ですね。しばしお待ちくださいませ";
        btnbox.innerHTML = "";
    });
    rikka[1].addEventListener('click', function () {
        txt.innerHTML = "ポテトですね。今から揚げますのでお時間がかかります。しばしお待ちくださいませ";
        btnbox.innerHTML = "";
    });
    rikka[2].addEventListener('click', function () {
        txt.innerHTML = "ビールですね。すぐにお持ちします";
        btnbox.innerHTML = "";
    });
});
btn[1].addEventListener('click', function () {
    txt.innerHTML = "こんにちは！何頼みますか？";
    btnbox.classList.add("berta");
    btnbox.innerHTML = "<button><p>紅茶を頼む</p></button><button><p>ポテトを頼む</p></button><button><p>ビールを頼む</p></button>";
    const berta = document.querySelectorAll('.berta button');
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
});
btn[2].addEventListener('click', function () {
    txt.innerHTML = "・・・いらっしゃいませ";
    btnbox.classList.add("shaoran");
    btnbox.innerHTML = "<button><p>紅茶を頼む</p></button><button><p>ポテトを頼む</p></button><button><p>ビールを頼む</p></button>";
    const shaoran = document.querySelectorAll('.shaoran button');
    shaoran[0].addEventListener('click', function () {
        txt.innerHTML = "紅茶、１つね";
        btnbox.innerHTML = "";
    });
    shaoran[1].addEventListener('click', function () {
        txt.innerHTML = "ポテト、１つね";
        btnbox.innerHTML = "";
    });
    shaoran[2].addEventListener('click', function () {
        txt.innerHTML = "ビール、１つね";
        btnbox.innerHTML = "";
    });
});

