var NUM_ITENS_SORTEIO = 60;
var NUM_ITENS_TOTAL = 60;

var lista_sorteados = [];
var lista_completa = [];
var lista_espera = [];

function popula_lista() {
	// preenche a lista com os indices das questoes 
	for (var aux = 0; aux < NUM_ITENS_TOTAL; aux++) {
		lista_completa.push(aux);	
	}
}

function sorteia() {
	// sorteia NUM_ITENS_SORTEIO de um total de NUM_ITENS_TOTAL
	for (var i = 0; i < NUM_ITENS_SORTEIO && lista_completa.length > 0; i++) {
		lista_completa.sort(function (a, b) {
			return Math.random() > 0.5;
		});
		lista_sorteados.push(lista_completa.pop());
	}

	// sorteia os itens restantes na lista de espera
	while(lista_completa.length > 0) {
		lista_completa.sort(function (a, b) {
			return Math.random() > 0.5;
		});
		lista_espera.push(lista_completa.pop());
	}
}

popula_lista();
sorteia();

console.log('Lista de sorteados: "' + lista_sorteados.join('", "') + '"');
console.log('Lista de espera: "' + lista_espera.join('", "') + '"');
 
