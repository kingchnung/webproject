
document.getElementById("example1text").addEventListener("keydown", (e) => {
    if (e.key ==="Enter") {
        e.preventDefault();

        const word = e.target;
        const result = document.getElementById("textarea");

        result.value += word.value + "\n";

        word.value = "";
        word.focus();
    }
});

document.getElementById("print").addEventListener("click", ()=> {
    const width = document.getElementById("width");
    const height = document.getElementById("height");
    const color = document.getElementById("color");
    const text = document.getElementById("text");
    const output = document.getElementById("output");

    output.innerHTML = text.value;
    output.style.width = `${width.value}px`;
    output.style.height = height.value + "px";
    output.style.backgroundColor = color.value;

    output.style.display="flex";
    output.style.justifyContent="center";
    output.style.alignItems="center";
});