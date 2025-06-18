import { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext();

// It creates a provider (used as tag)
export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const StoredUsername = localStorage.getItem('username');
        return StoredUsername ? { name: JSON.parse(StoredUsername) } : null;
    });

    function login(username) {
        setUser({ name: username });
        localStorage.setItem('username', JSON.stringify(username));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('username');
    }

    return (
        <authContext.Provider value={{ login, logout, user }}>
            {children}
        </authContext.Provider>
    );
}

// custom hook directly info can be used.
export const useAuth = () => useContext(authContext);
