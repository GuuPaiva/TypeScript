
enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Larissa',
    idade: 22,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Gustavo',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Vanessa',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: 'Edvaldo',
    idade: 54,
    profissao: Trabalho.Padeiro
}