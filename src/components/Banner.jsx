import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function Banner() {
    const product = useContext(ProductContext)

    const desktop = useMediaQuery("(min-width: 768px)")

    return !desktop && <div style={{
        width: "100%",
        objectFit: "cover",
        aspectRatio: "2 / 1"
    }} dangerouslySetInnerHTML={{ __html: product.headerImg }}></div>
}