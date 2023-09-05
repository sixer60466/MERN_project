import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Frontend/Header';
import Footer from '../components/Frontend/Footer';

function FrontendRoutes() {
    return (
        <div className='d-flex flex-column h-100'>
            <Header />
            <Footer />
        </div>

    );
}

export default FrontendRoutes;