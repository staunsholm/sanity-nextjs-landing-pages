import React from 'react';
import PropTypes from 'prop-types';

function Tips(props) {
    const { texts } = props;

    if (!texts) {
        return null;
    }

    return (
        <ul className="jamiine">
            {texts.map((text) => (
                <li key={text._key}>{text.en}</li>
            ))}
        </ul>
    );
}

Tips.propTypes = {
    texts: PropTypes.array,
};

export default Tips;
