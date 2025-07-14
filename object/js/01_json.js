const person = {
    "name" : "HongGilDong",
    "age"   : 25,
    "address" : {
        "nation" : "Korea",
        "city" : "Seoul",
        "postalCode" : 12345
    },
    "hobby" : ["영화", "여행"],
    "phone" : "010-1234-0987"
};

document.getElementById("btnDefault").addEventListener("click", () => {
    const tag = `
        <label>이름</label><span>${person.name}</span><br />
        <label>나이</label><span>${person.age}</span><br />
        <label>주소</label>
        <span>${person.address.nation}, ${person.address.city}, ${person.address.postalCode}, ${person.name}</span><br />
        <label>취미</label><span>${person.hobby.join(", ")}</span><br />
        <label>번호</label><span>${person.phone}</span>
    `;

    document.getElementById("view").innerHTML= tag;
});

const company = {
    "name" : "(주)자바컴퍼니",
    "since" : 2013,
    "department" : ["기획팀", "영업팀", "디자인팀", "개발팀"],
    "biz" : ["소프트웨어개발", "통신판매업", "위치정보서비스"]
};

document.getElementById("btnJsonArray").addEventListener("click", () => {
    document.getElementById("name").innerHTML = company.name;
    document.getElementById("since").innerHTML = company.since;

    let dept_li = "";
    company.department.forEach(dept => {
        dept_li += `<li>${dept}</li>`;
    });

    document.getElementById("department").innerHTML = dept_li;

    let biz_li = "";
    for (let i = 0; i < company.biz.length; i++) {
        biz_li += `<li>${company.biz[i]}</li>`;
    }
    document.getElementById("biz").innerHTML = biz_li;
});

let employee = {
    ceo:{ name:"홍길동", age : 45 },
    manager:{ name:"이과장", age:38 },
    intern:{ name:"김철수", age:24 }
};

document.getElementById("btnDisplayJsonTree").addEventListener("click", () => {
    let tableBody = document.querySelector("#companyTable tbody");
    tableBody.innerHTML="";

    for (let position in employee) {
        let person = employee[position];

        let row = `
            <tr>
                <td>${position}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    }
});