import React, {Fragment} from 'react';
import {ChevronLeft, ChevronRight} from 'react-feather';
import {useHistory} from 'react-router-dom';

import './pagination.scss';

const Banner = ({total, limit, current}) => {
    const totalPage = Math.ceil(total / limit);
    const history = useHistory();

    const handleNextPage = () => {
        if (current < totalPage) {
            const newPage = current + 1;
            history.push(`?page=${newPage}`);
        }
    };

    const handlePreviousPage = () => {
        if (current > 1) {
            const newPage = current - 1;
            history.push(`?page=${newPage}`);
        }
    };
    return (
        <Fragment>
            <div className="pagination">
                <div onClick={handlePreviousPage} className={`pagination-btn ${current == 1 ? 'disabled' : ''}`}>
                    <ChevronLeft size="16" /> Previous Page
                </div>
                <div onClick={handleNextPage} className={`pagination-btn ${current == totalPage ? 'disabled' : ''}`}>
                Next Page <ChevronRight size="16" />
                </div>
            </div>
            <p className="pagination-desc">{`${current} of ${totalPage}`}</p>
        </Fragment>
    );
};

export default Banner;
