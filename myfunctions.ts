function addTwo(num: number): number {
    return num + 2;
    // return "hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}
let loginUser = (name: string, email: string, isPaid: boolean) => {
    if (isPaid === void 0) { isPaid = false; }
}

addTwo(5);

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string):string => {
    return "";
}


const heroes = ["thor", "spiderman", "ironman"]

// Value returned will be a string is what's being declared in below line
// Don't need to, TS will deduce what you want to return based on return value
heroes.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}