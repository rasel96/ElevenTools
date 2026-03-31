import cartIcon from '../assets/cart-icon-28348.png';
const NavBar = ({ carts, setActiveTab }) => {
  return (
    <nav className="navbar bg-white shadow-sm px-4 lg:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <a
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => setActiveTab('products')}
        >
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-medium gap-1 text-gray-700">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3 flex items-center">
        <div
          className="indicator cursor-pointer"
          onClick={() => setActiveTab('cart')}
        >
          <span className="indicator-item badge badge-primary badge-sm text-xs">
            {carts.length}
          </span>
          <button className="btn btn-ghost btn-circle text-gray-600">
            <img src={cartIcon} alt="" />
          </button>
        </div>
        <button className="btn btn-ghost rounded-full font-medium text-gray-600">
          Login
        </button>
        <button className="btn btn-primary rounded-full px-8">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
