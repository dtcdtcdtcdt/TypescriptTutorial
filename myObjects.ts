// createUser function takes object as argument, object has two properties
function createUser({name: string, isPaid: boolean}) {
    
}
createUser({name: "Daniel", isPaid: false})


// createCourse function returns object with 2 properties, name and price
function createCourse():{name: string, price: number} {
    return {name: "reactjs Intro", price: 5};
}


type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUserV2(user: User){}