import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts, setActiveTab }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveFromCart = id => {
    setCarts(carts.filter(item => item.id !== id));
    toast.error('Item removed from cart');
  };

  const handleCheckout = () => {
    if (carts.length === 0) return toast.info('Cart is empty');
    setCarts([]);
    toast.success('Checkout successful! Cart cleared.');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {carts.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-6">
          <div className="text-6xl">🛒</div>
          <h3 className="text-3xl font-bold text-gray-400">
            Your cart is empty
          </h3>
          <button
            className="btn btn-primary rounded-full px-8"
            onClick={() => setActiveTab('products')}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
          <div className="flex justify-between text-xs font-bold text-gray-400 mb-5 px-5 uppercase tracking-wider">
            <span>PRODUCT</span>
            <span className="text-right">PRICE</span>
          </div>
          <div className="space-y-4">
            {carts.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center p-5 bg-gray-50 border border-gray-100 rounded-2xl"
              >
                <div className="flex items-center gap-5">
                  <img src={item.icon} alt={item.name} className="w-12 h-12" />
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-xs text-gray-500">Quantity: 1</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="font-bold text-2xl">${item.price}</span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="btn btn-sm btn-error btn-outline rounded-full text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-gray-100 flex justify-between items-center px-5">
            <span className="font-bold text-2xl">Total</span>
            <span className="font-bold text-4xl text-gray-900">
              ${totalPrice}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            className="btn btn-primary btn-lg w-full rounded-full mt-10"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
