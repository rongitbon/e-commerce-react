import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectHomepageAboutUs } from '../../redux/homepage/homepage.selectors.js';

import { 
    AboutUsStyle, 
    AboutUsContent, 
    AboutUsHeading,
    AboutUsParagraph, 
    AboutUsBtn,
    AboutUsImages,
    Image1,
    Image2,
    Image3,
    Image4
} from './about_us.style.jsx';

const AboutUs = ({ aboutUsImg }) => (
    <AboutUsStyle>
        <AboutUsContent>
            <AboutUsHeading>About Us</AboutUsHeading>
            <AboutUsParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum 
                recusandae voluptate consectetur esse vel veritatis reprehenderit hic veniam impedit aliquid?
                Dicta nam mollitia enim nobis vitae necessitatibus officiis aspernatur aliquam!
            </AboutUsParagraph>
            <AboutUsParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum aut ipsam dolorum quia expedita harum quasi saepe explicabo, aliquam maiores, quaerat iste.
                Corporis, laborum voluptate cumque doloribus rerum illo fugiat?
            </AboutUsParagraph>
            <AboutUsBtn>Read More</AboutUsBtn>
        </AboutUsContent>
        <AboutUsImages>
            <Image1 imgUrl={aboutUsImg[0]} />
            <Image2 imgUrl={aboutUsImg[1]} />
            <Image3 imgUrl={aboutUsImg[2]} />
            <Image4 imgUrl={aboutUsImg[3]} />
        </AboutUsImages>
    </AboutUsStyle>
);

const mapStateToProps = state => createStructuredSelector({
    aboutUsImg: selectHomepageAboutUs
});

export default connect(mapStateToProps)(AboutUs);