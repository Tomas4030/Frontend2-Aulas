
//ex1
interface Player{
    name: string
    age: number
    game: string
}

//Partial<T>: Torna todas as propriedades opcionais.
//Readonly<T>: Impede a modificação das propriedades.
//Pick<T, K>: Seleciona propriedades específicas.
//Omit<T, K>: Remove propriedades específicas.

const playerPartial: Partial<Player> = {name: "tomas", game: "Cs2"}
const playerReadonly: Readonly<Player> = {name: "tomas", age: 20, game: "csgo"}
const playerPick: Pick<Player, 'name'> = {name: "Miguel"}
const PlayerOmit: Omit<Player, 'age'> = {name: "tomas", game: "csgo"}

//EX2 /*
class Veiculo{
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    description(): string{
        return `Marca: ${this.marca}
                Modelo: ${this.modelo}
                Modelo: ${this.ano}`
    }
    

}

class Carro extends Veiculo{
    portas: number;

    constructor(marca: string, modelo: string, ano: number, portas: number){
        super(marca, modelo, ano)
        this.portas = portas
    }
    description(): string{
        return `portas: ${this.portas}`
    }
}


const newCar = new Carro("ford", "modeu", 2012, 5)

console.log(newCar)
console.log(newCar.marca)
console.log(newCar.modelo)
console.log(newCar.ano)
console.log(newCar.portas)


//ex3


class ListHandler<T> {
    private lista: T[] = [];

    add(valor: T): void {
        this.lista.push(valor);
    }

    remove(valor: T): boolean {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            return true;
        }
        return false;
    }

    getAll(): T[] {
        return this.lista;
    }
}

const handler = new ListHandler<number>();

handler.add(10);
handler.add(20);
handler.add(30);

handler.remove(20);

console.log(handler.getAll()); 