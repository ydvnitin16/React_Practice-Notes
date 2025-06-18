// | Term       | Meaning                                               |
// | ---------- | ----------------------------------------------------- |
// | create()   | Create a new Zustand store                            |
// | set()      | Update the state in the store                         |
// | get()      | Read current state from the store (inside store only) |
// | useStore() | Used in components to access state/actions            |
// | ---------- | ----------------------------------------------------- |

import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const UseCartStore = create(
    persist((set, get) => ({
        // State as many needed
        cart: [],

        // these function used to update state keep login seperate
        addToCart: (item) => {
            set((state) => ({
                cart: [item, ...state.cart],
            }));
        },

        deleteItem: (id) => {
            set((state) => {
                const updatedCart = state.cart.filter((item) => item.id !== Number(id));
                return { cart: updatedCart };
            });
        },

        getPrice: () => get().cart.reduce((acc, item) => acc + item.price, 0),

        clearCart: () => set({ cart: [] }),
    })),
    { name: 'cart-storage' }
);

export default UseCartStore;
