$("#operation").click(function() {
    const number1 = $("#number1").val();
    if(number1.replace(/\s/g, "")=="" || isNaN(number1)) {
        alert("첫 번째 숫자를 입력해 주세요.");
        $("#number1").val("");
        $("#number1").focus();
        return;
    }

    const number2 = $("#number2").val();
    if(number2.replace(/\s/g, "")=="" || isNaN(number2)) {
        alert("두 번째 숫자를 입력해 주세요.");
        $("#number2").val("");
        $("#number2").focus();
        return;
    }

    const symbol = $("#symbol > option:selected").val();
    switch(symbol) {
        case "+":
            result = parseInt(number1) + parseInt(number2);
            break;
        case "-":
            result = parseInt(number1) - parseInt(number2);
            break;
        case "*":
            result = parseInt(number1) * parseInt(number2);
            break;
        case "/":
            result = parseInt(number1) / parseInt(number2);
            if(!isFinite(result)) {
                $("#result").val("0으로 나눌 수 없음");
                return;
            }
            break;
    }
    $("#result").val(result);
});