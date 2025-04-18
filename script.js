const nameButton = document.getElementById("nameButton");
const myName = document.getElementById("myName");

const ageButton = document.getElementById("ageButton");
const myAge = document.getElementById("myAge");





// 1. gimana cara biar ga harus diklik 2x buttonnya untuk show nama nya di webnya
// 2. gimana cara biar nama nya muncul di samping tulisan "Halo Semuanya!"
nameButton.addEventListener('click', () => {
    if(myName.style.display === 'none'){
        myName.style.display = 'block';
        nameButton.textContent = 'Hide Name';
    }
    else if(myName.style.display === 'block'){
        myName.style.display = 'none';
        nameButton.textContent = 'Show Name';
    }
});

ageButton.addEventListener('click', () => {
    if(myAge.style.display === 'none'){
        myAge.style.display = 'block';
        ageButton.textContent = 'Hide Age';
    }
    else{
        myAge.style.display = 'none';
        ageButton.textContent = 'Show Age';
    }
});

function addNumber(a, b){
    return a + b;
}

function addResult(){
    let firstAddNumber = parseFloat(document.getElementById('firstAddNumber').value);
    let secondAddNumber = parseFloat(document.getElementById('secondAddNumber').value);
    let resultNumber = addNumber(firstAddNumber, secondAddNumber);

    document.getElementById('result').textContent = resultNumber;
}

function checkTheNumber(){
    let number = parseFloat(document.getElementById('numberCheck').value);
    let numberCheckResult = document.getElementById('numberCheckResult');

    if (number > 10){
        numberCheckResult.textContent = "Angka tersebut lebih besar dari 10";
    }
    else if (number >= 10){
        numberCheckResult.textContent = "Angka tersebut adalah 10"
    }
    else{
        numberCheckResult.textContent = "Angka tersebut lebih kecil dari 10"
    }
}

function loopUntil10(){
    console.log("Angka dari 1 sampai 10:");
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

// cara biar tombolnya bisa ngeganti tulisannya lagi pas dipencet setelah dipencet pertama kali gimana yaaa?
function textChanger(){
    let changeTextTarget = document.getElementById('changeTextTarget');
    let textChangerBtn = document.getElementById('textChangerBtn');

    changeTextTarget.textContent = "Haloo! kamu sudah berhasil mengubah teksnya!";

    if (changeTextTarget.textContent.match("Haloo! kamu sudah berhasil mengubah teksnya!")){
        textChangerBtn.textContent = "Yeay!"
    }
}

function showTheInput(){
    let inputTextShowcaser = document.getElementById('inputTextShowcaser').value;
    let textShowcaserLine = document.getElementById('textShowcaserLine');

    textShowcaserLine.textContent = inputTextShowcaser;
}