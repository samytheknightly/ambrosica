import logo from "../assets/o.png"

import { useContext, useEffect, useState } from "react"

import { useScroll } from "../hooks/useScroll"
import { useMediaQuery } from "../hooks/useMediaQuery"

import { ProductContext } from "../contexts/ProductContext"

import Page from "./templates/Page"

export default function Navbar() {
    const desktop = useMediaQuery("(min-width: 768px)")

    const product = useContext(ProductContext)

    const [sidebarVisible, setSidebarVisible] = useState(false)

    useEffect(() => {
        document.getElementById("announcement").textContent = product.announcement
    }, [])

    const scroll = useScroll()

    return (
        <Page style={{
            position: "sticky",
            top: 0,
            left: 0,
            background: "white",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: "1.4em",
            flexDirection: "row",
            borderBottom: scroll ? "1px solid var(--light-blue)" : "",
            zIndex: 10
        }}>
            <a href="/"><img style={{ height: "2.2rem" }} src={logo} alt="Ambrosica Logo" /></a>

            {!sidebarVisible && !desktop && <button
                className="material-symbols-rounded"
                onClick={() => setSidebarVisible(prev => !prev)}
                style={{ zIndex: 2, fontSize: "1.8rem" }}
            >menu</button>}

            <div style={
                desktop ? {} : {
                    touchAction: "none",
                    zIndex: 1,
                    position: "fixed",
                    right: sidebarVisible ? 0 : "-100%",
                    transition: "right .2s",
                    top: 0,
                    width: "90%",
                    height: "100%",
                    background: "rgb(245, 245, 245)",
                    boxShadow: sidebarVisible ? "0px 0px 100vw 0 black" : "",
                    display: "flex",
                    flexDirection: "column"
                }
            }>
                {!desktop && <button onClick={() => setSidebarVisible(false)} style={{ fontSize: "2rem", padding: "1rem" }} className="material-symbols-rounded">close</button>}
                <div style={{
                    display: "flex",
                    gap: desktop ? "2em" : "",
                    flexDirection: desktop ? "" : "column"
                }}>
                    <a style={desktop ? { fontWeight: 600, fontSize: "1.1rem" } : { padding: "1.4rem", borderBottom: "1px solid rgb(200, 200, 200)", fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }} href="/refunds">Refund Policy</a>
                    <a style={desktop ? { fontWeight: 600, fontSize: "1.1rem" } : { padding: "1.4rem", borderBottom: "1px solid rgb(200, 200, 200)", fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }} href="/privacy">Privacy Policy</a>
                    <a style={desktop ? { fontWeight: 600, fontSize: "1.1rem" } : { padding: "1.4rem", borderBottom: "1px solid rgb(200, 200, 200)", fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }} href="https://tiktok.com/@ambrosica.com">TikTok</a>
                    <a style={desktop ? { fontWeight: 600, fontSize: "1.1rem" } : { padding: "1.4rem", borderBottom: "1px solid rgb(200, 200, 200)", fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }} href="https://instagram.com/ambrosica_official">Instagram</a>
                    <a style={desktop ? { fontWeight: 600, fontSize: "1.1rem" } : { padding: "1.4rem", borderBottom: "1px solid rgb(200, 200, 200)", fontWeight: 600, fontSize: "1.2rem", textAlign: "center" }} href="mailto:info@ambrosia.com">Contact</a>
                </div>
            </div>
        </Page>
    )
}