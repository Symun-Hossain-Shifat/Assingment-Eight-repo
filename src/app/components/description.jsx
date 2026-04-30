import React from 'react'
import Marquee from "react-fast-marquee";


function Descriptionpage () {
    const Tips = [
  "Choose healthy and disease-free animals",
  "Check proper age (Cow 2+ years, Goat 1+ year)",
  "Follow Islamic rules during Qurbani",
  "Ensure clean and safe slaughtering place",
  "Distribute meat properly among poor people",
  "Store meat in hygienic conditions",
];
    
const breeds = [
  {
    name: "Black Bengal Goat",
    type: "Goat",
    origin: "Bangladesh",
    image: "/image/goat.png",
     description:
      "Famous Bangladeshi breed known for high-quality meat, fast growth, and strong disease resistance.",
  },
  {
    name: "Jamunapari Goat",
    type: "Goat",
    origin: "India",
    image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800",
     description:
      "Large-sized goat breed with long ears, known for both milk production and meat quality.",
  },
  {
    name: "Sahiwal Cattle",
    type: "Cow",
    origin: "Pakistan",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg",
    description:
      "One of the best dairy breeds, highly heat-tolerant and produces rich milk with good fat content.",
  },
  {
    name: "Brahman Cattle",
    type: "Cow",
    origin: "USA",
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=800",
    description:
      "Well-known for heat resistance, adaptability, and strong body structure, ideal for tropical climates.",
  },
];
  return (
    <div className='space-y-20'>
        <div className='text-center my-5'>
            <h2 className='text-2xl font-bold text-green-900'>Qurbani Tips</h2>
            <div className='justify-text container mt-5 mx-auto gap-3'>
                <Marquee className=' container mx-auto' pauseOnHover='true'>
                    {Tips.map( (Tip , index)  => (
                    <div key={index} className='bg-gray-100 mx-5  p-4  rounded-sm gap-5'>
                        <p  className='text-xl mx-5 font-semibold '>{Tip}</p>

                    </div>
                        
                    
                ))}
  
                </Marquee>
                
            </div>
           
        </div>
         <div  className='text-center my-5'>
            <h1 className='text-2xl mb-5 font-bold text-green-900'>Top Breeds</h1>

            <div className='flex gap-5'>
                <Marquee className=' container mx-auto'  direction="right">
                    {breeds.map( (breed , index) => (
                    <div key={index} className="card w-100 text-left bg-base-100 mx-5 shadow-sm">
  <figure>
    <img
      src={breed.image}
      className='h-60 w-100'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {breed.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{breed.description}</p>
    <div className=" flex items-center justify-between">
        
             <button className='btn btn-neutral text-white font-semibold flex items-center'>   Buy Now</button>
     
        <div className=' flex gap-3'>
            <div className="badge badge-outline badge-primary">{breed.type}</div>
      <div className="badge badge-outline badge-warning">{breed.origin}</div>

        </div>
      
    </div>
  </div>
</div>
                    
                ))}
  
                </Marquee>
                

            </div>
                

            </div>
    </div>
  )
}

export default Descriptionpage 