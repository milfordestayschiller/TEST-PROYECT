import { createContext } from "react";
const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;


function CartContextProvider(props) {
    const value = {
        cart: [],
        
    };
    
	return (
        <Provider value={value}>
            {props.children}
        </Provider>
    )
}

export { cartContext, CartContextProvider };