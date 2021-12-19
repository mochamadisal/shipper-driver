import React, {Fragment} from 'react';
import {Search, Plus, ChevronLeft, ChevronRight} from 'react-feather';
import ScrollContainer from 'react-indiana-drag-scroll';

import PageHeader from '~/components/PageHeader/PageHeader';
import TextField from '~/components/TextField/TextField';
import Card from '~/components/Card/Card';
import Button from '~/components/Button/Button';
import './home.scss';


const Homepage = () => {
    return (
        <Fragment>
            <div className="homepage-container py-28p px-28p">
                <PageHeader title="Driver Management" description="Daftar Driver yang bekerja dengan Anda">
                    <TextField placeholder="Cari Driver" icon={<Search />}/>
                    <Button type="button">
                        <span className="label-button">Tambah Driver</span>
                        <Plus size="14" />
                    </Button>
                </PageHeader>
                <ScrollContainer className="scroll-container content-driver">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ScrollContainer>
                <div className="pagination">
                    <div className="pagination-btn">
                        <ChevronLeft size="16" /> Previous Page
                    </div>
                    <div className="pagination-btn">
                        Next Page <ChevronRight size="16" />
                    </div>
                </div>
                <p className="pagination-desc">0 of 5</p>
            </div>
        </Fragment>
    );
};

export default Homepage;
