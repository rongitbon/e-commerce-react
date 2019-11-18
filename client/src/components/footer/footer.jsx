import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectHomepageCards } from '../../redux/homepage/homepage.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions.js';

import {
    FooterStyle,
    FooterHeading,
    Footerlist,
    FooterlistItem,
    FooterlistLink,
    FooterSocialMedia,
    FooterSocialMediaLink
} from './footer.style.jsx';

const Footer = ({ cardsInfo, currentUser, signOutStart, match, history }) => (
    <FooterStyle>
        <div class='footer-list-wrapper'>
            <FooterHeading>CONTACT</FooterHeading>
            <Footerlist>
                <FooterlistItem>
                    Email: raz.caspi1@gmail.com
                </FooterlistItem>
                <FooterlistItem>
                    location: Unknown , Unknown 4444
                </FooterlistItem>
                <FooterlistItem>
                    Tel: +OOO OOO OOO
                </FooterlistItem>
            </Footerlist>
        </div>
        <div class='footer-list-wrapper'>
            <FooterHeading>WebShop</FooterHeading>
            <Footerlist>
                <FooterlistItem>
                    <FooterlistLink to="/">
                        Home
                    </FooterlistLink>
                </FooterlistItem>
                <FooterlistItem>
                    <FooterlistLink to="/shop">
                        Shop
                    </FooterlistLink>
                </FooterlistItem>
                <FooterlistItem>
                    <FooterlistLink to="/contact">
                        Contact
                    </FooterlistLink>
                </FooterlistItem>
                <FooterlistItem>
                    <FooterlistLink to="/checkout">
                        Cart
                    </FooterlistLink>
                </FooterlistItem>
                {
                    currentUser ?
                    <FooterlistItem  onClick={signOutStart}>
                        Sign Out
                    </FooterlistItem>
                    :
                    <FooterlistItem>
                        <FooterlistLink to="/signin">
                            Sign In
                        </FooterlistLink>
                    </FooterlistItem>
                }
            </Footerlist>
        </div>
        <div class='footer-list-wrapper'>
            <FooterHeading>CATEGORIES</FooterHeading>
            <Footerlist>
            {
                cardsInfo
                .filter((item, index) => index < 4)
                .map(item => (
                    <FooterlistItem
                        onClick={()=>history.push(`${match.url}${item.linkUrl}`)}
                    >
                        { item.title }
                    </FooterlistItem>
                ))
            }
            </Footerlist>
        </div>
        <div class='footer-list-wrapper'>
            <FooterHeading>FOLLOW US</FooterHeading>
            <Footerlist>
                <FooterlistItem>
                    FACEBOOK
                </FooterlistItem>
                <FooterlistItem>
                    LINKED IN
                </FooterlistItem>
                <FooterlistItem>
                   TWITTER
                </FooterlistItem>
                <FooterlistItem>
                    INSTAGRAM
                </FooterlistItem>
            </Footerlist>
        </div>
    </FooterStyle>
);

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    cardsInfo: selectHomepageCards
});

const mapDIspatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps, mapDIspatchToProps)(Footer));