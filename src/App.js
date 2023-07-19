import { useState } from 'react';
import List from './components/List';
import './App.css';

function App()  {
    const [isShow, setIsShow] = useState(true);

  return (
    <div>
        {isShow && <List />}
        <button onClick={()=> setIsShow(!isShow)}>Toggle</button>      
    </div>
  )
}

export default App
