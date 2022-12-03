
import './App.css';
import FinalSignUpForm from './Components/FinalSignUpForm/FinalSignUpForm';
import FristSignUpForm from './Components/FristSignUpForm/FristSignUpForm';
import Login from './Components/Login/Login';
import SecondSignUpForm from './Components/SecondSignUpForm/SecondSignUpForm';

function App() {
  return (
    <div>
      <FristSignUpForm/>
      <SecondSignUpForm/>
      <FinalSignUpForm/>
      <Login/>
    </div>
  );
}

export default App;
