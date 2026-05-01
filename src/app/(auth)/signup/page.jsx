'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify';



function signuppage () {


  const Handlesignup = async (e) => {
     e.preventDefault()
     const form = e.target
     const email = form.Email.value
     const password = form.Password.value
     const image = form.Image.value
     const name = form.Name.value
     console.log(email , password , image , name )
      
     const { data, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: image,
    callbackURL: "/",
});



if(data){
 toast.success('Registration successfull')
}
if(error){
  toast.error(error.message)
}


 console.log(data)
 console.log(error)

  }




  return (
    <div className='border items-center h-screen'>

        <div className='flex flex-col justify-center text-center mt-5 p-5  bg-white space-y-2 mx-auto  my-auto border-base-300 rounded-box w-xs border'>
            <form onSubmit={Handlesignup} >  
                 
 <fieldset className="space-y-2 text-left fieldset">
  <h1 className='text-center text-2xl font-bold '>Register</h1>

  <label className="label">Name</label>
  <input type="text" required className="input" name='Name' placeholder="Name" />

  <label className="label">Email</label>
  <input type="email" required className="input" name='Email' placeholder="Email" />


  <label className="label">Image URL</label>
  <input type="URL" required className="input" name='Image' placeholder="Image URL" />

  <label className="label">Password</label>
  <input type="password" required className="input" name='Password' placeholder="Password" />

  <button className="btn btn-neutral mt-4">Register</button>
   
  
  <p className='text-center '>Already Have Account ? {' '} <Link href="/signin" className='!text-blue-600 hover:underline' >Sign in</Link> </p>

</fieldset>
            </form>


            <div className="divider text-black">OR</div>

            <Link href={'/'}>
            <button className="btn w-full bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
            </Link>
  

           
        </div>
    </div>
  )
}

export default signuppage 