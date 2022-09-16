import React from 'react'

const Register = () => {
  return (
    <div className='form-container'>
        <div className="form-wraper">
            <span className="logo">Chat App</span>
            <form>

                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email'/>
                <input type="password"  placeholder='password'/>
                <input type="file" />
            </form>
            
        </div>
    </div>
  )
}

export default Register