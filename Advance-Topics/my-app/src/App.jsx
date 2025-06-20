// Suspense:- Used for: Lazy loading components or waiting for async data (especially with React Query or use in Server Components).

// import { Suspense, lazy } from "react";

// const Request = lazy(() => import("./Request.jsx"));

// function App() {

//   return (
//     <>
//      <Suspense fallback={<p>Loading</p>}>
//        <Request />
//      </Suspense>
//     </>
//   )
// }

// export default App

// ✅ What are Error Boundaries?
// An Error Boundary is a React class component that catches JavaScript errors in the child component tree and shows a fallback UI instead of breaking the whole app.

// 🧠 Think of it as:
// “A try/catch for the React component tree.”

import ErrorBoundary from './ErrorBoundary';

function BuggyComponent() {
    throw new Error('This component crashed!');
    return <div>I won't be rendered</div>;
}

const App = () => {
    return (
        <ErrorBoundary fallback={<p>Error Occured.</p>} >
            <BuggyComponent />
        </ErrorBoundary>
    );
};

export default App;
