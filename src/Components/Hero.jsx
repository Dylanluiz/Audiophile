import React from "react"
import {Link, useLocation} from 'react-router-dom'

export default function Hero() {
    const location = useLocation()
    return (
        <section className="hero">
            <picture>
                  <source 
                    media="(min-width: 1024px)" 
                    srcSet="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Fdesktop%2Fimage-hero.jpg?alt=media&token=0dcb09ca-545c-483c-97aa-a6efd328d118" 
                    className="desktop-hero"
                    />
    
                <source 
                    media="(min-width: 650px)" 
                    srcSet="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Ftablet%2Fimage-header.jpg?alt=media&token=7ffb4463-4fc9-4033-bfd6-a66f33610a0c" />
                
              
                <img src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Fmobile%2Fimage-header.jpg?alt=media&token=947d9857-23dd-403e-a55c-bcc48345a7b6" alt=""/>
            </picture>
            <p className="new-pr">NEW PRODUCT</p>
            <h3>
                XX99 Mark II HeadphoneS
            </h3>
            <p className="hero-desc">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link to='/products/headphones/4' state={{pathname: location.pathname}}>see product</Link>
        </section>
    )
}