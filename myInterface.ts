interface UserInterface {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, amountDiscounted: number): number
}

const danielInterfaceInstance: UserInterface = {
    dbId: 22,
    email: "cool@gmail.com",
    userId: 1234, 
    googleId: "coolGuy",
    startTrial: () => {
        return "Trial started"
    },
    getCoupon: (couponName: "Free", discount: 10) => {
        return discount;
    }
    }
