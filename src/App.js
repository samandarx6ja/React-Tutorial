import React,{useState} from 'react';
function App() {

  const [likes, setLikes] = useState(6);
  const [value, setValue] = useState('Input')
  function inc(){
    setLikes(likes + 1)
  }

  function dec(){
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{ likes }</h1>
      <h1>{ value }</h1>
      <input type='text'  onChange={e => setValue(e.target.value)} />
      <button onClick={inc} > Increment</button>
      <button onClick={dec} > Decrement</button>
    </div>
  );
}

export default App;
