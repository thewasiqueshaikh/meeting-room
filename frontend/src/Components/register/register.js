import React from 'react'
import '../login/login.css';
const Register = () => {
  return (
    <>
        
        <div className="form signup">
                <span className="title">Registration</span>

                <form action="#">
                    <div className="input-field">
                        <input type="text" placeholder="Enter your name" required/>
                        <i className="uil uil-user"></i>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Enter your email" required/>
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className="input-field">
                        <input type="password" className="password" placeholder="Create a password" required/>
                        <i className="uil uil-lock icon"></i>
                    </div>
                    <div className="input-field">
                        <input type="password" className="password" placeholder="Confirm a password" required/>
                        <i className="uil uil-lock icon"></i>
                        <i className="uil uil-eye-slash showHidePw"></i>
                    </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="sigCheck"/>
                            <label for="sigCheck" className="text">Remember me</label>
                        </div>
                        
                        <a href="#" className="text">Forgot password?</a>
                    </div>

                    <div className="input-field button">
                        <input type="button" value="Login Now"/>
                    </div>
                </form>
            </div>
    </>
  )
}

export default Register