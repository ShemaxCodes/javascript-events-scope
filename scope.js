/* Variables and Scope
* locals: let, const
* global: var 
*/

// let myName = "I am global";
// var yourName = "Toa";

// if (true) {
//     console.log(myName)
// }
// => I am global

// Example 2

// if (true) {
//     let myName = "I am local";
//     var yourName = "Gizmo";
//     console.log(myName)
//     console.log (yourName)        
// }
// => I am local
// => Gizmo

//It returns these values because, these methods were called within the block. 
//JS looks inward and then outward.
//If it doesn't find the method within the block, then it will look outside to the
//global methods to find it. 

// Example 3

// if (true){
//     let nestedName = "I am local"
// }

// console.log(nestedName)
// => ReferenceError: nestedName is not defined

// This method wasn't called within the block, so it throws an error.

//////////////////////////////////////////////////////////////////////////

// WITH FUNCTIONS
// Example 1

let myName = "I am global";
const printName = () => console.log(myName)

const newPrintName = () => {
    let myName = "Luigi"
    printName()
}
newPrintName();

// => I am global

//printName was not defined within the block/function. So it looks outside to the global method.