import styled from 'styled-components';

export const BannerStyle = styled.div`
    position: relative;
    height: 70rem;
    width: 75%;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 2rem;

    @media(max-width: 1700px) {
        width: 85%;
    }

    @media(max-width: 1200px) {
        width: 100%;
    }
`;

export const BannerContent = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    text-transform: uppercase;
    text-align: center;
    z-index: 10;
`;

export const BannerHeading = styled.div`
    font-size: 10rem;
    color: #2c2c2c;
    margin-bottom: 5rem;

    @media(max-width: 700px) {
        font-size: 7rem;
    }

    @media(max-width: 440px) {
        font-size: 5rem;
    }
`;

//#2c3e50

export const BannerBtn = styled.div`
    width: 20rem;
    padding: .5rem;
    background-color: #fff;
    border: .2rem solid #2c2c2c;
    outline: none;
    margin: 0 auto;
    font-size: 2.5rem;
    color: #2c2c2c;
    user-select: none;
    cursor: pointer;
    box-shadow: 0 .4rem .8rem rgba(0, 0, 0, .2);
    transition: all .1s;

    &:hover {
        background-color: #2c2c2c;
        color: #fff;
    }
    
    &:active {
        opcity: .5;
        transform: translate(2%, 5%);
        box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .5);
    }

    @media(max-width: 700px) {
        width: 17rem;
        font-size: 2rem;
    }

    @media(max-width: 440px) {
        width: 14rem;
        font-size: 1.4rem;
    }
`;

export const Slideshow = styled.div`
    position: absolute;
    display: flex;
    width: 400%;
    height: 100%;
    opacity: .5;
`;

export const Slide = styled.div`
    width: 25%;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const SlideBtnWrapper = styled.div`
    position: absolute;
    width: 14rem;
    top: 95%;
    right: 50%;
    transform: translateX(50%);
    z-index: 10;
    display: flex;
    justify-content: space-evenly;
`;

export const SlideBtn = styled.button`
    width: 1.4rem;
    height: 1.4rem;
    background-color: #bdc3c7;
    border: .2rem solid #2c3e50;
    cursor: pointer;
    outline: none;

    &:focus {
        background-color: #2c3e50;
    }
`;
