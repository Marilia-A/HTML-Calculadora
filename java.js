function realizarOperacao(operacao) {
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;

  let resultado;
  switch (operacao) {
    case 'soma':
      resultado = num1 + num2;
      break;
    case 'divisao':
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        resultado = "Erro: Divisão por zero!";
      }
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      break;
    case 'subtracao':
      resultado = num1 - num2;
      break;

    default:
      resultado = "Operação inválida";
  }

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
