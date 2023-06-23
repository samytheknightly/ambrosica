import { Link } from "react-router-dom"

import Page from "./templates/Page"

export default function Footer() {
    return (
        <Page style={{ marginTop: "3em", paddingBlock: "2em", background: "black", color: "white", gap: "1.2em" }}>
            <div style={{ fontSize: "1.3rem" }}>Quick Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".8em", fontSize: "1.1rem" }}>
                <Link to="https://tiktok.com/@ambrosica.com">TikTok</Link>
                <Link to="https://instagram.com/ambrosica_official">Instagram</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/refunds">Refund Policy</Link>
            </div>
        </Page>
    )
}