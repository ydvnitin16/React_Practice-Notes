// React-Query:- 🔰 1. What is React Query?

// React Query helps you:
// Fetch data (GET)
// Create, update, or delete data (POST, PUT, DELETE)
// Manage loading, error, and success states
// Cache data and avoid unnecessary refetching
// Keep UI in sync with server

// Install:- npm install @tanstack/react-query
// Then wrap your app with the QueryClientProvider in main.jsx

import { useQuery } from '@tanstack/react-query';

function App() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/users').then(
                (res) => res.json()
            ),
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
