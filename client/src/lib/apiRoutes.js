import axios from 'axios';

const getData = async (url, options = {}) => {
  try {
    const data = await axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
      method: 'GET',
      headers: {
        Authorization: process.env.API_TOKEN,
      },
      params: options,
    });
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const postData = async (url, options) => {
  try {
    const data = await axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
      method: 'POST',
      headers: {
        Authorization: process.env.API_TOKEN,
      },
      data: options,
    });
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const patchData = async (url, options) => {
  try {
    // const data = await axios.patch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`, options);
    const data = await axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
      method: 'PATCH',
      headers: {
        Authorization: process.env.API_TOKEN,
      },
      data: options,
    });
    console.log(data);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const putData = async (url, options) => {
  try {
    // const data = await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`, options);
    const data = await axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
      method: 'PUT',
      headers: {
        Authorization: process.env.API_TOKEN,
      },
      data: options,
    });
    console.log(data);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const postAndGet = async (url, postOptions, getOptions = {}) => {
  try {
    await postData(url, postOptions);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  } try {
    const data = await getData(url, getOptions);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export {
  getData,
  postData,
  patchData,
  putData,
  postAndGet,
};


// EXAMPLE HEADERS AND OPTIONS ----->

// Use process.env in options parameter
// Example Options:
// options = {
//   headers: {
//     Authorization: process.env.API_TOKEN
//   },
//   params: {
//     count: 5,
//     id: 10
//   }
// }

// getData('/reviews', {
//   product_id: 40345,
//   count: 50,
// })
//   .then((result) => console.log(result.data.results))
//   .catch((err) => console.log('failed to get data, error: ', err));

// getData('/products')
//   .then((result) => console.log(result.data))
//   .catch((err) => console.log('failed to get data, error: ', err));

// postData('/reviews', {
//   product_id: 40345,
//   rating: 4,
//   summary: 'LOOK HERE BABOON',
//   body: 'hello',
//   recommend: false,
//   name: 'ONESUCK',
//   email: 'william@galvanize.com',
//   photos: [],
//   characteristics: {},
// })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// postAndGet('/reviews', {
//   product_id: 40345,
//   rating: 4,
//   summary: 'new test for post and get',
//   body: 'hello',
//   recommend: false,
//   name: 'ONESUCK',
//   email: 'william@galvanize.com',
//   photos: [],
//   characteristics: {},
// }, {
//   product_id: 40345,
//   count: 50,
// })
//   .then((result) => console.log(result.data.results))
//   .catch((err) => console.log(err));