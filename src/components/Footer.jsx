import Page from "./templates/Page"

export default function Footer() {
    return (
        <Page style={{ marginTop: "2em", paddingBlock: "2em", background: "black", color: "white", gap: "1.2em" }}>
            <div style={{ fontSize: "1.3rem" }}>Quick Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".8em", fontSize: "1.1rem" }}>
                <a href="https://tiktok.com/@ambrosica.com">TikTok</a>
                <a href="https://instagram.com/ambrosica_official">Instagram</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/refunds">Refund Policy</a>
            </div>
        </Page>
    )
}