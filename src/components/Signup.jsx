import React from 'react'

const SignupForm = () => {
  return (
    <div className='main-div'>
      <div className='div2' >
        <div className="wrapper">
          <h1>signup</h1>
          <div className="form-container">
            <form action="">
              <p className='para'>Already have an account ? <a href='#'>Login here</a></p>
              <br />
                <label htmlFor="abc">Name</label>
              <input type='name' placeholder='Enter your name' />
              <br />
              <br />
              <label htmlFor="abc">Email</label>
              <input type='email' placeholder='Enter your Email here' />
              <br />
              <br />
              <label htmlFor="abc">Passwrd</label>
              <input type="password" placeholder='Enter password'/>
              <input className='checkbox' type="checkbox" />
               <p className='para2'>By signing up you agree to receive updates and special offers..</p>
               <button className='btn'>Submit</button>

               <img className='img' src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" />
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SignupForm