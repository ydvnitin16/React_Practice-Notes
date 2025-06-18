// Custom Hooks: - A custom hook is just a JavaScript function that uses built-in React hooks (like useState, useEffect, etc.) to encapsulate reusable logic.
// 🧠 Rule: A custom hook always starts with use (e.g. useFetch, useAuth, useForm).

import { useEffect, useState } from 'react';

function App() {
    const [index, setindex] = useState(0);

    // useFetch custom hook fetch data and give res, err, loading
    function useFetch(url) {
        const [data, setdata] = useState(null);
        const [loading, setloading] = useState(false);
        const [error, seterror] = useState(null);

        useEffect(() => {
            let ignore = false;
            // ignore is used whenever we unmount the component the ignore help to stop the fetching process and not update the state

            async function fetchData() {
                try {
                    setloading(true);
                    const res = await fetch(url);
                    if (!res.ok) throw new Error('Failed to Fetch.');
                    const json = await res.json();
                    if (!ignore) setdata(json);
                } catch (err) {
                    if (!ignore) seterror(err.message);
                } finally {
                    if (!ignore) setloading(false);
                }
            }

            fetchData();
            return () => {
                ignore = true;
            };
        }, [url]);

        return { data, loading, error };
    }

    const { data, loading, error } = useFetch('https://dummyjson.com/quotes');

    if (loading || !data) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <input
                type="number"
                onChange={(e) =>{
                        const val = Number(e.target.value);
                        setindex(
                            val >= 0 && val < data.quotes.length ? val : 0
                        );
                      }
                }
            />
            <h1>📜 Random Quote</h1>
            <blockquote>
                <p>"{data.quotes[index].quote}"</p>
                <footer>- {data.quotes[index].author}</footer>
            </blockquote>
        </>
    );
}

export default App;

// 🔒 Best Practices for Hooks (Built-in + Custom)

// | ✅ Best Practice                        | 💬 Why it Matters                                                       |
// | -------------------------------------- | ----------------------------------------------------------------------- |
// | 🔹 Use only inside function components | Hooks rely on React's render cycle                                      |
// | 🔹 Never call in loops/conditions      | Hook order matters — must stay consistent                               |
// | 🔹 Name starts with `use`              | So React knows it's a hook                                              |
// | 🔹 Avoid side effects in reducers      | `useReducer` should remain pure                                         |
// | 🔹 Extract logic into custom hooks     | DRY principle (Don’t Repeat Yourself)                                   |
// | 🔹 Handle cleanup in `useEffect`       | Prevent memory leaks and unwanted updates                               |
// | 🔹 Use stable function references      | Use `useCallback` when passing to children to avoid unnecessary renders |
// | 🔹 Memoize expensive calculations      | Use `useMemo` to avoid re-calculating on every render                   |
