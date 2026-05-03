'use client'

import { Usereditpage } from '@/app/components/useredit';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';

import React from 'react'


function Profilepage () {

  const { data: session } = authClient.useSession()
   const user = session?.user;
  //  console.log( user)



  return (
    <div className='items-center justify-center text-center'>
  <Card className= 'w-10/12 md:w-5/12 mx-auto mt-10 border'>
     <Avatar className='mx-auto'>
             <Avatar.Image 
             alt="John Doe" 
             src={user?.image}
             width={100}
             height={100}
             referrerPolicy='no-referrer' />
             <Avatar.Fallback><p className='text-2xl'>{user?.name[0]}</p></Avatar.Fallback>
           </Avatar>
           <h1 className='font-bold text-3xl'>{user?.name}</h1>
           <h1 className='font-semibold text-gray-700'>{user?.email}</h1>
           <div className='justify-center'> <Usereditpage></Usereditpage></div>
          
  </Card>
     
    </div>
  )
}

export default Profilepage 