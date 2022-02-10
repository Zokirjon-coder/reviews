import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  const checkIndex = (index)=>{
    console.log(index);
    if (index > people.length - 1){
      return 0
    }
    if (index < 0){
      return people.length - 1
    }
    return index;
  }

  const prevPerson = ()=>{
    setIndex(()=>{
      return checkIndex(index - 1);
    })
  }
  const nextPerson = ()=>{
    setIndex(()=>{
      return checkIndex(index + 1);
    })
  }

  const randPerson = () =>{
    const numberPersons = people.length;
    let randIndex = Math.trunc(numberPersons*Math.random());
    if(randIndex == index) checkIndex(randIndex++);
    setIndex(randIndex)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randPerson}>surprise me</button>
    </article>
  );
};

export default Review;
