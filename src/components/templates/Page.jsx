import { useEffect } from "react"

export default function Page({ children, style }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{
            paddingInline: "var(--app-padding)",
            display: "flex",
            flexDirection: "column",
            ...style
        }}>
            {children}
        </div>
    )
}