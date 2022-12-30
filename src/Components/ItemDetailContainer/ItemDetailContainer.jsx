import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../Services/MockService";


export default function ItemDetailContainer() {
    const[product, setProduct] = useState([])

    let { itemID} = useParams();
    
    useEffect(() =>{
        getSingleItem(itemID)
        .then((response) =>{
            setProduct(response)
        })
        .catch((error) => {
            console.error("ItemDetailContainer getSingleItem(itemID) Item not found.", error);
            setProduct(error)
        });
    }, [itemID]);
    return <ItemDetail product={product} />
}
