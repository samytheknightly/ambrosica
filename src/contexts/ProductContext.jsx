import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const product = {
        paymentLink: import.meta.env.VITE_STRIPE_PAYMENT_LINK,
        name: "Ambrosica",
        title: "Ambrosica™ Baby Budgeteer",
        get reasonsToBuyNow() {
            return `
                Tired of wasting your time and energy chopping, slicing, grinding, or pressing your fruits and veggies by hand?
                Look no further than the ${this.title}!
            `;
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
        headerImg: `https://i.imgur.com/K8AqOrS.png`,
        imgs: [
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/336593f6-3aed-4eea-b853-349fd0496b21.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/cb3cba10-f7a8-4307-a602-61f422971d5f.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/6567025e-5372-4239-94a6-fa593b990261.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/2e4c47b2-1d98-411f-a702-d848ef757de7.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/c8c795fd-d146-45b6-b193-4980cc0b0caf.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
            "https://cc-west-usa.oss-accelerate.aliyuncs.com/c485df86-0b3e-4d59-90d2-939022140375.jpg?x-oss-process=image/resize,m_pad,w_400,h_400"

        ],
        price: 3998,
        features: ["Effortless", "Trackable", "Effective"],
        darkMode: false,
        tabs: [
            {
                name: "Shipping",
                content: "We pay for shipping due to our Summer Sale. Expect your package to arrive within 12 days."
            },
            {
                name: "Refunds",
                content: "So you're already looking into the refunds section... Fair enough, but make sure to redeem your refund within 2 days after receiving the order."
            }
        ],
        reviews: [
            {
                title: "Perfect for moms-to-be",
                reviewer: "Emma P.",
                description: "Great for tracking pregnancy and baby expenses.",
                rating: 5
            },
            {
                title: "A must-have for new moms",
                reviewer: "Mia R.",
                description: "Helps manage finances for baby essentials.",
                rating: 5
            },
            {
                title: "Efficient budgeting companion for moms",
                reviewer: "Lily S.",
                description: "Stay on top of your finances as a mom.",
                rating: 5
            },
            {
                title: "A game-changer for moms on a budget",
                reviewer: "Avery T.",
                description: "Manage finances and prioritize baby needs.",
                rating: 5
            },
            {
                title: "Stay organized and budget-savvy as a mom",
                reviewer: "Harper W.",
                description: "Practical and stylish way to track spending.",
                rating: 5
            },

            {
                title: "Simplify your baby budgeting",
                reviewer: "Grace L.",
                description: "This budgeting wallet streamlines your finances as a new mom. Stay organized and easily allocate funds for diapers, baby gear, and more.",
                rating: 5
            },
            {
                title: "Budgeting made easy for growing families",
                reviewer: "Ava M.",
                description: "Take control of your family's finances with this user-friendly budgeting wallet. Keep track of expenses for your little one's needs.",
                rating: 5
            },
            {
                title: "Effortlessly track baby expenses",
                reviewer: "Zoe C.",
                description: "With this budgeting wallet, monitoring your baby-related expenses becomes a breeze. Stay on top of your budget and provide for your little bundle of joy.",
                rating: 5
            },
            {
                title: "Stay on track with baby budgeting",
                reviewer: "Scarlett B.",
                description: "No more guessing or overspending! This budgeting wallet helps you allocate funds effectively, ensuring you stay within your baby budget.",
                rating: 5
            },
            {
                title: "Manage your baby finances with ease",
                reviewer: "Chloe D.",
                description: "Simplify your financial planning as a new mom. This budgeting wallet with its intuitive design helps you stay organized and in control.",
                rating: 5
            },

            {
                title: "Stay financially prepared for your little one",
                reviewer: "Ella S.",
                description: "This budgeting wallet is a must-have for expectant parents. Easily track expenses related to pregnancy, nursery setup, and baby essentials.",
                rating: 5
            },
            {
                title: "Efficient budgeting for busy moms",
                reviewer: "Victoria M.",
                description: "As a busy mom, this budgeting wallet is a lifesaver. Stay organized and allocate funds for diapers, formula, childcare, and more.",
                rating: 5
            },
            {
                title: "Budgeting made simple for moms of toddlers",
                reviewer: "Emily C.",
                description: "Managing finances with a toddler is easier with this budgeting wallet. Track expenses for toys, clothing, education, and outings.",
                rating: 5
            },
            {
                title: "Smart budgeting for growing families",
                reviewer: "Luna W.",
                description: "This budgeting wallet adapts to your family's needs as your little one grows. Keep track of expenses for multiple children and save for their future.",
                rating: 5
            },
            {
                title: "Take charge of your finances as a mom",
                reviewer: "Stella H.",
                description: "This budgeting wallet empowers moms to take control of their financial well-being. Stay organized and plan for your family's future with ease.",
                rating: 5
            },
            {
                title: "Effortlessly manage your toddler's expenses",
                reviewer: "Mila R.",
                description: "This budgeting wallet is a game-changer for parents of toddlers. Keep track of expenses for toys, clothing, educational materials, and more.",
                rating: 5
            },
            {
                title: "Simplify your baby budgeting journey",
                reviewer: "Hazel L.",
                description: "Say goodbye to budgeting stress with this wallet. Easily allocate funds for diapers, food, healthcare, and other baby essentials.",
                rating: 5
            },
            {
                title: "Stay organized and in control as a mom",
                reviewer: "Penelope G.",
                description: "With this budgeting wallet, managing your finances becomes a breeze. Stay on top of expenses for your little one while achieving your financial goals.",
                rating: 5
            },
            {
                title: "Efficiently budget for your growing family",
                reviewer: "Aria T.",
                description: "This budgeting wallet is designed to help growing families thrive financially. Easily track and allocate funds for all your family's needs.",
                rating: 5
            },
            {
                title: "A practical tool for budget-savvy moms",
                reviewer: "Nora M.",
                description: "Take your budgeting skills to the next level with this wallet. Stay organized, track expenses, and save money for your family's future.",
                rating: 5
            },
            {
                title: "Useful tool for new moms",
                reviewer: "Sophie B.",
                description: "This budgeting wallet has helped me stay organized with my baby expenses. While it's functional, I wish it had a bit more space for additional pockets.",
                rating: 4
            },
            {
                title: "Good budgeting companion for moms",
                reviewer: "Avery M.",
                description: "I appreciate the file-folder-like rings and pockets in this wallet for managing my baby's expenses. However, the included stickers could be of better quality.",
                rating: 4
            },
            {
                title: "Decent wallet for toddler budgeting",
                reviewer: "Emily L.",
                description: "This budgeting wallet has been helpful for tracking my toddler's expenses. The design is practical, but the material could be more durable.",
                rating: 4
            },
            {
                title: "Effective budgeting tool for moms",
                reviewer: "Lily T.",
                description: "I find this budgeting wallet useful for managing my family's finances. My only suggestion would be to include more diverse sticker options.",
                rating: 4
            },
            {
                title: "Helpful for budget-conscious moms",
                reviewer: "Harper M.",
                description: "This budgeting wallet has assisted me in keeping my expenses in check. The only downside is that it could be slightly more compact for easy carrying.",
                rating: 4
            },

            {
                title: "A must-have for budget-savvy moms",
                reviewer: "Zoe B.",
                description: "This budgeting wallet is a game-changer! The file-folder-like rings and pockets make it easy to track and allocate funds for my baby's expenses. The included stickers are adorable and help me stay organized. Highly recommended!",
                rating: 5
            },
            {
                title: "Fantastic tool for managing baby finances",
                reviewer: "Scarlett L.",
                description: "I absolutely love this budgeting wallet! It has made managing my baby's expenses a breeze. The file-folder-like rings and pockets are well-designed, and the stickers add a fun touch. It's a must-have for any mom looking to stay on top of her budget.",
                rating: 5
            },
            {
                title: "Highly efficient and stylish wallet",
                reviewer: "Chloe P.",
                description: "This budgeting wallet has exceeded my expectations. The file-folder-like rings and pockets provide ample space to organize my toddler's expenses, and the stickers are cute and functional. It's not only practical but also trendy. I couldn't be happier!",
                rating: 5
            },
            {
                title: "A game-changer for family budgeting",
                reviewer: "Ella T.",
                description: "I'm so impressed with this budgeting wallet. It has helped me stay organized and accountable for my family's expenses. The file-folder-like rings and pockets are fantastic, and the included stickers make tracking expenses enjoyable. I highly recommend it!",
                rating: 5
            },
            {
                title: "Stress-free budgeting for moms",
                reviewer: "Mila G.",
                description: "This budgeting wallet is a true lifesaver. It has simplified my financial planning as a mom and allowed me to allocate funds effortlessly. The file-folder-like rings and pockets are genius, and the stickers add a touch of personalization. It's a must-have tool for all moms!",
                rating: 5
            },
            {
                title: "Impressive wallet for managing baby expenses",
                reviewer: "Hazel M.",
                description: "I am blown away by this budgeting wallet! It has revolutionized the way I track my baby's expenses. The file-folder-like rings and pockets are spacious and well-organized, and the stickers are a delightful addition. It's a must-have for any parent looking to stay on top of their finances.",
                rating: 5
            },
            {
                title: "Exceptional budgeting tool for moms",
                reviewer: "Penelope T.",
                description: "I can't recommend this budgeting wallet enough. It has made managing my finances as a mom so much easier. The file-folder-like rings and pockets provide ample space for categorizing expenses, and the stickers are a fun way to personalize it. It's been a game-changer for me!",
                rating: 5
            },
            {
                title: "Efficient and stylish budgeting solution",
                reviewer: "Aria G.",
                description: "I'm extremely impressed with this budgeting wallet. It's not only practical but also visually appealing. The file-folder-like rings and pockets help me allocate funds for my growing family, and the stickers add a touch of charm. It's been a lifesaver for managing our finances.",
                rating: 5
            },
            {
                title: "Practical and effective budgeting companion",
                reviewer: "Nora P.",
                description: "This budgeting wallet has been a fantastic addition to my mom-life. It keeps me organized and accountable for my expenses. The file-folder-like rings and pockets are well-designed, and the stickers make it fun to use. I'm grateful for this helpful tool!",
                rating: 5
            },
            {
                title: "A reliable tool for smart budgeting",
                reviewer: "Sophie T.",
                description: "I am thoroughly impressed with this budgeting wallet. It has helped me take control of my finances as a mom and provided a clear overview of my expenses. The file-folder-like rings and pockets are practical, and the stickers are a lovely touch. Highly recommended!",
                rating: 5
            }
        ]
    };

    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    );
}