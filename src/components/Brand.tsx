export default function Brand() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-12">
            What makes our brand different?
          </h2>
  
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-gray-800 text-3xl">
                <i className="fas fa-shipping-fast"></i> {/* Replace with your icon */}
              </div>
              <h3 className="text-xl font-medium text-gray-700">Next day as standard</h3>
              <p className="text-gray-500 text-sm">
                Order before 5pm and get your order the next day as standard.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-gray-800 text-3xl">
                <i className="fas fa-hands"></i> {/* Replace with your icon */}
              </div>
              <h3 className="text-xl font-medium text-gray-700">Made by true artisans</h3>
              <p className="text-gray-500 text-sm">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-gray-800 text-3xl">
                <i className="fas fa-tags"></i> {/* Replace with your icon */}
              </div>
              <h3 className="text-xl font-medium text-gray-700">Unbeatable prices</h3>
              <p className="text-gray-500 text-sm">
                For our materials and quality, you won’t find better prices anywhere.
              </p>
            </div>
  
            {/* Feature 4 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="text-gray-800 text-3xl">
                <i className="fas fa-recycle"></i> {/* Replace with your icon */}
              </div>
              <h3 className="text-xl font-medium text-gray-700">Recycled packaging</h3>
              <p className="text-gray-500 text-sm">
                We use 100% recycled packaging to ensure our footprint is manageable.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }