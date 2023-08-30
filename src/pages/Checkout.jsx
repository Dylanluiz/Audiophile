import React, {useContext, useEffect, useRef, useState} from "react";
import { useLocation } from "react-router";
import CartSummary from "../Components/CartSummary";
import { UserContext } from "../App";

export default function Checkout() {
    const {showCheckout, setShowCheckout} = useContext(UserContext)
    const location = useLocation()
    const cart = location.state
    const docRef = useRef(null)
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            phoneNum: '',
            address: '',
            zipCode: '',
            city: '',
            counrty: '',
            payment: false
        }
    )

    const handelChange = e => {
        const {value, name, type, checked} = e.target

        setFormData(prev => {
            return {
                ...prev,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    return (
        <section className="checkout">
            <form ref={docRef} className="checkout-form">
                <h3 className="checkout-tag">Checkout</h3>

                <div className="outer-billing-section">
                    <p>Billing details</p>
                    <div className="billing-details">
                        <div>
                            <label htmlFor="">Name</label>
                            <input 
                                type="text" 
                                placeholder="Alexei Ward"
                                name="name"
                                onChange={handelChange}
                                />
                        </div>

                        <div>
                            <label htmlFor="">Email Adress</label>
                            <input 
                                type="text" 
                                placeholder="alexi@gmail.com" 
                                name="email"
                                onChange={handelChange}
                                />
                        </div>

                        <div>
                            <label htmlFor="">Phone number</label>
                            <input 
                                type="text" 
                                placeholder="+1 202-555-0136"
                                name="phoneNum"
                                onChange={handelChange}
                                />
                        </div>
    
                    </div>
                </div>

                <div className="outer-shipping-section">
                    <p>shipping info</p>
                    <div className="shipping-details">
                        <div>
                            <label htmlFor="">Your Address</label>
                            <input 
                                type="text" 
                                placeholder="1137 Williams Avenue"
                                name="address"
                                onChange={handelChange}
                                />
                        </div>

                        <div>
                            <label htmlFor="">ZIP Code</label>
                            <input 
                                type="text" 
                                placeholder="10001" 
                                name="zipCode"
                                onChange={handelChange}
                                />
                        </div>

                        <div>
                            <label htmlFor="">City</label>
                            <input 
                                type="text" 
                                placeholder="New York"
                                name="city"
                                onChange={handelChange}
                                />
                        </div>

                        <div>
                            <label htmlFor="">Country</label>
                            <input 
                                type="text" 
                                placeholder="United States"
                                name="county"
                                onChange={handelChange}
                                />
                        </div>
    
                    </div>
                </div>

                <div className="outer-payment-section">
                    <p>payment details</p>
                    <div className="payment-details">
                        <div>
                            <label htmlFor="">Payment Method</label>
                            <div className="payment-type">
                                <div> 
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        id="e-money"
                                        value={'e-Money'}
                                        checked={formData.payment === 'e-Money'}
                                        onChange={handelChange}
                                         />
                                    <label htmlFor="e-money">e-Money</label> 
                                </div>
                                
                                <div>
                                   <input 
                                        type="radio" 
                                        name="payment" 
                                        id="cash"
                                        value={'COD'}
                                        checked={formData.payment === 'COD'}
                                        onChange={handelChange}
                                        /> 
                                   <label htmlFor="cash">Cash on Delivery</label>
                                </div>
                                
                            </div>
                        </div>

                        {formData.payment === 'e-Money' ? 
                        <>
                        <div className="e-money-add-container">
                          <div className="e-money-add">
                                <label htmlFor="">e-Money Number</label>
                                <input type="text" placeholder="238521993" />
                          </div>

                            <div className="e-money-add">
                                <label htmlFor="">e-Money PIN</label>
                                <input type="text" placeholder="1111"/>
                            </div>  
                        </div>
                        
                        </>
                        : null
                        }
    
                    </div>
                </div>
            </form>

            <CartSummary
                cart={cart}
            />
        </section>
    )

}