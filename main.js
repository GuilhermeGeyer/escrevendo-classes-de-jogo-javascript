class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = {
            'guerreiro': 'espada',
            'mago': 'magia',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        }[tipo]
    }

    atacar() {
        console.log(`${this.tipo} atacou com ${this.ataque}`)
    }
}

const meuHeroi = new Heroi('Guilherme', 100, 'ninja')

meuHeroi.atacar()
