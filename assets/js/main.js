const modalBook = document.getElementById("modalBook");
const modalProdBook = document.getElementById("modalProdBook");
const openBook = document.getElementById("openBook");
const openProdBook = document.getElementById("openProdBook");
const closeBtn = document.getElementsByClassName("close")[0];
const closeProdBtn = document.getElementsByClassName("close")[1];

closeBtn.onclick = function() {
    modalBook.style.display = "none";
}

closeProdBtn.onclick = function() {
    modalProdBook.style.display = "none";
}

openBook.onclick = function() {
    modalBook.style.display = "block";
}

openProdBook.onclick = function() {
    modalProdBook.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalBook) {
        modalBook.style.display = "none";
    }
    if (event.target == modalProdBook) {
        modalProdBook.style.display = "none";
    }
}
