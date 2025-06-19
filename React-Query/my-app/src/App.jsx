// React-Query:- 🔰 1. What is React Query?

// React Query helps you:
// Fetch data (GET)
// Create, update, or delete data (POST, PUT, DELETE)
// Manage loading, error, and success states
// Cache data and avoid unnecessary refetching
// Keep UI in sync with server

// Install:- npm install @tanstack/react-query
// Then wrap your app with the QueryClientProvider in main.jsx

// 🔰 FETCH DATA AND MUTATION

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AddUser from './AddUser';

function App() {
    // 🔰 FETCH DATA AND MUTATION IN AddUser.jsx

    // const { data, isLoading, error } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: () =>
    //         axios.get('http://localhost:5000/users').then(
    //             (res) => res.data
    //         ),
    // });

    // 🔰 Refetch And Stale Time & Cache Time

    //     🟦 staleTime:
    //          Time during which data is considered fresh — no auto refetch happens.
    //          Once it expires, data becomes stale and can refetch on focus, reconnect, remount, etc.

    //     🟨 cacheTime:
    //          Time React Query keeps unused data in memory after component unmounts.
    //          After it expires, the data is garbage collected — future access will refetch.

    // const {
    //     data: posts,
    //     isLoading,
    //     error,
    //     refetch,
    // } = useQuery({
    //     // Query key is used to identify the query and invalidate it adn refetch
    //     queryKey: ['posts'],
    //     queryFn: () =>
    //         axios
    //             .get('https://jsonplaceholder.typicode.com/posts')
    //             .then((res) => {
    //                 console.log(`fetched`);
    //                 return res.data;
    //             }),
    //     // This refech is used to refetch api at regular interval
    //     // refetchInterval: 5000,
    //     staleTime: 1000 * 60, // 1 Minutes data is fresh
    //     cacheTime: 1000 * 300, // 5 Minutes data in memory
    // });
    // console.log(posts);

    // 🔰 Select-Transform & Error Handling

    // const {
    //     data: posts,
    //     isLoading,
    //     error,
    // } = useQuery({
    //     queryKey: ['posts'],
    //     queryFn: () =>
    //         axios
    //             .get('https://jsonplaceholder.typicode.com/posts')
    //             .then((res) => {
    //                 console.log(`fetched`);
    //                 return res.data;
    //             }),
    //     retry: 2,
    //     // this select allows to transform data after fetch
    //     select: (data) => data.filter((post) => post.title),
    //     // when error occured this will execute
    //     throwOnError: (err) => console.error(`Error occured: `, err),
    // });
    // console.log(posts);

    // 🔰 Dependent Queries

    const { data: user, isLoading, error } = useQuery({
        queryKey: ['users', 4],
        queryFn: () =>
            axios
                .get('https://jsonplaceholder.typicode.com/users/4')
                .then((res) => {
                    console.log(`user fetched`);
                    return res.data;
                }),
    });
    console.log(user);

    const { data: posts } = useQuery({
        // we use two 'keys so that we ca identify each user's all posts also
        queryKey: ['posts', user?.id],
        queryFn: () =>
            axios
                .get('https://jsonplaceholder.typicode.com/posts?userId=4')
                .then((res) => {
                    console.log(`user fetched`);
                    return res.data;
                }),
                // enabled helps you to fetch when user.id is fetched
        enabled: !!user?.id
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {/*             
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>Name:</strong> {user.name}.{' '}
                            <strong>Email: </strong>
                            {user.email}.
                        </li>
                    ))}
                </ul>
                <button onClick={() => refetch()}>Refetch</button>
                 <AddUser />
             */}
            <p>
                <strong>Name:</strong> {user.name}. <strong>Email: </strong>
                {user.email}.
            </p>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post.id}>
                        <strong>UserId:</strong> {post.userId}.
                        <strong>Title: </strong>
                        {post.title}.
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;

// 🔰
