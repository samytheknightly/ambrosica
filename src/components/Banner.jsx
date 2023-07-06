import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductContext } from "../contexts/ProductContext"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function Banner() {
    const product = useContext(ProductContext)

    const desktop = useMediaQuery("(min-width: 768px)")

    return !desktop && <div style={{ display: "flex", position: "relative" }}>
        <img
            src={product.headerImg}
            style={{
                width: "100%",
                objectFit: "cover",
                background: "rgba(0,0, 0,.7)",
                backgroundBlendMode: "multiply"
            }}
        />

        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <div></div>
            <Link
                to="/product"
                style={{
                    background: "var(--light-blue)",
                    color: "white",
                    padding: ".7em 1em",

                }}
            >Shop now</Link>
        </div>
    </div>
}