import { useContext, useState } from "react"

import { ProductContext } from "../contexts/ProductContext"

import Page from "./templates/Page"
import Banner from "./Banner"
import ProductPage from "./ProductPage"
import Reviews from "./Reviews"
import Footer from "./Footer"

import { useMediaQuery } from "../hooks/useMediaQuery"

export default function LandingPage() {
    const desktop = useMediaQuery("(min-width: 768px)")

    const product = useContext(ProductContext)

    const [currImg, setCurrImg] = useState(0)

    const imgBorderRadius = ".4rem"

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
                        <img
                            style={{
                                aspectRatio: "1 / 1",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: imgBorderRadius
                            }}
                            src={product.imgs[currImg]}
                            alt="Current Image"
                        />
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
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    borderRadius: imgBorderRadius
                                }}
                                src={img}
                                alt="Image Preview"
                            />
                        </button>)}
                    </div>
                </div>

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