import { useState } from 'react';
import classes from './WorkingWithState.module.css';

function WorkingWithState() {
  const [enteredBody, setEnteredBody] = useState('');
  
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  return(
    
  )



}
