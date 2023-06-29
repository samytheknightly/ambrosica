import { createContext } from "react"

export const ProductContext = createContext()

export default function ProductProvider({ children }) {
    const product = {
        name: "Ambrosica",
        title: "Ambrosica™ Facile Slicer",
        get reasonsToBuyNow() {
            return `
                Tired of wasting your time and energy chopping, slicing, grinding, or pressing your fruits and veggies by hand?
                Look no further than the ${this.title}!
            `
        },
        description: `
            <div>Only the best for the moms of this world!</div>
            <div>Whether you already have a baby or you're expecting one.</div>
            <div>Children are a blessing!</div>
            <div>But with that blessing comes great responsibility, i.e. you have to constantly fulfill their needs, which includes changing diapers, feeding them, make them feel safe, manage their hobbies, only to name a few.</div>
            <div>Well, we can't change diapers for you, you're gonna pretty much have to do that yourself, but what we Can do is simplify your financial management, so you'll never have to worry about your child not getting enough food, without you working 24/7, so you'll have more spare time to raise your child.</div>
            <div>How are we gonna do that?</div>
            <div>Great question, buckle up!</div>
            <div>The Ambrosica™ Baby Budgeteer includes a bunch of budget planning sheets and a wallet with a folder-like system for you to organize those sheets and the money pockets you're going to have inside the wallet for each expense category.</div>
            <div>This is proven to be a superbly efficient way of organizing your budgeting, especially as a parent.</div>
            <div style="margin-top: .8em">
                <div>UPDATE:</div>
                <div>As part of our Summer Sale you will get 30% off and free shipping!</div>
            </div>
        `,
        announcement: "🔥 SUMMER SALE: 30% OFF + FREE SHIPPING 🔥",
        headerImg: "https://st3.depositphotos.com/1177973/18401/i/450/depositphotos_184010434-stock-photo-delicious-fruit-salad.jpg",
        imgs: [
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/bd71188f-7f5c-441c-90f1-82a3976b624d.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/2e4c47b2-1d98-411f-a702-d848ef757de7.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",

        ],
        price: 3498,
        features: ["Slicing", "Grinding", "Pressing"],
        darkMode: false,
        tabs: [
            {
                name: "Shipping",
                content: "We pay for shipping due to our Summer Sale. Expect your package to arrive within 15 days."
            },
            {
                name: "Refunds",
                content: "So you're already looking into the refunds section... Fair enough, but make sure to redeem your refund within 15 days after receiving the order."
            }
        ],
    }

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}