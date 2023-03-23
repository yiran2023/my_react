import React, {useState} from 'react';
import CourseList from './CourseList';

function TermPage(props) {

    const courses = props.courses;
    const fallCourses = [];
    const springCourses = [];
    const winterCourses = [];

    Object.keys(courses).forEach((courseKey) => {
    const course = courses[courseKey];
    
    if (course.term === "Fall") {
        fallCourses.push(course);
    } else if (course.term === "Spring") {
        springCourses.push(course);
    } else if (course.term === "Winter") {
        winterCourses.push(course);
    }
    });

    const [term, setTerm] = useState(fallCourses);

    function FallCourse() {
        setTerm(fallCourses)
    }

    function SpringCourse() {
        setTerm(springCourses)
    }

    function WinterCourse() {
        setTerm(winterCourses)
    }

    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
      selected.includes(item)
      ? selected.filter(x => x !== item)
      : [...selected, item]
    );

    return (
        <div>
            <button onClick={FallCourse}>Fall Course</button>
            <button onClick={SpringCourse}>Spring Course</button>
            <button onClick={WinterCourse}>Winter Course</button> 
            <CourseList courses = {term} selected={selected} toggleSelected={toggleSelected}/>
        </div>
    );
}

export default TermPage;