// document.querySelector("#jsBtn").addEventListener("click", function() {
//     this.style.backgroundColor="black";
//     this.style.color="yellow";
//     this.style.fontSize="20px";
// });

// document.getElementById("colorChange").addEventListener("click", function() {
//     let wrapper=document.getElementById("wrapper"); //div태그
//     let ul = wrapper.getElementsByTagName("ul"); //div하위 ul태그
//     let li = ul[0].getElementsByTagName("li"); //ul하위 li태그

//     for(let i = 0; i < li.length; i++) {
//         let l = li[i];
//         if(l.className=="three") {
//             let txt = l.getElementsByTagName("span");
//             txt[0].style.color = "red";
//         }
//     }
// });

//jQuery
$("#jQueryBtn").on("click", function () {
    // $(this).css("background-color", "black").css("color", "white").css("font-size", "20px");
    $(this).css({
        "background-color": "black",
        "color": "white",
        "font-size": "20px"
    })
});

$("#colorChange").on("click", function () {
    $("#wrapper > ul > li.three > span").css("color", "blue");
});

$("#hello").html("Hello jQuery").css("color", "green").css("font-size", "72px");
$("#hello").html("Hello jQuery").css({
    "color": "green",
    "font-size": "72px"
});

$("#btnChange").on("click", function () {
    $("#hello").html("오늘도 최선을 다해..."); //설정
    $("#text").html("읽어온 문자 : " + $("#hello").html());
    console.log($("#text").html()); //접근
});

$("#img").hover(
    function () {
        $(this).attr("src", "../image/easys-2.jpg");
    },
    function () {
        $(this).attr("src", "../image/easys-1.jpg");
    }
);

$("#phone").on("keyup", function () {
    const regExp = /^01[016789]-\d{3,4}-\d{4}$/;

    // $("#phone").val();
    // : 아이디가 phone 요소에 작성된 값(value)을 얻어옴
    // $("#phone").val("값");
    // : 아이디가 phone 요소에 값을 설정함.

    if(regExp.test($("#phone").val())) {
        $("#phoneResult").text("유효한 전화번호입니다.").css("color", "green");
    } else {
        $("#phoneResult").text("전화번호 형식이 유효하지 않습니다. (예 : 010-1234-5678)");
        $("#phoneResult").css("color", "red");
    }

    if($("#phone").val().length === 0) {
        $("#phoneResult").text("");
    }
});

$("#singleButton").on("click", function() {
    $(this).html("오늘도 파이팅합시다~!!");
});

$(".multiButton").on("click", function() {
    let index = $(this).index();
    let result = index + 1 + "번쨰 요소를 눌렀습니다.";
    $(this).html(result);
});

let number = 1;
$("#treeImage").on("click", function() {
    number = (number % 6) + 1;
    $(this).attr("src", "../image/tree-" + number + ".jpg");
});