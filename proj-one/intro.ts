let helloWorld: string = 'Hello world';

const isTrue = (value: boolean):boolean => {
    return helloWorld.length > 0 ? true : false
}
console.log(helloWorld);

//void returns nothing never
function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    // handles error use to end the function

    // represents values which are never observed
    throw new Error(errmsg);
}

// typescript bad behaviours! 

const newUser = {name: "solomon", email: "h@.com", isPaid: false, isEmployed: false};

function createCourse ({name: string, isPaid: boolean}):{name: string, isPaid: boolean} {
        return {name: 'solomon', isPaid: true}
}

isTrue(false)

//TYPE ALIAS

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    isPaid: boolean,
    creditCardDetails ?: number 
}

function newcreateUser(user: User): User {
    const a = false
    
    console.log( a )
    return {name: 'solomon',_id: '3', email: 'string', isActive: false, isPaid: false}

}

let mainUser: User = {
    _id: 'jKl#233',
    name: 'Solomon',
    email: 'hh@gmal.com',
    isActive: true,
    isPaid: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & { cvv: number };



newcreateUser(mainUser)

function bankHeaven(): cardDetails {
    return {cardNumber: '1234567890', cardDate: 'tuesday-230', cvv: 3456453}
}

bankHeaven()

//ARRAY!
const Solomon: string[] = []
const age : Array <number> = []
const candidate : mUser[] = []


type mUser = {
    name: string,
    age: number,
    hobbies?: string[]
}

const allmUser = (): mUser => {
    return {
        name: 'solomon',
        age: 4,
        hobbies: ['solomon', 'pascal']
    }
}

allmUser();

Solomon.push();
age.push();

export {}