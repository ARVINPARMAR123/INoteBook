import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const host = "http://localhost:5000";
    let navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);

        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            // window.location.href = "/";
        }else{
            alert("Invalid Credentials");
        }
    }

    const onchange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onchange} required  />
                    <div id="passHelp" className="form-text">We'll never share your password with anyone else.</div>
                </div>
                <button disabled={credentials.email === "" || credentials.password === ""} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
