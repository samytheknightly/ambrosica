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
        get description() {
            return `
                Introducing the ${this.title}, an all-in-one Vegetable and Fruit Slicer, Grinder, and Presser.
                Designed to be the ultimate kitchen companion, this versatile device effortlessly handles slicing, grinding, and pressing tasks with precision and convenience.
                Whether you're looking to create perfectly sliced vegetables, grind spices or nuts, or extract fresh juices, this all-in-one tool is a must-have for any culinary enthusiast.
                Streamline your food preparation process and unleash your creativity in the kitchen with this indispensable kitchen gadget.
            `
        },
        announcement: "🍉 50% OFF + FREE SHIPPING! 🍉",
        headerImg: "https://st3.depositphotos.com/1177973/18401/i/450/depositphotos_184010434-stock-photo-delicious-fruit-salad.jpg",
        imgs: [
            "https://cdn.shopify.com/s/files/1/0682/6236/3403/products/snapchop.jpg?v=1676902459",
            "https://cdn.shopify.com/s/files/1/0682/6236/3403/products/chopping.jpg?v=1676902459&width=713",
            "https://cdn.shopify.com/s/files/1/0682/6236/3403/products/handguard-potato.jpg?v=1676902459&width=713",
            "https://ae01.alicdn.com/kf/Sb581dfd49da44579a49a2d06cb744eb7I/13-in-1-Vegetable-Chopper-Multifunctional-Food-Choppers-Onion-Chopper-Vegetable-Slicer-Cutter-Dicer-Veggie-Chopper.jpg_.webp"
        ],
        price: 2999,
        features: ["Slicing", "Grinding", "Pressing"],
        darkMode: false,
        tabs: [
            {
                name: "Shipping",
                content: "We pay for shipping. Expect your package to arrive within maximum 15 days."
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