function calculator(x,y){
  this.x= 5
  this.y= 3
}
calculator.prototype.add=function(){
    return this.x+this.y
}
calculator.prototype.substract=function(){
    return this.x- this.y
}
calculator.prototype.multiply=function(){
    return this.x * this.y
}
const calc = new calculator()
console.log(calc.add())
console.log(calc.substract())
console.log(calc.multiply())