import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const host = "http://localhost:5000";
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            });
            const json = await response.json();
            console.log(json);

            if(json.success){
                localStorage.setItem('token', json.authtoken);
                props.showAlert("Logged in Successfully", "success")
                navigate("/home");
            }else{
                const firstValidationError = json?.errors?.[0]?.msg;
                const errorMessage = json?.error || firstValidationError || "Invalid credentials";
                props.showAlert(errorMessage, "danger")
            }
        } catch (error) {
            console.error(error);
            props.showAlert("Unable to connect to server. Please try again.", "danger")
        }
    }

    const onchange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='auth-wrapper'>
            <div className="auth-card">
                <h2 className="auth-title">Login to iNoteBook</h2>
                <p className="auth-subtitle">Access your notes with your account.</p>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text auth-helper">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onchange} required  />
                        <div id="passHelp" className="form-text auth-helper">We'll never share your password with anyone else.</div>
                    </div>
                    <button disabled={credentials.email === "" || credentials.password === ""} type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
