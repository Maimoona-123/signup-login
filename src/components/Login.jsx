import React from 'react'


const LoginForm = ({heading}) => {
  return (
    <div className='main-div'>
      <div className='div2' >
        <div className="wrapper">
          <h1>Login</h1>
          <div className="form-container">
            <form action="">
                <label htmlFor="abc">Name</label>
              <input type='name' placeholder='Enter your name' />
              <br />
              <br />
              <label htmlFor="abc">Passwrd</label>
              <input type="password" placeholder='Enter password'/>
               <p >Remember me.</p>
               <p className='forgot'><a href="">Forgot password</a></p>
               <button className='btn'>Login</button>
<img className='img2' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid" alt="" />

          </form>


          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginForm