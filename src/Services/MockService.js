import products from "../Components/Data/MockData"

export default function getItems(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        },2000);
    });
}

export function getItemsCategory(categoryID) {
    return new Promise ((resolve, reject) => {
        let itemsFound = products.filter((item) => {
            return item.category === categoryID;
        });
        if (itemsFound.length > 0){
            resolve(itemsFound)
        } else {
            reject("There aren't any products on this category. Try again.")
        }
    });
}

export function getSingleItem(itemID) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let itemFound = products.find (
                (itemInArray) => itemInArray.id === parseInt(itemID)
            );
            if (itemFound) {
                resolve(itemFound)
            } else {
                reject("There isn't any item found. Try again.")
            }
        }, 300);
    });
}