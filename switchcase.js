    // Declara uma função de nome 'sortear' que não recebe parâmetros (arrow function).
const sortear = () => {

    // Declara uma array 'nomes' contendo nomes de personagens.
    var nomes = ["Twilight Sparkle","Fluttershy","Pinkie Pie","Applejack","Rarity","Rainbow Dash","Spike","Princesa Celestia","Princesa Luna"];
    
    // Obtém uma referência ao elemento HTML com o ID "nome".
        let h1Nome = document.getElementById("nome");

     // Declara uma variável 'achouNumero' e a inicializa como falsa.
        let achouNumero = false;

    // Declara uma variável 'numeroSorteado'.
        let numeroSorteado;
    
     // Executa um loop enquanto 'achouNumero' for falso.
        while (achouNumero == false) {

     // Gera um número aleatório entre 0 e 99.
            numeroSorteado = Math.floor(Math.random() * 100);

    // Verifica se o número gerado está dentro do intervalo válido (menor que o comprimento da array 'nomes').
            if (numeroSorteado < nomes.length) {

     // Se o número estiver dentro do intervalo válido, define 'achouNumero' como verdadeiro para sair do loop.
                achouNumero = true;
            }
        }
    // Utiliza um switch-case para associar o número sorteado a um nome na array 'nomes' e exibir esse nome no elemento HTML.
        switch (numeroSorteado) {
            case 0:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 1:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 2:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 3:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 4:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 5:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 6:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 7:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;
            case 8:
                h1Nome.InnerText = nomes [numeroSorteado];
                break;

        // Define o texto do elemento HTML com o nome correspondente.
        }

        // Acrescenta ao texto do elemento HTML o número sorteado.
        h1Nome.innerText +="O numero sorteado foi:" +numeroSorteado;
    }