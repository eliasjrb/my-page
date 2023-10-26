"use client"

import Image from "next/image";
import { FaBars, FaXmark} from "react-icons/fa6";
import { useState } from "react";
import BtnTema from "@/components/BtnTema";



export default function Header() {
  const [menu, setMenu] = useState("top-[-100%]")
  const [tema, setTema] = useState("dark")

  const menuToggle = () => {
    if (menu === "top-[-100%]") {
      setMenu("top-[10%]")
    } else {
      setMenu("top-[-100%]")
    }
  }

  const mudarTema = () => {
    alert(tema === 'dark')
    tema === 'dark' ? setTema("light") :setTema("dark")
  }


  

  return (
    <header>
      <nav className="container max-w-5xl mx-auto px-4 h-24 flex justify-between items-center" id="top">
        <div className="flex bg-sky-600 dark:bg-transparent border border-sky-950 hover:border-1 hover:border-sky-600 hover:bg-sky-800 rounded-full">
          <a href="#top">
            <Image
              src="/eb-logo.svg"
              alt="Logo elias braga"
              className="rounded-lg object-cover"
              width={56}
              height={56}
              priority={true}
              quality={100}
            />
          </a>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center md:hidden">
            {menu === "top-[-100%]" ? (<FaBars size={36} className="" onClick={menuToggle} />) : (
              <FaXmark size={36} className="" onClick={menuToggle} />
            )}
          </div>
          <div
            className={`border rounded-lg md:border-none md:static absolute z-10 dark:bg-sky-950 md:min-h-fit min-h-[30vh] left-0 ${menu} md:w-auto w-full flex items-center justify-center px-0 md:px-5`}>
            <ul className="md:space-x-2 flex flex-col md:flex-row text-sky-950 dark:text-gray-200 text-left md:items-center md:gap-[4vw] gap-8 w-full">
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#sobremim" className="text-sm font-medium">Sobre mim</a>
              </li>
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#projetos" className="text-sm font-medium">Projetos</a>
              </li>
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#habilidades" className="text-sm font-medium">Habilidades</a>
              </li>
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#falecomigo" className="text-sm font-medium">Fale
                  comigo</a>
              </li>
            </ul>
          </div>
          <div>
            <BtnTema />
          </div>
        </div>
      </nav>
    </header>
  )
}