import { useEffect, useState } from "react"

export const useScroll = () => {
    const [scroll, setScroll] = useState(window.scrollY)

    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY))

        return () => window.removeEventListener("scroll", () => setScroll(window.scrollY))
    }, [])

    return scroll
}