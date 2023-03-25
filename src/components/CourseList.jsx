import Course from "./Course"
import './CourseList.css'

const CourseList = ({courses, selected, toggleSelected}) => (
  <div className="course-list">
    {
        courses.map(({key, meets, number, term, title}) => <Course key={term + number} meets={meets} number={number} term={term} title={title} selected={selected} toggleSelected={toggleSelected}/>)
    }
  </div>
);

export default CourseList;