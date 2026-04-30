import React from 'react'
import animals  from '@/Data/animal.json'
import Link from 'next/link'


function Homepage () {
  console.log(animals)
  return (
    <div >


      <div className='w-9/12 mx-auto flex justify-between items-center md:flex-row flex-col'>
        <h1 className='font-bold  mb-10 text-3xl text-green-900 text-center my-4 '>All Animals</h1>
      <select defaultValue="Pick a color" className="select appearance-none">
  <option disabled={true}></option>
  <option>All</option>
  <option>120000</option>
  <option>180000</option>
  <option>155000</option>
  <option>52000</option>
</select>

      </div>
      





      <div className='w-8/12 mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 '>
        {animals.map( animal => (
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