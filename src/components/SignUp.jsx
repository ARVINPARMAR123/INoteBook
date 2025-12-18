import {useState}from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    const host = "http://localhost:5000";
    let navigate = useNavigate();

  const handleSubmit = async(e) => {
        e.preventDefault();
        const {name, email, password} = credentials;

        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({ name,email, password}),
        });
        const json = await response.json();
        console.log(json);

        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
    }

    const onchange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className='container mt-3'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 htmlForm-check">
          <label className="htmlForm-check-label" htmlFor="name">UserName</label>
          <input type="text" className="htmlForm-check-input" id="name" name='name' onChange={onchange} />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="htmlForm-label">Email</label>
          <input type="email" className="htmlForm-control" id="email" name='email' aria-describedby="emailHelp" onChange={onchange} />

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="htmlForm-label">Password</label>
          <input type="password" className="htmlForm-control" id="password" name='password' onChange={onchange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="htmlForm-label">Confirm Password</label>
          <input type="password" className="htmlForm-control" id="cpassword" onChange={onchange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
