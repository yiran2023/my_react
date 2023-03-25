import React from 'react';
import './Course.css';

const Course = ({meets, number, term, title, selected, toggleSelected}) => (
    <div className="course card m-1 p-2" onClick={() => toggleSelected(term + number)}>
    {/* <img src={product.thumbnail} className="card-img-top" alt={product.description} /> */}
    <div className={`card-body ${selected.includes(term + number) ? 'selected' : ''}`}>
        <h5 className="card-title">{term} CS {number}</h5>
        <p className="card-text">{title}</p>
        <p className="card-text">{meets}</p>
    </div>
  </div>
);

export default Course;