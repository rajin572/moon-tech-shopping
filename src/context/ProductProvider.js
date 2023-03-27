import React, { createContext } from 'react';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({children}) => {

    const value = {

    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;