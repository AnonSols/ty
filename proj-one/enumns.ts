//we have for the enums its just a way of instanciating similar content be it differents datatypes or methods.

//In our example we are going to assumen building an application for an aeroplane with different seat categories.
// it like it takes just NUMBER and STRING as it's datatype

// instead of this:
// const AISLE = "string"
// const MIDDLE = 9
// const WINDOW = ()=> "WINDOW"

// we do this instead: BY DEFAULT IT TAKES THE NUMBER DATATYPE

const enum planeSeat {
    AISLE = "AISLE",
    MIDDLE = 4,
    WINDOW,
    FORTH = 20,
}

const arrAisle = planeSeat.AISLE
