import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const StyleSheet = ['btn--primary', 'btn--outline']
const SizeSheet = ['btn--medium', 'btn--large']

export const Button = ({
    children, 
    onClick, 
    type, 
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = StyleSheet.includes(buttonStyle)
        ? buttonStyle
        : StyleSheet[0];

    {/* check if button size is in the array, if not use the first one */}
    const checkButtonSize = SizeSheet.includes(buttonSize)
        ? buttonSize
        : SizeSheet[0];
    

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};