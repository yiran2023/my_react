import React from 'react';

function Course(props) {
    return (
        <p>{props.term} CS {props.number}: {props.title}</p>
    );
}

export default Course;