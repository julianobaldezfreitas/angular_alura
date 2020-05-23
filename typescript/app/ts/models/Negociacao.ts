import { Imprimivel } from "./Imprimivel";

// app/js/models/Negociacao.js

export class Negociacao implements Imprimivel{


    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    /*constructor(
        readonly data: Date, 
        readonly quantidade: number,  
        readonly valor: number){}*/

    /*private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade,  valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/

   /* get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }*/

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(
           `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }
}