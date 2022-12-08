import React, { useEffect, useState } from 'react';

import { Div } from './lib/styledComponents';
import RelatedProductList from './components/RelatedProductList.jsx';
import YourOutfit from './components/YourOutfit.jsx';
import { getData } from '../../lib/apiRoutes.js';

const RelatedProducts = () => {
  // updates current product id from overview component product
  // hard coded
  const [currentProductId, setCurrentProductId] = useState('40344');
  // updates related product ids
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [productName, setProductName] = useState('');
  const [productData, setProductData] = useState();
  const [Gallery, setGallery] = useState([]);

  const asyncRetrieveData = async () => {
    try {
      const relatedProducts = await getData(`/products/${currentProductId}/related`);
      const mappedData = await Promise.all(relatedProducts.data.map(async (item) => {
        try {
          const productDetails = await getData(`/products/${item}`);
          const styles = await getData(`/products/${item}/styles`);
          return { productDetails: productDetails.data, styles: styles.data };
        } catch (err) {
          console.error(err);
        }
        return null;
      }));
      return mappedData;
    } catch (err) {
      console.error(err);
    }
    return null;
  };

  const asyncSetProductData = async () => {
    const testData = await asyncRetrieveData();
    setProductData(testData);
  };

  useEffect(() => {
    asyncSetProductData();
  }, []);

  // const asyncRetrieveData = async () => {
  //   try {
  //     const relatedProducts = await getData(`/products/${currentProductId}/related`);
  //     const mappedData = await Promise.all(relatedProducts.data.map(async (item) => {
  //       try {
  //         const productDetails = await getData(`/products/${item}`);
  //         const styles = await getData(`/products/${item}/styles`);
  //         return { productDetails: productDetails.data, styles: styles.data };
  //       } catch (err) {
  //         console.error(err);
  //       }
  //       return null;
  //     }));
  //     return mappedData;
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   return null;
  // };

  // const asyncSetProductData = async () => {
  //   const testData = await asyncRetrieveData();
  //   setProductData(testData);
  // };

  // useEffect(() => {
  //   asyncSetProductData();
  // }, []);

  return (
    <Div>
      { productData !== undefined
      && (
        <div>
          I am Related Products
          <RelatedProductList productData={productData} />
          <YourOutfit />
        </div>
      )}
    </Div>

  );
};

export default RelatedProducts;