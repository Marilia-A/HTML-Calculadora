function realizarOperacao(operacao) {
    // 1. Captura os valores das caixas de texto.
    // O .value retorna uma string, então usamos parseFloat para converter para número.
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;

    let resultado;
    // 2. Verifica a operação e realiza o cálculo.
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'divisao':
            // Previne divisão por zero
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: Divisão por zero!";
            }
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        default:
            resultado = "Operação inválida";
    }
    // 3. Exibe o resultado na tag h1 com id="resultado".
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}