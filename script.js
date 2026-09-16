let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.textContent = button.dataset.value;
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";
    button.style.fontFamily = "Roboto";
    button.style.fontSize = "24px";
})