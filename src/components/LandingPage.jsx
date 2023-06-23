import { useContext, useState } from "react"

import { ProductContext } from "../contexts/ProductContext"

import Page from "./templates/Page"
import Banner from "./Banner"
import Imgs from "./Imgs"
import ProductPage from "./ProductPage"
import Reviews from "./Reviews"
import Footer from "./Footer"

import { useMediaQuery } from "../hooks/useMediaQuery"

export default function LandingPage() {
    const desktop = useMediaQuery("(min-width: 768px)")

    const product = useContext(ProductContext)

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", marginTop: desktop ? "1em" : "" }}>
            <Banner />

            <Page style={{ flexDirection: desktop ? "" : "column", gap: desktop ? "2em" : "" }}>
                {!desktop && <>
                    <div style={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        marginTop: "2em"
                    }}>Welcome to {product.name}</div>

                    <div style={{
                        fontSize: "1.1rem",
                        color: "rgb(100, 100, 100)",
                        marginTop: ".5em",
                        lineHeight: "1.3em"
                    }}>{product.reasonsToBuyNow.split('\n').map((i, idx) => {
                        return <p key={idx}>{i}</p>
                    })}</div>
                </>}

                <Imgs />

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <ProductPage product={product} />

                    {product.gif && <img
                        src={product.gif}
                        style={{
                            marginTop: "3em",
                            borderRadius: "1em",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"
                        }}
                    />}

                    <Reviews product={product} />
                </div>
            </Page>

            <Footer />
        </div>
    )
}