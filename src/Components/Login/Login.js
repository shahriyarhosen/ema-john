import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    const handleUserSignIn = (event) => {
        event.preventDefault();
        // signInWithEmailAndPassword(email, password);
      };
  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Login</h4>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
            //   onBlur={handleEmailValue}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            //   onBlur={handlePasswordValue}
              type="password"
              password="email"
              id=""
              required
            />
          </div>
          {/* {loading && <p>Loading...</p>} */}
          {/* <p>{error?.message}</p> */}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="or-line">
          <hr />
          <span>Or</span>
          <hr />
        </div>
        <div>
          <div className="continue-google">
            <button>
            <img src="https://i.ibb.co/5BHNVLD/google.png" alt="" /> 
            <p>Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
