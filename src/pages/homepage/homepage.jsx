import React from 'react';

import MenuItem from '../../components/menu-item/menu-item.jsx';

import Directory from '../../components/directory/directory.jsx';

import {HomePageContainer} from './homepage.styles.jsx';
import './homepage.scss';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;