
for(let i=1;i <=100;i++){
    if(i%4 === 0  && i%5 === 0){
        console.log("fizzbuzz");
    }
    else if (i%4 === 0) {
        console.log("fizz");    
    } 
    else if(i%5 === 0) {
        console.log("buzz");    
    }
    else {
        console.log(i);
    }
}