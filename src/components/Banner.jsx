import banner from "../assets/banner.png"

import { useMediaQuery } from "../hooks/useMediaQuery"

export default function Banner() {
    const desktop = useMediaQuery("(min-width: 768px)")

    return !desktop && <img style={{ width: "100%" }} src={banner} alt="sadsd" />
}