//const negociacao = new Negociacao(new Date(), 1, 100);
//negociacao.quantidade = 3; // O VSCODE indica um erro de compilação aqui
//negociacao.valor = 3;
//console.log(negociacao.quantidade);

import { NegociacaoController } from './controllers/NegociacaoController';


const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importarDados.bind(controller));