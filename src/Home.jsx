import React from 'react';
import HomeBanner from './components/HomeBanner';
import Categories from './components/Categories';
import { SetTitle } from './components/SetTitle';
import './css/untitled.css';

const Home = () => {
    return (
        <div>
            <SetTitle title="Home - Mummy Da Dhaba" />
            <HomeBanner />
            <Categories />
        </div>
    );
}

export default Home;
