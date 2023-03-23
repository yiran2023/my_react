import Course from "./Course"
import '../CourseList.css'

const CourseList = (props) => (
  <div className="course-list">
    {
        props.courses.map(({key, meets, number, term, title}) => <Course key={term + number} meets={meets} number={number} term={term} title={title} selected={props.selected} toggleSelected={props.toggleSelected}/>)
    }
  </div>
);

export default CourseList;