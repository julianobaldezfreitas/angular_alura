//declare var $: any; //faz o compilador entender $ para o jquery
//npm install @types/jquery@2.0.42 --save-dev
// faz com que o typescript reconheça o $
//https://github.com/DefinitelyTyped/DefinitelyTyped
import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> { //uso de generics

        // como agora o elemento e acessado de dentro da classe
        // pai nao precisa ser protected
        //protected _elemento: Element;
        private _elemento: JQuery;
        private _escapar: boolean;

         // tornando  o parâmetro opcional com ?
         //constructor(seletor: string, escapar?: boolean) {
        constructor(seletor: string, escapar: boolean = false) {
            //this._elemento = document.querySelector(seletor);
            // usando jquery
            this._elemento = $(seletor);
        }

        @logarTempoDeExecucao(true)
        update(model: T) {
            //this._elemento.innerHTML = this.template(model);

            let template = this.template(model);
            if(this._escapar) 
                template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    
            this._elemento.html(template);
        }

        abstract template(model: T): string;}