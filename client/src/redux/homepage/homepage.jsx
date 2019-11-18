const INITIAL_STATE = {
    bannerImg: "https://i.ibb.co/s6KSLtQ/header-1.jpg",
    aboutUsImg: [
        "https://i.ibb.co/nf1QPTx/About-Us-4.jpg",
        "https://i.ibb.co/7kmSv2V/About-Us-1.jpg",
        "https://i.ibb.co/Pw57ZPS/About-Us-3.jpg",
        "https://i.ibb.co/6tzn3Qv/About-Us-2.jpg",
    ],
    cards: [
        {
            title: 'HATS',
            imageUrl: 'https://i.ibb.co/CwwYKpz/hats-main.jpg',
            linkUrl: 'shop/hats',
            id: 1
        },
        {
            title: 'SNEAKERS',
            imageUrl: 'https://i.ibb.co/c3kgK8P/sneakers-main.jpg',
            linkUrl: 'shop/sneakers',
            id: 2
        },
        {
            title: 'JACKETS',
            imageUrl: 'https://i.ibb.co/NKN6D7H/jacket-main.jpg',
            linkUrl: 'shop/jackets',
            id: 3
        },
        {
            title: 'PANTS',
            imageUrl: 'https://i.ibb.co/gtMPBCK/pants-1.jpg',
            linkUrl: 'shop/pants',
            id: 4
        },
    ]
    
};

const homepageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default homepageReducer;