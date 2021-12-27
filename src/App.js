import axios from 'axios';
import React from 'react';
import { Cart } from './components/Cart';
import { CartItems } from './components/CartItems';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3001/users').then(({ data }) => {
      setUsers(data);
    });
  };

  const deleteUsers = async (id) => {
    setCart(cart.filter((item) => item.id !== id));
    await axios.delete(`http://localhost:3001/users/${id}`);
  };

  const addUsers = async (obj) => {
    await axios.post(`http://localhost:3001/cart`, obj);
    setCart((prev) => [...prev, obj]);
  };

  return (
    <div className="App">
      {users.map((item) => (
        <CartItems key={item.id} {...item} addPost={addUsers} />
      ))}
      <Cart cart={cart} onRemove={() => deleteUsers(cart.id)} />
    </div>
  );
};

export default App;
