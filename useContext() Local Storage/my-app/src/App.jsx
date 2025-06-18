import { AuthProvider } from './context/AuthContext';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './components/login.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoutes>
                                <Home />
                            </ProtectedRoutes>
                        }
                    />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
