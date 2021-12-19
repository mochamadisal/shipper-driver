import React from 'react';
import './button.scss';

const Button = ({children, type}) => {
    return (
        <button className="button" type={type} data-testid="button">{children}</button>
    );
};

export default Button;
