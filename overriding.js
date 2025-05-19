class Animal{
    speaks(){
        console.log("makes sounds")
    }
}
class dog extends Animal{
    speaks(){
        console.log("dogs braks")
    }
}
class cat extends Animal{
    speaks(){
        console.log("cat speaks meaw")
    }
}
const mydog = new dog()
const mycat = new cat()

mydog.speaks();
mycat.speaks();