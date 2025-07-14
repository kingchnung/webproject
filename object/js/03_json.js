const library = {
    books: [
        {
            title: "자바스크립트 입문",
            author: "홍길동",
            year: 2021
        },
        {
            title: "HTML/CSS/JavaScript",
            author: "김철수",
            year: 2020
        },
        {
            title: "오라클",
            author: "이영희",
            year: 2022
        }
    ]
}


const renderTable = function () {
    const print = document.querySelector("table tbody");
    print.innerHTML = "";

    library.books.forEach(books => {
        print.innerHTML +=
            `<tr>
            <td>${books.title}</td>
            <td>${books.author}</td>
            <td>${books.year}</td>
        </tr>
        `;
    });
};

renderTable();

document.getElementById("add").addEventListener("click", () => {
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let year = document.getElementById("year").value.trim();

    if (!title || !author || isNaN(year)) {
        alert("제목, 저자, 출판 연도 모두 다 입력해야 합니다.");
        return;
    }

    library.books.push(
        {
            "title": title,
            "author": author,
            "year": year
        }
    );
    // library.books.push(title, author, year); 위 코드랑 같은 내용
    // 변수명과 속성명이 같으면 생략 가능.


    title = "";
    author = "";
    year = "";


    renderTable();
});