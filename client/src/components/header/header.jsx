import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions.js';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink,
    OptionSignOut
} from './header.styles.jsx';
import './header.scss';

const Header = ({ currentUser, hidden, signOutStart }) =>  (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionSignOut as='div' onClick={signOutStart}>SIGN OUT</OptionSignOut>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            } 
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown /> 
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDIspatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default  connect(
    mapStateToProps, 
    mapDIspatchToProps
)(Header);