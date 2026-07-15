function iniciarJogo() {
    const palavras = [
        "LIVRO", "CADERNO", "LEITURA", "ESCRITA", "BIBLIOTECA",
        "EDITOR", "AUTOR", "CAPÍTULO", "PÁGINA", "PARÁGRAFO",
        "DICIONÁRIO", "GRAMÁTICA", "LITERATURA", "ROMANCE", "POESIA",
    ];

    const indiceSorteado = Math.floor(Math.random() * palavras.length);
    const palavraSecreta = palavras[indiceSorteado];

    //trasnformar a palavra secreta em um array de letras
    const letrasSecretas = palavraSecreta.split("");

    //criar o tabuleiro com underlines
    const tabuleiro = [];
    for (let i = 0; i < letrasSecretas.length; i++) {
        tabuleiro.push("_");
    }

    let tentivasRestantes = 20;
    let letrasChutadas = [];

    while (tentivasRestantes > 0 && tabuleiro.includes("_")) {

        //formata o tabuçeiro com espaço entre os underlines usando o .join()
        const tabuleiroFormtado = tabuleiro.join(" ");

        let palpite = prompt(
            "=====Jogo da Forca=====\n" +
            "Palavra: " + tabuleiroFormtado + "\n" +
            "Tentativas restantes: " + tentivasRestantes + "\n" +
            "Letras chutadas: " + letrasChutadas.join(", ") + "\n\n" +
            "Digite uma letra:"
        );

        if (palpite === null) {
            alert("Jogo encerrado pelo usuário.");
            return;
        }

        palpite = palpite.trim().toUpperCase();

        //validação do palpite
        if(palpite.length !== 1 || !/[A-Z]/.test(palpite)) {
            alert("Por favor, digite apenas uma letra válida (A-Z).");
            continue;
        }

        //verificar se a letra já foi chutada
        if(letrasChutadas.includes(palpite)) {
            alert("Você já chutou essa letra."+palpite+" Tente outra.");
            continue;
        }

        //adicionar a letra às letras chutadas
        letrasChutadas.push(palpite);

        //verificar se a letra está na palavra secreta
        if(letrasSecretas.includes(palpite)) {
            alert("A letra " + palpite + " está na palavra.");
            //atualizar o tabuleiro
            for(let i = 0; i < letrasSecretas.length; i++) {
                if(letrasSecretas[i] === palpite) {
                    tabuleiro[i] = palpite;
                }
            }
        } else {
            //reduzir o número de tentativas restantes
            alert("A letra " + palpite + " não está na palavra.");
            tentivasRestantes--;
        }
    }

    //fim do jogo
    if(tabuleiro.includes("_")) {
        alert("Você perdeu! A palavra era: " + palavraSecreta);
    } else {
        alert("Parabéns! Você acertou a palavra: " + palavraSecreta);
    }
}