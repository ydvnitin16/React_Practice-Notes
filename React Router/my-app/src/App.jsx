// import Navbar from './components/Navbar.jsx';
// import Home from './pages/Home.jsx';
// import Products from './pages/Products.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';
// import { Routes, Route } from 'react-router-dom';

// function App() {
//     return (
//         <>
//             <Navbar />
//             <div className='flex justify-center items-center font-bold text-4xl h-screen'>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/products" element={<Products />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                 </Routes>
//             </div>
//         </>
//     );
// }

// export default App;










// THE NEW WAY TO SETUP REACT ROUTER.

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import NotFound from './components/NotFound.jsx';
import SingleProduct from './pages/SingleProduct.jsx';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';

import { ProductsLoader } from './utils.jsx';
import { LoadProduct } from './utils.jsx';
import Error from './components/Error.jsx';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {/* Many routes can be created like that for diff. types like auth, dashboard, admin etc. */}
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    {/* we can use loader(pass function to it) that returns the loaded data to the element- and get in the component using useLoaderData() hook .It fetchs data before component mounts */}
                    <Route
                        path="products"
                        element={<Products />}
                        loader={ProductsLoader}
                    />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="/user" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="*" element={<NotFound />} />
                {/* here we can use loader to get a product and uses the params object feature of loader */}
                {/* If the error is thrown from the loader function the error element can be rendered */}
                <Route path="/product/:id" element={<SingleProduct />} loader={LoadProduct} errorElement={<Error />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
