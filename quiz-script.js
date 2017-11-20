var currentQuestion= 0;
var score= 0;
var score_pergunta_atual;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var conferirButton = document.getElementById('conferirButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex) {
	document.getElementById('pontuacao-pergunta-atual').textContent = 10;
	score_pergunta_atual = 10;

	var q = questions[questionIndex];
	questionEl.textContent = (currentQuestion + 1)+'.' + q.question;
	opt1.textContent = q.option1;
	opt1.checked = false;
	opt2.textContent = q.option2;
	opt2.checked = false;
	opt3.textContent = q.option3;
	opt3.checked = false;
	opt4.textContent = q.option4;
	opt4.checked = false;

	var ele = document.getElementsByName("questionOption");
	for(var i=0;i<ele.length;i++)
		ele[i].checked = false;
	
	// troca a imagem
	

	var img = document.getElementById('img-dica');
	img.src = q.imagem || 'todo.jpg';
	

	// img.alt = questions[currentQuestion].desc_imagem;
	
	// esconde
	var ct_img = document.getElementById('ct-dica');
	ct_img.style.display = 'none';

}

function isQuestionChecked() {
	var selectedOption= document.querySelector('input[type=radio]:checked');
	if (selectedOption == null) {
		alert('Por favor, elija una respusta ');
		return;
	}
	


     var valorSelecionado = selectedOption.value;
	if (questions[lista_sorteados[currentQuestion]].answer == valorSelecionado) {
		alert('Respuesta correcta');


		score += score_pergunta_atual;
		
		if ((currentQuestion + 1) >= questions.length) {
			alert('FIM!');
		

		} else {
			currentQuestion++;
			loadQuestion(lista_sorteados[currentQuestion]);
			atualizaPontuacao();
		}
	} else {
		alert('Respuesta equivocada');
		
		alert('¡Intente otra vez!');


		// exibe a imagem que eh a dica
		

		var ct_img = document.getElementById('ct-dica');
		ct_img.style.display = 'block';

		

		if (score_pergunta_atual == 10) {
			document.getElementById('pontuacao-pergunta-atual').textContent = 5;
			score_pergunta_atual = 5;
		} else if (score_pergunta_atual == 5) {
			document.getElementById('pontuacao-pergunta-atual').textContent = 3;
			score_pergunta_atual = 3;
		} else {
			document.getElementById('pontuacao-pergunta-atual').textContent = 1;
			score_pergunta_atual = 1;
		}
		
	}
}

function atualizaPontuacao() {
	document.getElementById('pontuacao').textContent = score;
}