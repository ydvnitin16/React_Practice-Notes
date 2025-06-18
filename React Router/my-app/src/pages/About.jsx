import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] rounded-4xl px-4 py-8 bg-slate-50 font-sans">
      <div className="max-w-[960px] mx-auto">
        <h1 className="text-[#0d141c] text-[32px] font-bold leading-tight mb-4">About Tech Emporium</h1>

        <p className="text-[#0d141c] text-base leading-normal mb-6">
          Tech Shop is a leading online retailer specializing in cutting-edge technology products.
          Our mission is to provide customers with the latest innovations in electronics, gadgets, and
          accessories, all while ensuring a seamless and satisfying shopping experience.
        </p>

        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight mb-3">Our Products</h2>
        <p className="text-[#0d141c] text-base leading-normal mb-6">
          We offer a wide range of products, including smartphones, laptops, smart home devices, audio
          equipment, and gaming accessories. Our selection features top brands and emerging technologies,
          catering to both tech enthusiasts and everyday users.
        </p>

        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight mb-3">Our Commitment</h2>
        <p className="text-[#0d141c] text-base leading-normal mb-6">
          At Tech Emporium, we are committed to quality, innovation, and customer satisfaction. We carefully
          curate our product catalog to ensure that every item meets our high standards for performance and
          reliability. Our customer service team is dedicated to providing prompt and helpful support,
          ensuring that your shopping experience is smooth and enjoyable.
        </p>

        <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight mb-3">Contact Us</h2>
        <p className="text-[#0d141c] text-base leading-normal">
          If you have any questions or need assistance, please don't hesitate to contact us. You can reach
          us via email at <a href="mailto:support@techemporium.com" className="text-blue-600 underline">support@techshop.com</a> or by phone at
          (555) 123-4567. We are here to help!
        </p>
      </div>
    </div>
  );
};

export default About;
