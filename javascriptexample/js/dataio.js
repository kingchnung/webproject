// alert 확인
function fnAlert() {
    alert("alert 버튼 클릭됨");
}

//write 확인
function documentWrite() {
    document.writeln("자바스크립트<br />");
    document.writeln("<b>안녕하세요</b><br /><h2>반가워요</h2>");
}

//innerText 읽어오기
function getInnerText() {
    //변수 = 읽어 들인 값;
    const test1 = document.getElementById("test1");
    //test1 변수에 대입된 요소에서 내용을 얻어와 console에 출력
    console.log(test1.innerText);
}

//innerText로 변경하기
function setInnerText() {
    // const test1 = document.getElentById("test1");
    //test1 변수에 대입된 요소에 새로운 내용을 작성
    //출력대상 = 출력값;
    //test1.innerText = "innerText로 <br /> 변경된 내용입니다.";
    document.getElementById("test1").innerText="innerText로 <br /> 변경된 내용입니다.";
}
//innerHTML로 읽어오기
function getInnerHTML1(){
    const test2 = document.getElementById("test2");
    //test2 요소 내부에 내용(태그 + 속성 + 내용)을 읽어 출력
    console.log(test2.innerHTML);
}
function setInnerHTML1() {
    const test2 = document.getElementById("test2");
    test2.innerHTML="<strong>innerHTML</strong>로 변경된 내용<br />반갑습니다.";
}
//innerHTML 예제
function print() {
    const title = document.getElementById("title");
    title.innerHTML="나는 집에 가고 싶다.";
    title.style.color="red";
    title.style.fontWeight="bold";
    title.style.backgroundImage="url('../../htmlexample/image/예.jpeg')";
    title.style.backgroundRepeat="no-repeat";
    title.style.backgroundSize="cover";
    title.style.textAlign="center";
    title.style.padding="250px";
    title.style.width="fit-content";
    
}
//confirm 확인하기
function fnConfirm() {
    const confirmBtn = document.getElementById("confirmBtn");

    if(confirm("버튼 배경색을 오렌지색으로 바꾸시겠습니까?")) {
        confirmBtn.style.backgroundColor="orange";
    }else{
        confirmBtn.style.backgroundColor="green";
    }
}
//prompt 확인하기
function fnPrompt1() {
    const name = prompt("당신의 이름은 무엇입니까?", "홍길동");
    const age = prompt("당신의 나이는 몇살입니까?", "30");

    console.log(name);
    console.log(age);

    const divEl = document.getElementById("area2");
    // divEl.innerHTML = "<b>앗, 당신이 바로 " + age + "살" + name + "님이군요..!</b>";

    if(name != null && name.trim() !=="" && age != null && age.trim() !=="") {
        divEl.innerHTML = `<b>앗, 당신이 바로 ${age}살 ${name}님이군요..!</b>`;    
    } else {
        alert("정보를 입력해주세요.");
    }
}
//prompt 예제
function fnPrompt2() {
    const name = prompt("이름", "홍길동");
    const age = prompt("나이", "30");
    const divE2 = document.getElementById("area3");
    

    if(name !== null && name.trim() !== "" && age.trim() !== "" && age !==null) {
        divE2.innerHTML = 
        `<strong>${name}</strong>님 <strong>${age}</strong>년 동안 고생하셨어요`;
    } else {
        alert("정보를 입력해주세요.");
        divE2.innerHTML="";
    }
}
//선택한 input요소.value 확인하기
function fnInput() {
    //변수 = input 요소의 값
    // const input1 = document.getElementById("userId"); //아이디 input 요소
    // const input2 = document.getElementById("userPwd"); //비밀번호 input 요소

    // const id = input1.value.trim();
    // const pwd = input2.value.trim();

    const id = document.getElementById("userId").value.trim();
    const pwd = document.getElementById("userPwd").value.trim();

    const result = document.getElementById("result");

    if(id !== "" && pwd !== "") {
        result.value=`${id}, ${pwd}`; //result요소의 값으로=다음의 값 설정
    } else {
        result.value="다시 확인해 주세요.";
    }

    id.value="";
    pwd.value="";
}
function fnChange(){
    const num1 = document.getElementById("number1");
    const num2 = document.getElementById("number2");

    const temp = num1.value;
    num1.value = num2.value;
    num2.value = temp;

}

document.getElementById("btn").onclick = function(){
    document.getElementById("namePrint").innerHTML = document.getElementById("name").value;
}