import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {
  const isAdded = carts.find(c => c.id === product.id);

  const handleAddToCart = () => {
    if (isAdded) {
      toast.warning('Product already in your cart!');
      return;
    }
    setCarts([...carts, product]);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow rounded-2xl">
      <div className="card-body p-8 relative">
        <div className="flex justify-between items-start mb-6">
          <img src={product.icon} alt={product.name} className="w-14 h-14" />
          <span
            className={`badge ${product.tagType} text-xs py-2 px-3 rounded-full font-medium`}
          >
            {product.tag}
          </span>
        </div>

        <h2 className="card-title text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-500 text-sm h-14">{product.description}</p>

        <div className="my-5">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-gray-400 text-sm"> / {product.period}</span>
        </div>

        <ul className="space-y-3.5 mb-8 border-t border-b border-gray-100 py-6">
          {product.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-sm text-gray-700 font-medium"
            >
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <button
          className={`btn w-full rounded-full ${isAdded ? 'btn-outline btn-success' : 'btn-primary'}`}
          onClick={handleAddToCart}
        >
          {isAdded ? 'Added' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
