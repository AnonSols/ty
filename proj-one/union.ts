// combination of different types that can be included in variable or array e.t.c

let score: number | string =  33;

type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number
}

let sols: User | Admin = {
    username: 'solomon',
    id: 323
}

sols = {name: "hc", id: 332}

//union narrowing
function getDbId(id: number | string): void {

    console.log(id)
}
function recvDbId(id: number | string): void {
    if (typeof id === "string") {
        id.toLowerCase()
    }else {
        id + 2
    }
}

//array
const data:( string | number | {} )[]= [1,2,3,4,5, 'helloworld', {name: 'hello world'}]

//literal assignment 
let pi: 3.14 = 3.14





getDbId(3)