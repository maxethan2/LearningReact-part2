import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import reactImg from '../src/Images/reactjs-icon 2.png'

const App = () => {
  return (
    <div className='conatiner'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
