import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 my-12">
      <div className="relative mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center shadow-lg">
          <i className="fa-regular fa-heart text-6xl text-blue-400"></i>
        </div>
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
          <span className="text-white text-lg font-bold">0</span>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">
        Your Wishlist is Empty
      </h2>

      <p className="text-gray-500 text-center max-w-md mb-8 leading-relaxed">
        Save your favorite items here and make shopping easier! Start adding
        products you love to your wishlist.
      </p>

      <Link
        to="/"
        className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <i className="fa-solid fa-shopping-bag text-lg"></i>
        <span>Start Shopping</span>
        <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
      </Link>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <i className="fa-solid fa-star text-blue-500 text-xl"></i>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Save Favorites</h4>
          <p className="text-xs text-gray-500">Keep track of items you love</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <i className="fa-solid fa-bell text-blue-500 text-xl"></i>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Get Notified</h4>
          <p className="text-xs text-gray-500">Price drops & restocks alerts</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <i className="fa-solid fa-cart-shopping text-blue-500 text-xl"></i>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Quick Access</h4>
          <p className="text-xs text-gray-500">Add to cart anytime</p>
        </div>
      </div>
    </div>
  );
}

export default EmptyWishlist;
