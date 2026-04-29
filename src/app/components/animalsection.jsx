import animal from '@/Data/animal.json'

async function Animalsection () {

    const Data = animal.slice(0,4)

console.log(Data)




  return (
    <div className='container mx-auto'>
        
             <h1 className='font-bold text-3xl text-green-900 text-center '>Featured animals {Data.length} Items</h1>

       <div className='grid  w-8/12 mx-auto mt-5 p-4 gap-5 bg-gray-50 justify-center  grid-cols-1 md:grid-cols-2'>
        {Data.map( D => (
            <div key={D.id} className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{D.name}</h2>
    <p>{D.description}</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>
        ))}
       </div>
    </div>
  )
}

export default Animalsection 