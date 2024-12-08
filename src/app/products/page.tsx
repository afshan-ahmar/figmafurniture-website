


const products = [
    { name: "The Dandy Chair", price: "£250", image: "/images/chair.png" },
    { name: "Rustic Vase Set", price: "£155", image: "/images/vase set.png" },
    { name: "The Silky Vase", price: "£125", image: "/images/bottle.png" },
    { name: "The Lucy Lamp", price: "£399", image: "/images/bulb.png" },
  ];
  
  const ProductGrid = () => {
    return (
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductGrid;