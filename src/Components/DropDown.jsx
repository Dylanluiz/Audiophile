import React, { useContext, useEffect } from "react";
import ProductTitles from "./ProductTitles";
import { Link, useLocation } from "react-router-dom";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { UserContext } from "../App";

export default function DropDown() {
    const {isMenuOpen, setIsMenuOpen} = useContext(UserContext)
    const menuItems = useTransition(isMenuOpen, {
        from: {opacity: 0, y: -1000},
        enter: {opacity: 1, y: 0},
        leave: {opacity: 1, y: -1000},
        config: {duration: 500}
    })

    const props = useSpring({height: isMenuOpen ? 600 : 0})
    const propsResize = useSpring({height: isMenuOpen ? 300 : 0})
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

    const titlePageEl = titleProducts.map((product, index) => {
        const {image, title, route} = product
        return (
                <div className="drop-down-img-background" key={index}>
                    <img src={image} alt="" className="drop-down-img"/>

                    <div className="drop-down-link-section">
                        <p>{title}</p>
                        <div className="shop">
                            <Link to={route}>SHOP</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2"></path></svg>
                        </div>
                    </div>
                </div>
        )
    })


    return (
        <animated.div style={props} className="drop-down-inner-wrapper">           
          {titlePageEl}
        </animated.div>
       
    )
}