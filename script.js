function color() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementById("output").innerHTML = "Color actual: " + "#" + randomColor;
}

$("#btn").click(function () {
    color();
})
