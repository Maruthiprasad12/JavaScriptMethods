
// arr3 = "listen"

// arr4 = arr3.split("").sort().join()

// console.log(arr4)
// arr5 = "silent"

// arr6 = arr5.split("").sort().join()
// console.log(arr6)

// if (arr4 == arr6){
//     console.log("those are anagrams")
// }else{
//     console.log("those are not anagram words")
// }
function isAnagram(str1,str2){
let str3 =str1.split("").sort().join()
let str4 =str2.split("").sort().join()
 if (str3 == str4){
    return "given strings are anagram"
}else{
    return "given strings are anagram words"
}
} 
console.log(isAnagram("listen","silent"))
console.log(isAnagram("hello","world"))