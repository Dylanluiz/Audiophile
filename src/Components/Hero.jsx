import React from "react"
import {Link} from 'react-router-dom'

export default function Hero() {
    return (
        <section className="hero">
            <img src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Fmobile%2Fimage-hero.png?alt=media&token=4160b969-7d02-420b-971e-153cdd5f93f1" alt=""/>
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