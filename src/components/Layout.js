import {NavLink, Outlet} from 'react-router-dom';
import React from "react";
import styles from './home/Header.module.scss'
import MainNavigation from "./home/MainNavigation";
import Footer from "./footer/Footer";
import InformationWindow from "./information-window/InformationWindow";

const Layout = () => {

    return(
        <>
            <InformationWindow />
            <MainNavigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;