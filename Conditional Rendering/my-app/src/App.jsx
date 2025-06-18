// 🎯 What is Conditional Rendering?
// Showing or hiding UI elements/components based on a condition (like user login, empty list, etc.)

import { Greeting, Inbox, Product, IsAdult } from "./userGreeting.jsx";

function App() {
  return (
    <>
      <Greeting isLoggedIn={true} username="Nitin Yadav" />
      <Inbox newInbox={false} />
      <Product inStock={0} />
      <IsAdult age={18} />
    </>
  );
}

export default App;
