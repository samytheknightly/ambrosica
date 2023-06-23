import { Link } from "react-router-dom"
import { useMediaQuery } from "../hooks/useMediaQuery"

export default function Sidebar({ sidebarVisible, setSidebarVisible }) {
    const desktop = useMediaQuery("(min-width: 768px)")

    const links = [
        {
            name: "Refund Policy",
            url: "/refunds"
        },
        {
            name: "Privacy Policy",
            url: "/privacy"
        },
        {
            name: "TikTok",
            url: "https://tiktok.com/@ambrosica.com"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/ambrosica_official"
        },
        {
            name: "Contact",
            url: "mailto:info@ambrosia.com"
        }
    ]

    return (
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
                display: "flex",
                flexDirection: "column",

                ...(sidebarVisible ? {
                    right: 0,
                    boxShadow: "0px 0px 100vw 0 black"
                } : {
                    right: "-100%"
                })
            }
        }>
            {!desktop && <button
                className="material-symbols-rounded"
                onClick={() => setSidebarVisible(false)}
                style={{ fontSize: "2rem", padding: "1rem" }}
            >close</button>}
            <div style={{
                display: "flex",
                gap: desktop ? "2em" : "",
                flexDirection: desktop ? "" : "column"
            }}>
                {links.map((link, linkIdx) => <Link
                    key={linkIdx}
                    to={link.url}
                    style={
                        desktop ? {
                            fontWeight: 600,
                            fontSize: "1.1rem"
                        } : {
                            padding: "1.4rem",
                            borderBottom: "1px solid rgb(200, 200, 200)",
                            fontWeight: 600,
                            fontSize: "1.2rem"
                        }}
                >
                    {link.name}
                </Link>)}
            </div>
        </div>
    )
}