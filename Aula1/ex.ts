//ex1
interface Carro2{
    marca: string
    modelo: string
    ano?: number
}

const mycar: Carro2 = {
    marca: "Ford",
    modelo: "Mondeu",
    ano: 2017,
}

//ex2
interface Pagamento{
    valor: number,
    metodospagamento: "mbway" | "paypal" | "cartão",
    detalhes: string
}


const pagamento: Pagamento = {
    valor: 12,
    metodospagamento: "paypal",
    detalhes: "teste"
}

function processarPagamentos(pag: Pagamento):string {
    return pag.detalhes;
}

console.log(processarPagamentos(pagamento));

