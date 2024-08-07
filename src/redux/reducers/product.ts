const initialState: any = {
    products: [],
    cart: []
};

const ProductInformation = (state = initialState, action: any) => {
    switch(action.type){
        case "SET_ALL_PRODUCT":
            return{
                ...state,
            }
        case"GET_ALL_PRODUCT":
            return{
                ...state,
                products: action.payload,
            }
        case"ADD_TO_CART":
            return{
                ...state,
                cart: action.payload
            }

        default:
            return state
    }
}
export default ProductInformation;