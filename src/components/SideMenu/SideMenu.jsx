import React from 'react';
import {Calendar, Home, Users} from 'react-feather';
import {useSelector} from 'react-redux';

import './sidemenu.scss';
import ShipperLogo from '~/assets/img/shipperLogo.png';

const SideMenu = () => {
    const dataState = useSelector((state) => state.global);
    const SIZE_ICON = 18;
    return (
        <div className={`side-menu ${dataState.sideMenu ? 'show' : ''}`}>
            <div className="side-logo mb-16p py-16p px-16p">
                <img className="logo" src={ShipperLogo} alt="" />
            </div>
            <div className="container-nav">
                <div className="navbar">
                    <span className="side-link">
                        <div className="menu">
                            <Home size={SIZE_ICON} />
                            <span className="label">Beranda</span>
                        </div>
                    </span>
                </div>
                <div className="navbar active">
                    <span className="side-link active">
                        <div className="menu">
                            <Users size={SIZE_ICON} />
                            <span className="label">Driver Management</span>
                        </div>
                    </span>
                </div>
                <div className="navbar">
                    <span className="side-link">
                        <div className="menu">
                            <Calendar size={SIZE_ICON} />
                            <span className="label">Pickup</span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
