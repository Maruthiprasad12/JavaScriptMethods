x=30
y=25
// if((x=>30,x++),(y=> 25)){
//     console.log (x+y) 
// }
// if((x=>30),(y=> 25,y--)){
//         console.log (x+y)
// }
// if((x=>30),(y=> 25,y--)){
//     console.log (x-y)
// if((x=>30),(y=> 25,y--)){
//     console.log (x/y)
// }
// if((x=>30),(y=> 25)){
//     console.log (x%y)
// }
// if((x=>30),(y=> 25,y--)){
//     console.log (x*y)
// }
let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
    let row = ""; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {
        row += (j % 2) + " "; // Append 0 or 1 to the row
    }
    console.log(row); // Print the row and remove extra space at the end
}