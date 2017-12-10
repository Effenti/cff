window.onload = init;

function init() {
    function addButtonClickedClass() {
        var clickedButton = this;
        clickedButton.className += " button-clicked";
        window.setTimeout(function () {
            clickedButton.classList.remove("button-clicked");
        }, 500);
    }
    var buttons = document.getElementsByClassName("button");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", addButtonClickedClass);
    }
}