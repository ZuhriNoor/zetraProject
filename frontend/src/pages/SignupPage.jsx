import React from 'react'

export default function LoginPage() {
  return (
    <div className='main'>
      <div className="sp-logo">
        <img src="logo.png" alt="" />
      </div>

      <div className="sp-form">
        <h3 className='sp-title'>Register</h3>
        <p>Enter your personal information</p>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='Enter your username' name='username'/>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Enter your email' name='email'/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' name='password'/>
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" placeholder='Enter your password again' name='cpassword'/>
        <button>Register</button>
        <p>Already have an account? <span>Login</span></p>
      </div>
    </div>
  )
}
