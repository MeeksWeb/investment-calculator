import { useState } from 'react';
import Header from './Components/Header';
import Results from './Components/Results';
import Userinput from './Components/Userinput';



function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
    setUserInput( prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier] : +newValue,
      }
    })
  }

  return (
    <>
      <Header/>
      <Userinput 
      onChangeInput={handleChange} 
      inputUser={userInput}/>
      {inputIsValid ? <Results inputUser={userInput} initialInvestment={userInput.initialInvestment}/> : <p className='center'>Duration should be greater than 0</p>}
    </>
  );
}

export default App;
