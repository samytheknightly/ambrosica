import { useContext, useState } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function Imgs() {
    const product = useContext(ProductContext)

    const desktop = useMediaQuery("(min-width: 768px)")

    const [currImg, setCurrImg] = useState(0)

    const imgBorderRadius = ".4rem"

    const btnStyle = {
        fontFamily: "Arial, sans-serif",
        position: "absolute",
        top: "50%",
        background: "rgba(0, 0, 0, .7)",
        color: "white",
        transform: "translateY(-50%)",
        fontSize: "2rem",
        padding: ".6em .4em"
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: ".7em",
            flex: desktop ? .6 : "",
            marginTop: desktop ? "" : "3.1em"
        }}>
            <div style={{
                width: "100%",
                borderRadius: imgBorderRadius,
                position: "relative"
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

                <button
                    onClick={() => setCurrImg(prev => prev === 0 ? product.imgs.length - 1 : prev - 1)}
                    style={{
                        ...btnStyle,
                        left: 0
                    }}
                >{"<"}</button>

                <button
                    onClick={() => setCurrImg(prev => prev === product.imgs.length - 1 ? 0 : prev + 1)}
                    style={{
                        ...btnStyle,
                        right: 0
                    }}
                >{">"}</button>

                <div style={{
                    fontFamily: "Arial, sans-serif",
                    position: "absolute",
                    right: "1em",
                    bottom: "1em",
                    padding: ".6em 1em",
                    background: "rgba(0, 0, 0, .7)",
                    borderRadius: "2em",
                    color: "white",
                    display: "flex",
                    gap: ".2em"
                }}>
                    <span>{currImg + 1}</span>
                    <span>/</span>
                    <span>{product.imgs.length}</span>
                </div>
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
    )
}