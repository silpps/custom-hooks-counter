import { useState } from 'react';
import SingleCounter from './SingleCounter';
import './App.css';
import useField from './useField';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [name, setName] = useLocalStorage('name', '');
  const bornInput = useField('date');
  const heightInput = useField('number');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, born, height);
  }

  return (
    <div className="app-container">
      <SingleCounter />
      <SingleCounter />
      <SingleCounter />
      <form onSubmit={handleSubmit}>
        <div>
          Name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Your name is stored in localStorage: {name}</p>
        </div>
        <br/>
        <div>
          Birthdate:
          <input
            {...bornInput}
          />
        </div>
        <br/>
        <div>
          Height:
          <input
            {...heightInput}
          />
        </div>
      </form>
      <div>
        {name} {bornInput.value} {heightInput.value}
      </div>
    </div>
  );
}

export default App;