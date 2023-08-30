import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import data from "../data";
import ScrollToTop from "../Components/scrollToTop";
import { Link } from "react-router-dom";
import Suggested from "../Components/Suggested";
import { UserContext } from "../App";
import { useTransition, animated } from "@react-spring/web";

export default function Product() {
    const {id} = useParams()
    const location = useLocation()
    const pathname = location.state?.pathname
    const [count, setCount] = useState(1)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const {userCart, setUserCart} = useContext(UserContext)
    const [addedToCart, setAddedToCart] = useState(false)
    const addedTransition = useTransition(addedToCart, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })


    const product = data.map(prod => {
        if (prod.id === Number(id)) {
            return prod
        }
    }).filter(item => item !== undefined)[0]

    console.log(product)

    const {
        name, 
        price, 
        features, 
        description, 
        image, 
        gallery, 
        includes,
        others
    } = product

    useEffect(() => {
        const observer = new IntersectionObserver(
            (images) => {
                images.forEach(image => {
                    if (image.isIntersecting) {
                        image.target.classList.add('grow-in')
                    }
                })
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.product-img').forEach(item => {observer.observe(item)})
        return () => observer.disconnect()
    }, [isIntersecting])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (images) => {
                images.forEach(img => {
                    if (img.isIntersecting) {
                        img.target.classList.add('move-up')
                    }
                })
            }, {rootMargin: '-100px'}
        )
        document.querySelectorAll('.prod-shots').forEach(img => {observer.observe(img)})
        return () => observer.disconnect()
    }, [isIntersecting])


    const increment = () => {
            setCount(prev => prev + 1)
    
    }
    
    const decrement = () => {
        setCount(prev => {
            if (prev <= 1) {
                return 1
            } else {
                return prev - 1
            }
        })
    }

    const suggestedProd = others.map(prod => {
        return <Suggested
                  img={prod.image}
                  name={prod.name}
                  id={prod.slug}
                />
    })

    
    const addToCart = id => {
        setAddedToCart(true)
        setTimeout(() => {
            setAddedToCart(false)
        }, 1500);
        const holder = []
        const item = data.find(prod => {
            if (prod.id === Number(id)) {
                return prod
            }
        })

        for (let i = 0; i < count; i++) {
            holder.push(item)
        }
 
        setUserCart(prev => {
            return [...prev, holder].flat()
        })
    }
    
    console.log(userCart)
    return (
        <section className="specific-prod-container">
            <ScrollToTop/>
            <Link to={pathname} className="back-btn">Go back</Link>
            <div className="top-flex">
            <div className="prod-img-container">
                <picture className="picture-container">
                    <source 
                        media='(min-width: 650px)' 
                        srcSet={image.tablet}
                        className="product-img"
                        />
                    <source 
                        media='(min-width: 1024px)' 
                        srcSet={image.desktop}
                        className="product-img"
                        />
                    <img 
                        src={image.mobile} 
                        alt="" 
                        className="product-img"
                        />
                </picture>
            </div>
            
            <div className="right-container">
                {product.new && <p className="new-product left-align">new product</p>}
            <div className="specific-product-info">
                <h3 className="prod-name left-align">{name}</h3>
                <p className="product-desc left-align">{description}</p>
                <p className="prod-price">$ {price.toString().split('').map((l, index) => {
                        if (price.toString().split('').length > 3) {
                            return index === 0 ? l + ',' : l
                        } else {
                            return l
                        }
                    
                })}</p>
                <div className="quant-inc">
                    <div className="quant-inc-dec">
                       <button className="quant-btn" onClick={decrement}>-</button>
                        <p className="quantity">{count}</p>
                        <button className="quant-btn" onClick={increment}>+</button>
                    </div>
                    {addedTransition((style, item) => {
                        return item ? 
                            <animated.div
                                style={style}
                                className='added-to-cart'
                            >
                                <p>Item added</p>
                            </animated.div>
                            :
                            ''
                    })}
                    <button className="add-to-cart" onClick={() => addToCart(id)}>Add to cart</button>
                </div>
            </div> 
            </div>
           
            </div>
            

            <div className="prod-features">
                <h3>feactures</h3>
                <p>{features}</p>
            </div>

            <div className="in-the-box">
                <h3>in the box</h3>
                <div className="item-container">
                    {includes.map(item => {
                        return (
                            <div className="item-in-box">
                                <p className="item-quantity">{item.quantity}x</p>
                                <p className="item">{item.item}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="product-pic-container">
                 <picture  className="product-shot-container">

                <div className="product-shots-inner">
                    <div className="prod-shots">
                        <source 
                            media="(min-width: 650px)" 
                            srcSet={gallery.first.tablet}
                            className="product-shots-source"
                            />
                        <source 
                            media="(min-width: 1024px)" 
                            srcSet={gallery.first.desktop}
                            className="product-shots-source"
                            />
                        <img 
                            src={gallery.first.mobile} alt=""
                            className="product-shots"
                            />   
                    </div>
                    
                    <div className="prod-shots">
                            <source 
                                media="(min-width: 650px)" 
                                srcSet={gallery.second.tablet}
                                className="product-shots-source"
                                />
                            <source 
                                media="(min-width: 1024px)" 
                                srcSet={gallery.second.desktop}
                                className="product-shots-source"
                            />
                            <img 
                                src={gallery.second.mobile} alt="" 
                                className="product-shots"
                            />
                    </div>
                </div>
                
                    
                <div className="prod-shots">
                    <source 
                        media="(min-width: 650px)" 
                        srcSet={gallery.third.tablet}
                        className="product-shots-source"
                    />
                    <source 
                        media="(min-width: 1024px)" 
                        srcSet={gallery.third.desktop}
                        className="product-shots-source"
                    />
                    <img 
                        src={gallery.third.mobile} alt="" 
                        className="product-shots"
                    />
                </div> 
            </picture>
            </div>
           
           <h3 className="suggested-tag">You may also like</h3>
           <div className="suggested-main-container">
             {suggestedProd}
           </div>
          
        </section>
    )
}