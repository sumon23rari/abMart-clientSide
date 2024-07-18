import React from 'react';
import useProducts from './useProducts';

const useUnicProductCategory = () => {
    const [products]=useProducts();
    const unicProductsCategory=[];
    products.forEach((product)=>{
      if (!unicProductsCategory.includes(product.productCategory)) {
        unicProductsCategory.push(product.productCategory)
      }
    })
    return [unicProductsCategory]
};

export default useUnicProductCategory;