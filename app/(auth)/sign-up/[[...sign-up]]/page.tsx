import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex justify-center h-screen w-full items-center'>
        <SignUp/>
    </main>
  )
}

export default SignInPage