import React from 'react';

export const CartItems = ({ id, title, addPost }) => {
  const addPostHandler = () => {
    const obj = {
      id,
      title,
    };

    addPost(obj);
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      <h1>{title}</h1>
      <button onClick={addPostHandler}>Add Post</button>
    </div>
  );
};
