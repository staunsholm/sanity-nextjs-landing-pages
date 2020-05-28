import React from 'react';
import PropTypes from 'prop-types';

function LessonList(props) {
    const { lessons } = props;

    return (
        <ul>
            {lessons.map((lesson) => (
                <li key={lesson._id}>
                    <a href={`/${lesson.slug.current}`}>{lesson.title.en}</a>
                </li>
            ))}
        </ul>
    );
}

LessonList.propTypes = {
    lessons: PropTypes.arrayOf(PropTypes.object),
};

export default LessonList;
