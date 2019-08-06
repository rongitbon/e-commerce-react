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
                    id: 1
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3
                },
                {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 4
                },
                {
                    title: 'MENS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id}) => (
                    <MenuItem key={id} imageUrl={imageUrl} title={title.toUpperCase()}/>
                ))}
            </div>
        );
    }
}

export default Directory;