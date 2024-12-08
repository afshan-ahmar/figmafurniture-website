
export default function Newceramics() {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
            New ceramics
          </h2>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="text-center">
              <img
                src="/images/chair.png" // Replace with actual image
                alt="The Dandy Chair"
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-700 mt-4">The Dandy Chair</h3>
              <p className="text-gray-500 mt-1">£250</p>
            </div>
  
            {/* Product 2 */}
            <div className="text-center">
              <img
                src="/images/vase set.png" // Replace with actual image
                alt="Rustic Vase Set"
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-700 mt-4">Rustic Vase Set</h3>
              <p className="text-gray-500 mt-1">£165</p>
            </div>
  
            {/* Product 3 */}
            <div className="text-center">
              <img
                src="/images/bottle.png" // Replace with actual image
                alt="The Silky Vase"
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-700 mt-4">The Silky Vase</h3>
              <p className="text-gray-500 mt-1">£125</p>
            </div>
  
            {/* Product 4 */}
            <div className="text-center">
              <img
                src="/images/bulb.png" // Replace with actual image
                alt="The Lucy Lamp"
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-medium text-gray-700 mt-4">The Lucy Lamp</h3>
              <p className="text-gray-500 mt-1">£399</p>
            </div>
          </div>
  
          {/* View Collection Link */}
          <div className="mt-12 text-center">
            <a
              href="#"
              className="text-purple-600 hover:underline text-lg font-medium"
            >
              View collection
            </a>
          </div>
        </div>
      </div>
    );
  }