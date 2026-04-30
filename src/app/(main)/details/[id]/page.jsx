

import Refreshpage from '@/app/components/refresh';
import animal from '@/Data/animal.json'



async function Dynamicpage ({params}) {
  const {id} = await params ;
  const Id = parseInt(id)
  const Data = animal.find( D => D.id === Id);
  console.log(Data)
  console.log(Id)


 

  return (
    <div className='mx-auto w-8/12 py-5'>
      
 <Refreshpage Data = {Data}></Refreshpage>
    </div>
    
  )
}

export default Dynamicpage 