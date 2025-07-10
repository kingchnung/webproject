
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

function check() {
    const answer = Math.floor(Math.random() * 10) + 1;
    const input = document.getElementById("number").value;
    const hint = document.getElementById("hint");
    let count = 0;

    while (answer != input) {
        if (answer == input) {
            hint.value = "정답!"
        }

        if (answer > input) {
            hint.value = "up!";

        } else {
            hint.value = "down!";
        }
        ++count;
        document.getElementById("count").value = count;
    }
}
