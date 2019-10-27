const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl:'shop/hats',
            id: 1
        },
        {
            title: 'JACKETS',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl:'shop/jackets',
            id: 2
        },
        {
            title: 'SNEAKERS',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl:'shop/sneakers',
            id: 3
        },
        {
            title: 'WOMENS',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womans.png',
            linkUrl:'shop/womens',
            id: 4,
            size: 'large'
        },
        {
            title: 'MENS',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl:'shop/mens',
            id: 5,
            size: 'large'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default directoryReducer;