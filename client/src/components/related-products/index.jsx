import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Div } from '../../lib/styledComponents.js';
import RelatedProductList from './components/RelatedProductList.jsx';
import YourOutfit from './components/YourOutfit.jsx';
import { getData } from '../../lib/apiRoutes.js';


const RelatedProducts = () => {
  // all the products data
  const {
    productId,
    productInfo,
    productMeta,
    productStyles,
    relatedProducts,
  } = useSelector((state) => state.product);
  return (
    <Div>
      { relatedProducts.length > 0 && Object.keys(relatedProducts).length > 0
      && (
        <div id="related-products-container" style={{ display: 'flex', flexDirection: 'column' }}>
          Related Products
          {/* pass current product to use the details and chars for comparaison modal */}
          {/* pass an array of related products with product details and product styles */}
          <RelatedProductList productData={relatedProducts} currrentProduct={productInfo} />
          {/* pass current product to your outfit to be able to add it to Your Outfit */}
          <YourOutfit currrentProduct={productInfo} />
        </div>
      )}
    </Div>

  );
};

export default RelatedProducts;

// const RelatedProducts = () => {
//   // sets data for current product
//   const [currentProductId, setCurrentProductId] = useState('40344');
//   const [productData, setProductData] = useState();
//   const [currentProductData, setcurrentProductData] = useState();
//   const asyncRetrieveData = async () => {
//     try {
//       // const currentProductDetailsData = await getData(`/products/${currentProductId}`);
//       // const currentProductCharsData = await getData('/reviews/meta', { product_id: item });
//       const relatedProducts = await getData(`/products/${currentProductId}/related`);
//       const mappedData = await Promise.all(relatedProducts.data.map(async (item) => {
//         try {
//           const productDetails = await getData(`/products/${item}`);
//           const styles = await getData(`/products/${item}/styles`);
//           const meta = await getData('/reviews/meta', { product_id: item });
//           return { productDetails: productDetails.data, styles: styles.data, meta: meta.data };
//         } catch (err) {
//           console.error(err);
//         }
//         return null;
//       }));
//       return mappedData;
//     } catch (err) {
//       console.error(err);
//     }
//     return null;
//   };

//   const asyncSetProductData = async () => {
//     const testData = await asyncRetrieveData();
//     setProductData(testData);
//   };

//   useEffect(() => {
//     asyncSetProductData();
//   }, []);

//   // const asyncRetrieveData = async () => {
//   //   try {
//   //     const relatedProducts = await getData(`/products/${currentProductId}/related`);
//   //     const mappedData = await Promise.all(relatedProducts.data.map(async (item) => {
//   //       try {
//   //         const productDetails = await getData(`/products/${item}`);
//   //         const styles = await getData(`/products/${item}/styles`);
//   //         return { productDetails: productDetails.data, styles: styles.data };
//   //       } catch (err) {
//   //         console.error(err);
//   //       }
//   //       return null;
//   //     }));
//   //     return mappedData;
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   //   return null;
//   // };

//   // const asyncSetProductData = async () => {
//   //   const testData = await asyncRetrieveData();
//   //   setProductData(testData);
//   // };

//   // useEffect(() => {
//   //   asyncSetProductData();
//   // }, []);

//   return (
//     <Div>
//       { productData !== undefined
//       && (
//         <div>
//           Related Products
//           {/* pass current product to use the details and chars for comparaison modal */}
//           {/* pass an array of related products with product details and product styles */}
//           <RelatedProductList productData={productData} currrentProduct={currentProduct} />
//           {/* pass current product to your outfit to be able to add it to Your Outfit */}
//           <YourOutfit currrentProduct={currentProduct} />
//         </div>
//       )}
//     </Div>

//   );
// };

// export default RelatedProducts;

