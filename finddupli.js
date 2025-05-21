function findDuplicateChar(str){
    const charcount = {}
    const duplicates = new Set();
    for (let char of str){
        if(charcount[char]){
            duplicates.add(char)
        }
        else{
            charcount[char] = 1 
        }
    }
    return [...duplicates]
}
const input = "manikanta"
const result = findDuplicateChar(input)
console.log(result)