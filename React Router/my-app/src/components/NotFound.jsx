import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">Page Not Found</h2>
        <p className="my-2 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button onClick={()=> navigate('/', {replace: true})} className="px-4 py-4 bg-black text-white rounded-4xl cursor-pointer hover:bg-gray-800">Go Home</button>
      </div>
    </div>
  );
};

export default NotFound;
