import { ActionTypes } from "./ActionType";

export const InitialState =  {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishlist: [],
}

export const ProductReduce = (state, action) => {
    switch(action.type){
        case ActionTypes.FETCHING_START:
            return {
              ...state,
              loading: true,
              error: false,
            };
          case ActionTypes.FETCHING_SUCCESS:
            return {
              ...state,
              loading: false,
              products: action.payload,
              error: false,
            };
          case ActionTypes.FETCHING_ERROR:
            return {
              ...state,
              loading: false,
              error: true,
            };
          case ActionTypes.ADD_TO_CART:
            return {
              ...state,
              cart: [...state.cart, action.payload],
            };
          case ActionTypes.ADD_TO_WISHLIST:
            return {
              ...state,
              wishlist: [...state.wishlist, action.payload],
            };
          case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item !== action.payload)
            };
        default:
        return state
    };
    

};
