// Write your solution below:
//Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// function makeUnique (string) {
//     let givenStr = Array.from(string)
//     let duplicateStr = Array.from(string)
//     // console.log(givenStr)
//     // console.log(duplicateStr)
//     for(var j = 0; j < duplicateStr.length; j++);
//     for(var i = 0; i < givenStr.length; i++);
//     if (givenStr[i] === duplicateStr[j]){
//        givenStr.splice(givenStr[i],1)
//     }
//     console.log(duplicateStr)
//     console.log(givenStr)
// }

// makeUnique("hello")

// function makeUnique(string) {
//     let givenStr = Array.from(string)

//     for (let i = 0; i < givenStr.length; i++)
//     for (let j = givenStr.length -1; j >= 0; j--)

//     if (givenStr[i] === givenStr[j]){
//         givenStr.splice(givenStr[i],1)
//     }
//     console.log(givenStr)
// }

// makeUnique("hello")

// function makeUnique(string) {
//     let givenStr = Array.from(string)
//     for (let i = 0; i > givenStr.length; i++)
//     if (givenStr.includes(givenStr[i])){
//         givenStr.splice(givenStr[i],1)
//     }
//     console.log(givenStr)
// }

function makeUnique(string) {
    let givenStr = Array.from(string)
    let setStr = new Set(givenStr)
    let uniqueArr = Array.from(setStr)
    uniqueArr.toString
    console.log(uniqueArr.join(''))
}


makeUnique("helloworld")
makeUnique(`iwanttoclimbamountain`)