import React, {useState} from 'react';
import '../App.css'
import axios from 'axios';
export default function LoginForm({ displayLogin, handleSwitch }) {
 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const baseURL='http://127.0.0.1:8000/api/v1/';
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '' ) {
      setError(true);
      setInvalid(false);
    } else {
      signin();
      setError(false);
    }
  };
  function signin(){
    let payload = {
      email: email,
      password: password,
    };
    let res = axios.post(baseURL+"login",payload)
    .then(function (response) {
        console.log(response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  const errorMessage = () => {
    return (
      <div className="error" style={{display: error ? 'block' : 'none',}}>
        <p>Please enter all the fields</p>
      </div>
    );
  };
  const invalidMessage = () => {
    return (
      <div className="invalid" style={{display: invalid ? 'block' : 'none',}}>
        <p>Invalid credentials, please try again</p>
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
        {invalidMessage()}
      </div>
    </div>
  );
}