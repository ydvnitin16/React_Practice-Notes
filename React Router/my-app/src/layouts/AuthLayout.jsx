import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx';

const AuthLayout = () => {
  return (
    <>
    <Navbar />
            <div className='flex min-h-screen flex-col justify-center bg-slate-50 px-6 py-12 lg:px-8'>
                <Outlet />
            </div>
            <Footer />
        </>
  )
}

export default AuthLayout