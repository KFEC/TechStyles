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
      'product_id': '40362',
      'results': [
          {
              'style_id': 240601,
              'name': 'Plum',
              'original_price': '116.00',
              'sale_price': null,
              'default?': true,
              'photos': [
                  {
                      'thumbnail_url': 'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                      'url': 'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
                  }
              ],
              'skus': {
                  '1395315': {
                      'quantity': 31,
                      'size': 'XS'
                  },
                  '1395316': {
                      'quantity': 46,
                      'size': 'S'
                  },
                  '1395317': {
                      'quantity': 40,
                      'size': 'M'
                  },
                  '1395318': {
                      'quantity': 50,
                      'size': 'L'
                  },
                  '1395319': {
                      'quantity': 5,
                      'size': 'XL'
                  },
                  '1395320': {
                      'quantity': 41,
                      'size': 'XXL'
                  }
              }
          },
          {
              'style_id': 240602,
              'name': 'Azure',
              'original_price': '116.00',
              'sale_price': null,
              'default?': false,
              'photos': [
                  {
                      'thumbnail_url': 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                      'url': 'https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
                  }
              ],
              'skus': {
                  '1395321': {
                      'quantity': 33,
                      'size': 'XS'
                  },
                  '1395322': {
                      'quantity': 49,
                      'size': 'S'
                  },
                  '1395323': {
                      'quantity': 8,
                      'size': 'M'
                  },
                  '1395324': {
                      'quantity': 0,
                      'size': 'L'
                  },
                  '1395325': {
                      'quantity': 0,
                      'size': 'XL'
                  },
                  '1395326': {
                      'quantity': 28,
                      'size': 'XXL'
                  }
              }
          },
          {
              'style_id': 240603,
              'name': 'Lavender',
              'original_price': '162.00',
              'sale_price': null,
              'default?': false,
              'photos': [
                  {
                      'thumbnail_url': 'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                      'url': 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
                  }
              ],
              'skus': {
                  '1395327': {
                      'quantity': 35,
                      'size': 'XS'
                  },
                  '1395328': {
                      'quantity': 43,
                      'size': 'S'
                  },
                  '1395329': {
                      'quantity': 9,
                      'size': 'M'
                  },
                  '1395330': {
                      'quantity': 4,
                      'size': 'L'
                  },
                  '1395331': {
                      'quantity': 55,
                      'size': 'XL'
                  },
                  '1395332': {
                      'quantity': 52,
                      'size': 'XXL'
                  }
              }
          },
          {
              'style_id': 240604,
              'name': 'Tan',
              'original_price': '116.00',
              'sale_price': null,
              'default?': false,
              'photos': [
                  {
                      'thumbnail_url': 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                      'url': 'https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
                  }
              ],
              'skus': {
                  '1395333': {
                      'quantity': 37,
                      'size': 'XS'
                  },
                  '1395334': {
                      'quantity': 59,
                      'size': 'S'
                  },
                  '1395335': {
                      'quantity': 56,
                      'size': 'M'
                  },
                  '1395336': {
                      'quantity': 31,
                      'size': 'L'
                  },
                  '1395337': {
                      'quantity': 14,
                      'size': 'XL'
                  },
                  '1395338': {
                      'quantity': 13,
                      'size': 'XXL'
                  }
              }
          },
          {
              'style_id': 240605,
              'name': 'Teal',
              'original_price': '116.00',
              'sale_price': null,
              'default?': false,
              'photos': [
                  {
                      'thumbnail_url': 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                      'url': 'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80'
                  }
              ],
              'skus': {
                  '1395339': {
                      'quantity': 24,
                      'size': 'XS'
                  },
                  '1395340': {
                      'quantity': 52,
                      'size': 'S'
                  },
                  '1395341': {
                      'quantity': 16,
                      'size': 'M'
                  },
                  '1395342': {
                      'quantity': 58,
                      'size': 'L'
                  },
                  '1395343': {
                      'quantity': 9,
                      'size': 'XL'
                  },
                  '1395344': {
                      'quantity': 52,
                      'size': 'XXL'
                  }
              }
          },
          {
              'style_id': 240606,
              'name': 'Sky blue',
              'original_price': '116.00',
              'sale_price': null,
              'default?': false,
              'photos': [
                  {
                      'thumbnail_url': 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                      'url': 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                  }
              ],
              'skus': {
                  '1395345': {
                      'quantity': 25,
                      'size': 'XS'
                  },
                  '1395346': {
                      'quantity': 21,
                      'size': 'S'
                  },
                  '1395347': {
                      'quantity': 46,
                      'size': 'M'
                  },
                  '1395348': {
                      'quantity': 41,
                      'size': 'L'
                  },
                  '1395349': {
                      'quantity': 21,
                      'size': 'XL'
                  },
                  '1395350': {
                      'quantity': 30,
                      'size': 'XXL'
                  }
              }
          }
      ]
  }
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
          <RelatedProductList productData={productData} mainItem={mainItem}/>
          <YourOutfit mainItem={mainItem} />
        </div>
      )}
    </Div>

  );
};

export default RelatedProducts;