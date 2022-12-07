import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [lista, setLista] = useState(['comida']);

  let onRemove = (removeItem) => {
    setLista((prev) => prev.filter((i) => i !== removeItem));
  };

  const handleSub = (e) => {
    e.preventDefault();

    setLista((prev) => [...prev, e.target.newItem.value]);
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSub}>
        <input name="newItem" />
      </form>
      <ul>
        {lista.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => onRemove(item)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
