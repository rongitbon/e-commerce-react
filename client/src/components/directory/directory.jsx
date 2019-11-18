import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';

import MenuItem from '../menu-item/menu-item.jsx';

import './directory.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu' onClick={() => {console.log(sections)}}>
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = state => createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);