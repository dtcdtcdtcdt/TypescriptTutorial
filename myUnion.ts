let score: number | string = 33

score = 44

score = "55"

type UserV4 = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;

}// User here
let daniel: UserV4 | Admin = {name: "Daniel", id: 123}

// Admin here
daniel = {username: "dtc", id: 123}

function getDbId(id: number | string) {
    // making some API calls
    console.log(`Db id is: ${id}`);
}
getDbId(3)
getDbId("3")

// function idToUpperError(id: number | string) {
//     id.toLowerCase();
// }

function idToUpperCorrect(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

// Possible but not useful
let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew";