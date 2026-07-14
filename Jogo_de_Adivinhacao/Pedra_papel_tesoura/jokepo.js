function iniciarJogo() {
    const numeroComputador = Math.floor(Math.random() * 3);
    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura").toLowerCase().trim();
    let escolhaComputador;
    
    if (numeroComputador === 0) {
        escolhaComputador = "pedra";
    }else if(numeroComputador === 1) {
        escolhaComputador = "papel";
    }else if(numeroComputador === 2) {
        escolhaComputador = "tesoura";
    }
    
    if(escolhaUsuario === escolhaComputador) {
        alert("O computador escolheu " + escolhaComputador + ". Empate!");
    }else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        alert("O computador escolheu " + escolhaComputador + ". Você ganhou!!");
    }else {
        alert("O computador escolheu " + escolhaComputador + ". Você perdeu!");
    }
}