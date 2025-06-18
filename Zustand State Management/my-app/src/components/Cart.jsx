import React from 'react';
import { useState } from 'react';
import UseCartStore from '../store/useCartStore';

const Cart = () => {
    // Get state and functions by the zustand store
    const cart = UseCartStore((state) => state.cart);
    const addToCart = UseCartStore((state) => state.addToCart);
    const getPrice = UseCartStore((state) => state.getPrice);
    const deleteItem = UseCartStore((state) => state.deleteItem);
    const clearCart = UseCartStore((state) => state.clearCart);

    // states to manage functions
    const [itemName, setItemName] = useState(null);
    const [itemPrice, setItemPrice] = useState(null);
    const [itemQuantity, setItemQuantity] = useState(null);
    const [id, setId] = useState(null);

    // functions to handle tasks
    function HandleAddCart() {
        if (
            [itemName, itemPrice].some(
                (field) => field === '' || field === undefined || field === null
            )
        ) {
            return;
        }

        if (!cart) {
            console.log('cart is not loaded');
            return;
        }

        addToCart({
            id: cart.length,
            name: itemName,
            price: parseInt(itemPrice),
            quantity: parseInt(itemQuantity) || 1,
        });
    }

    function DeleteById() {
        if (!(id >= 0)) {
            console.log(`cant delete`);
            return;
        }
        deleteItem(id);
    }

    function clearItem() {
        clearCart();
    }

    return (
        <>
            <div className=" text-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto my-10">
                <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
                    Cart Items
                </h2>
                <ol className="space-y-4">
                    {cart && cart.length > 0 ? (
                        cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex  p-4 rounded-md shadow-sm hover:shadow-md transition-all"
                            >
                                <div>
                                    <div className="w-full font-medium text-lg flex gap-60">
                                        <p>{item.name}</p>
                                        <p>Qty:{item.quantity}</p>
                                    </div>
                                    <p className="text-indigo-400 font-semibold">{`$${item.price}`}</p>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-400">Your cart is empty.</p>
                    )}
                </ol>
                <div className="mt-6 flex justify-between items-center border-t border-gray-700 pt-4">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="text-indigo-300 text-lg font-semibold">{`₹${
                        getPrice() || 0
                    }`}</span>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center h-screen w-screen gap-5">
                <div className="flex flex-col gap-3 border-2 p-4 rounded-2xl shadow-2xl">
                    <h1 className="text-2xl font-bold">Add Item To Cart</h1>
                    <input
                        type="text"
                        value={itemName}
                        placeholder="Enter Item"
                        className="border-2 rounded-lg px-2 py-2"
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <span>
                        <input
                            type="number"
                            value={itemPrice}
                            placeholder="Price"
                            className="border-2 rounded-lg px-2 py-2"
                            onChange={(e) => setItemPrice(e.target.value)}
                        />
                        <select
                            name="quantity"
                            value={itemQuantity}
                            className="border-2 rounded-lg px-2 py-2 ml-2"
                            onChange={(e) => setItemQuantity(e.target.value)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </span>
                    <button
                        onClick={HandleAddCart}
                        className="bg-black text-white hover:bg-gray-900 py-3 px-3 rounded-xl cursor-pointer"
                    >
                        Add To Cart
                    </button>
                </div>

                <div className="flex flex-col gap-3 border-2 p-4 rounded-2xl shadow-2xl">
                    <h1 className="text-2xl font-bold">Delete Item By Id</h1>
                    <input
                        onChange={(e) => setId(Number(e.target.value))}
                        value={id}
                        type="text"
                        placeholder="Enter Id"
                        className="border-2 rounded-lg px-2 py-2"
                    />
                    <button
                        onClick={DeleteById}
                        className="bg-black text-white hover:bg-gray-900 py-3 px-3 rounded-xl cursor-pointer"
                    >
                        Delete Item
                    </button>
                </div>

                <div className="flex flex-col gap-3 border-2 p-4 rounded-2xl shadow-2xl">
                    <h1 className="text-2xl font-bold">Clear Cart</h1>
                    <button
                        onClick={clearItem}
                        className="bg-black text-white hover:bg-gray-900 py-3 px-3 rounded-xl cursor-pointer"
                    >
                        Clear Cart
                    </button>
                </div>
                <div>{/* Cart List */}</div>
            </div>
        </>
    );
};

export default Cart;
