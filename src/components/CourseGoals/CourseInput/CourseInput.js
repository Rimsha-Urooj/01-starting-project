import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(false);
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* adding css class dynamically */}
      <div className={`form-control ${!isValid ? 'invalid' : ''} `}>
        {/* inline style */}
        {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label> */}
        {/* <input style = {{ background: !isValid ? 'salmon': 'transparent', borderColor: !isValid ? 'red' : '#ccc'}} type="text" onChange={goalInputChangeHandler} /> */}
        
        {/* Adding css class dynamically */}
        <label >Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
