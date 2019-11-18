import styled from 'styled-components';

export const ShopCardStyle = styled.div`
    width: 75%;
    margin: 0 auto;
    margin-bottom: 4rem;

    @media(max-width: 1700px) {
        width: 85%;
    }

    @media(max-width: 1200px) {
        width: 100%;
    }
`;

export const ShopCardTitle = styled.h1`
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 310;
    color: #444;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

export const ShopCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin: 0 2rem;
`;

export const ShopCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45rem;
    margin: 5rem;
    box-shadow: 0 3rem 6rem rgba(0,0,0,.3);

    @media(max-width: 1500px) {
        width: 40rem;
        margin: 2rem;
    }

    @media(max-width: 1050px) {
        width: 34rem;
        margin: 1rem;
    }

    @media(max-width: 950px) {
        width: 30rem;
        margin: 1rem;
    }

    @media(max-width: 710px) {
        width: 45rem;
    }
`;

export const ShopCardImage = styled.div`
    width: 100%;
    height: 50rem;
    background: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    margin-bottom: 1rem;
`;

export const ShopCardHeading = styled.div`
    text-transform: uppercase;
    font-size: 3.1rem;
    font-weight: 310;
    color: #444;
    margin-bottom: 1rem;
`;

export const ShopCardParagraph = styled.div`
    font-size: 1.4rem;
    color: #444;
    margin-bottom: 1rem;
`;

export const AboutUsBtn = styled.button`
    width: 15rem;
    padding: .7rem .5rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #444;
    background-color: transparent;
    border: .1rem solid #444;
    outline: none;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
        color: #fff;
        background-color: #444;
    }

    &:active {
        opacity: .8;
    }
`;