import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ActionTypes } from '../state/ActionType';
import { InitialState, ProductReduce } from '../state/ProductReduce';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReduce, InitialState)

    useEffect(() => {
        dispatch({ type: ActionTypes.FETCHING_START });
        fetch('products.json')
            .then(res => res.json())
            .then(data => dispatch({ type: ActionTypes.FETCHING_SUCCESS, payload: data }))
            .catch(() => {
                dispatch({ type: ActionTypes.FETCHING_ERROR });
            });
    }, [])

    const value = {
        state,
        dispatch
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context
}

export default ProductProvider;