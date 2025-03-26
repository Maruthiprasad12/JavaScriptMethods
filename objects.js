// var fruit={
//     fruitname :"banana",
//     colour:"yellow",
//     cost: 10,
//     vitamins: "k",
//     available: true
// }
// console.log(typeof(fruit))
// console.log(fruit.fruitname)
// console.log(typeof(fruit.available))
// console.log(fruit['colour'])
// var Car={
//     Carname:"Swift",
//     Colour :"White",
//     Model:"Dezire",
//     Cost:700000,
//     Hybrid:false
// }
// console.log(typeof(Car))
// Car['Fueltype']="Petrol"
// console.log(Car.Fueltype)
const MenuItems ={
    menu1:"My Info",
    menu2:"Perfomance",
    menu3:"Dashboard",
    menu4:"Directory",
    menu5:"Maintanance",
    menu6:"Claims",
    menu7:"Buzz"
}
for(let i in MenuItems){
    console.log(MenuItems[i])
}