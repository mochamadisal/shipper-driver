import {lazy} from 'react';

const Homepage = lazy( () => import('~/pages/Home/Home') );

const routes = [
    {title: 'Driver Management', container: Homepage, exact: true, path: '/'},
];

export default routes;
