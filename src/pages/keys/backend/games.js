'use strict'

import { Game } from './database/game.js'

export const GamesAPI  = class {
    constructor(){
        this.id = Math.round(Math.random() * 21)
    }
    #games = []
    generate(keys){
        // ele coleta os incides do objeto
        const indices = Object.keys(keys)

        // Agora ele vai percorrer cada uma das chaves | No caso se tem 3 chaves, ele vai percorrer 3 vezes
        for(let k = 0; k < indices.length; k++){
            // Cada uma das chave vai ter uma lista de duplas, vamos pegar essa lista
            const lista = keys[indices[k]]
            // vamos montar os jogos de fato, a logica é a seguinte:
            // Vamos pegar a primeira dupla da lista e montar um jogo com o restante da lista. 
            // Depois vamos pegar a segunda dupla da lista e montar um jogo com o restante da lista.
            // e por ai vai...
        
            for (let i = 0; i < lista.length; i++) {
                for (let j = i+1; j < lista.length; j++) {
                    this.#games.push(new Game(lista[i],lista[j],'Praia',indices[k]))
                }
            }
        }
        return this.#games
    }
    interface(){
        const games_scren = []
        this.#games.forEach((game) => {
            let duoOne = `${game['duo1']['player1']['name']} e ${game['duo1']['player2']['name']}`
            let duoTwo = `${game['duo2']['player1']['name']} e ${game['duo2']['player2']['name']}`
            games_scren.push(`${duoOne} x ${duoTwo}`)
        }) 
        return games_scren
    }
}


