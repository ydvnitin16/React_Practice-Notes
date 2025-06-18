import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    const error = useRouteError()
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-100">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-600">{error.status}</h1>
        <p className="my-2 text-gray-600">
          {error.data}
        </p>
        <button onClick={()=> navigate(-1)} className="px-4 py-4 bg-black text-white rounded-4xl cursor-pointer hover:bg-gray-800">Go Back</button>
      </div>
    </div>
  )
}

export default Error