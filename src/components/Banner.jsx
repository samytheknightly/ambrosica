import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function Banner() {
    const product = useContext(ProductContext)

    const desktop = useMediaQuery("(min-width: 768px)")

    return !desktop && <img style={{
        width: "100%",
        objectFit: "cover"
    }} src={product.headerImg}></img>
}