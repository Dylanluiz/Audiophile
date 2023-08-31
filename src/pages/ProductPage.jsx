import React, { useEffect, useState } from "react";
import  ScrollToTop from "../Components/scrollToTop";
import data from "../data";
import { Link, useLocation } from "react-router-dom";


export default function ProductPage({data, category}) {
    const location = useLocation()

    useEffect(() => {
        const observer = new IntersectionObserver(
            items => {
                items.forEach(item => {
                    if (item.isIntersecting) {
                        item.target.classList.add('grow-in')
                    }
                })
            }, {rootMargin: '-200px'}
        )
        document.querySelectorAll('.product-img').forEach(item => {observer.observe(item)})
        return () => observer.disconnect()
        }, [location.pathname])

    useEffect(() => {
        const observer = new IntersectionObserver(
            items => {
                items.forEach(item => {
                    if (item.isIntersecting) {
                        item.target.classList.add('slide-up')
                    }
                })
            }, {rootMargin: '-200px'}
        )
        document.querySelectorAll('.prod-desc').forEach(item => {observer.observe(item)})
        return () => observer.disconnect()
    }, [location.pathname])

    console.log('hello')

    const prodEl = data.map((item, index) => {
        const {description, categoryImage, name, id} = item
        return (
            <div key={id} className={`product-main-container-prod-page product-id-${index}`}>
                <div  className="prod-img-container category-img-container">
                    <picture className="picture-container">

                        <source 
                            media="(min-width: 1024px)"
                            srcSet={categoryImage.desktop}
                            className="product-img"
                        />

                        <source 
                            media="(min-width: 650px)"
                            srcSet={categoryImage.tablet}
                            className="product-img"
                        />
                       
                        <img 
                            src={categoryImage.mobile}
                            className="product-img"
                        />
                    </picture>
                </div>
            <article className="product-card prod-desc">
                <div className="product-info-container">
                    {item.new && <p className="new-product">new product</p>}
                    <h2 className="prod-name">{name}</h2>
                    <p className="product-desc">{description}</p>
                    <Link 
                        to={`${id}`} 
                        className="prod-link"
                        state={{id, pathname: location.pathname}}
                        >See product</Link>
                </div>
            </article>
            </div>
        )
    })


    return (
        <section className="category-page">
            <h1 className="category-name">{category}</h1>
                <div className="category-items-container">
                    {prodEl}
                </div>
            <ScrollToTop/>
        </section>
    )
}