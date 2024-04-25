import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import upper, {text1, text2, text3} from './file1'
import obj, {males, females} from './file2'
import { MultiWelcome } from './file3'
import JokeComponent from './file4'

function App() {

  const person = obj;
  const {firstName, email} = person;
  console.log(...males, ...females);
  console.log(...males,"Kurt", "Helle", ...females, "Tina");
  const personv2 = {...person, phone: 22433323, friends:[...males, ...females]};
  console.log(personv2);
  const [showJoke, setShowJoke] = useState(false);

const handleClick = () => {
  setShowJoke(prevState => !prevState);
}

  return (
    <>
      <h1>Ex: 1</h1>
      <p>{upper("Uppercase function!")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <h2>Ex: 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>
      <h2>Ex: 3</h2>
      <MultiWelcome />
      <button onClick={()=> handleClick()}>Click me for jokes every ten seconds</button>
      {showJoke && <JokeComponent/>}
    </>
  )
}

export default App
