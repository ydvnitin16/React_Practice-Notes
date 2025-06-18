import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


const RootLayout = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[calc(100vh-64px)] px-4 py-8'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;
