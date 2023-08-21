function createColoredParagraph() {

    var text = document.getElementById("textInput").value;

    var selectedColor = document.getElementById("colorSelect").value;

    var paragraph = document.createElement("p");
    paragraph.textContent = text;

    paragraph.style.color = selectedColor;

    document.getElementById("output").appendChild(paragraph);

    document.getElementById("textInput").value = "";
}