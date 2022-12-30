import React from "react";
import { useContext } from "react";
import { cartContext } from "../../Storage/cartContext";
import "./NavBar.css";

export default function CartWidget(){
    const valueContext = useContext(cartContext)
    const totalItemsInCart = valueContext.totalItemsInCartfn()
    const totalQtyInCart = valueContext.totalQtyInCartfn()

    return(
        <>
            <div>
                <span className="nav-link">🛒</span>
            </div>
            <div className="cart">
                <span className="total-item">{totalItemsInCart}</span>
                <span className="total-item">{totalQtyInCart}</span>
            </div>
        </>
    );
};