import React from 'react';
import dayjs from 'dayjs';

import {MoreHorizontal} from 'react-feather';

import './card.scss';
import ImageUser from '~/assets/img/user.png';

const Card = ({data}) => {
    return (
        <div className="card-container">
            <div className="head-card">
                <h4 className="title-card">Driver ID <span>{data.login.username}</span></h4>
                <MoreHorizontal size="20" />
            </div>
            <div className="body-card">
                <div>
                    <img className="img-body" src={data.picture.large ? data.picture.large:ImageUser} alt={data.name.first} />
                </div>
                <div>
                    <div className="description">
                        <label className="label">Nama Driver</label>
                        <p className="value">{data.name.first}, {data.name.last}</p>
                    </div>
                    <div className="description">
                        <label className="label">Telepon</label>
                        <p className="value">{data.phone}</p>
                    </div>
                    <div className="description hide-mobile">
                        <label className="label">Email</label>
                        <p className="value">{data.email}</p>
                    </div>
                    <div className="description hide-mobile">
                        <label className="label">Tanggal Lahir</label>
                        <p className="value">{dayjs(new Date(data.dob.date)).format('DD-MM-YYYY')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
