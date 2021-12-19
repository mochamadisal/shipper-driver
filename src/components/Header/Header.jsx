import React from 'react';
import {AlignJustify} from 'react-feather';
import {useDispatch} from 'react-redux';
import {SHOW_SIDE_MENU} from '~/redux/actions/typeAction';

import './header.scss';
import ImageUser from '~/assets/img/user.png';
import ShipperLogo from '~/assets/img/shipperLogo.png';

const Banner = () => {
    const dispatch = useDispatch();

    const showSideMenu = (param) => {
        dispatch({type: SHOW_SIDE_MENU, data: param});
    };
    return (
        <div className="header py-16p px-32p">
            <div className="left-header">
                <AlignJustify size="22" onClick={() => showSideMenu(true)}/>
                <img className="logo-header ml-16p" src={ShipperLogo} alt="" />
            </div>
            <div className="right-header">
                <span className="label-header">
                    Hello, <span className="name-header">Mochamad Isal</span>
                </span>
                <img className="image-header ml-16p" src={ImageUser} alt="" />
            </div>
        </div>
    );
};

export default Banner;
