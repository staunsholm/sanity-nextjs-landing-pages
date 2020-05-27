import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tips.module.css';

function Tips(props) {
    const { texts } = props;

    if (!texts) {
        return null;
    }

    return (
      <div className={styles.root}>
        <ul className={styles.bubbles}>
            {texts.map((text) => (
                <li key={text._key}>{text.en}</li>
            ))}
        </ul>
      </div>
    );
}

Tips.propTypes = {
    texts: PropTypes.array,
};

export default Tips;
