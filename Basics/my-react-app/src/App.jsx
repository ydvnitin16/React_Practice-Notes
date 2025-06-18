import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./food.jsx";

// We can only return a single component but we can add many by enclosing <> ..tags.. </>

function App() {
  return (
    <>
      <Header />
      <Food />
      <Footer />
    </>
  );
}

export default App;
