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