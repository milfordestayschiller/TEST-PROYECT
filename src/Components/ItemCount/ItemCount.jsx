import React, { useState,useContext } from "react";
import "./ItemCount.css"
import { cartContext } from "../../Storage/cartContext"

function  ItemCount(props) {
    const { onHandStock, onAdd, onRemove, onEmpty, itemsShown } = props;

    const MAX_ITEM_STOCK = onHandStock;
    const [cartQty, setCartQty] = useState(1);
    const { cart } = useContext(cartContext);

    function increaseStock() {
        setCartQty(Math.min(cartQty + 1, MAX_ITEM_STOCK));
    }

    function decreaseStock(){
        setCartQty(Math.min(1, cartQty - 1));
    }

    return(
        <>
            <div className="counter">
                <button className="btn-counter" onButtonClick={increaseStock}> + </button>
                <span className="info-counter">{cartQty}</span>
                <button className="btn-counter" onButtonClick={decreaseStock}> - </button>
            </div>

            <div className="cart-add">
                <span>
                    <button className="btn-cart" onButtonClick={() => onAdd(cartQty)}> Add to Cart 🛒</button>
                </span>

                <span>
                    <button className="remove-item" onButtonClick={() => onRemove(itemsShown)}>  Remove 🗑          
                    </button>
                </span>

                <span>
                    <button className="empty-cart" onButtonClick={() => onEmpty(cart)}>
                        Clean the Cart 🛒
                    </button>
                </span>
            </div>
        </>
    )
}

export default ItemCount;