import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-evenly;
    background-color: #1c1c1c;
    padding: 4rem;
    width: 100vw;
    margin-left: -5.5rem;
    margin-top: 2rem;

    @media(max-width: 800px) {
        margin-left: 0;
    }

    @media(max-width: 710px) {
        flex-direction: column;
    }
`;

export const FooterHeading = styled.h3`
    font-size: 2.5rem;
    font-weight: 300;
    color: #fff;
    margin: 1rem 0 3rem 0;
`;

export const Footerlist = styled.ul`
    list-style: none;
    padding: 0;
`;

export const FooterlistItem = styled.li`
    font-size: 1.4rem;
    margin-bottom: 2rem;
    color: #fff;
    cursor: pointer;
`;

export const FooterlistLink = styled(Link)`
    &,
    &:link,
    &:visited {
        color: #fff;
        text-decoration: none;
    }
`;

export const FooterSocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FooterSocialMediaLink = styled.a`
    font-size: 1.4rem;
    color: #fff;
`;


