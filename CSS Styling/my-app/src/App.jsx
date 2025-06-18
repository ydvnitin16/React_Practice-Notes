// CSS Methods in ReactJS
// 1. External :- Create a new file like index.css
// 2. Modules :- create a stylesheet file for each component and import it in its desired component and use :- className={importedName.classProperty} and stylesheet name must contain .module.css
// 3. Inline :- create a variable in the components function of styles and use in style={styles}

import Button from "./button.jsx";
import Heading from "./heading/heading.jsx";
import Name from "./name.jsx"

function App() {
  return (
    <>
      <Button />
      <Heading />
      <Name />
    </>
  );
}

export default App;
