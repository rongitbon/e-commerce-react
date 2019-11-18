import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectHomepageCards } from '../../redux/homepage/homepage.selectors.js';

import {
    ShopCardStyle,
    ShopCardTitle,
    ShopCardWrapper,
    ShopCardContainer,
    ShopCardImage,
    ShopCardHeading,
    ShopCardParagraph,
    AboutUsBtn
} from './shop_card.style.jsx';

const ShopCard = ({ cardsInfo, match, history }) => (
    <ShopCardStyle>
        <ShopCardTitle>categories</ShopCardTitle>
        <ShopCardWrapper>
            {
                cardsInfo
                    .filter((item, index) => index < 4)
                    .map(item => (
                        <ShopCardContainer>
                            <ShopCardImage imgUrl={item.imageUrl} />
                            <ShopCardHeading>{ item.title }</ShopCardHeading>
                            <ShopCardParagraph>Lorem ipsum dolor sit amet</ShopCardParagraph>
                            <AboutUsBtn
                                 onClick={()=>history.push(`${match.url}${item.linkUrl}`)}
                            >SHOP NOW</AboutUsBtn>
                        </ShopCardContainer>
                    ))
            }
        </ShopCardWrapper>
    </ShopCardStyle>
);

const mapStateToProps = state => createStructuredSelector({
    cardsInfo: selectHomepageCards
});

export default withRouter(connect(mapStateToProps)(ShopCard));