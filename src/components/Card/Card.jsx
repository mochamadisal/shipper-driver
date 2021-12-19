import React from 'react';

import {MoreHorizontal} from 'react-feather';

import './card.scss';
import ImageUser from '~/assets/img/user.png';

const Card = () => {
    return (
        <div className="card-container">
            <div className="head-card">
                <h4 className="title-card">Driver ID <span>12345</span></h4>
                <MoreHorizontal size="20" />
            </div>
            <div className="body-card">
                <div>
                    <img className="img-body" src={ImageUser} alt="" />
                </div>
                <div>
                    <div className="description">
                        <label className="label">Nama Driver</label>
                        <p className="value">dsdsdsdsd</p>
                    </div>
                    <div className="description">
                        <label className="label">Telepon</label>
                        <p className="value">dsdsdsdsd</p>
                    </div>
                    <div className="description hide-mobile">
                        <label className="label">Email</label>
                        <p className="value">dsdsdsdsd</p>
                    </div>
                    <div className="description hide-mobile">
                        <label className="label">Tanggal Lahir</label>
                        <p className="value">dsdsdsdsd</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
