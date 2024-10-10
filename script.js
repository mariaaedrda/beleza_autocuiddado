let questions = [
    { question: "A vitamina C ajuda a clarear manchas na pele?", answer: true },
    { question: "O ácido hialurônico é um ingrediente usado para esfoliar a pele?", answer: false },
    { question: "O protetor solar deve ser reaplicado a cada 8 horas?", answer: false }, // A cada 2 horas é o recomendado
    { question: "A niacinamida é conhecida por reduzir a produção de sebo?", answer: true },
    { question: "A água micelar substitui o uso do sabonete facial?", answer: false }, // Complementa, mas não substitui o sabonete
    { question: "O retinol deve ser aplicado durante o dia?", answer: false }, // Retinol deve ser aplicado à noite
    { question: "O colágeno é uma proteína natural presente na pele?", answer: true },
    { question: "O ácido salicílico é mais indicado para peles secas?", answer: false }, // É mais indicado para peles oleosas e acneicas
    { question: "A esfoliação deve ser feita todos os dias?", answer: false }, // Excesso de esfoliação pode irritar a pele
    { question: "Óleos essenciais podem ser aplicados diretamente na pele sem diluição?", answer: false }, // Óleos essenciais devem ser diluídos
    { question: "A máscara de argila verde é indicada para pele oleosa?", answer: true },
    { question: "A vitamina E é um antioxidante poderoso para a pele?", answer: true }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion].question;
    } else {
        document.getElementById('question').innerText = "Fim do jogo! Você acertou " + score + " de " + questions.length + " perguntas.";
        document.getElementById('result').innerText = "Parabéns por jogar!";
    }
}

function answer(userAnswer) {
    if (currentQuestion < questions.length) {
        if (userAnswer === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        showQuestion();
    }
}

showQuestion();


