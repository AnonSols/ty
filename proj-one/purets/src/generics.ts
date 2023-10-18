const scores: Array<number> = []

// Genreics 
// The difference between this and any is that with any you are likely going to loose your data type. For instance i can pass an of string and get a return value of number with any. Meanwhile with the 'Type' type , it locks the passed type and returns that types, throws the an error if the type does not correlate.


function objectOne<Type>(val: Type):Type {
    return val
}

// The same 
function identityFour<T>(val: T): T {
    console.log(val)
    return val
}

interface Bottle {
    brand: string,
    type: number,
}

identityFour<Bottle>({brand: 'kin', type: 45})

function arrayInput<T> (val: Array<T>): T {
    const myIndex = 4
    return val[myIndex]
}

const identityProduct = <t> (products: t[]): t[]=> {
    return products
}

const identityFive = <T> (products: Array<T>): T[] => {
    return products;
}

function anotherFunction <T, U extends Database> (key:T, val:U): object {
   let dataContent = {
    key, 
    val
   }
   console.log(dataContent)
   return dataContent
}

anotherFunction(3, {connection: 'firebase', username: 'solmon', password: 'bee'})


interface Database {
    connection: string,
    username: string,
    password: string,
}

interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class sellAble<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}