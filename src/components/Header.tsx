"use client"

import Image from "next/image";
import { FaArrowDown, FaBars, FaChevronDown, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import BtnTema from "@/components/BtnTema";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IFaleComigoProps {
  props: {
    sobre: string;
    projetos: string;
    habilidades: string;
    faleComigo: string;
    linguagem: {
      nome:string;
      nomeBr:string;
      nomeUs:string;
    };
  }
}


export default function Header({ props }: IFaleComigoProps) {
  const [menu, setMenu] = useState("top-[-100%]")
  const [tema, setTema] = useState("dark")
  const [lang, setLang] = useState(false);
  const params = usePathname()

  function openClose() {
    setLang(!lang)
  }

  const menuToggle = () => {
    if (menu === "top-[-100%]") {
      setMenu("top-[2%]")
    } else {
      setMenu("top-[-100%]")
    }
  }

  const mudarTema = () => {
    tema === 'dark' ? setTema("light") : setTema("dark")
  }




  return (
    <header>
      <nav className="container max-w-5xl mx-auto px-4 h-24 flex justify-between items-center" id="top">
        <div className="flex bg-sky-600 dark:bg-transparent border border-sky-950 hover:border-1 hover:border-sky-600 hover:bg-sky-800 rounded-full">
          <a href="#top">
            <Image
              src="/img/eb-logo.svg"
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
            {menu === "top-[-100%]" && (<FaBars size={36} className="" onClick={menuToggle} />)}
          </div>
          <div
            className={`md:static absolute z-10 dark:bg-transparent md:min-h-fit min-h-[30vh] left-0 ${menu}  md:w-auto w-full flex items-center justify-end px-0 md:px-5`}>
            <ul className="md:space-x-2 flex dark:bg-sky-950 flex-col md:flex-row text-left md:items-center md:gap-[4vw] gap-3 md:gap-8 w-1/2 md:w-full right-0 mr-5 border md:border-none rounded-lg shadow-2xl md:shadow-none">
              <li className="flex md:hidden justify-end pr-3 pt-3">
                <FaXmark size={24} className="" onClick={menuToggle} />
              </li>
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#sobremim" className="text-sm font-medium">{props.sobre}</a>
              </li>
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#projetos" className="text-sm font-medium">{props.projetos}</a>
              </li>
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#habilidades" className="text-sm font-medium">{props.habilidades}</a>
              </li>
              <li className="hover:bg-sky-900 hover:text-gray-100 p-1 text-center rounded">
                <a href="#falecomigo" className="text-sm font-medium">{props.faleComigo}</a>
              </li>
              <li className={`hover:bg-sky-900 hover:text-gray-100 ${lang ? 'bg-sky-900 text-gray-100' : ''}  p-1 text-center rounded`}>
                <div className="relative inline-block">
                  <a className="text-sm font-medium flex items-center justify-center space-x-2 cursor-pointer" onClick={openClose}><span>{props.linguagem.nome}</span> <FaChevronDown size={14} /></a>
                  {lang && (
                    <div className="absolute border shadow-xl text-sky-950 w-64 dark:bg-slate-900 border py-2 px-3 rounded-md mt-2 top-[4vh] transform -translate-x-1/2">
                      <ul className="space-y-2">
                        <li>
                          <Link className={`flex justify-center space-x-3 hover:bg-slate-300 dark:text-gray-200 dark:hover:bg-slate-700 ${params === "/pt-BR"? 'bg-slate-300 dark:bg-slate-700 ' : ''} rounded-md p-1`} href="/pt-BR">
                           <span >{props.linguagem.nomeBr}</span>
                          </Link>
                        </li>
                        <li>
                          <Link className={` flex justify-center space-x-3 hover:bg-slate-300 dark:text-gray-200 dark:hover:bg-slate-700 ${params === "/en-US"? 'bg-slate-300dark:bg-slate-700' : ''} rounded-md p-1`} href="/en-US">
                            <span>{props.linguagem.nomeUs}</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li className="flex justify-center items-center my-5">
                <BtnTema />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}