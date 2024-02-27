    // Declara e inicializa uma variável 'tempoFilme' com o valor 60, representando a duração do filme em segundos.
var tempoFilme = 60;

    // Declara e inicializa uma variável 'inicioFilme' com o valor 0, representando o tempo decorrido assistindo ao filme.
var inicioFilme = 0;

    // Inicia um loop utilizando a variável 't', que irá de 0 até 'tempoFilme - 1' (59), incrementando 't' em cada iteração.
for (var t = 0; t < tempoFilme; t++) {

    // Define um temporizador para executar uma função após um intervalo de tempo (t * 1000 milissegundos).
    setTimeout(function() {

    // Limpa o console antes de imprimir a mensagem para uma nova contagem regressiva.
        console.clear();

    // Imprime uma mensagem indicando que o filme está sendo assistido e quantos segundos faltam para terminar.
        console.log("Assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos.");

    // Incrementa a variável 'inicioFilme' para acompanhar o tempo decorrido.
        inicioFilme++;

    // 't * 1000' é o atraso em milissegundos para cada iteração, aumentando a cada segundo.
    },t*1000);
}