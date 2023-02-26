import React from 'react';
import Course from "./Course"
import '../Courses.css';

function CourseList(props) {
    return (
        <div className="course-list">
            {console.log(Object.values(props.courses))}
            { Object.values(props.courses).map(({key, meets, number, term, title}) => <Course key={number} meets={meets} number={number} term={term} title={title}/>) }
        </div>
    );

    // for (const {
    //     1: {meets, number, term, title}
    // } of Object.entries(props.courses)) {
    //     result += <Course key = {number} meets = {meets} number = {number} term = {term} title = {title}/>
    // }
    // return result;
}

export default CourseList;