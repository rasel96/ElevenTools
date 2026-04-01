import { useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Products from './components/Products';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <Stats />
        <main className="container mx-auto px-4 lg:px-12 py-20 bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Premium Digital Tools</h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
            <div className="inline-flex bg-white rounded-full p-2 shadow-inner gap-1 border border-gray-100">
              <input
                type="radio"
                name="my_tabs_1"
                className="tab rounded-full w-40 font-bold px-8 py-2.5 h-auto bg-transparent checked:bg-primary checked:text-white text-gray-600"
                aria-label="Products"
                onClick={() => setActiveTab('products')}
                defaultChecked
              />
              <input
                type="radio"
                name="my_tabs_1"
                className="tab rounded-full w-40 font-bold px-8 py-2.5 h-auto bg-transparent checked:bg-primary checked:text-white text-gray-600"
                aria-label={`Cart (${carts.length})`}
                onClick={() => setActiveTab('cart')}
              />
            </div>
          </div>

          {activeTab === 'products' && (
            <Products
              productPromise={productPromise}
              carts={carts}
              setCarts={setCarts}
            />
          )}

          {activeTab === 'cart' && (
            <Cart
              carts={carts}
              setCarts={setCarts}
              setActiveTab={setActiveTab}
            />
          )}
        </main>
        {activeTab === 'products' && (
          <>
            <Steps />
            <Pricing />
          </>
        )}
      </div>
    </>
  );
};

export default App;
