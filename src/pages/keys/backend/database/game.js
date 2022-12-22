

export const Game = class {
    constructor(duo1, duo2, court,key){
        this.id = Math.round(Math.random() * 21)
        this.duo1 = duo1,
        this.duo2 = duo2,
        this.court = court,
        this.key = key
    }
    start(){
        this.duo1Point = 0
        this.duo2Point = 0
        this.result = 0
    }
    stop(result,duo1Point,duo2Point){
        this.duo1Point = duo1Point
        this.duo2Point = duo2Point
        this.result= result
    }
    get result(){
        return this.result
    }
    get info(){
        return {
            'id': this.id,
            'duo1': this.duo1,
            'duo2': this.duo2,
            'court': this.court,
            'duo1Point': this.duo1Point,
            'duo2Point': this.duo2Point,
            'result': this.result
        }
    }
}