import {useState}from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
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
            navigate("/home");
            props.showAlert("Account created Successfully", "success")
        }else{
          props.showAlert("Invalid details", "danger")
        }
    }

    const onchange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">

          <h2 className="text-center mb-4">
            Create an account use to iNoteBook
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
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

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>

          </form>

        </div>
      </div>
    </div>
  
  )
}

export default SignUp
