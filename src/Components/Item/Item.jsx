import React from "react";
import { Link } from "react-router-dom";
import "../ItemList/ItemList.css";

export default function Item(props) {
    if (props.category === "Error"){
        return(
            <div className={`cartCardDetail cart-error`}>
                <div className="detail content">
                    <p className="detail-title"> Error</p>
                    <p className="detail-content">Category not Found</p>
                </div>
            </div>
        )
    } else {
        let details = `/item/${props.id}`;

        return(
            <>
                <div className="cart-card-info">
                    <div className="cart-card-content">
                        <p className="detail-title">{props.name}</p>
                        <p className="detail-category">{props.category}</p>                        
                        <p className="detail-price">${props.price.toLocaleString()}</p>
                        <Link to={details}>
                            <button className="btn"> View More</button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}