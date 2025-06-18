// 📚 🎯 What Is List Rendering in React?
// Rendering a list of elements/components using JavaScript methods like .map().

// ✅ Example use cases:-
// 🛍️ Showing products
// 💬 Displaying chat messages
// 📋 Showing a to-do list

// Rules:-
// 🚫 Don't use index as key if list is dynamic (items added/removed)
// ✅ Prefer id or a unique property as key
// 🚫 Don’t forget to return something in .map()

// function App() {
//   const fruits = ['Apple', 'Mango', 'Orange'];
//   return (
//     <>
//      <ul>
//       { fruits.map((fruit, index) => (
//         <li key={index}> { fruit } </li>
//       )) }
//      </ul>
//     </>
//   )
// }

// render array in li with userId as key
// function App() {
//   const users = [
//     { id: 1, name: 'Nitin Yadav' },
//     { id: 2, name: 'Shradha Khapra' },
//     { id: 3, name: 'Tamanna' },
//   ];

//   return (
//     <>
//       <ol>
//         {users.map((user) => (
//           <li key={user.id}> {user.name} </li>
//         ))}
//       </ol>
//     </>
//   );
// }

import RenderList from './RenderLists';

function App() {
    const vegetables = [
        { id: 1, name: 'Potato', price: 30 },
        { id: 2, name: 'Lady Finger', price: 40 },
        { id: 3, name: 'Capsicum', price: 60 },
        { id: 4, name: 'Mushroom', price: 30 },
        { id: 5, name: 'Cabage', price: 30 },
        { id: 6, name: 'Carot', price: 40 },
    ];

    const Fruits = [
        { id: 1, name: 'Apple', price: 150 },
        { id: 2, name: 'mango', price: 100 },
        { id: 3, name: 'Pinapple', price: 60 },
        { id: 4, name: 'Water Melon', price: 30 },
        { id: 5, name: 'grapes', price: 80 },
        { id: 6, name: 'Kiwi', price: 100 },
    ];
    return (
        <>
            {Fruits.length > 0 && (
                <RenderList category="Fruits" itemList={Fruits} />
            )}
            {vegetables.length > 0 && (
                <RenderList category="vegetables" itemList={vegetables} />
            )}
        </>
    );
}

export default App;
