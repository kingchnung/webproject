const mydate = new Date();
console.log(mydate.getFullYear(), mydate.getMonth() + 1, mydate.getDate());
console.log(mydate.getHours(), mydate.getMinutes(), mydate.getSeconds());

console.log("Date 객체가 가진 toXXXString() 메서드");
// toLocalDateString() 함수는 "년 월 일"를 문자열로 반환하는 함수
console.log(mydate.toLocaleDateString());
// toLocalDateString() 함수는 "오전/오후 시:분:초"를 문자열로 반환하는 함수
console.log(mydate.toLocaleTimeString());
// toLocalDateString() 함수는 "년 월 일"를 문자열로 반환하는 함수
console.log(mydate.toLocaleString());

document.getElementById("btn1").addEventListener("click", () => {
    setTimeout(function () {
        alert("setTimeout()을 사용하여 표시합니다.")
    }, 3000);
});

let time_id;
const startTime = function() {
    let now = new Date();
    document.querySelector("#result").value = now.toLocaleTimeString();
    time_id = setTimeout(startTime, 1000); //1초 간격으로 값을 출력.
}

document.getElementById("btn2").addEventListener("click", ()=> {
    startTime();
});

document.getElementById("btn3").addEventListener("click", ()=> {
    clearTimeout(time_id);
    document.querySelector("#result").value="";
});

document.getElementById("readBook").addEventListener("click", function() {
    const now = new Date();                 //현재 날짜와 시간
    const firstDay = new Date(2025, 4, 1);  //시작일 (5월 1일) month = +1

    const toNow = now.getTime();
    const toFirst = firstDay.getTime();
    let passedTime = toNow - toFirst;
    console.log(passedTime);

    //밀리초 -> 일(day)로 변환. Math.floor를 사용하여 소수점 이하를 절삭(정수)
    passedTime = Math.floor(passedTime / (24 * 60 * 60 * 1000));

    document.querySelector('#results').innerText=passedTime;
});

const image = document.querySelectorAll('.imageChoice');
const targetImg = document.getElementById('target');

image.forEach(thumb => {
    thumb.addEventListener('click', function() {
        const newSrc = this.getAttribute('src');
        targetImg.setAttribute('src', newSrc);
    });
});

let num = 0;
setInterval(function() {
    num = (num % 3) + 1;
    document.getElementById("imgView").src = "../image/" + num + ".jpg"
}, 1000);

document.getElementById("btn4").addEventListener("click", () => {
    if(confirm("정말 네이버로 이동하시겠습니까?")) {
        location.href = "https://naver.com/";
        // location.replace("https://naver.com/");
    }
});

document.getElementById("btn5").addEventListener("click", () => {
    location.href = "03_json.html";
});

document.getElementById("btn6").addEventListener("click", function() {
    // 5자리의 인증번호를 id값이 result 요소에게 출력하도록 명시.
    let value = "";
    for (let index = 0; index < 5; index++) {
        value += Math.floor(Math.random() * 10);
    }

    const result2 = document.getElementById("result2");
    result2.innerHTML = value;
    result2.style.color = "blue";
});