import React from 'react';
import './SubmitButton.css';

function SubmitButton({ disabled, text, isLoading }) {

    return (
        <button
            className='submit-btn'
            type="submit"
            disabled={disabled || isLoading }
        >
            {text}
        </button>
    )
}

export default SubmitButton;
