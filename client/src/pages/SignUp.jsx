import React from 'react'
import { Link } from 'react-router-dom'
import { FloatingLabel, Label } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5'>
        <div className='flex-1'>
          <Link to="/" className='font-bold  text-4xl'>
            <span className='px-2 py-1 rounded bg-gradient-to-r from-cyan-500 to-blue-500 dark:text-white'>Post</span>
            Hub
          </Link>
          <p className='m-2'>
            This is a Test Prooject to check for sign in And sign out
          </p>
        </div>
        <div className=' flex-1'>
          <form className='flex flex-col gap-3'>

            <div>
              {/* <FloatingLabel variant="standard" label="Your Username" /> */}
              <p>Your Username</p>
              <TextInput type='text' placeholder='Username' id='username'></TextInput>
            </div>
            <div>
              {/* <FloatingLabel variant="standard" label="Your Email" /> */}
              <p>Your Email</p>
              <TextInput type='text' placeholder='Email' id='email'></TextInput>
            </div>
            <div>
              {/* <FloatingLabel variant="standard" label="Your Password" /> */}
              <p>Your Password</p>
              <TextInput type='text' placeholder='Password' id='password'></TextInput>
            </div>
            <button className='text-white font-semibold p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500'>Sign Up</button>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to='/sign-in'>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp