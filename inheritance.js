class product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    display(){
        console.log(`product:${this.name},price :${this.price}`)
    }
}
class electronics extends product{
    constructor(name,price,brand){
        // super is used to call the constructor of the parent class
        super(name,price)                  
        this.brand = brand
    }
    display(){
        console.log(`electronic : ${this.name }, brand : ${this.brand},price :${this.price}`)
    }
}
// class  cloth extends product  {
//     constructor(name,price,brand) {
//         super(name,price)                  
//         this.size = this.size
//     }
//     display(){
//         console.log(`cloth : + this.name +, size : ${this.brand},price :${this.price}`)
        
//     }
// }

let simpleproduct = new product("general item,20")
simpleproduct.display()
let refrigirator = new electronics("refrigirator,samsung,15000")
refrigirator.display()