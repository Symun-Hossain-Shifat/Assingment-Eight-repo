'use client'


import React, { useState } from 'react'
import animals  from '@/Data/animal.json'
import Link from 'next/link'


function Homepage () {
  console.log(animals)
  const [price , setPrice] = useState('')
  const filteranimal = animals.filter((animal) => {
    if(!price)return true;
    return animal.price <= Number(price);
  })
  return (
    <div >


      <div className=' w-full md:w-9/12 mx-auto flex justify-between items-center md:flex-row flex-col'>
        <h1 className='font-bold  mb-10 text-3xl text-green-900 text-center my-4 '>All Animals</h1>
      <select 
      
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="select select-secondary h-12  leading-12">
  <option disabled value=''>Filter With Price</option>
  <option value={'180000'}>Below 180000</option>
  <option value={'120000'}>Below 120000</option>
  <option value={'155000'}>Below 155000</option>
  <option value={'52000'}>Below 52000</option>
</select>

      </div>
      





      <div className=' w-10/12 md:w-8/12 mx-auto my-5 gap-10 grid grid-cols-1 md:grid-cols-2 '>
        {filteranimal.map( animal => (
          <div key={animal.id} className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={animal.image}
      className='h-60 w-full'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{animal.name}</h2>
    <p className='font-semibold'>{animal.description}</p>
    <p className='font-semibold '>Price : {animal.price}</p>
    <div className="card-actions justify-end">
    <Link href={`/details/${animal.id}`}>
    <button className="btn btn-primary">Veiw Details</button>
    
    </Link>
      
    </div>
  </div>
</div>
        ))}
      </div>
      
       </div>
  )
}

export default Homepage 