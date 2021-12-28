import React from 'react';

export const Cart = ({ cart, onRemove }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      {cart.map((item) => (
        <div key={item.id} style={{ padding: '10px', border: '1px solid red' }}>
          <h1>{item.title}</h1>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
