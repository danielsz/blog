window.addEventListener("load", addElement, false);

function addElement () {

    var top = document.createElement("div");
    var left = document.createElement("div");
    var corner = document.createElement("div");
    var contra = document.createElement("div");
    var square1 = document.createElement("div");
    var square2 = document.createElement("div");
    var lambda = document.createElement("div");

    top.id = "top"
    left.id = "left"
    corner.id = "corner"
    contra.id = "contra"
    square1.id = "square1"
    square1.className = "square"
    square2.id = "square2"
    square2.className = "square"
    lambda.id = "lambda"

    var content = document.createTextNode("\u03BB");
    lambda.appendChild(content);

    document.body.appendChild(top);
    document.body.appendChild(left);
    document.body.appendChild(corner);
    document.body.appendChild(contra);
    document.body.appendChild(square1);
    document.body.appendChild(square2);
    document.body.appendChild(lambda);

}
