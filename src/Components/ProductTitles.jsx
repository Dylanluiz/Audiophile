import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";


export default function ProductTitles({className}) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [imgIntersecting, setImgIntersecting] = useState(false)

    const titleProducts = [
        {
            id: 1,
            title: 'headphones',
            image: 'https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fshared%2Fdesktop%2Fimage-category-thumbnail-headphones.png?alt=media&token=9b16868e-4912-4ab6-9194-7a53313c5ff0',
            route: '/products/headphones'
        },
        {
            id: 2,
            title: 'speakers',
            image: 'https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fshared%2Fdesktop%2Fimage-category-thumbnail-speakers.png?alt=media&token=f6f3d84b-cf22-4aa1-b92d-908e307271da',
            route: '/products/speakers'
        },
        {
            id: 3,
            title: 'earphones',
            image: 'https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2Fshared%2Fdesktop%2Fimage-category-thumbnail-earphones.png?alt=media&token=7312315f-26f0-4806-acb9-0ca868bfa537',
            route: '/products/earphones'
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (titles) => { 
                titles.forEach(title => {
                    if (title.isIntersecting) {   
                        title.target.classList.add('slide-up')
                    }
                })
                
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.observed').forEach(title => {observer.observe(title)})
        return () => observer.disconnect()
    }, [isIntersecting])


    useEffect(() => {
        const observer = new IntersectionObserver(
            (imgs) => {
                imgs.forEach(img => {
                    if (img.isIntersecting) {
                        img.target.classList.add('slide-up-img')
                    }
                })
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.prod-img').forEach(img => {observer.observe(img)})
        return () => observer.disconnect()
    }, [imgIntersecting])

    const titlePageEl = titleProducts.map((product, index) => {
        const {image, title, route} = product
        return (
            <div className="category-wrapper" key={index}>
            <img src={image} alt="" className={`category-img prod-img category-${index}`} />
            <div className="category-container observed" key={product.id}>
                
                <div className="shop-container">
                    <h4 className="category-title">{title}</h4>
                    <Link className="shop" to={route}>
                        <p>shop</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"/>
                        </svg>
                    </Link>
                </div>
            </div>
            </div>
        )
    })

    return (
        <section className={`main-categorys-container ${className ? className : ''}`}>
            {titlePageEl}
        </section>
    )
}