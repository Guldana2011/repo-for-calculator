//VARİABLES
let number1 = 0;
let number2 = 0;
let result = 0;
let result2 = 0;

//təmizlə

function təmizlə() {
    document.getElementById("result").innerHTML = "__";
    document.getElementById("Number01").value = "";
    document.getElementById("Number02").value = "";
}

//FUNCTİONS

//toplama+

function toplama() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) + Number(number2);
    document.getElementById('result').innerHTML = result;
}

//çıxma-

function çixma() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) - Number(number2);
    document.getElementById('result').innerHTML = result;
}

//vurma*

function vurma() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) * Number(number2);
    document.getElementById('result').innerHTML = result;
}

//bölmə/

function bölmə() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) / Number(number2);
    document.getElementById('result').innerHTML = result;
}

//təmizlə

function təmizlə() {
    document.getElementById("result").innerHTML = "__";
    document.getElementById("Number01").value = "";
    document.getElementById("Number02").value = "";
}

// Səs faylını yükləyirik
const clickSound = new Audio('sounds/click-sound.mp3');

// Buttona klik edildikdə səsi çalmaq
document.getElementById('clickButton').addEventListener('click', function () {
    clickSound.play();
});