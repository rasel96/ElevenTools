import { useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
const getProducts = async () => {
  const res = await fetch('/products.json');
  return res.json();
};
const productPromise = getProducts();
const App = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [carts, setCarts] = useState([]);
  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <NavBar carts={carts} setActiveTab={setActiveTab} />
        <Banner setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default App;
