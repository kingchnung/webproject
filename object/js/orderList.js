const uncomma = function(str) {
    return str.replace(/[^\d]+/g, '');
};

const update = function() {
    // 총수량 구하기
    let totalNumber = 0;
    // 속성 선택자 : input[type='number'] input 태그의 속성 중에 type="number"인 대상만.
    const number = document.querySelectorAll("input[type='number']");
    /*for(let i =0; i < number.length; i++){
        totalNumber += parseInt(number[i].value);
    }*/

    number.forEach(num => {
        totalNumber += parseInt(num.value);
    });
    document.getElementById("totalNumber").value = totalNumber;
    
    // 총합계 구하기
    let totalPrice = 0;
    // 속성 선택자 : input[name$='Total'] input 태그의 속성 중에 name 속성의 값이
    // ~Total로 끝나는 대상만.
    const price = document.querySelectorAll("input[name$='Total']");
    /*for(let i =0; i < price.length; i++){
        totalPrice += parseInt(price[i].value);
    }*/

    price.forEach(num => {
        totalPrice += parseInt(num.value);
    });

    document.getElementById("totalPrice").value = totalPrice;
};

document.getElementById("btn").addEventListener("click", update);

const input = document.querySelectorAll("input[type='number']");
input.forEach((target) => { 
    target.addEventListener("input", function(e){
        console.log(e.target);
        const id = e.target.id;
        const price = id.replace("Number", "Price");
        const total = id.replace("Number", "Total");
        document.getElementById(total).value = uncomma(document.getElementById(price).innerHTML) * parseInt(this.value);
        update();
    });
});