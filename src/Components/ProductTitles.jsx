import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";


export default function ProductTitles() {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const [imgIntersecting, setImgIntersecting] = useState(false)

    const titleProducts = [
        {
            id: 1,
            title: 'headphones',
            image: '../../assets/shared/desktop/image-category-thumbnail-headphones.png',
            route: '/products/headphones'
        },
        {
            id: 2,
            title: 'speakers',
            image: '../../assets/shared/desktop/image-category-thumbnail-speakers.png',
            route: '/products/speakers'
        },
        {
            id: 3,
            title: 'earphones',
            image: '../../assets/shared/desktop/image-category-thumbnail-earphones.png',
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
            <div className="category-wrapper">
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
        <section className="main-categorys-container">
            {titlePageEl}
        </section>
    )
}