import React from 'react';

import MenuItem from '../menu-item/menu-item.jsx';

import './directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'hats',
                    id: 1
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'JACKETS',
                    id: 2
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'SNEAKERS',
                    id: 3
                },
                {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'WOMENS',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'MENS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'MENS',
                    id: 5,
                    size: 'large'
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;