//    --Event Name	       --Description	                   --Example Use Case

// 🖱️ onClick	       -   When user clicks an element	     -   Submit form, like a post, open modal
// 📌 onDoubleClick	  -   When user double-clicks	        -   Rename task, like Instagram post
// 🎯 onChange	      -   When input/select value changes   -   Form handling, filters, search bar
// ⌨️ onKeyDown	      -   Key is pressed down	            -   Trigger on Enter key in input
// 🆙 onKeyUp	      -   Key is released	                -   Search while typing
// 👂 onFocus	      -   Element is focused	            -   Show tip/hint when input is focused
// 💤 onBlur	      -   Element loses focus	            -   Validate input after leaving field
// 📥 onSubmit	      -   Form is submitted	                -   Login/signup forms
// 🚚 onMouseEnter	  -   Mouse enters element	            -   Show tooltip or hover effect
// 🐭 onMouseLeave	  -   Mouse leaves element	            -   Hide tooltip


import Button from './Button.jsx';

function App() {
    return (
        <>
            <Button />
        </>
    );
}

export default App;
