import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Store from './components/Store/Store';

function App() {
  const [count, setCount] = useState(0);
  const cartUpdate = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Header count={count}></Header>
      <Store cartUpdate={cartUpdate}></Store>

    </div>
  );
}

export default App;
