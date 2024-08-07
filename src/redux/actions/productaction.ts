const setProducts = (Products: any) => {
    return {
        type: "SET_ALL_PRODUCT",
        payload: Products,
    };

};
const getProducts = () => {
    return {
        type: "GET_ALL_PRODUCT"
    };
};
const addToCart = ( cartInfo: any ) => {
    return {
        type: "ADD_TO_CART",
        payload: cartInfo,
    }
}

export default {setProducts, getProducts};