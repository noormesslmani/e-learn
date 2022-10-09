import React, {useState} from 'react';
import '../App.css'
 
export default function LoginForm({ displayLogin, handleSwitch }) {
 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '' ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  const successMessage = () => {
    return (
      <div className="success" style={{display: submitted ? 'block' : 'none',}}>
        <p>Successfully registered!</p>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="error" style={{display: error ? 'block' : 'none',}}>
        <p>Please enter all the fields</p>
      </div>
    );
  };
  return (
    <div className="form" style={{display: displayLogin ? 'block' : 'none',}} >
      <div>
        <h2>Login</h2>
      </div>
      <form>
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" placeholder='Email' />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" placeholder='Password' />
 
        <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
        <p>Don't have an account? Click <span className='switch-to-register' onClick={handleSwitch}>here</span> to create one</p>
      </form>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
    </div>
  );
}