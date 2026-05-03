import 'animate.css'
import Animalsection from "../components/animalsection";
import Bannerpage from "../components/banner";
import Descriptionpage from "../components/description";


export default function Home() {


  return (
    <div className="space-y-10">
      <Bannerpage></Bannerpage>


      <Animalsection></Animalsection>
      <Descriptionpage></Descriptionpage>
      
    </div>
  );
}
