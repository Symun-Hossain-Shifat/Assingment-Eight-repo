
 import animal from '@/Data/animal.json'
async function Animalsection () {
  
    const Data =  animal.slice(0,4) 

console.log(Data)




  return (
    <div className='container mx-auto'>
        
             <h1 className='font-bold  mb-10 text-3xl text-green-900 text-center '>Featured animals {Data.length} Items</h1>

       <div className='grid w-full md:w-8/12 mx-auto mt-5 p-4 gap-5 bg-gray-50 justify-center  grid-cols-1 md:grid-cols-2'>
        {Data.map( D => (
            <div key={D.id} className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title font-semibold text-2xl">{D.name}</h2>
    <p > {D.description}</p>
  </div>
  <figure>
    <img
    className='h-60 w-full'
      src={D.image}
      alt="Shoes" />
  </figure>
</div>
        ))}
       </div>
    </div>
  )
}

export default Animalsection 