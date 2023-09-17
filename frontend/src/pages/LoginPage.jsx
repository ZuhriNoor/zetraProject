import React from 'react'

export default function LoginPage() {
  return (
    <div className='main'>
      <div className="lp-logo">
        <img src="logo.png" alt="" />
      </div>

      <div className="lp-form">
        <h3 className='lp-title'>Login</h3>
        <p>Log into your account to purchase and sell products</p>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Enter your email' name='email'/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' name='password'/>
        <a href="">Forgot password?</a>
        <button>Login</button>
        <p>Don't have an account? <span>Register</span></p>
      </div>
    </div>
  )
}
