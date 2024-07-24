"use client";
import React from 'react';
import Image from 'next/image';

const CartModal = () => {
  const cartItems = true;

  return (
    <div className='absolute p-4 rounded-md bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
          <>
          {/* // list */}
          <div className='flex flex-col gap-8'>
            {/* item */}
        <div className='flex flex-col justify-between w-full'>
          <div className='flex gap-4 w-full'>
            <Image src='' alt='' width={72} height={96} className='object-cover rounded-md'/>
          </div>
          {/* top */}
          <div className=''>
            {/* title */}
            <div className='flex items-center justify-between gap-8'>
              <h3 className='font-semibold'>Product Name</h3>
              <div className='p-1 bg-gray-50 rounded-sm'>
                £49
              </div>
              {/* desc */}
              <div className='text-sm text-gray-500'>available</div>
            </div>
              {/* bottom */}
              <div className='flex justify-between text-sm'>
                <span className='text-gray-500'>Qty. 2</span>
                <span className='text-myBlue-500'>Remove</span>
              </div>
          </div>
            </div>
                       {/* item */}
        <div className='flex flex-col justify-between w-full'>
          <div className='flex gap-4 w-full'>
            <Image src='' alt='' width={72} height={96} className='object-cover rounded-md'/>
          </div>
          {/* top */}
          <div className=''>
            {/* title */}
            <div className='flex items-center justify-between gap-8'>
              <h3 className='font-semibold'>Product Name</h3>
              <div className='p-1 bg-gray-50 rounded-sm'>
                £49
              </div>
              {/* desc */}
              <div className='text-sm text-gray-500'>available</div>
            </div>
              {/* bottom */}
              <div className='flex justify-between text-sm'>
                <span className='text-gray-500'>Qty. 2</span>
                <span className='text-myBlue-500'>Remove</span>
              </div>
          </div>
          </div>
          </div>
          {/* // bottom */}
          <div className=''>
              <div className='flex items-center justify-between font-semibold'>
                <span className=''>Subtotal</span>
                <span className=''>£50</span>
              </div>
              <p className='text-gray-500 text-sm mt-2 mb-4'>skahf jbflsj kfn lg b;ksl avnb gsl sdfsd fblsj</p>
              <div className='flex justify-between text-sm'>
                <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
              </div>
            </div>
          </>
          
      )}
    </div>
  );
};

export default CartModal;
