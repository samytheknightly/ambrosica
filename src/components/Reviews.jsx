import Slider from "react-touch-drag-slider"
import Page from "./templates/Page"

import { useMediaQuery } from "../hooks/useMediaQuery"

export default function Reviews({ product }) {
    const desktop = useMediaQuery("(min-width: 768px)")

    return product.reviews?.length && <Page style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
    }}>
        <div style={{
            fontSize: "1.8rem",
            marginTop: "5em",
            fontWeight: 600,
        }}>Don't just take our word for it</div>
        <div style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            marginTop: ".6em",
            color: "rgb(0, 0, 0)"
        }}>Read from the Buyers!</div>
        {!desktop ? <Slider>
            {product.reviews.map(review => (<div
                key={review.title + review.reviewer + review.description}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "3em"
                }}
            >
                <div
                    className="material-symbols-rounded"
                    style={{
                        fontSize: "3.5rem",
                        padding: ".3em",
                        fontWeight: 600,
                        color: "white",
                        background: "var(--light-blue)",
                        width: "max-content",
                        borderRadius: ".2em"
                    }}
                >format_quote</div>

                <div style={{
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    marginTop: "5rem"
                }}>{review.title}</div>
                <div style={{
                    fontSize: "1.1rem",
                    color: "rgb(50, 50, 50)",
                    fontWeight: 600,
                    marginTop: "1em"
                }}>{review.description}</div>
                <div style={{
                    color: "rgb(50, 50, 50)",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    marginTop: "5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: ".3em"
                }}>
                    ~{review.reviewer}
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        {Array(review.rating).fill().map((_, keyIdx) => <div
                            key={keyIdx}
                            className="material-symbols-rounded star"
                            style={{
                                fontSize: "1.3rem",
                                color: "rgb(230, 165, 0)"
                            }}
                        >star</div>)}
                    </div>
                </div>
            </div>))}
        </Slider> : <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gridAutoRows: "1fr",
            marginTop: "3em"
        }}>
            {product.reviews.map(review => (<div
                key={review.title + review.reviewer + review.description}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "3em"
                }}
            >
                <div
                    className="material-symbols-rounded"
                    style={{
                        fontSize: "3.5rem",
                        padding: ".3em",
                        fontWeight: 600,
                        color: "white",
                        background: "var(--light-blue)",
                        width: "max-content",
                        borderRadius: ".2em"
                    }}
                >format_quote</div>
                <div style={{
                    fontSize: "1.65rem",
                    fontWeight: 800,
                    marginTop: "5rem"
                }}>{review.title}</div>
                <div style={{
                    fontSize: "1.1rem",
                    color: "rgb(50, 50, 50)",
                    fontWeight: 600,
                    marginTop: "1em"
                }}>{review.description}</div>
                <div style={{
                    height: "100%",
                    minHeight: "1.5em"
                }}></div>
                <div style={{
                    color: "rgb(50, 50, 50)",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: ".3em",
                    width: "100%"
                }}>
                    ~{review.reviewer}
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        {Array(review.rating).fill().map((_, keyIdx) => <div
                            key={keyIdx}
                            className="material-symbols-rounded star"
                            style={{
                                fontSize: "1.3rem",
                                color: "rgb(230, 165, 0)"
                            }}
                        >star</div>)}
                    </div>
                </div>
            </div>))}
        </div>}
    </Page>
}