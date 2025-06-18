// To live any file on server open new terminal for it by right click and integrated terminal and add cmd :- npx json-server --watch product.json --port 5000

import { NavLink, useLoaderData } from "react-router-dom";

const ProductsPage = () => {
  // Get data using useLoaderData hook
  const products = useLoaderData()
  
    return (
        <>
            <main className="min-h-[calc(100vh-64px)] bg-slate-50 px-4 py-8">
                <div className="max-w-[960px] mx-auto">
                    <h2 className="text-[#0d141c] text-2xl font-bold mb-6">
                        Tech Products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((p, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden shadow hover:scale-102 transition-all duration-200 md: p-2"
                            >
                                <NavLink to={`/product/${p.id}`} > <img
                                    src={p.img}
                                    alt={p.alt}
                                    className="w-full aspect-square bg-gray-50 rounded-b-xl object-cover cursor-pointer"
                                />
                                </NavLink>
                                <div className="px-4 mb-4 md:mb-0 flex justify-between">
                                    <div>
                                        <p className="text-[#0d141c] text-base lg:text-lg font-medium">
                                            {p.name}
                                        </p>
                                        <p className="text-[#49709c] text-base mt-1">
                                            {p.price}
                                        </p>
                                    </div>
                                    <button className="bg-black text-white px-3 py-4 font-medium rounded-xl cursor-pointer hover:bg-[#2a2a2a] md:hidden">
                                        Add to cart
                                    </button>
                                </div>
                                <button className="bg-black text-white px-3 py-4 font-medium rounded-xl cursor-pointer hover:bg-[#2a2a2a] hidden md:block">
                                    Add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};
export default ProductsPage;
