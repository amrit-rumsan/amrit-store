export const initialState = {
    loading: true,
    error: '',
    product: [],
    cart: 0,
    cartProduct: [],
    showModal: false
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
            const productIndex = state.cartProduct.findIndex(p => p.id === action.payload.id)
            if (productIndex === -1) {
                return {
                    ...state,
                    cartProduct: [...state.cartProduct, { ...action.payload, quantity: 1 }],
                    cart: state.cart + 1,
                }
            } else {
                return {
                    ...state,
                    showModal: true
                }
            }

        case 'DELETE_CART':
            return {
                ...state,
                newCart: [state.cartProduct],
                deleteProduct: newCart.splice(action.payload.id, 1),
                cartProduct: [newCart]
            }

        case 'QUANTITY_INC':
            return {
                ...state,
                cartProduct: state.cartProduct.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                            subTotal: (product.quantity + 1) * product.price
                        };
                    }
                    return product;
                }),
            }

        case 'QUANTITY_DEC':
            return {
                ...state,
                cartProduct: state.cartProduct.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
                            subTotal: product.subTotal > product.price ? (product.quantity - 1) * product.price : product.price
                        };
                    }
                    return product;
                }),
            }

        case 'CLOSE_MODAL':
            return {
                ...state,
                showModal: false
            }

        default:
            return state;

    }

}