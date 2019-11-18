import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const cssLink = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    font-size: 1.6rem;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    padding: 25px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    ${cssLink}
`;

export const OptionSignOut = styled.div`
    ${cssLink}
`;
