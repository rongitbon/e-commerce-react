import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.jsx';
import CustomButton from '../custom-button/custom-button.jsx';

import './collection-preview.scss';

const CollectionPreview = ({title, items, routeName, history, match}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </div>
        <div className="button">
            <CustomButton 
                onClick={()=>history.push(`${match.url}/${routeName}`)}
                inverted
            >
                See More
            </CustomButton>
        </div>
    </div>
);

export default withRouter(CollectionPreview);