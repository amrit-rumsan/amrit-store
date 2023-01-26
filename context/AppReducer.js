export const initialState = {
    loading: true,
    error: '',
    product: [],
    cart: 0,
    cartProduct: [],
    price: []
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: ''
            }

        case 'FETCH_FAIL':
            return {
                ...state,
                loading: false,
                product: {},
                error: 'Something went wrong!!!'
            }

        case 'SEARCH_PRODUCT':
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: ''
            }

        case 'ADD_CART':
            return {
                ...state,
                ...state.product,
                cartProduct: state.cartProduct.concat({ ...action.payload, subTotal: action.payload.price, quantity: 1 }),
                cart: state.cart + 1,
                price: state.price.concat(action.payload.price)
            }

        case 'QUANTITY_INC':
            return {
                ...state,
                cartProduct: state.cartProduct.map(product => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity + 1, subTotal: (product.quantity + 1) * product.price };
                    }
                    return product;
                }),
            }

        case 'QUANTITY_DEC':
            return {
                ...state,
                cartProduct: state.cartProduct.map(product => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1, subTotal: product.quantity * product.price };
                    }
                    return product;
                }),
            }

        default:
            return state;

    }

}