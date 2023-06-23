import { useState } from "react"
import { Link } from "react-router-dom"

import { useMediaQuery } from "../hooks/useMediaQuery"

export default function ProductPage({ product }) {
    const desktop = useMediaQuery("(min-width: 768px)")

    const [activeTabs, setActiveTabs] = useState(product.tabs.reduce((acc, curr) => ({ ...acc, [curr.name]: false })))

    return (
        <div>
            {!desktop && <div style={{ display: "flex", alignItems: "center", gap: "1em", marginTop: desktop ? "" : "2em" }}>
                {product.features?.map((feature, featureIdx) => <div
                    key={featureIdx}
                    style={{ display: "flex", alignItems: "center", gap: ".1em", fontWeight: 500 }}
                >
                    <div
                        className="material-symbols-rounded"
                        style={{ fontWeight: "inherit" }}
                    >check</div>
                    {feature}
                </div>)}
            </div>}
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
                marginTop: desktop ? "1em" : ".4em",
                fontSize: desktop ? "2.2rem" : "1.5rem",
                fontWeight: 500
            }}>{product.title}</div>

            <div style={{
                marginTop: desktop ? "1.7em" : "1.1em",
                display: "flex",
                alignItems: "flex-end"
            }}>
                <div style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "rgb(165, 165, 165)",
                    textDecoration: "line-through"
                }}>${(product.price / 50).toFixed(2)}</div>

                <div style={{
                    marginLeft: ".4em",
                    fontSize: desktop ? "1.3rem" : "1.4rem",
                    fontWeight: 600,
                    color: "black"
                }}>${(product.price / 100).toFixed(2)}</div>
            </div>

            <div style={{
                marginTop: ".6em",
                fontSize: ".9rem",
                color: "rgb(90, 90, 90)"
            }}>Shipping included.</div>

            <Link
                to="https://buy.stripe.com/9AQ8yQcWJ5kF15S8wx"
                style={{
                    marginTop: "1.4em",
                    background: "var(--light-blue)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 600,
                    padding: "1.1em",
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
            </Link>

            <div style={{
                color: "rgb(50, 50, 50)",
                marginTop: "2.8em",
                lineHeight: "1.4em"
            }}>{product.description}</div>

            <div style={{ marginTop: "3em", display: "flex", flexDirection: "column" }}>
                {product.tabs?.map((tab, tabIdx) => <div
                    key={tab.name}
                    style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgb(200, 200, 200)", borderTop: tabIdx === 0 ? "1px solid rgb(200, 200, 200)" : "" }}
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
                    {activeTabs[tab.name] && <div style={{ display: "flex", gap: "1em", paddingBottom: ".7em" }}>
                        <div style={{ background: "var(--light-blue)", width: "3px", borderRadius: "2em" }}></div>
                        <div style={{ paddingBlock: ".7em", flex: 1 }}>{tab.content}</div>
                    </div>}
                </div>)}
            </div>
        </div>
    )
}