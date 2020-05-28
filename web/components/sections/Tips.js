import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tips.module.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';

function Tips(props) {
    const { texts, image } = props;
    const imageUrl = imageUrlBuilder(client).image(image);

    if (!texts) {
        return null;
    }

    return (
        <div className={styles.root}>
            <div
                className={styles.hovering}
                style={{
                    backgroundImage: `url(${
                        image
                            ? imageUrl
                            : '/static/images/Jamiine_profile_02@4x.png'
                    })`,
                }}
            />
            <ul className={styles.bubbles}>
                {texts.map((text) => (
                    <li className={styles.speechBubble} key={text._key}>{text.en}</li>
                ))}
            </ul>
        </div>
    );
}

Tips.propTypes = {
    texts: PropTypes.array,
};

export default Tips;
