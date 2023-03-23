import React, {useState} from 'react';
import CourseList from './CourseList';
import Modal from './Modal';
import Cart from './Cart';

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

    // Modal State
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <div>
            <button onClick={FallCourse}>Fall Course</button>
            <button onClick={SpringCourse}>Spring Course</button>
            <button onClick={WinterCourse}>Winter Course</button> 
            <div class="d-flex justify-content-end">
                <button className="btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4"></i></button>
                <Modal open={open} close={closeModal}>
                    <Cart selected={selected} />
                </Modal>
            </div>
            <CourseList courses = {term} selected={selected} toggleSelected={toggleSelected}/>
        </div>
    );
}

export default TermPage;