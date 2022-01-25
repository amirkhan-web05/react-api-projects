import axios from 'axios';

export const getUsers = async (currentId = 1) => {
  return Promise.all([
    await axios.get(`http://localhost:3001/users`),
    await axios.get('http://localhost:3001/cart'),
  ]);
};

export const postUsers = async (obj) => {
  try {
    return await axios.post(`http://localhost:3001/cart`, obj);
  } catch (e) {
    console.log('Error:', e);
  }
};

export const deleteUsers = async (id) => {
  try {
    return await axios.delete(`http://localhost:3001/cart/${id}`);
  } catch (e) {
    console.log('Error:', e);
  }
};
