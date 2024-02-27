    // Declara uma constante variável1 e atribui o valor "valor somente leitura" a ela.
const variavel1 = "valor somente leitura";

    // Declara uma variável variavel2 e atribui o valor "valor editavel" a ela.
var variavel2 = "valor editavel";

    // Tentativa de atribuir um novo valor à variável1 (constante), o que deveria resultar em erro.
try {

    // Tenta modificar o valor da constante variavel1.
    variavel1 = "valor não permitido";

    // Imprime uma mensagem de erro caso a tentativa de modificação seja bem-sucedida.
    console.error("A variavel1 foi alterada para:" , variavel1);

     // Captura e imprime o erro caso a tentativa de modificação falhe.
} catch (e) {

    // Tentativa de atribuir um novo valor à variável2 (variável), o que deveria ocorrer sem erros.
    console.error("Ops! Ocorreu o erro:" , e);
}

try {
    // Tenta modificar o valor da variável variavel2.
    variavel2 = "valor permitido";

    // Imprime uma mensagem com o novo valor da variável variavel2.
    console.log("A variavel2 foi alterada para:", variavel2);

    // Captura e imprime o erro caso a tentativa de modificação falhe.
} catch (e) {
    console.error("Ops! Ocorreu o erro:" , e);
}