"use client"
import { useState } from "react"
interface IDialog {
  numero: string;
  nome: string;
  celular: string
}

export default function Dialog({ use }: any) {
  const [inputNome, setInputNome] = useState("")
  const [inputCelular, setInputCelular] = useState("")


  return (
    <dialog className="p-5 w-1/2 rounded-xl space-y-4">
      <div className="text-center">
        <p className="text-2xl" id="numero-dialog">{use.numero}</p>
      </div>
      <div className="text-center">
        {use.nome === undefined ? (
          <input className="w-full border-b outline-none" id="nome" placeholder="Nome" value={inputNome} onChange={(e) => setInputNome(e.target.value)} type="text" />
        ) : (
          <>
            <span className="text-xl text-gray-600">Nome: </span>
            <p id="nome-dialog" className="text-xl text-gray-800">{use.nome}</p></>
        )}
      </div>
      <div className="text-center">
        {use.celular === undefined ? (
          <input className="w-full border-b outline-none" id="celular" placeholder="Celular" value={inputCelular} onChange={(e) => setInputCelular(e.target.value)} type="text" />
        ) : (
          <>
            <span className="text-xl text-gray-600">Celular:</span>
            <p id="celular-dialog" className="text-xl text-gray-800">{use.celular}</p>
          </>
        )}
      </div>
      <div className="text-center">
        <button onClick={() => use.fechar({ numero: use.numero, nome: inputNome, celular: inputCelular })} className="bg-sky-500 text-white px-5 py-2 rounded-lg">Ok</button>
      </div>
    </dialog>
  )
}