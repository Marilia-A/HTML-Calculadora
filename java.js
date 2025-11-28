/* Funções para a calculadora de painel */
function adicionarAoVisor(valor) {
  const visor = document.getElementById('visor');
  // Se visor tem "0", substituir; caso contrário, concatenar
  if (!visor) return;
  if (visor.value === '0' && valor !== '.') {
    visor.value = valor;
  } else {
    visor.value += valor;
  }
}

function limparVisor() {
  const visor = document.getElementById('visor');
  if (!visor) return;
  visor.value = '0';
}

function calcularResultado() {
  const visor = document.getElementById('visor');
  if (!visor) return;
  const expr = visor.value;

  // Evita avaliar uma expressão vazia ou inválida
  if (!expr || expr.trim() === '') {
    visor.value = '0';
    return;
  }

  try {
    // Avalia apenas operadores aritméticos básicos.
    // Usamos Function em vez de eval diretamente.
    // ATENÇÃO: esta técnica ainda não é adequada para entrada livre em produção,
    // mas aqui os botões controlam a entrada (sem texto livre do usuário).
    const sanitized = expr.replace(/[^0-9+\-*/(). ]/g, '');
    const resultado = Function(`return (${sanitized})`)();
    // Se resultado não for número (NaN) mostramos erro
    if (typeof resultado === 'number' && isFinite(resultado)) {
      // Mostra resultado com remoção de .0 desnecessário
      visor.value = Number.isInteger(resultado) ? resultado.toString() : resultado.toString();
    } else {
      visor.value = 'Erro';
    }
  } catch (e) {
    visor.value = 'Erro';
    console.error('Erro ao calcular expressão:', e);
  }
}

/* Função para a página de operações (num1, num2) */
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
    default:
      resultado = "Operação inválida";
  }

  document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
