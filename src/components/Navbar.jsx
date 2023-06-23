import logo from "../assets/o.png"

import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { useScroll } from "../hooks/useScroll"
import { useMediaQuery } from "../hooks/useMediaQuery"

import { ProductContext } from "../contexts/ProductContext"

import Page from "./templates/Page"
import Sidebar from "./Sidebar"

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
            <Link to="/"><img style={{ height: "2.2rem" }} src={logo} alt="Ambrosica Logo" /></Link>

            {!sidebarVisible && !desktop && <button
                className="material-symbols-rounded"
                onClick={() => setSidebarVisible(prev => !prev)}
                style={{ zIndex: 2, fontSize: "1.8rem" }}
            >menu</button>}

            <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
        </Page>
    )
}