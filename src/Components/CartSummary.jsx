import React, { useContext, useState } from "react";
import CheckoutScreen from "./CheckoutScreen";
import { UserContext } from "../App";

export default function CartSummary({cart}) {
    const {isCheckedOut, setIsCheckedOut, userCart, setUserCart, showCheckout, setShowCheckout} = useContext(UserContext)
    const cartItems = cart.cartArr
    const [isCheckingOut, setIsCheckingOut] = useState(false)
    const totalIncVat = cart.totalPrice.toString().split('').map((l, index) => {
        if (cart.totalPrice.toString().split('').length === 4) {
            return index === 0 ? l + ',' : l
        } else if (cart.totalPrice.toString().split('').length === 5) {
            return index === 1 ? l + ',' : l
        } else {
            return l
        }
    })
    const priceTotal = cart.totalPrice
    const vat = priceTotal * 0.15
    const shipping = 50
    const cartTotal = totalIncVat + shipping
    const grandTotal = shipping + priceTotal

    const grandTotalMutated = grandTotal.toString().split('').map((l, index) => {
        if (cart.totalPrice.toString().split('').length === 4) {
            return index === 0 ? l + ',' : l
        } else if (cart.totalPrice.toString().split('').length === 5) {
            return index === 1 ? l + ',' : l
        } else {
            return l
        }
    })

    const checkout = () => {
        setIsCheckingOut(true)
        setTimeout(() => {
            setIsCheckingOut(false)
            setIsCheckedOut(prev => true)
            setShowCheckout(true)
        }, 1000)
    }

    const cartEl = cartItems.map(prod => {
        const {image, price, slug} = prod.item
        
        return (
            <div className="cart-product cart-summary">
                <div className="cart-pic-container">
                    <img src={image?.mobile} alt="" />
                </div>
                <div className="prod-price-name">
                    <h4>{slug.split('-')[0]}</h4>
                    <p>${price.toString().split('').map((l, index) => {
                        if (price.toString().split('').length === 4) {
                            return index === 0 ? l + ',' : l
                        } else {
                            return l
                        }
                    
                })}</p>
                </div>
                <div className="prod-quant-container">
                    <p className="prod-quantity">x{prod.quantity}</p>
                </div>
            </div>
        )
    })

    return (
        <section className="cart-summary-main">
            <h3 className="summary">Summary</h3>
            {cartEl}

            <div className="total-container">
                <div className="tc-inner">
                    <p className="tag">Total</p>
                    <p className="price">$ {totalIncVat}</p>
                </div>
                <div className="tc-inner">
                    <p className="tag">Shipping</p>
                    <p className="price">$ {shipping}</p>
                </div>
                <div className="tc-inner">
                    <p className="tag">vat (included)</p>
                    <p className="price">$ {vat.toFixed(2)}</p>
                </div>
                <div className="tc-inner">
                    <p className="tag">grand total</p>
                    <p className="price orange">$ {grandTotalMutated}</p>
                </div>
            </div>
            {
                isCheckedOut ? 
                <CheckoutScreen
                    items={cartItems}
                    grandTotal={grandTotalMutated}
                /> : null
            }
            <button 
                className="continue"
                onClick={checkout}
                >{isCheckingOut ? <img src="https://firebasestorage.googleapis.com/v0/b/audiophile-78916.appspot.com/o/data-images%2FRolling-1s-200px.svg?alt=media&token=fa24a331-dae2-429e-9d8b-f7e585ef3a97" alt="" /> : 'continue & pay'}</button>
        </section>
    )
}