const Contact = () => {
   return (
    <div className="flex flex-col bg-slate-50 rounded-4xl font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-center py-5">
          <div className="w-full max-w-3xl flex flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] text-[32px] font-bold leading-tight min-w-72">
                Contact Us
              </p>
            </div>

            <p className="text-[#0d141c] text-base leading-normal px-4 pb-3">
              We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our dedicated support team is available to assist you with any inquiries you may have.
            </p>

            <h3 className="text-[#0d141c] text-lg font-bold tracking-tight px-4 pt-4 pb-2">
              Email
            </h3>
            <p className="text-[#0d141c] text-base px-4 pb-3">
              For general inquiries, product information, or assistance with your order, please email us at <a href="mailto:support@techshop.com" className="text-blue-600 underline">support@techshop.com</a>. We strive to respond to all emails within 24 hours.
            </p>

            <h3 className="text-[#0d141c] text-lg font-bold tracking-tight px-4 pt-4 pb-2">
              Phone
            </h3>
            <p className="text-[#0d141c] text-base px-4 pb-3">
              If you prefer to speak with a representative directly, you can reach us by phone at <a href="tel:5551234567" className="text-blue-600 underline">(555) 123-4567</a>. Our phone lines are open Monday through Friday, from 9 AM to 5 PM (EST).
            </p>

            <h3 className="text-[#0d141c] text-lg font-bold tracking-tight px-4 pt-4 pb-2">
              Address
            </h3>
            <p className="text-[#0d141c] text-base px-4 pb-3">
              TechShop Headquarters<br />
              123 Innovation Drive<br />
              Tech City, CA 91234
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
