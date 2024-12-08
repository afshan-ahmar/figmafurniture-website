

export default function Cart() {
    return (
      <div className="min-h-screen bg-gray-50">
  
        {/* Shopping Cart */}
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-6">Your shopping cart</h2>
  
          <div className="space-y-6">
            {/* Product List */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/bottle.png"
                  alt="Product Image"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">Graystone Vase</h3>
                  <p className="text-sm text-gray-600">£85</p>
                </div>
              </div>
              <p className="font-semibold">£85</p>
            </div>
  
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/Pot Image.png"
                  alt="Product Image"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">Basic White Vase</h3>
                  <p className="text-sm text-gray-600">£125</p>
                </div>
              </div>
              <p className="font-semibold">£125</p>
            </div>
          </div>
  
          {/* Summary */}
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between text-lg font-medium">
              <p>Subtotal</p>
              <p>£210</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Taxes and shipping are calculated at checkout.
            </p>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md">
              Go to checkout
            </button>
          </div>
        </main>
  

        </div>
      
    
  );
}
