function mostrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function moveButton() {
    const button = document.getElementById('button2');
    const main = document.querySelector('main');
    const maxX = main.clientWidth - button.clientWidth - 20; // Ajusta para margem de segurança
    const maxY = main.clientHeight - button.clientHeight - 20; // Ajusta para margem de segurança

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
