import React from 'react';

const Button = React.memo(function ({ title, ...props }) {
    return (
        <button id="add-button" {...props}>
            {title || 'Button'}
        </button>
    );
});

export default Button;
