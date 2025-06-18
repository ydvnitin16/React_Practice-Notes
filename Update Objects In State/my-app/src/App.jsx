// UPDATE OBJECTS IN STATE

// import { useState } from 'react'

// function App() {
//   const [person, setperson] = useState({
//     name: 'Nitin',
//     age: 19,
//     location: 'India'
//   });

//   //const changeName = () => setperson({name: "tamanna"}) // ❌ it removes age and location
//   const changeName = () => setperson(prev => ({...prev, name: 'Tamanna'})); //✅ Correct Way (Spread + Update)
//   const changeAge = () => setperson(prev => ({...prev, age: 22}));
//   const changeLocation = () => setperson(prev => ({...prev, location: 'Australia'}));
//   return (
//     <>
//       <p>Name: {person.name}</p>
//       <p>age: {person.age}</p>
//       <p>location: {person.location}</p>
//       <button onClick={changeName} >Change Name</button>
//       <button onClick={changeAge} >Change Age</button>
//       <button onClick={changeLocation} >Change Location</button>
//     </>
//   )
// }

// export default App

// TO ADD IN OBJECTS :- setUser(prev => ({...prev, address: "Haryana"}));
// TO DELETE IN OBJECTS :- setUser(prev => {
//                             const { age, ...rest } = prev; // ⛔ remove age
//                             return rest;
//                         });

// UPDATE OBJECTS IN STATE ( PRACTICE )

// import { useState } from 'react';

// function App() {
//   const [user, setUser] = useState({
//     name: 'Guest',
//     email: 'example@gmail.com',
//     age: 16,
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4">
//         <h2 className="text-2xl font-bold text-center text-gray-800">🧑‍💻 User Profile</h2>

//         <div className="space-y-2">
//           <p>👤 Name: <span className="font-medium text-blue-600">{user.name}</span></p>
//           <p>📧 Email: <span className="font-medium text-blue-600">{user.email}</span></p>
//           <p>🎂 Age: <span className="font-medium text-blue-600">{user.age}</span></p>
//         </div>

//         <div className="space-y-3 pt-4">
//           <input
//             type="text"
//             placeholder="Edit Name"
//             className="w-full border px-4 py-2 rounded-lg"
//             onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
//           />
//           <input
//             type="text"
//             placeholder="Edit Email"
//             className="w-full border px-4 py-2 rounded-lg"
//             onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
//           />
//           <input
//             type="number"
//             placeholder="Edit Age"
//             className="w-full border px-4 py-2 rounded-lg"
//             onChange={(e) => setUser((prev) => ({ ...prev, age: Number(e.target.value) }))}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// UPDATE ARRAYS IN STATE

// import { useState } from 'react';

// function App() {
//     const [fruits, setfruits] = useState(['🍎 Apple', '🍌 Banana']);

//     const addFruit = () => setfruits((prev) => [...prev, '🍇 Grape']);
//     const removedFruit = () =>
//         setfruits((prev) => prev.filter((fruit) => fruit !== '🍌 Banana'));
//     const updateFruit = () =>
//         setfruits((prev) =>
//             prev.map((fruit) =>
//                 fruit === '🍎 Apple' ? '🍏 Green Apple' : fruit
//             )
//         );

//     return (
//         <>
//             <div className="p-4 space-y-4">
//                 <h2 className="text-xl font-bold">🧺 Fruits:</h2>
//                 <ul className="list-disc list-inside">
//                     {fruits.map((fruit, index) => (
//                         <li key={index}>{fruit}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="flex items-center gap-x-4">
//                 <button onClick={addFruit} className="bg-green-500 rounded-lg py-3 px-5  text-white cursor-pointer font-medium text-md border-2 hover:border-[#646cff] focus:outline-4 ">
//                     Add 🍇 grapes
//                 </button>
//                 <button onClick={removedFruit} className="bg-red-500 rounded-lg py-3 px-5  text-white cursor-pointer font-medium text-md border-2 hover:border-[#646cff] focus:outline-4 ">
//                     Remove 🍌 Banana
//                 </button>
//                 <button onClick={updateFruit} className="bg-yellow-500 rounded-lg py-3 px-5  text-white cursor-pointer font-medium text-md border-2 hover:border-[#646cff] focus:outline-4 ">
//                     Update 🍎 Apple
//                 </button>
//             </div>
//         </>
//     );
// }

// export default App;

// UPDATE ARRAY OF OBJECTS

import { useState } from 'react';

function App() {
    const users = [
        { id: Date.now(), name: 'Tamanna', online: false },
        { id: Date.now(), name: 'Shradha Khapra', online: true },
    ];

    const [userslist, setuserslist] = useState([
        {
            id: Date.now(),
            name: 'Nitin',
            online: true,
        },
    ]);
    const [newUserIdx, setnewUsersIdx] = useState(0);

    const addUser = () => {
        if (newUserIdx < users.length) {
            setuserslist((prev) => [...prev, users[newUserIdx]]);
            setnewUsersIdx((prev) => prev + 1);
        }
    };

    const toggleOnline = (id) =>
        setuserslist((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, online: !user.online } : user
            )
        );

        const deleteUser = (id) => setuserslist(prev => prev.filter(user => user.id !== id))

    console.log(userslist);
    return (
        <>
            <div className="p-4 space-y-2">
                {userslist.map((user) => (
                    <div
                        key={user.id}
                        className="flex justify-between items-center"
                    >
                        <span>
                            {user.name} —
                            {user.online ? '🟢 Online' : '🔴 Offline'}
                        </span>
                        <div className="space-x-2">
                            <button
                                onClick={() => toggleOnline(user.id)}
                                className="bg-yellow-400 cursor-pointer px-2"
                            >
                                Toggle
                            </button>
                            <button
                                onClick={() => deleteUser(user.id)}
                                className="bg-red-500 cursor-pointer px-2 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    onClick={addUser}
                    className="bg-green-500 cursor-pointer text-white px-3 py-1 rounded"
                >
                    Add User
                </button>
            </div>
        </>
    );
}

export default App;
