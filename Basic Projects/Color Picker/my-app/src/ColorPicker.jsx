import { useState } from 'react';

function ColorPicker() {
    const [color, setcolor] = useState('#384738');
    const colorStyles = {
        backgroundColor: color,
    };
    function handleColor(e) {
        setcolor(e.target.value);
    }
    return (
        <>
            <div id='preview-box'>
                <p>Color Picker</p>
                <div style={colorStyles} id="color-preview"></div>
            </div>

            <div id='select-box'>
                <p>Select a Color :</p>
            <input
                type="color"
                value={colorStyles.backgroundColor}
                onChange={(e) => {
                    handleColor(e);
                }}
            />
            </div>
        </>
    );
}

export default ColorPicker;
