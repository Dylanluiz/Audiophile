import React, { useContext } from "react";
import ScrollToTop from "./scrollToTop";
import { useNavigate } from "react-router";
import { UserContext } from "../App";

export default function CheckoutScreen({items, grandTotal}) {
    const purchase = items[0].item
    const {setUserCart, setIsCheckedOut} = useContext(UserContext)
    const {image, slug, price, name} = purchase
    const navigate = useNavigate()
    const purchaseArr = items

    const message = purchaseArr.length > 1 ?
                     `and ${purchaseArr.length} other item${purchaseArr.length > 2 ? 's' : ''}` 
                     : null

    const backHome = () => {
        navigate('/')
        setUserCart([])
        setIsCheckedOut(false)
    }

    return (
        <>
        <ScrollToTop/>
        <span className="backdrop checkout-screen"></span>
        <section className="order-confirm-screen">
            <div className="confirm-symbol">
              <svg className="circle" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="#D87D4A"/> 
            </svg>  
            <svg className="check" xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                <path d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125" stroke="white" stroke-width="4"/>
            </svg>
            </div>

            <h2 className="thank-you">thank you for your for order</h2>      
            <p className="confirm-email">You will receive an email confirmation shortly.</p>
            
            <div className="purchase-summary-wrapper">
                <div className="purchase-summary-wrapper-inner">
                    <div className="purchase-summary">
                    <img className="img-item-confirm" src={image.mobile} alt="" />
                        <div className="purchase-summary-inner">
                            <p className="name">{slug.split('-')[0]}</p>
                            <p className="item-price">$ {price}</p>
                        </div>
                        <p className="quantity-checkout">x{items[0].quantity}</p>    
                    </div>
                    <div className="message">
                        <p className="message-p">{message}</p>
                    </div>  
                </div>

                <div className="summary-total">
                    <p className="summary-total-tag">grand total</p>
                    <p className="price white">$ {grandTotal}</p>
                </div>
            </div>
            <button className="back-to-home" onClick={backHome}>back to home</button>
        </section>
        </>
       
    )
}