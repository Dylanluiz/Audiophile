import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import ProductTitles from "./ProductTitles";
import data from "../data";
import { Link } from "react-router-dom";

export default function UserCart() {
    const {userCart, setUserCart, setShowCart, showCart} = useContext(UserContext)
    const [count, setCount] = useState(0)

    const placholder = <div className="placeholder-cart">
                            <p>looks like your cart is empty</p>
                            <p>lets go shopping</p>
                            
                       </div>

    const map = {}
    const cartFrequencyMap = userCart.map(prod => {
        if (map[prod.id]) {
            map[prod.id]++
        } else {
            map[prod.id] = 1
        }
    })

    const objKey = Object.keys(map)
    const objValues = Object.values(map)

    const mutatedObj = objKey.map((item, index) => {
        return {
            id: item,
            quantity: objValues[index]
        }
    })

    const cartArr = mutatedObj.map(prod => {
        const {quantity, id} = prod

        return {
            quantity,
            item: data.find(item => item.id === Number(id))
        }
    })

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

    const clearCart = () => {
        setUserCart(prev => prev = [])
    }

    const closeCart = () => {
        setShowCart(prev => false)
    }

    const cartEl = cartArr.map(prod => {
        const {image, price, slug} = prod.item
        

        return (
            <div className="cart-product">
                <div className="cart-pic-container">
                    <img src={image.mobile} alt="" />
                </div>
                <div className="prod-price-name">
                    <h4>{slug.split('-')[0]}</h4>
                    <p>${price.toString().split('').map((l, index) => {
                        if (price.toString().split('').length > 3) {
                            return index === 0 ? l + ',' : l
                        } else {
                            return l
                        }
                    
                })}</p>
                </div>
                <div className="quant-inc cart-quant">
                    <div className="quant-inc-dec">
                       <button className="quant-btn" onClick={decrement}>-</button>
                        <p className="quantity">{prod.quantity}</p>
                        <button className="quant-btn" onClick={increment}>+</button>
                    </div>
                </div>
            </div>
        )
    })
    let total = 0
    const totalPrice = cartArr.map(prod => {
        total +=
        prod.item.price * prod.quantity
        return total
    })[cartArr.length - 1]


    return (
        <>
        <span className="backdrop" onClick={closeCart}></span>
         <section className="user-cart-main">
           <div className="cart-container">
                <div className="cart-inner-wrapper">
                    <h3>cart</h3>
                    <button onClick={clearCart}>Remove all</button>
                </div>
                
                <div className="cart-product-container">
                    {userCart.length > 0 ? cartEl :  placholder}
                </div>

                <div className="cart-total">
                    <div className="total-inner-wrapper">
                        <p className="total-legend">total</p>
                        <p className="total-price-dollar">$ {userCart.length > 0 ? totalPrice?.toString().split('').map((l, index) => {
                            if (totalPrice?.toString().split('').length === 5) {
                                return index === 1 ? l + ',' : l
                            } else if (totalPrice?.toString().split('').length === 4) {
                                return index === 0 ? l + ',' : l
                            } else {
                                return l
                            }


                        }) : '0.00'}</p>
                    </div>
                    <Link 
                        to='/checkout' 
                        className="checkout-btn" 
                        state={{totalPrice, cartArr}}
                        onClick={closeCart}
                        >checkout</Link>
                </div>

           </div>
        </section>
        </>
       
    )
}