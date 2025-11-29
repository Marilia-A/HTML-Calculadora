function adicionarAoVisor(valor) {
 if (visor.value === '0' && valor !== '.') {
 visor.value = valor;
 } else {
 visor.value += valor;
 }
}

function limparVisor() {
 visor.value = '0';
}

function calcularResultado() {
 try {
 const resultado = eval(visor.value);
 visor.value = resultado;
 } catch (e) {
 visor.value = 'Erro!';
 }
}