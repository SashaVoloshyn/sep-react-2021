
import {IUser} from "./interface/user.interface";

// 2) протипизировать функции:
//
//     const user = {
//         name:"Max",
//         age:18,
//         gender:'male'
//     }
//
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)

const user : IUser= {
        name:"Max",
        age:18,
        gender:'male'
    }


function showSum(a:number,b:number){
    console.log(a + b);
}
function sum(a:number,b:number) {
    return a + b
}


function incAge(someUser:IUser, inc:number){
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 4));


