import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Input() {

    const inputGroup = {
        display: 'flex',
        width: '100%',
        height: '60px',
        justifyContent: 'center',
        alignItems: 'center',
       }

    const inputStyle = {
        width: '70%',
        height: '40px',
        outline: 0,
        border: 0,
       }

    const inputIconArea = {
        height: '40px',
        width: '40px',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }

    return (
        <div style={inputGroup}>
            <span style={inputIconArea}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input style={inputStyle} type="text" />
        </div>
    );
}

export default Input;