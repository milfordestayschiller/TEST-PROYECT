import React from "react";
import Item from "../Item/Item"

export default function ItemList(props) {
    if(Array.isArray(props.products)){
        return(
            <>
                {props.products.map((item) => {
                    return(
                        <Item 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            category={item.category}
                            price={item.price}
                            stock={item.stock}
                            detail={item.detail}
                        />
                    );
                })};
            </>
        );
    } else {
        return(
            <>
                <Item category="Error" />
            </>
        )
    }
}