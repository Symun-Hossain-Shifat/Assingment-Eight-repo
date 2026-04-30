import React from 'react'
import animal from '@/Data/animal.json'
async function Dynamicpage ({params}) {
  const {id} = await params ;
  const Id = parseInt(id)
  const Data = animal.find( D => D.id === Id);
  console.log(Data)
  console.log(Id)
  return (
    <div className='mx-auto w-8/12 py-5'>
      <div className="grid grid-cols-2 bg-gray-50 rounded-2xl">
  <figure>
    <img
      src={Data.image}
      alt="Album" />
  </figure>
  <div className="p-4 ">
    <h2 className="card-title my-2 text-3xl">{Data.name}</h2>
    <p className='text-[15px]'>{Data.description}</p>
    <div className='flex items-center mt-3 gap-3'>
      <div className="badge badge-outline badge-success">{Data.category}</div>
    <div className="badge badge-outline badge-error">{Data.type}</div>

    </div>
    <p className=' font-semibold mt-3'>Price : {Data.price}</p>
    <p className=' font-semibold'>Weight : {Data.weight}</p>
    <p className=' font-semibold'>Age : {Data.age}</p>
    <p className=' font-semibold'>Breed : {Data.breed}</p>
    <p className=' font-semibold'>Location : {Data.location}</p>
    
  </div>
</div>

    </div>
    
  )
}

export default Dynamicpage 