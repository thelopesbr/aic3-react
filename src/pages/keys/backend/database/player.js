export const Player = class {
    constructor(name, img=null){
        this.id = Math.round(Math.random() * 500000)
        this.name = name,
        this.img = img
        
    }
    get value(){
        return {
            'Name': this.name,
            'imagem':  this.img 
        }
    }
}