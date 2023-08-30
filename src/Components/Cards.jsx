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
                <img src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Fmobile%2Fimage-speaker-zx7.jpg?alt=media&token=e0cc1718-c0ca-46fe-8368-e47fac8c4ca7" alt="" />
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
                        srcSet="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Ftablet%2Fimage-earphones-yx1.jpg?alt=media&token=682df898-9105-49fe-90ff-d4a359fbdb0a"
                    />
                    <source 
                        media="(min-width: 1024px)"
                        srcSet="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Fdesktop%2Fimage-earphones-yx1.jpg?alt=media&token=10be1ff7-aa6b-4009-b58b-d38b88218823"
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fhome%2Fmobile%2Fimage-earphones-yx1.jpg?alt=media&token=66c147b0-fa5d-4e3b-adc8-a89b394d550b" alt="" />
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