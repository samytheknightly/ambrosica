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
        headerImg: "/src/assets/banner.png",
        imgs: [
            "https://ae01.alicdn.com/kf/S6ae868069c844eb7ad92a68cfe17909fY.jpg?width=1000&height=1000&hash=2000",
            "https://ae01.alicdn.com/kf/S88b99b97fa144534bf1877d2244b45b5c/12pcs-Reusable-Water-Fighting-Balls-Adults-Kids-Summer-Swimming-Pool-Silicone-Water-Playing-Toys-Pool-Water.jpg_Q90.jpg_.webp",
            "https://ae01.alicdn.com/kf/S32775944c471480294e66321c1f8ed217/12pcs-Reusable-Water-Fighting-Balls-Adults-Kids-Summer-Swimming-Pool-Silicone-Water-Playing-Toys-Pool-Water.jpg_Q90.jpg_.webp",
            "https://ae01.alicdn.com/kf/S88ea9c86c7e34da1be9dc5aeb52e5420M/12pcs-Reusable-Water-Fighting-Balls-Adults-Kids-Summer-Swimming-Pool-Silicone-Water-Playing-Toys-Pool-Water.jpg_Q90.jpg_.webp",
            "https://ae01.alicdn.com/kf/Sc6f84d2005a34ce387a7208864acaa04a/12pcs-Reusable-Water-Fighting-Balls-Adults-Kids-Summer-Swimming-Pool-Silicone-Water-Playing-Toys-Pool-Water.jpg_Q90.jpg_.webp"
        ],
        price: 2999,
        features: ["Free Shipping", "High Quality"],
        darkMode: false,
        tabs: [
            {
                name: "Easy Refill",
                content: "You can easily refill your balloons in less than one second by just dipping them into water and closing them (the seals are magnetic)"
            },
            {
                name: "Shipping",
                content: "We do not charge our customers for shipping. It'll take us 12 days max. to fulfill your order."
            }
        ],
    }

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}