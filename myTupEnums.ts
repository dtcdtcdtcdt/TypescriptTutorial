const user: string[] = ["3"]

// Tuples are there to verify content and order of content in an array
let tUser: [string, number, boolean]

tUser = ["daniel", 134, true]

let rgb: [number, number, number] = [255, 100, 255]

type UserV5 = [number, string]

const newUser: UserV5 = [112, "balls@google.com"]
newUser[1] = "penis@google.com"

// Below is no longer allowed
//newUser.push(true)