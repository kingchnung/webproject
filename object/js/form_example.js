
document.getElementById("example1text").addEventListener("keydown", () => {
    const text = document.getElementById("example1text");
    document.getElementById("textarea").innerHTML = text.value;

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
});