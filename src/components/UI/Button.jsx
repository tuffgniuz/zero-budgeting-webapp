import React from 'react';

const Button = ({ buttonValue, type, onClick, className }) => {
    return (
        <button 
            type={type || 'button'}
            onClick={onClick}
            className={`btn btn-xlarge btn-bordered-dashed ${className}`}
        >{ buttonValue }
        </button>
    )
}

export default Button;
