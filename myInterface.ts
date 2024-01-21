interface UserInterface {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, amountDiscounted: number): number
}

interface UserInterface {
    githubToken: string
}

interface AdminInterface extends UserInterface {
    role: 'Admin' | "TA" | "learner"
}

const danielInterfaceInstance: AdminInterface = {
    dbId: 22,
    role: "Admin",
    email: "cool@gmail.com",
    userId: 1234, 
    googleId: "coolGuy",
    startTrial: () => {
        return "Trial started"
    },
    getCoupon: (couponName: "Free", discount: 10) => {
        return discount;
    },
    githubToken: 'hc6584765847h8c53cc9348!87428'
    }
