// Props
// Props (short for properties) are how data is passed from one component to another in React — usually from parent to child.
// Props are read-only. A child component cannot change the props it receives.

// PropTypes
// PropTypes help you validate the types of props a component receives.
// Think of it as a safety check in development. If you send the wrong data (like a number instead of a string), React will warn you in the console.

// App.jsx
import Student from "./Studentjsx";

function App() {
  return (
    <>
      <Student name="Nitin" age={19} student={true} />
      <Student name="Riya" age={18} student={true} />
      <Student name="Abhishek" age={20} student={false} />
      <Student />
    </>
  );
}

export default App;
