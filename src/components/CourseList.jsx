import React from 'react';
import Course from "./Course"
import '../Courses.css';

function CourseList(props) {
    return (
        <div className="course-list">
            {console.log(Object.values(props.courses))}
            {Object.values(props.courses).map(({key, meets, number, term, title}) => <Course key={term + number} meets={meets} number={number} term={term} title={title}/>) }
        </div>
    );
}

export default CourseList;