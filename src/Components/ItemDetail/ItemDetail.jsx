import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { cartContext } from "../../Storage/cartContext";

export default function ItemDetail(props){
    const [setQtyinCart] = useState(0);
    const {addToCart, removeItem, emptyCart } = useContext(cartContext)

    if(props.product === "Item Not Found") {
        return(
            <div className={`cartCardDetail cart-error`}>
                <div className="detail content">
                    <p className="detail-title"> Error</p>
                    <p className="detail-content">Product not Found</p>
                </div>
            </div>
        );
    } else {
        function handleAddToCart(cartQty){
            setQtyinCart(cartQty);
            addToCart(props.product, cartQty)
            
            console.log("added to cart")
        }
        function handleRemoveItem(itemsShown){
            removeItem(itemsShown)
        }
        function handleEmptyCart(cart) {
            emptyCart(cart)
        }

        return(
            <div className="card-details-container">
                <div className="card-details">
                    <img src={props.product.img} alt="img" className="card-img" />
                    <p className="card-detail-name">{props.product.name}</p>
                    <p className="card-detail-category">Category: {props.product.category}</p>
                    <p className="card-detail-category">Stock: {props.product.stock}</p>
                    <p className="card-detail-category">Price: u$s {props.product.price}</p>
                    <ItemCount 
                        onHandStock={props.product.stock}
                        itemsShown={props.product.id}
                        onAdd={handleAddToCart}
                        onRemove={handleRemoveItem}
                        onEmpty={handleEmptyCart}
                    />

                    <Link to="/cart" className="cart-link-details">
                    Go to 🛒
                    </Link>
                </div>
            </div>
        )
    }
}