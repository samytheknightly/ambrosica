import poweredByStripe from "../assets/poweredByStripePurple.svg"

import Slider from "react-touch-drag-slider"

import { useContext, useState } from "react"

import { ProductContext } from "../contexts/ProductContext"

import Page from "./templates/Page"

import banner from "../assets/banner.png"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function LandingPage() {
    const desktop = useMediaQuery("(min-width: 768px)")

    const product = useContext(ProductContext)

    const [currImg, setCurrImg] = useState(0)

    const imgBorderRadius = ".4rem"

    const [activeTabs, setActiveTabs] = useState(product.tabs.reduce((acc, curr) => ({ ...acc, [curr.name]: false })))

    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: desktop ? "1em" : "" }}>
            {!desktop && <img style={{ width: "100%" }} src={banner} alt="sadsd" />}

            <Page style={{ flexDirection: desktop ? "row" : "column" }}>
                {!desktop && <>
                    <div style={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        marginTop: "2em",
                        textAlign: "center"
                    }}>Welcome to {product.name}</div>

                    <div style={{
                        fontSize: "1.1rem",
                        color: "rgb(100, 100, 100)",
                        marginTop: ".5em",
                        textAlign: "center",
                        lineHeight: "1.3em"
                    }}>{product.reasonsToBuyNow.split('\n').map((i, idx) => {
                        return <p key={idx}>{i}</p>
                    })}</div>
                </>}

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".7em",
                    minWidth: desktop ? "50%" : "",
                    marginTop: desktop ? "" : "3.1em"
                }}>
                    <div style={{
                        width: "100%",
                        borderRadius: imgBorderRadius
                    }}>
                        <img style={{
                            aspectRatio: "1 / 1",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: imgBorderRadius
                        }} src={product.imgs[currImg]} alt="Current Image" />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: ".6em"
                    }}>
                        {product.imgs.map((img, imgIdx) => <button
                            key={imgIdx}
                            onClick={() => setCurrImg(imgIdx)}
                            style={{
                                borderRadius: imgBorderRadius,
                                width: "5rem",
                                aspectRatio: "1 / 1",
                                display: "flex"
                            }}
                        >
                            <img style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: imgBorderRadius
                            }} src={img} alt="Image Preview" />
                        </button>)}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", padding: desktop ? "2em" : "" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1em", marginTop: desktop ? "" : "2em" }}>
                        {product.features?.map((feature, featureIdx) => <div
                            key={featureIdx}
                            style={{ display: "flex", alignItems: "center", gap: ".1em", fontWeight: 800 }}
                        >
                            <div
                                className="material-symbols-rounded"
                                style={{ fontWeight: 800 }}
                            >check</div>
                            {feature}
                        </div>)}
                    </div>
                    {product.reviews?.length && <div style={{
                        marginTop: "1.4em",
                        display: "flex",
                        alignItems: "center",
                        color: "rgb(80, 80, 80)",
                        fontSize: ".95rem",
                        gap: ".3em",
                        fontWeight: 500
                    }}>
                        Rating:
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {Array(Math.floor(product.reviews.reduce((acc, curr) => acc + curr.rating, 0) / product.reviews.length)).fill().map((_, keyIdx) => <div
                                key={keyIdx}
                                className="material-symbols-rounded star"
                                style={{ fontSize: "1.3em", color: "rgb(230, 165, 0)", fontVariationSettings: "'FILL' 1" }}
                            >star</div>)}
                            {!Number.isInteger(product.reviews.reduce((acc, curr) => acc + curr.rating, 0) / product.reviews.length) && <div
                                className="material-symbols-rounded halfStar"
                                style={{
                                    fontSize: "1.3em",
                                    color: "rgb(230, 165, 0)"
                                }}
                            >star_half</div>}
                            {Array(Math.floor(5 - product.reviews.reduce((acc, curr) => acc + curr.rating, 0) / product.reviews.length)).fill().map((_, keyIdx) => <div
                                key={keyIdx}
                                className="material-symbols-rounded"
                                style={{ fontSize: "1.3em", color: "rgb(230, 165, 0)", fontVariationSettings: "'FILL' 0" }}
                            >star</div>)}
                        </div>
                        ({(product.reviews.reduce((acc, curr) => acc + curr.rating, 0) / product.reviews.length).toFixed(1)})
                    </div>}
                    <div style={{
                        marginTop: ".4em",
                        fontSize: "1.5rem",
                        fontWeight: 600
                    }}>{product.title}</div>
                    <div style={{
                        marginTop: "1em",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <div style={{
                            fontSize: "1.4rem",
                            fontWeight: 600,
                            color: "black"
                        }}>${(product.price / 100).toFixed(2)}</div>
                        <div style={{
                            fontSize: "1.2rem",
                            fontWeight: 500,
                            marginLeft: ".3em",
                            color: "rgb(165, 165, 165)",
                            textDecoration: "line-through"
                        }}>${(product.price / 75).toFixed(2)}</div>
                        <div style={{
                            background: "black",
                            color: "white",
                            alignItems: "center",
                            display: "flex",
                            gap: ".3em",
                            borderRadius: ".4em",
                            padding: ".25em .5em",
                            fontWeight: 900,
                            fontSize: ".8rem",
                            marginLeft: ".7em"
                        }}>
                            <span
                                className="material-symbols-rounded"
                                style={{
                                    fontWeight: 600,
                                    fontSize: ".8rem"
                                }}
                            >sell</span>
                            SAVE ${((product.price / 75) - (product.price / 100)).toFixed(2)}</div>
                    </div>
                    <a
                        href="https://buy.stripe.com/9AQ8yQcWJ5kF15S8wx"
                        style={{
                            marginTop: "1.4em",
                            background: "var(--light-blue)",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: 600,
                            padding: "1.2em",
                            fontSize: "1.1rem",
                            gap: ".4em",
                            borderRadius: ".4em"
                        }}
                    >
                        <span
                            className="material-symbols-rounded"
                            style={{ fontSize: "1.1em", fontWeight: 600 }}
                        >shopping_cart</span>
                        Take me to Checkout
                    </a>
                    <div style={{ fontSize: ".9rem", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1.5em", color: "rgb(120, 120, 120)" }}>
                        Safe & Secure Checkout Guaranteed
                        <img
                            style={{ height: "1.1rem", marginLeft: ".4em" }}
                            src={poweredByStripe}
                            alt="Powered by Stripe"
                        />
                    </div>
                    <div style={{ marginTop: "3em", fontSize: "1.2rem", fontWeight: 600 }}>Description</div>
                    <div style={{
                        color: "rgb(50, 50, 50)",
                        marginTop: ".5em",
                        lineHeight: "1.4em"
                    }}>{product.description}</div>
                    <div style={{ marginTop: "3em", display: "flex", flexDirection: "column", gap: "1em" }}>
                        {product.tabs?.map((tab, tabIdx) => <div
                            key={tab.name}
                            style={{ display: "flex", flexDirection: "column", ...(tabIdx === 0 ? { borderBlock: "1px solid rgb(200, 200, 200)" } : { borderBottom: "1px solid rgb(200, 200, 200)" }) }}
                        >
                            <button
                                onClick={() => setActiveTabs(prev => ({ ...prev, [tab.name]: !prev[tab.name] }))}
                                style={{
                                    padding: "1.2rem",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <div>{tab.name}</div>
                                <div className="material-symbols-rounded">add</div>
                            </button>
                            {activeTabs[tab.name] && <div style={{ display: "flex", gap: ".5em" }}>
                                <div style={{ background: "var(--light-blue)", width: "3px", borderRadius: "2em" }}></div>
                                <div style={{ paddingBlock: ".7em", textAlign: "center", flex: 1 }}>{tab.content}</div>
                            </div>}
                        </div>)}
                    </div>
                    {product.gif && <img
                        src={product.gif}
                        style={{
                            marginTop: "3em",
                            borderRadius: "1em",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"
                        }}
                    />}
                    {product.reviews?.length && <>
                        <div style={{ fontSize: "1.8rem", marginTop: "5em", fontWeight: 600, textAlign: "center" }}>Don't just take our word for it</div>
                        <div style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: 500, marginTop: ".6em", color: "rgb(0, 0, 0)" }}>Read from the Buyers!</div>
                        <Slider>
                            {product.reviews?.map(review => (<div
                                key={review.reviewer}
                                style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "3em" }}
                            >
                                <div
                                    className="material-symbols-rounded"
                                    style={{
                                        fontSize: "3.5rem",
                                        padding: ".3em",
                                        fontWeight: 600,
                                        color: "white",
                                        background: "var(--light-blue)",
                                        width: "max-content",
                                        borderRadius: ".2em"
                                    }}
                                >format_quote</div>
                                <div style={{ fontSize: "1.65rem", fontWeight: 800, marginTop: "5rem" }}>{review.title}</div>
                                <div style={{ fontSize: "1.1rem", color: "rgb(50, 50, 50)", fontWeight: 600, textAlign: "center", marginTop: "1em" }}>{review.description}</div>
                                <div style={{ color: "rgb(50, 50, 50)", fontWeight: 500, fontSize: "1.1rem", marginTop: "5rem", display: "flex", alignItems: "center", gap: ".3em" }}>
                                    ~{review.reviewer}
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        {Array(review.rating).fill().map((_, keyIdx) => <div
                                            key={keyIdx}
                                            className="material-symbols-rounded star"
                                            style={{ fontSize: "1.3rem", color: "rgb(230, 165, 0)" }}
                                        >star</div>)}
                                    </div>
                                </div>
                            </div>))}
                        </Slider>
                    </>}
                </div>
            </Page>

            <Page style={{ marginTop: "2em", paddingBlock: "2em", background: "black", color: "white", gap: "1.2em" }}>
                <div style={{ fontSize: "1.3rem" }}>Quick Links</div>
                <div style={{ display: "flex", flexDirection: "column", gap: ".8em", fontSize: "1.1rem" }}>
                    <a href="https://tiktok.com/@ambrosica.com">TikTok</a>
                    <a href="https://instagram.com/ambrosica_official">Instagram</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/refunds">Refund Policy</a>
                </div>
            </Page>
        </div>
    )
}