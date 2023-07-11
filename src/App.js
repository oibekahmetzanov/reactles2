import { useState } from 'react';
import './App.css';

function App() {
  const [regist, setRegist] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    if (firstName !== '' && lastName !== '' && email !== '') {
      setRegist('Success! Thank you for registering');
    } 


    // setRegist('Success! Thank you for registering');
  };

  return (
    <div className="App">
      <div className="div_regist">{regist}</div>
      <input
        type="text"
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button
        className="but_regist"
        type="submit"
        onClick={handleRegister}
      >
        register
      </button>
    </div>
  );
}

export default App;