import React from 'react';
import '../css/header.css'
import HomeIcon from '@material-ui/icons/Home';
import {FlashOn, LiveTv, PersonOutline, Search, Subscriptions} from "@material-ui/icons";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__icons">

                <div className="header__icon header__icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>

                <div className="header__icon">
                    <FlashOn/>
                    <p>Trending</p>
                </div>

                <div className="header__icon">
                    <LiveTv/>
                    <p>Verified</p>
                </div>

                <div className="header__icon">
                    <Subscriptions/>
                    <p>Collections</p>
                </div>

                <div className="header__icon">
                    <Search/>
                    <p>Search</p>
                </div>

                <div className="header__icon">
                    <PersonOutline/>
                    <p>Account</p>
                </div>
            </div>


            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1920px-Hulu_Logo.svg.png"
                alt="logo"/>


        </div>
    );
};

export default Header;
