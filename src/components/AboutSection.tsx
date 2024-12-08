import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-gray-600 mb-4">
            When we started Axion, the idea was simple: Make high-quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-600 mb-6">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-700">
            Get in touch
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src="/images/pillow.png" // Replace with the actual image path
            alt="Stylish furniture and pillows"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
