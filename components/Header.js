import Image from "next/image"; 
import {SearchIcon} from "@heroicons/react/solid"


function Header() {
  return (
    <div className="sticky top-0 z-50 grid
    grid-cols-3 bg-white shadow-md p-5 md:px-10">

      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {/*  
        <img src="http://links.papareact.com/qd3" layout="fill"
        objectFit="contain"
        objectPosition="left" />
*/}

        <img src="http://links.papareact.com/qd3" alt="" />
      </div>

      {/* Middle */}
      <div>
        <input type="text" placeholder="Start your search" />
      </div>

      {/* Right */}
      <div>


      </div>

    </div>
  )
}

export default Header
