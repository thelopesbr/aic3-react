'use strict'

export const Duo = class {
    constructor(player1, player2){
        this.id = Math.round(Math.random() * 500000)
        this.player1 = player1,
        this.player2 = player2,
        this.points = Math.round(Math.random() * 200)
    }
    get value(){
        return {
            'Player One': this.player1,
            'Player Two': this.player2,
            'Points': this.points,
        }
    }
}