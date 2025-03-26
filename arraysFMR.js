// // arr=[1,2,3,4,5]
// let squares=[...Array(10).keys()].map(num=>{
//     let n= num+1
//     if(n<=10){
//         return n*n
//     }
// })
// console.log(squares)

let numbers=[...Array(100).keys()].map(num=>num+1)
let filteredarr= numbers.filter(num=>{
    if(num%3===0 && num% 5===0){
        return true
    }else{
        return false
    }
})
console.log(filteredarr)
reducearr=filteredarr.reduce((acc,num)=>acc/3-num,3)
console.log(reducearr)