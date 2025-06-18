// import React from 'react';
// import { Link,  NavLink, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
    
//     return (
//         <nav className="flex justify-evenly items-center py-3">
//             <img
//                 className="h-20"
//                 src="https://www.svgrepo.com/show/306648/reactrouter.svg"
//                 alt=""
//             />
//             <div className="flex items-center gap-4 md:gap-7 lg:gap-15 rounded-4xl shadow py-4 px-8">
//                 {/* <Link to="/">Home</Link>
//                 <Link to="/products">Products</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact</Link> */}
//                 {/* IF WE USE A TAG THEN BROWSER RELOAD ON EACH CHANGE LINK TAG ALLOWS RENDERING WITHOUT REFRESH */}

//                 <NavLink className={({isActive}) => isActive ? 'text-red-400' : 'text-black'} to="/">Home</NavLink>
//                 <NavLink className={({isActive}) => isActive ? 'text-red-400' : 'text-black'} to="/products">Products</NavLink>
//                 <NavLink className={({isActive}) => isActive ? 'text-red-400' : 'text-black'} to="/about">About</NavLink>
//                 <NavLink className={({isActive}) => isActive ? 'text-red-400' : 'text-black'} to="/contact">Contact</NavLink>
//                 <NavLink className={({isActive}) => isActive ? 'text-red-400' : 'text-black'} to="/user/login">Login</NavLink>
//                 {/* NAVLINK ALLOWS TO TRACK THE ACTIVE LINK WHEN CLICK ON ANY LINK TAG IT ADDS ACTIVE CLASS TO THAT LINK */}

//             </div>
//             {/* useNavigate hook is used to redirect user somewhere after a certain action or to go back or go home button and use replace: true if wanna delete history of previous page only one page history is removed */}
//             <button onClick={()=> navigate('/user/signup')} className='px-4 py-4 bg-black text-white rounded-4xl cursor-pointer hover:bg-gray-800'>Get Started</button>
//         </nav>
//     );
// };

// export default Navbar;


// ABOVE CODE IS THE LEARNING
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3 bg-white">
      {/* Logo and Brand */}
      <div className="flex items-center gap-4 text-[#0d141c]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">Tech Shop</h2>
      </div>

      {/* Navigation Links and Button */}
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <NavLink
            to="/" 
            className={({isActive}) => isActive ? 'text-[#424242] text-sm font-medium leading-normal hover:text-[#000000] transition' : 'text-[#0d141c] text-sm font-medium leading-normal hover:text-[#424242] transition'}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({isActive}) => isActive ? 'text-[#424242] text-sm font-medium leading-normal hover:text-[#000000] transition' : 'text-[#0d141c] text-sm font-medium leading-normal hover:text-[#424242] transition'}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) => isActive ? 'text-[#424242] text-sm font-medium leading-normal hover:text-[#000000] transition' : 'text-[#0d141c] text-sm font-medium leading-normal hover:text-[#424242] transition'}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive}) => isActive ? 'text-[#424242] text-sm font-medium leading-normal hover:text-[#000000] transition' : 'text-[#0d141c] text-sm font-medium leading-normal hover:text-[#424242] transition'}
          >
            Contact
          </NavLink>
        </div>

        <button
          onClick={() => navigate('/user/login')}
          className="flex min-w-[84px] max-w-[480px] h-10 items-center justify-center rounded-lg cursor-pointer px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Sign In</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
