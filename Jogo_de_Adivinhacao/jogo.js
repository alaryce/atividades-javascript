function iniciarJogo() {
    const numeroSecreto = Math.floor(Math.random() * 50) + 1;
    let palpite;

    while (palpite !== numeroSecreto) {
        palpite = parseInt(prompt("Digite um  número entre 1 e 50: "));

        if(isNaN(palpite)) {
            const querSair = confirm("Deseja sair do jogo?: ");
            if(querSair) {
                break;
            }
            continue;
        }

        if(palpite < numeroSecreto) {
            alert("O número secreto é maior");
        } else if(palpite > numeroSecreto) {
            alert("O número secreto é menor");
        }else {
            alert("Parabéns! Você acertou o número secreto!!");
    }
 }
}