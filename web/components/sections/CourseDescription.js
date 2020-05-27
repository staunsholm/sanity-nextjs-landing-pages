import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';

function CourseDescription(props) {
    const { header, description, image } = props;
    const imageUrl = imageUrlBuilder(client).image(image);

    return (
        <div className="courseDescription">
            <h3>{header.en}</h3>
            <p>{description.en}</p>
            <img src={imageUrl} />
        </div>
    );
}

CourseDescription.propTypes = {
    header: PropTypes.object.isRequired,
    description: PropTypes.object,
    image: PropTypes.object,
};

export default CourseDescription;
