import React from 'react';
import { deleteUsers, getUsers, postUsers } from './api/api';
import { Cart } from './components/Cart';
import { CartItems } from './components/CartItems';

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        getUsers().then((data) => {
          setUsers(data[0].data);
          setCart(data[1].data);
        });
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const addUsers = async (obj) => {
    try {
      const findCart = cart.find((item) => item.id === obj.id);
      if (findCart) {
        cart.count = cart;
      } else {
        postUsers(obj).then(() => {
          setCart((prev) => [...prev, obj]);
        });
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  const removeCart = async (id) => {
    try {
      deleteUsers(id).then(() => {
        setCart((prev) => prev.filter((item) => item.id !== id));
      });
    } catch (e) {
      console.log('Error:', e);
    }
  };

  return (
    <div className="App">
      {users.map((item) => (
        <CartItems key={item.id} {...item} addPost={addUsers} />
      ))}
      <Cart cart={cart} onRemove={removeCart} />
    </div>
  );
};

export default App;
