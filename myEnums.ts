//enums are a way to define a set of named constants. They can be numeric or string values. Enums are useful when you have a fixed set of related values that you want to group together and give them meaningful names.

const enum SeatChoice {
    AISLE = "aisle",
    WINDOW = "window",
    MIDDLE = "middle"
}

const mySeat = SeatChoice.AISLE; // this will be "aisle"
