import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectHomepageBanner } from '../../redux/homepage/homepage.selectors.js';

import { 
    BannerStyle, 
    BannerContent, 
    BannerHeading, 
    BannerBtn,
    Slideshow,
    Slide,
    SlideBtnWrapper,
    SlideBtn
} from './banner.style.jsx';

const Banner = ({ bannerImg, history, match }) => (
    <BannerStyle>
        <BannerContent>
            <BannerHeading>WebShop</BannerHeading>
            <BannerBtn
                onClick={()=>history.push(`${match.url}\shop`)}
            >Check Out</BannerBtn>
        </BannerContent>
        <Slideshow>
            <Slide>
                <img src={bannerImg} />
            </Slide>
        </Slideshow>
    </BannerStyle>
);

const mapStateToProps = state => createStructuredSelector({
    bannerImg: selectHomepageBanner
});

export default withRouter(connect(mapStateToProps)(Banner));