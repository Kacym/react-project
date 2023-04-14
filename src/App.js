import { useState } from 'react'
import "./App.css"
import Button from './components/tools/button/Button';
import List from './components/tools/list/List';

const App = () => {
  // const [state, setState] = useState(false);
  
  // function checkFunc() {
  //   setState(!state)
  // }
  return (
    <div className='App'>
      {/* <input 
        type='checkbox' 
        
        onChange={checkFunc}/> */}
      {/* {
        state ? <span>Отмечено</span> : <span>Не отмечено</span>
      } */}
  {/* //     <Button title="Click"/> */}
      <List/>
    </div>
  )
}

export default App