window.addEventListener("load", addElement, false);

function addElement () {
    var header = document.getElementsByTagName("header")[0];
    var content = document.createTextNode("Daniel Szmulewicz");
    var author = document.createElement("h3");
    author.className = "author";
    author.appendChild(content);
    header.insertBefore(author, header.firstChild);
};
