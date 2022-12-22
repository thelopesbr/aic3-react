'use strict'

export const KeysAPI = class {
    constructor(){
        this.keys = {};
        this.queue = [];
    }
    *#enumerate(array) {
        for (let i = 0; i < array.length; i += 1) {
           yield [i, array[i]];
        }
     }
    #sort(doubles){
        return doubles.sort((a,b) => a.points - b.points)
    }
    generate(doubles){
            doubles = this.#sort(doubles)
            
            if(doubles.length % 3 != 0){
                this.queue= doubles.slice(-(doubles.length % 3))
                doubles = doubles.slice(0,doubles.length - (doubles.length % 3))
            }
        
            const qtd_keys = doubles.length / 3
            const keys = []
    
            for (let i = 0; i < qtd_keys; i++) {
                keys.push([])
            }

            let posit = true
            let subscribe = this.#enumerate(doubles)
            let result = subscribe.next();

            while (!result.done) {
                if(posit){
                    for (let i = 0; i < qtd_keys; i++){
                        keys[i].push(result.value[1])
                        result = subscribe.next();
                    }
                    posit = !posit
                }
                else{
                    for (let i = qtd_keys-1; i >= 0; i--){
                        keys[i].push(result.value[1])
                        result = subscribe.next();
                    }
                    posit = !posit
                }
            }
            let translator = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
            for (const [i, key] of this.#enumerate(keys)) {
                this.keys[translator[i]] = key
            }
            return {'count_keys': qtd_keys, 'count_doubles': doubles.length,'values': this.keys, 'Queue':this.queue}
    }
    get values(){
        return this.keys
    }
    interface(){
        const keys_screen = []
        let i = 0
        Object.values(this.keys).forEach((key) => {
            key.forEach((duo) => {
                keys_screen.push(`${Object.keys(this.keys)[i]} | ${duo['player1']} e ${duo['player2']} \n`)
            })
            i += 1
        })
        return keys_screen
    }
} 


