import React from 'react';
import PropTypes from 'prop-types';
import SimpleBlockContent from '../SimpleBlockContent';
import styles from './TextSection.module.css';

function TextSection(props) {
    const { heading, text, image } = props;
console.log(image.asset);
    return (
        <div className={styles.root}>
            <section className={styles.article}>
                <h2 className={styles.heading}>{heading.en}</h2>
                {text && <SimpleBlockContent blocks={text} />}
                {image && <img src={image.asset.url} />}
            </section>
        </div>
    );
}

TextSection.propTypes = {
    heading: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.object),
};

export default TextSection;
