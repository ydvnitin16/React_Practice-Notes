const Home = () => {
   return (
    <div className="min-h-[calc(100vh-64px)] px-4 py-8 bg-slate-50 font-sans">
      <div className="max-w-[960px] mx-auto flex flex-col gap-8">
        {/* Hero Section */}
        <div
          className="relative min-h-[480px] flex flex-col justify-end rounded-lg bg-cover bg-center p-4 pb-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://cdn.dribbble.com/userupload/43263232/file/original-81cb7a482018c8065c630ccea98acbdd.jpg?resize=1024x480&vertical=center")'
          }}
        >
          <h1 className="text-white text-4xl font-black mb-2">Introducing the Future of Connectivity</h1>
          <p className="text-white text-base mb-4">
            Experience seamless integration with our latest innovation. Pre-order now and be among the first to embrace the next generation of technology.
          </p>
          <button className="w-fit rounded-lg bg-blue-600 px-5 py-3 text-slate-50 font-bold">
            Pre-order Now
          </button>
        </div>

        {/* Featured Talks */}
        <section className="py-5">
  <h2 className="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Why Choose Us?
  </h2>
  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
    {[
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Z" />
          </svg>
        ),
        title: "Exclusive Deals",
        description:
          "Get access to special offers and discounts on our premium tech products.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z" />
          </svg>
        ),
        title: "Fast & Reliable Shipping",
        description:
          "Enjoy quick and dependable delivery services, ensuring your products arrive safely and on time.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
          </svg>
        ),
        title: "Secure Transactions",
        description:
          "Shop with confidence knowing your transactions are protected with our secure payment gateway.",
      },
    ].map((item, index) => (
      <div key={index} className="flex flex-col gap-3 rounded-lg border border-[#d4dbe2] bg-gray-50 p-4">
        <div className="text-[#101418]">{item.icon}</div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#101418] text-base font-bold leading-tight">
            {item.title}
          </h3>
          <p className="text-[#5c728a] text-sm font-normal leading-normal">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Shop by Category */}
        <section>
          <h2 className="text-[#0d141c] text-2xl font-bold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
            {[
              { label: 'Laptops', img: 'https://img.freepik.com/free-photo/laptop-device-with-minimalist-monochrome-background_23-2150763335.jpg' },
              { label: 'Smartphones', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDQ9jARjYyHgHd3ZqlCcfoPpIEg4DrWl1uPxuzQ8KxUTrs7kXqo2zUbvGmISYXoak7Cg&usqp=CAU' },
              { label: 'Audio', img: 'https://cdn.mos.cms.futurecdn.net/4UT8CsUJJJXoV9Np6nDkKd.jpg' },
              { label: 'Accessories', img: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--iQ7s3h9h--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1568056262695/mousekeyboard.jpg' },
            ].map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-3 cursor-pointer">
                <div
                  className="aspect-square rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url("${cat.img}")` }}
                />
                <p className="text-[#0d141c] font-medium">{cat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
