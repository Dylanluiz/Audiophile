import React, { useContext } from "react";
import Hero from "./Hero";
import ProductTitles from "./ProductTitles";
import LargeProductCard from "./LargeProductCard";
import Cards from "./Cards";
import Brief from "./Brief";


export default function Home() {


    return (
        <>
            <Hero />
            <ProductTitles />
            <LargeProductCard/>
            <Cards/>
            <Brief/>
        </>
    )
}