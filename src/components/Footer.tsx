import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">New arrivals</a></li>
            <li><a href="#" className="hover:text-white">Best sellers</a></li>
            <li><a href="#" className="hover:text-white">Recently viewed</a></li>
            <li><a href="#" className="hover:text-white">Popular this week</a></li>
            <li><a href="#" className="hover:text-white">All products</a></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Crockery</a></li>
            <li><a href="#" className="hover:text-white">Furniture</a></li>
            <li><a href="#" className="hover:text-white">Homeware</a></li>
            <li><a href="#" className="hover:text-white">Plant pots</a></li>
            <li><a href="#" className="hover:text-white">Chairs</a></li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Vacancies</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Returns policy</a></li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="p-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>Copyright 2022 Axion LTD</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-skype"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
