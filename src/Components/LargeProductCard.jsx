import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LargeProductCard() {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [isImgIntersecting, setImgIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (cards) => {
                cards.forEach(card => {
                    if (card.isIntersecting) {
                        card.target.classList.add('slide-up')
                    }
                })
            }, {rootMargin: '-200px'}
        )
        document.querySelectorAll('.card-observed').forEach(card => {observer.observe(card)})
        return () => observer.disconnect()
    }, [isIntersecting])


    useEffect(() => {
        const observer = new IntersectionObserver(
            (pics) => {
                pics.forEach(pic => {
                    if (pic.isIntersecting) {
                        pic.target.classList.add('zoom-out')
                    }
                })
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.img-observed-large').forEach(pic => {observer.observe(pic)})
        return () => observer.disconnect()
    }, [isImgIntersecting])

    return (
        <section className="speaker-large-card">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fremoved-bg-speaker.png?alt=media&token=a440b07d-d7a5-4a41-bac5-fa9551a3745a" 
                alt="large speaker img and product link" 
                className="speaker-img-large img-observed-large" />
            <span className="pulse"></span>
            <div className="speaker-inner-wrapper card-observed">
            <h3 className="speaker-name-large">ZX9 SPEAKER</h3>
            <p className="speaker-desc-large">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link className="speaker-link-large">see product</Link>
            </div>
        </section>
    )
}