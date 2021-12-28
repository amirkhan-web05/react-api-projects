import axios from 'axios';

export const getUsers = async (currentId = 1) => {
  return Promise.all([
    await axios.get(`/users?id=${currentId}`),
    await axios.get('/cart'),
  ]);
};

export const postUsers = async (obj) => {
  try {
    return await axios.post(`/cart`, obj);
  } catch (e) {
    console.log('Error:', e);
  }
};

export const deleteUsers = async (id) => {
  try {
    return await axios.delete(`/cart/${id}`);
  } catch (e) {
    console.log('Error:', e);
  }
};
