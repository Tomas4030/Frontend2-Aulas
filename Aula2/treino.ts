class Animal{
    nome: string;

    constructor(nome: string){
        this.nome = nome
    }

    Fazsom(): void{
        console.log("O bro fez som")
    }
}


const meuAnimal = new Animal("broooo");
console.log(meuAnimal.nome)
meuAnimal.Fazsom()




class Post{
    titulo: string;
    content: string;
    dia: Date;

    constructor(titulo: string, content: string, dia: Date){
        this.titulo = titulo;
        this.content = content;
        this.dia = dia;
    }

    Geradata(){
        console.log(new Date)
    }
}

const newPost = new Post("post 1", "teste", new Date())
console.log(newPost)
newPost.Geradata();

class News extends Post{
    Geradata(): void {
        const date = new Date().getFullYear
        console.log(date)
    }
}

function random<T>(valor: T):T{
    return valor
}

const cenas2 = random<string>("nome");
const cenas3 = random<number>(10);
const cenas4 = random<boolean>(true);

console.log(cenas2, cenas3, cenas4)