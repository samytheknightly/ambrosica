import ProductProvider from "../../contexts/ProductContext"

export default function Provider({ children }) {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}