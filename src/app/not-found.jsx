import Link from "next/link"
import { MdOutlineArrowBack } from "react-icons/md"


function Notfoundpage() {
  return (
    <div className=" flex flex-col justify-center text-center h-screen ">
      <div className="my-auto space-y-3">
        <p className="font-extrabold  text-3xl text-green-900">This URL is Invalid <br />  <span className="font-semibold text-2xl text-green-900">Please Enter Right URL</span></p>
      <Link href={'/'}> <button className="btn flex items-center btn-secondary"> <MdOutlineArrowBack size={20} /> Back Home</button></Link>

      </div>
      
    </div>
  )
}

export default Notfoundpage