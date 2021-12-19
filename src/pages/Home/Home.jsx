import React, {Fragment, useEffect, useState} from 'react';
import {Search, Plus} from 'react-feather';
import ScrollContainer from 'react-indiana-drag-scroll';

import {useDispatch, useSelector} from 'react-redux';
import {SET_DATA_DRIVER, SET_ERROR, SEARCH_DATA_DRIVER} from '~/redux/actions/typeAction';
import {useHistory, useLocation} from 'react-router-dom';

import {getDataDriver, limitData} from '~/mixins';
import PageHeader from '~/components/PageHeader/PageHeader';
import TextField from '~/components/TextField/TextField';
import Card from '~/components/Card/Card';
import Button from '~/components/Button/Button';
import Pagination from '~/components/Pagination/Pagination';
import Loading from '~/components/Loading/Loading';
import './home.scss';


const Homepage = () => {
    const dispatch = useDispatch();
    const dataState = useSelector((state) => state.global);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState('');

    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    const limit = 5;
    const getLimit = limitData(params, limit);

    const searchData = (param) => {
        setIsSearch(param);
        dispatch({type: SEARCH_DATA_DRIVER, data: param});
        history.push('/');
    };


    useEffect(() => {
        const getUser = async () => {
            setIsLoading(true);
            const driver = await getDataDriver(30);
            if (driver.status) {
                dispatch({type: SET_DATA_DRIVER, data: driver.listData});
                dispatch({type: SET_ERROR, data: false});
            } else {
                dispatch({type: SET_ERROR, data: true});
            }
            setIsLoading(false);
        };

        getUser();
    }, []);
    return (
        <Fragment>
            <div className="homepage-container">
                <PageHeader title="Driver Management" description="Daftar Driver yang bekerja dengan Anda">
                    <TextField placeholder="Cari Driver" icon={<Search />} onChange={(e) => searchData(e.target.value)}/>
                    <Button type="button">
                        <span className="label-button">Tambah Driver</span>
                        <Plus size="14" />
                    </Button>
                </PageHeader>
                {isLoading &&
                <Loading />}
                {!isLoading && dataState.listDriver.length > 0 &&
                    <Fragment>
                        <><ScrollContainer className="scroll-container content-driver">
                            {dataState.listDriver.slice(getLimit.from, getLimit.to).map((rowData, i) => {
                                return (
                                    <div className="col-lg-3" key={i}>
                                        <Card data={rowData} key={i} />
                                    </div>
                                );
                            })}
                        </ScrollContainer><Pagination total={dataState.listDriver.length} limit={limit} current={getLimit.page} /></>
                    </Fragment>
                }
                {!isLoading && dataState.listDriver.length == 0 && isSearch.length > 0 &&
                    <Fragment>
                        <div className="empty-search">
                            <h5>{`Maaf pencarian data "${isSearch}" tidak ditemukan`}</h5>
                        </div>
                    </Fragment>
                }
            </div>
        </Fragment>
    );
};

export default Homepage;
