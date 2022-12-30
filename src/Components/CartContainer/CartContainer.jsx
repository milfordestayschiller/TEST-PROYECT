import React, { useContext } from "react";
import { cartContext } from "../../Storage/cartContext";
import Cart from "../Cart/Cart";

export default function CartContainer(){
    const { cart } = useContext(cartContext)
    return(
        <>
            {cart.map((item) =>{
                return(
                    <>
                        <Cart 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            detail={item.detail}
                            category={item.category}
                            img={item.img}
                            price={item.price}
                            stock={item.stock}
                            cartQty={item.cartQty}
                            />
                    </>
                )
            })}
        </>
    )
}