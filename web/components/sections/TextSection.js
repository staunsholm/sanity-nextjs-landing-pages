import React from 'react';
import PropTypes from 'prop-types';
import SimpleBlockContent from '../SimpleBlockContent';
import styles from './TextSection.module.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';

function TextSection(props) {
    const { heading, text, image } = props;
    const imageUrl = imageUrlBuilder(client).image(image);

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <h2 className={styles.heading}>{heading.en}</h2>
                {text && <SimpleBlockContent blocks={text} />}
                {image && <img src={imageUrl} />}
            </section>
        </div>
    );
}

TextSection.propTypes = {
    heading: PropTypes.object,
    label: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.object,
};

export default TextSection;
