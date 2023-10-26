"use client"
import { FaSun, FaMoon, FaTemperatureEmpty  } from "react-icons/fa6";
import { useState } from "react";

interface BotaoAlternarTemaProps {
  tema: string
  alternarTema: () => void
}


export default function BtnTema({props}: any) {
  const [temas, setTemas] = useState("dark")
  const mudarTema = () => {
    const tema = document.getElementById('tema')
  
    if(tema?.classList.contains('dark')){
      tema?.classList.remove('dark')
      setTemas("light")
    }else{
      tema?.classList.add('dark')
      setTemas("dark")
    }
  }
  
  return (
    temas === 'dark' ? (
        <div onClick={mudarTema} className={`
        hidden sm:flex items-center justify-end cursor-pointer
        bg-gradient-to-r from-gray-600 to-gray-900
         w-14 h-8 p-1 rounded-full`
        }>
            <div className={`
            flex items-center justify-center
            bg-black text-blue-600 w-6 h-6 rounded-full
            `}>
                <FaMoon size={14} color="text-white" />
            </div>
        </div>
    ) : (
      <div onClick={mudarTema} className={`
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-sky-600 to-sky-300
         w-14 h-8 p-1 rounded-full`
        }>
            <div className={`
            flex items-center justify-center
            bg-white text-sky-600 w-6 h-6 rounded-full
            `}>
                <FaSun size={14} color="text-white" />
            </div>
        </div>
        
    )
  )
}