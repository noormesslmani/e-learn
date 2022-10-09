import React, {useState} from 'react';
import '../App.css'
 
export default function Form() {
 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
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
    <div className="form">
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
          value={email} type="text" placeholder='Username' />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" placeholder='Password' />
 
        <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
      </form>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
    </div>
  );
}