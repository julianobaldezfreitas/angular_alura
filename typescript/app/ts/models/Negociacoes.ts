import { Negociacao } from './Negociacao';
import { logarTempoDeExecucao } from '../helpers/decorators/index';
import { Imprimivel } from './Imprimivel';

export class Negociacoes implements Imprimivel{

        //private _negociacoes: Array<Negociacao> = [];
        private _negociacoes: Negociacao[] = [];

        @logarTempoDeExecucao()
        adiciona(negociacao: Negociacao) {
            this._negociacoes.push(negociacao);
        }

        @logarTempoDeExecucao()
        paraArray(): Negociacao[] {
            //retorna um novo array sem a referência do objeto 
            // e evita de mudar o valor do objeto original
            return ([] as Negociacao[]).concat(this._negociacoes);
         }

         paraTexto(): void {

            console.log('-- paraTexto --');
            console.log(JSON.stringify(this._negociacoes));
        }

    }