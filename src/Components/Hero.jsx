import React from "react"
import {Link} from 'react-router-dom'

export default function Hero() {
    return (
        <section className="hero">
            <img src="../assets/home/mobile/image-hero.png" alt=""/>
            <p className="new-pr">NEW PRODUCT</p>
            <h3>
                XX99 Mark II HeadphoneS
            </h3>
            <p className="hero-desc">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link>see product</Link>
        </section>
    )
}