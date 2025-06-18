import React from "react";

function Child({func}){
    console.log(`Component Re-Rendered`)
    return <h1>Hello From Child Component, {func()}</h1>
}
// this React.memo() help to stop the re-render of the component each time.
// but if we get props function then it will re-render component each time
// so, we use the useCallBack() to memorize the function
export default React.memo(Child);     