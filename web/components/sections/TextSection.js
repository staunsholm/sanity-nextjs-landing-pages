import React from 'react';
import PropTypes from 'prop-types';
import SimpleBlockContent from '../SimpleBlockContent';
import styles from './TextSection.module.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import Cta from '../Cta';

function TextSection(props) {
    const { heading, text, image, cta } = props;
    const imageUrl = imageUrlBuilder(client).image(image);

    return (
        <div className={styles.root}>
            <section className={styles.article}>
                {heading && <h2 className={styles.heading}>{heading.en}</h2>}
                {text && <SimpleBlockContent blocks={text} />}
                {cta && (
                    <Cta title={cta.title} route={cta.route} link={cta.link} />
                )}
                {image && <img className={styles.image} src={imageUrl} />}
            </section>
        </div>
    );
}

TextSection.propTypes = {
    heading: PropTypes.object,
    label: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.object,
    cta: PropTypes.object,
};

export default TextSection;
