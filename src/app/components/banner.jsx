import banner from '@/asset/banner.jpg'
import { MdOutlineArrowBack } from 'react-icons/md';
function Bannerpage () {
  return (
    <div className='h-screen items-center text-center flex flex-col bg-cover mb-30 bg-center' style={{backgroundImage : `url(${banner.src})`}}>

        
        <div className='my-auto space-y-3'>
          <h1 className='font-bold text-3xl  '> Find Your Perfect Qurbani Animal Today</h1>
          <p className='text-[15px] font-bold '>Bangladesh’s Smart Qurbani Livestock Platform</p>
        <button  className='btn animate__animated animate-pulse mx-auto btn-warning text-white font-semibold flex items-center'>  <MdOutlineArrowBack size={20}/> Buy Now</button>

          </div>
      </div>

  )
}

export default Bannerpage 