import React from 'react';

import './textfield.scss';

const Banner = ({icon, placeholder, ...props}) => {
    return (
        <div className="text-field-container">
            {icon}
            <input className="input-text" type="text" placeholder={placeholder} {...props} data-testid="text" />
        </div>
    );
};

export default Banner;
