import React from 'react';

function Course(props) {
    // return (
    //     <p>{props.term} CS {props.number}: {props.title}</p>
    // );
    return (
        <div className="card m-1 p-2">
            {/* <img src={product.thumbnail} className="card-img-top" alt={product.description} /> */}
            <div className="card-body">
                <h5 className="card-title">{props.term} CS {props.number}</h5>
                <p className="card-text">{props.title}</p>
                <p className="card-text">{props.meets}</p>
            </div>
        </div>
    );
}

export default Course;