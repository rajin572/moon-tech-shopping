import React from 'react';
import { BiListPlus } from 'react-icons/bi';
import { useProduct } from '../context/ProductProvider';
import { ActionTypes } from '../state/ActionType';

const ParticularCard = ({product}) => {
    console.log(product);
    const {dispatch} = useProduct()
    return (
<div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() =>
            dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: product })
          }
        >
         Remove From Cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
          onClick={() => dispatch({type: ActionTypes.ADD_TO_WISHLIST, payload: product})}
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
    );
};

export default ParticularCard;