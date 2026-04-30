'use client'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Refreshpage ({Data}) {
  
  const clickhandle = (e) => {
    e.preventDefault();
   toast.success('Booking Successfull')
  

  setTimeout (() => {
e.target.reset();
  } , 1000 )
}

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 rounded-2xl">
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

<form onSubmit={clickhandle}>
<fieldset className="fieldset mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-2xl">Book Now</legend>

  <label className="label">Name</label>
  <input type="text"  required className="input" placeholder="Name" />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Address</label>
  <input type="text" required className="input" placeholder="Address" />

  <label className="label">Number</label>
  <input type="number" required className="input" placeholder="Number" />


  

  <button type="submit" className="btn btn-neutral mt-4">Book Now</button>
</fieldset>
</form>
<ToastContainer></ToastContainer>

 </div>
  )
}

export default Refreshpage 