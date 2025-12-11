// Lista de perguntas. Cada item tem o texto da pergunta e as opções.
console.log("JS carregou!");

const perguntas = [
    {
        titulo: "Você já fez alguma terapia antes?",
        opcoes: ["Sim", "Não"]
    },
    {
        titulo: "Como você descreveria seu estado emocional hoje?",
        opcoes: ["Calmo", "Ansioso", "Estressado"]
    },
    {
        titulo: "Você já fez acompanhamento psicológico antes?",
        opcoes: ["Sim", "Não"]
    },
    {
        titulo: "Com qual frequência você sente dificuldade para relaxar?",
        opcoes: ["Raramente", "Às vezes", "Frequentemente"]
    },
    {
        titulo: "O que mais motivou você a buscar ajuda?",
        opcoes: ["Ansiedade", "Estresse", "Tristeza", "Outros"]
    }
];

// Índice da pergunta atual
let indice = 0;

// Elementos da página
const tituloEl = document.querySelector(".titulo_pergunta");
const botoesDiv = document.querySelector(".botoes_div");

// Função que mostra a pergunta atual
function mostrarPergunta() {
    const atual = perguntas[indice];

    tituloEl.textContent = atual.titulo;

    // Limpa os botões antigos
    botoesDiv.innerHTML = "";

    // Cria novos botões com base nas opções
    atual.opcoes.forEach(op => {
        const btn = document.createElement("div");
        btn.className = "block text-align-center custom-button";

        btn.innerHTML = `
            <a class="button button-fill text_button inter_font" href="#">
                ${op}
            </a>
        `;

        // Ao clicar em qualquer opção
        btn.addEventListener("click", () => {
            proximaPergunta();
        });

        botoesDiv.appendChild(btn);
    });
}

// Função para avançar
function proximaPergunta() {
    indice++;

    // Se acabou, manda para outra página
    if (indice >= perguntas.length) {
        app.views.main.router.navigate('/veri_psico/');
        return;
    }

    // Senão, exibe a próxima
    mostrarPergunta();
}

// Inicializa mostrando a primeira
mostrarPergunta();