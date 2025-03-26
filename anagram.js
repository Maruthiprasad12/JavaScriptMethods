
arr3 = "listen"

arr4 = arr3.split("").sort().join()

console.log(arr4)
arr5 = "silent"

arr6 = arr5.split("").sort().join()
console.log(arr6)

if (arr4 == arr6){
    console.log("those are anagrams")
}else{
    console.log("those are not anagram words")
}