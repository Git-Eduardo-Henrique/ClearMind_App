//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [
    {
      path: '/inicio/',
      url: 'inicio.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/cadastro/',
      url: 'cadastro.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
	{
      path: '/entrar/',
      url: 'entrar.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/perguntas/',
      url: 'perguntas.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
			// Lista de perguntas. Cada item tem o texto da pergunta e as opções.
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
			]

			// Índice da pergunta atual
			let indice = 0

			// Elementos da página
			const tituloEl = document.querySelector(".titulo_pergunta")
			const botoesDiv = document.querySelector(".botoes_div")

			const respostas = []

			// Função que mostra a pergunta atual
			function mostrarPergunta() {
				const atual = perguntas[indice]

				tituloEl.textContent = atual.titulo

				// Limpa os botões antigos
				botoesDiv.innerHTML = ""

				// Cria novos botões com base nas opções
				atual.opcoes.forEach(op => {
					const btn = document.createElement("div");
					btn.className = "block text-align-center botao_perg";

					btn.innerHTML = `
						<a class="button button-fill botao_perg_text inter_font" href="#">
							${op}
						</a>
					`;

					// Ao clicar em qualquer opção
					btn.addEventListener("click", () => {
						salvarResposta(op)
						proximaPergunta()
					});

					botoesDiv.appendChild(btn)
				});
			}

			function salvarResposta(opcaoEscolhida) {
					respostas.push(opcaoEscolhida)
					console.log("Respostas até agora:", respostas)
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
			mostrarPergunta()
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/veri_psico/',
      url: 'veri_psico.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
	{
      path: '/perfil/',
      url: 'perfil.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/home/',
      url: 'home.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/sessoes/',
      url: 'sessoes.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
	{
      path: '/agendamento/',
      url: 'agendamento.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
			app.calendar.create({
				containerEl: '#calendar-inline',
				value: [new Date()],
				weekHeader: true,
				renderToolbar: function () {
				return `
					<div class="calendar-header">
					<div class="calendar-month-year"></div>
					</div>
				`;
				},
				on: {
				change: function (calendar, value) {
					console.log('Dia clicado:', value[0]);
				}
				}
			})
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/mensagens/',
      url: 'mensagens.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    
  ],
  // ... other parameters
});

//Para testes direto no navegador
// nota edu: sempre descomentar essa parte para testes! comentar depois de testar
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});


function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}
