import React, { useEffect, useState } from 'react';

import { Div } from './lib/styledComponents';
import RelatedProductList from './components/RelatedProductList.jsx';
import YourOutfit from './components/YourOutfit.jsx';
import { getData } from '../../lib/apiRoutes.js';

const RelatedProducts = () => {
  // updates current product id from overview component product
  // hard coded
  // I need a state that will store all the data about the current product
  // pass down this state to Your Outfit component
  const [mainItem, setMainItem] = useState(
    {
      product_id: '40361',
      results: [
        {
          style_id: 240586,
          name: 'Test1',
          original_price: '946.00',
          sale_price: null,
          'default?': true,
          photos: [
            {
              thumbnail_url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            },
          ],
        },
      ],
    },
  );
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
          <YourOutfit mainItem={mainItem} />
        </div>
      )}
    </Div>

  );
};

export default RelatedProducts;