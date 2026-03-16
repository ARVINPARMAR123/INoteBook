import {useState}from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    const host = "http://localhost:5000";
    const navigate = useNavigate();

  const handleSubmit = async(e) => {
        e.preventDefault();
        const {name, email, password, cpassword} = credentials;

        if(password !== cpassword){
          props.showAlert("Password and confirm password do not match", "danger");
          return;
        }

        if(name.trim().length < 3){
          props.showAlert("Name must be at least 3 characters", "danger");
          return;
        }

        try {
          const response = await fetch(`${host}/api/auth/createuser`, {
              method: "POST",
              headers: { "content-type": "application/json"},
              body: JSON.stringify({ name,email, password}),
          });
          const json = await response.json();
          console.log(json);

          if(json.success){
              localStorage.setItem('token', json.authtoken);
              navigate("/home");
              props.showAlert("Account created successfully", "success");
          }else{
            const firstValidationError = json?.errors?.[0]?.msg;
            const errorMessage = json?.error || firstValidationError || "Invalid details";
            props.showAlert(errorMessage, "danger");
          }
        } catch (error) {
          console.error(error);
          props.showAlert("Unable to connect to server. Please try again.", "danger");
        }
    }

    const onchange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Create your iNoteBook account</h2>
        <p className="auth-subtitle">Start saving and organizing your notes.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              minLength={3}
              required
              onChange={onchange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              onChange={onchange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              minLength={5}
              required
              onChange={onchange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              minLength={5}
              required
              onChange={onchange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={
              credentials.name.trim().length < 3 ||
              credentials.email.trim() === "" ||
              credentials.password.length < 5 ||
              credentials.cpassword.length < 5
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
