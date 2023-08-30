import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cards() {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            cards => {
                cards.forEach(card => {
                    if (card.isIntersecting) {
                        card.target.classList.add('slide-up')
                    }
                })
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.card').forEach(card => {observer.observe(card)})
        return () => observer.disconnect()
    }, [isIntersecting])

    return (
        <section className="cards-section">

            <div className="zx-speaker card">
                <img src="../../assets/home/mobile/image-speaker-zx7.jpg" alt="" />
                <div className="zx-speaker-inner-wrapper">
                  <h3>ZX7 Speaker</h3>
                  <Link>See product</Link>  
                </div>
            </div>

            <div className="cards-inner-wrapper">
               <div className="earphone-img card">
                <picture>
                    <source
                        media="(min-width: 650px)"
                        srcSet="../../assets/home/tablet/image-earphones-yx1.jpg"
                    />
                    <source 
                        media="(min-width: 1024px)"
                        srcSet="../../assets/home/desktop/image-earphones-yx1.jpg"
                    />
                    <img src="../../assets/home/mobile/image-earphones-yx1.jpg" alt="" />
                </picture>
            </div>

            <div className="earphone-product-link card">
                <h3>yx1 earphones</h3>
                <Link>see product</Link>
            </div> 
            </div>
            

        </section>
    )
}