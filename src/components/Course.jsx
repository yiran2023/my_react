import React from 'react';
import '../Course.css';

const Course = (props) => (
    <div className="course card m-1 p-2" onClick={() => props.toggleSelected(props.term + props.number)}>
    {/* <img src={product.thumbnail} className="card-img-top" alt={product.description} /> */}
    <div className={`card-body ${props.selected.includes(props.term + props.number) ? 'selected' : ''}`}>
        <h5 className="card-title">{props.term} CS {props.number}</h5>
        <p className="card-text">{props.title}</p>
        <p className="card-text">{props.meets}</p>
    </div>
  </div>
);

export default Course;