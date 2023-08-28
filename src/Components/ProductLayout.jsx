import React from "react";
import { Outlet } from "react-router";
import ProductTitles from "./ProductTitles";
import Brief from "./Brief";

export default function ProductLayout() {
    return (
        <>
            <Outlet/>
            <ProductTitles/>
            <Brief/>
        </>
    )
}