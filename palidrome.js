const ispalindrome = str  => {
     str1 = str.split('').reverse().join("")
        if (str1 ===str){
            console.log(str +" " +"is a polindrome " )
        }
        else{
            console.log(` ${str} is not a ploindrome`)
        }
} 
ispalindrome("madam")
