import React, { useContext } from "react"
import { cartContext } from "../../Storage/cartContext"

export default function Cart (props) {

    let unidOunids = props.cartQty > 1 ? "unids" : "unid";

    return (
        <>
            <div className="cart-cards">
                <div className={`cart-img ${props.img}`}></div>
                <div className="cart-content">
                    <p className="cart-name">{props.name}</p>
                    <p className="cart-detail">{props.detail}</p>
                    <p className="cart-price">Price: u$s {props.price}</p>
                </div>
                <div className="content-price">
                    <span>
                        Total: ${(props.price * props.cartQty).toLocaleString()} - {" "}
                        {props.cartQty.toLocaleString()} {unidOunids}
                    </span>
                </div>
            </div>
        </>
    )
}

export function CartTotal(){
    const valueContext = useContext(cartContext)
    const totalValueInCart = valueContext.totalValueInCartfn()
    const totalQtyInCart = valueContext.totalQtyInCartfn()

    let unidOunids = totalQtyInCart > 1 ? "unids" : "unid";

    return(
        <>
            <div className="total-card">
                <div>
                    <div className="cart-price">
                        <span>
                            Final Price ${totalValueInCart.toLocaleString()} - {" "}
                            {totalQtyInCart.toLocaleString()} {unidOunids}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}