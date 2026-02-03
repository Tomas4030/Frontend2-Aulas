var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Partial<T>: Torna todas as propriedades opcionais.
//Readonly<T>: Impede a modificação das propriedades.
//Pick<T, K>: Seleciona propriedades específicas.
//Omit<T, K>: Remove propriedades específicas.
var playerPartial = { name: "tomas", game: "Cs2" };
var playerReadonly = { name: "tomas", age: 20, game: "csgo" };
var playerPick = { name: "Miguel" };
var PlayerOmit = { name: "tomas", game: "csgo" };
//EX2 /*
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.description = function () {
        return "Marca: ".concat(this.marca, "\n                Modelo: ").concat(this.modelo, "\n                Modelo: ").concat(this.ano);
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, ano, portas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.portas = portas;
        return _this;
    }
    Carro.prototype.description = function () {
        return "portas: ".concat(this.portas);
    };
    return Carro;
}(Veiculo));
var newCar = new Carro("ford", "modeu", 2012, 5);
console.log(newCar);
console.log(newCar.marca);
console.log(newCar.modelo);
console.log(newCar.ano);
console.log(newCar.portas);
//ex3
var ListHandler = /** @class */ (function () {
    function ListHandler() {
        this.lista = [];
    }
    ListHandler.prototype.add = function (valor) {
        this.lista.push(valor);
    };
    ListHandler.prototype.remove = function (valor) {
        var index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            return true;
        }
        return false;
    };
    ListHandler.prototype.getAll = function () {
        return this.lista;
    };
    return ListHandler;
}());
var lista = new ListHandler();
lista.add(10);
lista.add(20);
lista.add(30);
lista.remove(20);
console.log(lista.getAll());
