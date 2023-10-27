"use client"
import Dialog from "@/components/Dialog";
import { useState, useEffect  } from "react"

async function getData() {
    try {
      const res = await fetch("https://localhost:7198/participantes/1")
      return res.json();
    } catch (err) {
      throw new Error("Failed to fetch data")
    }
  }

export default function Sorteio() {
    const [ numero, setNumero ] = useState<number>(-1)
    const [ nome, setNome ] = useState<string>("")
    const [ celular, setCelular ] = useState<string>("")
    const [ alterou, setAlterou] = useState<boolean>(false)
    
    const [ meuArray, setMeuArray ] = useState<object[]>(new Array(150).fill(0))

    meuArray[5] = { nome: "Elias Braga", numero: 6, celular: "9898989898" }
    meuArray[57] = { nome: "Yasmin Braga", numero: 58, celular: "9898989898" }

    const abrirDialog = (x: any, i:number) => {
        setNumero(i)
        setNome(x.nome)
        setCelular(x.celular)
        const dialog = document.querySelector('dialog')
        dialog?.showModal()
    }

    const fecharDialog = (item: any) => {
        console.log(item.numeros)
        meuArray[item.numero-1] = { nome: item.nome , numero: item.numero, celular: item.celular }

        const dialog = document.querySelector('dialog')
        dialog?.close()
        setAlterou(!alterou)
    }

    useEffect( () => {
        montar()
      }, [alterou]);

    const montar = () => {
        return (meuArray.map((x: any, i: number) => {
            i++
            return (
                <div onClick={() => abrirDialog(x, i)} className={`flex items-center justify-center text-xl rounded-full w-20 h-20 ${x.numero !== undefined ? "bg-red-800" : "bg-green-800"} `} key={i}>
                    {i}
                </div>
            )
        }))
    }

    return (
        <div className="flex flex-wrap items-start justify-center gap-4 w-full h-full">
            <Dialog use={{numero: numero, nome: nome, celular: celular, fechar: fecharDialog}} />

            {montar()}
        </div>
    )
}