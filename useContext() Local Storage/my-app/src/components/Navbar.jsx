import { useAuth } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const { user, logout } = useAuth();

    return (
        <>
            <nav>
                <div>
                    {user ? (
                        <>
                            <p>Welcome, {user.name}</p>
                            <button onClick={logout} >Logout</button>
                        </>
                    ) : (
                        <p>
                            Please Login,{' '}
                            <NavLink to="/login">Click Here</NavLink>
                        </p>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
