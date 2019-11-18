import React from 'react';

import Banner from '../../components/banner/banner.jsx';
import AboutUs from '../../components/about_us/about_us.jsx';
import ShopCard from '../../components/shop_card/shop_card.jsx';
import Footer from '../../components/footer/footer.jsx';

import {HomePageContainer} from './homepage.styles.jsx';
import './homepage.scss';

const HomePage = () => (
    <div>
        <Banner />
        <AboutUs />
        <ShopCard />
        <Footer />
    </div>
);

export default HomePage;