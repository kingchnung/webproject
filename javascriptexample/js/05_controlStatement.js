
function run() {
    const kor = parseInt(document.getElementById("kor").value);
    const eng = parseInt(document.getElementById("eng").value);
    const math = parseInt(document.getElementById("math").value);

    if (isNaN(kor) || isNaN(kor) || isNaN(kor)) {
        alert("모든 과목에 숫자를 입력해주세요.");
        return;
    }

    const sum = kor + eng + math;

    document.getElementById("sum").value = sum;

    const avg = sum / 3;

    document.getElementById("avg").value = avg;
    grade = avg;

    const credit = document.getElementById("credit");

    if (grade >= 90) {
        credit.value = 'A';
    } else if (grade >= 80) {
        credit.value = 'B';
    } else if (grade >= 70) {
        credit.value = 'C';
    } else if (grade >= 60) {
        credit.value = 'D';
    } else {
        credit.value = 'F';
    }
}

function print() {
    for (let index = 1; index <= 6; index++) {
        document.getElementById("h" + index).innerHTML += `<h${index}>Hello JavaScript`;
    }

    for (let index = 1; index <= 3; index++) {
        document.getElementById("div1").innerHTML
            += `<img class="img" src="../image/${index}.jpg" />`;

    }
}
let count = 0;
const answer = Math.floor(Math.random() * 10) + 1;
let gameOver = false;

function check() {
    if (gameOver) return;

    let input = document.getElementById("number");
    let number = input.value;
    let hint = "";

    if (isNaN(number) || number < 1 || number > 10) {
        alert("1 ~ 10 범위의 숫자를 입력해주세요.")
        input.value = "";
        input.focus();
        return;
    }
    count++;
    if (number == answer) {
        hint = "정답!";
        gameOver = true;
    } else if (number < answer) {
        hint = "up!";
    } else {
        hint = "down!";
    }

    document.getElementById("hint").value = hint;
    document.getElementById("count").value = count;
}

function gugudan() {
    const gugudan = document.getElementById("gugudan");

    for (let indexR = 1; indexR < 10; indexR++) {
        gugudan.innerHTML += `<table><tr><th>${indexR}단</th></tr>`;
        for (let indexC = 1; indexC < 10; indexC++) {
            gugudan.innerHTML += `<tr><td>${indexR}x${indexC}=${indexR * indexC}</td></tr>`;

        }
        gugudan.innerHTML += "</table>";
    }
}

