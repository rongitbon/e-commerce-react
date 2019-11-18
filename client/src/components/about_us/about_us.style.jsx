import styled, { css } from 'styled-components';

//import { ReactComponent as imageOne } from '../../img/AboutUs_1.jpg';
//import { ReactComponent as imageTwo } from '../../img/AboutUs_2.jpg';
//import { ReactComponent as imageT } from '../../img/AboutUs_3.jpg';
//import { ReactComponent as imageF } from '../../img/AboutUs_4.jpg';

const cssImg = css`
    width: 32rem;
    height: 19rem;
    position: absolute;
    top: 50%;
    left: 50%
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, .4);
    border-radius: .4rem;
    border: .2rem solid #555;
    background-size: cover;
    background-position: center;

    @media(max-width: 1200px) {
        width: 28rem;
        height: 17rem;
    }
`;

export const AboutUsStyle = styled.div`
    width: 75%;
    display: flex;
    margin: 0 auto;
    margin-bottom: 2rem;

    @media(max-width: 1700px) {
        width: 85%;
    }

    @media(max-width: 1200px) {
        width: 100%;
    }

    @media(max-width: 880px) {
        flex-direction: column;
    }

`;

export const AboutUsContent = styled.div`
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    box-sizing: border-box;
`;

export const AboutUsHeading = styled.h1`
    font-family: 'Alegreya', serif;
    font-size: 4rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #555;

    @media(max-width: 1200px) {
        font-size: 3.5rem;
    }

`;

export const AboutUsParagraph = styled.div`
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 300;
    text-align: center;
    margin-bottom: 4rem;

    @media(max-width: 1200px) {
        font-size: 1.4rem;
    }
`;

export const AboutUsBtn = styled.button`
    width: 15rem;
    padding: .7rem .5rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #555;
    background-color: transparent;
    border: .1rem solid #555;
    outline: none;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #444;
    }

    &:active {
        opacity: .8;
    }
`;

const arrImg = [
    [-20,-90],
    [-70,-70],
    [-50,-50],
    [-30,-30],
];

export const AboutUsImages = styled.div`
    flex: 1 1;
    position: relative;
    padding-top: 40rem;
`;

export const Image1 = styled.div`
    background: url(${props => props.imgUrl});
    ${cssImg}
    transform: translate(-20%, -90%);
`;

export const Image2 = styled.div`
    background: url(${props => props.imgUrl});
    ${cssImg}
    transform: translate(-70%, -70%);
`;

export const Image3 = styled.div`
    background: url(${props => props.imgUrl});
    ${cssImg}
    transform: translate(-50%, -50%);
`;

export const Image4 = styled.div`
    background: url(${props => props.imgUrl});
    ${cssImg}
    transform: translate(-30%, -30%);
`;