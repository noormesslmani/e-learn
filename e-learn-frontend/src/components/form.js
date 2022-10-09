import React, {useState} from 'react';
import '../App.css'
import axios from 'axios';
export default function RegisterForm({ displayRegister, handleSwitch }) {
 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [exist, setExist] = useState(false);
  const baseURL='http://127.0.0.1:8000/api/v1/';
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || phone === '' || username === '') {
      setError(true);
    } else {
      register();
    }
  };
  function register(){
    let payload = {
      full_name: name,
      phone: phone,
      email: email,
      username: username,
      password: password,
      type:'student'
    };
    let res = axios.post(baseURL+"register",payload)
    .then(function (response) {
        console.log(response.data);
        if (response.data.result=='ok'){
          setSubmitted(true);
          setError(false);
          setExist(false);
        }
        else{
          setExist(true)
          setSubmitted(false);
          setError(false);
        }
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
  }
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
  const alreadyexistMessage = () => {
    return (
      <div className="exist" style={{display: exist ? 'block' : 'none',}}>
        <p>Email or username is taken </p>
      </div>
    );
  };
  return (
    <div className="form" style={{display: displayRegister ? 'block' : 'none',}} >
      <div>
        <h2>Create an account</h2>
      </div>
      <form>
        <label className="label">Full Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" placeholder='Full Name' />

         <label className="label">Phone</label>
        <input onChange={handlePhone} className="input"
          value={phone} type="number" placeholder='Phone' />

        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" placeholder='Email' />

        <label className="label">Username</label>
        <input onChange={handleUsername} className="input"
          value={username} type="text" placeholder='Username' />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" placeholder='Password' />
 
        <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
        <p>Already have an account? Click <span className='switch-to-signin' onClick={handleSwitch}>here</span> to login</p>
      </form>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
        {alreadyexistMessage()}
      </div>
    </div>
  );
}