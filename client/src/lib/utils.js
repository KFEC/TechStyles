import axios from 'axios';

const getData = async (url, options) => {
  try {
    const data = await axios.get(url, options);
    console.log(data);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const postData = async (url, options) => {
  try {
    const data = await axios.post(url, options);
    console.log(data);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const patchData = async (url, options) => {
  try {
    const data = await axios.patch(url, options);
    console.log(data);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const putData = async (url, options) => {
  try {
    const data = await axios.put(url, options);
    console.log(data);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const postAndGet = async (url, options) => {
  try {
    await postData(url, options);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  } try {
    const data = await getData(url, options);
    return Promise.resolve(data);
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export default {
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