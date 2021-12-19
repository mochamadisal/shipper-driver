import React, {memo, Fragment, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import Notifications from 'react-notify-toast';
import {useSelector, useDispatch} from 'react-redux';
import {SHOW_SIDE_MENU} from '~/redux/actions/typeAction';

import Loading from '~/components/Loading/Loading';
import Header from '~/components/Header/Header';
import SideMenu from '~/components/SideMenu/SideMenu';


import './layout.scss';

const MainLayout = memo( ({Container, title}) => {
    const dispatch = useDispatch();

    const hideSideMenu = (param) => {
        dispatch({type: SHOW_SIDE_MENU, data: param});
    };

    const dataState = useSelector((state) => state.global);
    return (
        <Fragment>
            <Helmet>
                <title>Shipper - {title}</title>
            </Helmet>
            <Suspense fallback={
                <Loading />
            }>
                <div className="main-layout">
                    <Notifications />
                    {dataState.sideMenu && <div className='overlay' onClick={() => hideSideMenu(false)}></div>}
                    <SideMenu />
                    <div className="container-content">
                        <Header />
                        <Container />
                    </div>
                </div>
            </Suspense>
        </Fragment>
    );
});

MainLayout.displayName = 'mainLayout';

export default MainLayout;
