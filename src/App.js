import React from 'react';
// import { Button } from './Components/Button/Button';
import { data } from "../src/data/product.js"
// import ProductCard from './Components/ProductCard';
// import Batch {Button} from './Components/batch/Batch.jsx';
import { Page } from './Components/page/Page.jsx';

const App = () => {
  console.log(data)
  return (
  //   // <div className='grid grid-cols-3'>
  //   //   <div >
  //   //     <h3 className=''>colors</h3>


  //   //     {/* color,size,min,max */}
  //   //   </div>

  //   //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-2">
  //   //     {data.map((product) => (
  //   //       <ProductCard
  //   //         key={product.id} // Important for performance
  //   //         product={product.name}
  //   //         color={product.color && product.color[0]} // Assuming first color from array
  //   //         size={product.product_sizes}
  //   //         offer={product.offer}
  //   //         price={`₹${product.member_price || product.price}`} // Display member price if available
  //   //       />
  //   //     ))}
  //   //   </div>
  //   // </div>
  //   // <Batch />
    // <Page/>

  );
};

export default App;






-------------------------------------------------------------------------------------

import React, { useState } from 'react';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const itemInCart = updatedCart.find(item => item.id === product.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        <h2>Products</h2>
        {products.map(product => (
          <div key={product.id} className="product">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - ${item.price} (Quantity: {item.quantity})</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;





-------------------------------------------------------------------------------------------

import React, { useCallback, useState } from "react"
import Pro from "./Components/Pro/Pro";
const App = () => {
  const [prod, setProd] = useState(["prod-1", "prod-2"]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+count</button>
      <h3>Cart:{cart}</h3>

      <div>
        {prod.map((p, i) => {

          return <Pro name={p} key={i} addToCart={addToCart} />

        })}
      </div>


    </div>
  )

}
export default App;


import React, { useState, useCallback, useMemo } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);


  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);


  const doubledCount = useMemo(() => {
    console.log(' doubledCount');
    return count * 2;
  }, [count]);



  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;







--------------------------------------------------------------------------------------



import React, { useState, useCallback } from "react";

const Compo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");


  const handleClick = useCallback(
    () => {
      setCount(count + 1);
    },
    [count]
  );

  return (
    <div>
      <h2>
        Count: {count}
      </h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default Compo;







----------------------------------------------------------------------------------



// src/App.js

import React from 'react';
// import UserList from './Components/axios/UserList';
import PostList from './Components/axios/PostList';
// import UserList from './components/axios/UserList'

const App = () => {
  return (
    <div className="App">
      {/* <UserList /> */}
      <PostList id={3} title={"hello"} />
    </div>
  );
};

export default App;



-----------------------------------------------------------------------------------
