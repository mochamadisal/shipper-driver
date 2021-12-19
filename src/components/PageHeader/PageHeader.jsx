import React from 'react';

import './pageheader.scss';

const Banner = ({title, description, children}) => {
    return (
        <div className="page-header py-16p px-20p mb-28p">
            <div className="page-title">
                <h1 className="title">{title}</h1>
                <h5 className="description">{description}</h5>
            </div>
            <div className="box-right">
                {children}
            </div>
        </div>
    );
};

export default Banner;
