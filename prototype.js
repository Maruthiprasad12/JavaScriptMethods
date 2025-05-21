function calculator(x,y){
  this.x= 5
  this.y= 4
}
calculator.prototype.add=function(){
    console.log(this.x+this.y) 
}
calculator.prototype.substract=function(){
    console.log(this.x-this.y)
}
calculator.prototype.multiply=function(){
    console.log(this.x*this.y)
}
const calc = new calculator()
calc.add()
calc.substract()
calc.multiply()