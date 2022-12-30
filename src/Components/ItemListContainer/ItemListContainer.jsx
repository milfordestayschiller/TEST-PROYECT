import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import getItems, { getItemsCategory } from "../../Services/MockService";

export default function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const { categoryID } = useParams();

	

	useEffect(() => {
		if (categoryID === undefined) {
			getItems()
				.then((response) => {
					setProducts(response);
				})
				.catch((error) =>
					console.error("error:", error)
				);
		} else {
			getItemsCategory(categoryID)
				.then((resp) => setProducts(resp))
				.catch((error) => {
					console.error(
						"error:",
						error
					);
					setProducts(error);
				});
		}
	}, [categoryID]);

	return <ItemList products={products} />;

}