// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      
          <h4>Welcome</h4>
          <Input/>
          <Button text='Cancel' />
          <Button text='OK' />
          <Link text='English'/>
          <Link text='Ukrainian'/>

     </div>
  );
}

export default App;

