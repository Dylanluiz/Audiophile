import React, { useEffect, useState } from "react";
import data from "../data";
import { Link, useLocation } from "react-router-dom";


export default function Suggested({img, name, id}) { 
    const [isIntersecting, setIsIntersecting] = useState(false)
    const linkTo = data.find(item => {
            if (item.slug === id) {
                return item
            }
   
    })


    useEffect(() => {
        const observer = new IntersectionObserver(
            (products) => {
                products.forEach(prod => {
                    if (prod.isIntersecting) {
                        prod.target.classList.add('come-in')
                    }
                })
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.suggested-pic-container').forEach(prod => {observer.observe(prod)})
        return () => observer.disconnect()
    }, [isIntersecting])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (titles) => {
                titles.forEach(title => {
                    if (title.isIntersecting) {
                        title.target.classList.add('come-in-out')
                    }
                })
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.titles').forEach(title => {observer.observe(title)})
        return () => observer.disconnect()
    }, [isIntersecting])

    return (
       <div className="suggested-prod">
            <div className="suggested-pic-container">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={img.desktop} className="suggested-prod-img"/>
                    <source media="(min-width: 650px)" srcSet={img.tablet} className="suggested-prod-img"/>
                    <img src={img.mobile} alt=""  className="suggested-prod-img"/>
                </picture>  
            </div>
            
            <div className="titles">
                <p className="suggested-prod-title">{name}</p>
                <Link to={`/products/${linkTo.category}/${linkTo.id}`} className="suggested-prod-view">see product</Link>
            </div>
            
       </div> 
    )
}