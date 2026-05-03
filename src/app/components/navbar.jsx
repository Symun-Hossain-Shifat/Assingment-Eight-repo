'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/asset/logo.png'
import { authClient } from '@/lib/auth-client'

import { Avatar } from '@heroui/react'

function Navbarpage () {
  const [menu , setMenu] = useState('Home')

 const { data: session } = authClient.useSession()
 const user = session?.user;
//  console.log( user)

  return (
    <div className='sticky top-0 z-50'>
      <div className="navbar items-center bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      {user?(
         <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/allanimals'}>All Animals</Link></li>
        <li><Link href={'/Profile'}>Profile</Link></li>
      </ul>
      ) : (
         <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/allanimals'}>All Animals</Link></li>
      </ul>
      )}
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/allanimals'}>All Animals</Link></li>
      </ul>
    </div>
    <div > <Image  src={logo} alt="" height={'100'} width={'100'} className='border-2' /></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    
      {user? (
<ul className="menu font-bold menu-horizontal gap-4 px-1">
  <li className={`${menu === 'Home' && 'border-b-2 border-pink-600'}`}><Link onClick={() => setMenu('Home')}  href={'/'}>Home</Link></li>
        <li className={`${menu === 'all' && 'border-b-2 border-pink-600'}`}><Link onClick={() => setMenu('all')}  href={'/allanimals'}>All Animals</Link></li>

        <li className={`${menu === 'profile' && 'border-b-2 border-pink-600'}`}><Link onClick={() => setMenu('profile')}  href={'/Profile'}>Profile</Link></li>
  </ul>
      ) : (
        <ul className="menu font-bold menu-horizontal gap-4 px-1">
        <li className={`${menu === 'Home' && 'border-b-2 border-pink-600'}`}><Link onClick={() => setMenu('Home')}  href={'/'}>Home</Link></li>
        <li className={`${menu === 'all' && 'border-b-2 border-pink-600'}`}><Link onClick={() => setMenu('all')}  href={'/allanimals'}>All Animals</Link></li>
          </ul>
      )}
      
    
  </div>
  <div className="navbar-end flex gap-3">
   
   
   
  {
    user? (


<div className='flex  items-center gap-2'>
 <Avatar>
        <Avatar.Image 
        alt="John Doe" 
        src={user?.image}
        referrerPolicy='no-referrer' />
        <Avatar.Fallback><p className='text-2xl'>{user?.name[0]}</p></Avatar.Fallback>
      </Avatar>
 
   <Link href={'/signin'}>
  <button className="btn btn-neutral" onClick={async() => await authClient.signOut()}>Logout</button>
   </Link>
   
</div>



    ) : (

      <div className='flex  items-center gap-2'>
<Link href={'/signin'}>
     <button className='btn text-semibold text-white btn-neutral'>Login</button>
    </Link>
   <Link href={'/signup'}>
       <button className='btn text-semibold text-white btn-neutral'>Register</button>
   </Link>

      </div>
    )
  }
   
   
   
   
   
   
    
  </div>
</div>
    </div>
  )
}

export default Navbarpage 