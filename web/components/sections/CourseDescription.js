import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import styles from './CourseDescription.module.css';

function CourseDescription(props) {
    const { header, description, image, course, courseSlug } = props;
    const imageUrl = imageUrlBuilder(client).image(image);

    return (
        <div className={styles.root}>
            <h3>{header.en}</h3>
            {description && <p>{description.en}</p>}
            {course && <a className={styles.cta} href={courseSlug.current}>{course.title.en}</a>}
            <img className={styles.image} src={imageUrl} />
        </div>
    );
}

CourseDescription.propTypes = {
    header: PropTypes.object.isRequired,
    description: PropTypes.object,
    image: PropTypes.object,
    course: PropTypes.object,
    courseSlug: PropTypes.object,
};

export default CourseDescription;
