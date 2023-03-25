import { useState } from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import LoginPage from './components/navigation/loginPage/loginPage';
import RegisterPage from './components/navigation/RegisterPage/RegisterPage';
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginPage onFormSwitch={toggleForm} /> : <RegisterPage onFormSwitch={toggleForm} />
      }
      </div>
   
  );
}

export default App;
