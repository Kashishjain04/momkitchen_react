import React from 'react';
import HomeBanner from './components/HomeBanner';
import Categories from './components/Categories';
import './css/untitled.css';

const Home = () => {
    return (
        <div>
            {/* <Nav /> */}
            <HomeBanner />
            <Categories />
        </div>
    );
}

export default Home;
