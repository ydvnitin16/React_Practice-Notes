const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-[#d4dbe2] text-[#101418] px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-lg font-bold">TechStore</h3>
          <p className="text-sm text-[#5c728a] mt-2">
            Your go-to destination for premium tech gadgets at unbeatable prices.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-base font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-[#5c728a]">
            <li><a href="/" className="hover:text-[#101418]">Home</a></li>
            <li><a href="/products" className="hover:text-[#101418]">Shop</a></li>
            <li><a href="/about" className="hover:text-[#101418]">About</a></li>
            <li><a href="/contact" className="hover:text-[#101418]">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-base font-semibold mb-2">Customer Service</h4>
          <ul className="space-y-1 text-sm text-[#5c728a]">
            <li><a href="/faq" className="hover:text-[#101418]">FAQs</a></li>
            <li><a href="/returns" className="hover:text-[#101418]">Returns</a></li>
            <li><a href="/shipping" className="hover:text-[#101418]">Shipping Info</a></li>
            <li><a href="/support" className="hover:text-[#101418]">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-base font-semibold mb-2">Stay Updated</h4>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded border border-[#d4dbe2] text-sm placeholder-[#5c728a] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-[#101418] text-white py-2 px-4 rounded text-sm hover:bg-[#1a1f25]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-[#5c728a] border-t border-[#d4dbe2] pt-4">
        &copy; {new Date().getFullYear()} TechStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
