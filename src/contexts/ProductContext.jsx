import { createContext } from "react"

export const ProductContext = createContext()

export default function ProductProvider({ children }) {
    const product = {
        name: "Ambrosica",
        title: "Reusable Water Balloon Set",
        description: `
            And since our Reusable Water Balloons are self-sealing using magnets, you can refill them within 1 SECOND!
            Due to their bright color, you're not going to lose them like all the other water balloons; or hold on, we're sorry, you can't refill them anyway 😉.
        `,
        announcement: "🍉 FREE SHIPPING + 25% OFF TODAY! 🍉",
        reasonsToBuyNow: `
            Tired of constantly having to buy new water balloons because you already used up all of them?\n
            Look no further than the Ambrosica Reusable Water Balloon Set!
        `,
        headerImg: "https://s.abcnews.com/images/GMA/hacks0_hpMain_1x1_992.jpg",
        imgs: [
            "https://ae01.alicdn.com/kf/Sadf7b109f1b94f00a103a35531212693r/13-in-1-Vegetable-Chopper-Multifunctional-Food-Choppers-Onion-Chopper-Vegetable-Slicer-Cutter-Dicer-Veggie-Chopper.jpg_.webp",
            "https://ae01.alicdn.com/kf/Sb581dfd49da44579a49a2d06cb744eb7I/13-in-1-Vegetable-Chopper-Multifunctional-Food-Choppers-Onion-Chopper-Vegetable-Slicer-Cutter-Dicer-Veggie-Chopper.jpg_.webp",
            "https://ae01.alicdn.com/kf/S07759ab16ce341e495aa0c6deb55490bI/13-in-1-Vegetable-Chopper-Multifunctional-Food-Choppers-Onion-Chopper-Vegetable-Slicer-Cutter-Dicer-Veggie-Chopper.jpg_.webp",
            "https://ae01.alicdn.com/kf/S6b2f26b5e5a247ec8eab97b7c7127be1Q/13-in-1-Vegetable-Chopper-Multifunctional-Food-Choppers-Onion-Chopper-Vegetable-Slicer-Cutter-Dicer-Veggie-Chopper.jpg_.webp"
        ],
        price: 2999,
        features: ["Chopping", "Grinding", "Pressing"],
        darkMode: false,
        tabs: [
            {
                name: "Shipping",
                content: "We pay for shipping. It'll take us 12 days max. to fulfill your order."
            }
        ],
    }

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}