// (Opcional) - Você pode adicionar interatividade ao formulário de contato ou outras partes do site aqui.

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "50%";
    div.style.left = "40%";
    div.style.background= "gray";
    div.style.height = "500px";
    div.style.width = "500px";
    const body = document.querySelector("body");
    body.appendChild(div)
    div.innerHTML = `
        <h1 style="color: white;">FORMULARIO ENVIADO</h1>
        <img src="https://escolaeducacao.com.br/wp-content/uploads/2020/02/povos-africanos-e1597248238237.jpg" height="200px" widht="200px">
    `

    // Aqui, você pode adicionar código para enviar a mensagem via email ou API
});


var form = document.getElementById("contactForm");
var popup = document.getElementById("popup");
var closeBtn = document.querySelector(".close");


// Função para mostrar o popup
function showPopup() {
    popup.style.display = "block";
}

// Função para fechar o popup
function closePopup() {
    popup.style.display = "none";
}

// Adicionar evento de envio do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    showPopup(); // Mostra o popup
});

// Adicionar evento para fechar o popup
closeBtn.addEventListener("click", closePopup);

// Fechar o popup ao clicar fora dele
window.addEventListener("click", function(event) {
    if (event.target == popup) {
        closePopup();
    }
});