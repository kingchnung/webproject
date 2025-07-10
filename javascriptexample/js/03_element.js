
function accessId(){
    const div1 = document.getElementById("div1");
    //접근한 요소의 배경색 얻어오기
    const bgColor = div1.style.backgroundColor;
    if(bgColor === "red") {
        div1.style.backgroundColor="yellow";
    } else {
        div1.style.backgroundColor="red";
    }
}

function accessClass() {
    // 요소를 여러 개 접근하는 경우 [배열] 형태로 반환됨
    const array = document.getElementsByClassName("div2");

    //인덱스를 이용해서 요소 하나씩 접근
    array[0].style.backgroundColor="pink";
    array[0].innerHTML="첫 번째 요소";

    array[1].style.backgroundColor="darkgray";
    array[1].innerHTML="두 번째 요소";

    array[2].style.backgroundColor="lightyellow";
    array[2].innerHTML="세 번째 요소";
}

function accessTagName(){
    const tagName = document.getElementsByTagName("li");

    for(let i = 0; i < tagName.length; i++) {
        const num = tagName[i].innerText;
        tagName[i].style.backgroundColor=`rgb(130, 220, ${50*num})`;
        tagName[i].style.color=`rgb(130, 220, ${50*num})`;
    }
}

function inputTest() {
    const input = document.getElementById("input-test");
    console.log(input.value);
    input.value =""; //버튼 클릭후 입력창 내용 삭제
    input.focus();
}

function accessName() {
    const hobbyList = document.getElementsByName("hobby");
    let selected = [];

    for (let index = 0; index < hobbyList.length; index++) {
        if (hobbyList[index].checked) {
            selected.push(hobbyList[index].value);
        }
    }
    const resultDiv = document.getElementById("name-div");
    if(selected.length > 0) {
        resultDiv.innerHTML = `
        선택한 취미: <br />
        ${selected.join(", ")}
        <br />
        <br />
        선택된 개수: ${selected.length}
        `;
    } else {
        resultDiv.innerHTML = "선택된 항목이 없습니다.";
    }

    function accessCss() {
        //단일 요소 선택
        document.querySelector("#css-div").style.border="3px solid red";
        //여러 개 중 첫 번째 요소 선택
        document.querySelector("#css-div > div").style.fontSize ="30px";
        //querySelectorAll() : 모든 자식 div 요소 선택
        const array = document.querySelectorAll("#css-div > div");
        for (let index = 0; index < array.length; index++) {
            array[index].style.backgroundColor="gold";
        }
    }

    function readValue() {
        const bg = document.getElementById("chatting-bg");
        const input = document.querySelector("#chatting-input");

        if(input.value.trim().length > 0) {
            bg.innerHTML += "<p> <span>" + input.value + "</span></p>"

            // 요소.scrollTop      : 요소 내부 현재 스크롤 위치 반환
            // 요소.scrollTop      : 스크롤을 특정 위치 이동
            // 요소.scrollHeight   : 스크롤 전체 높이

            // 채팅창을 자동으로 아래로 스크롤 (스크롤 고정 효과)
            bg.scrollTop = bg.scrollHeight;
        }
        input = "";
        input.focus();
    }

    function inputEnter(event) {
        if(event.key == "Enter") { //눌러진 key가 Enter인 경우
            readValue();           //함수 호출
        }
    }



}