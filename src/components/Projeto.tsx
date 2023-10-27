import Stack from "@/components/Stack"
import Image from "next/image";
import Link from "next/link";

interface ProjetoProps {
  url: string;
  img: string;
  nextRight: boolean
  textHead: string;
  textBody: string;
  stacks: object[]
}

interface stackPros {
  name: string;
  url: string;
  class: string;
}

const Projeto = ({ projeto }:any) => {
  return (
    <>
      <div className="flex flex-col gap-5 mb-10 pb-5 border-b border-sky-950 border-sky-700" >
                <div className={`block md:flex space-y-4  md:space-y-1 gap-5 w-full ${projeto.nextRight === false ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-full md:w-2/5 pt-1">
                        <Link href={projeto.url} target="_blank">
                            <div>
                                <img src={projeto.img} width={100} height={100} className="w-full object-cover" alt={`Gif animado projeto ${projeto.textHead}`} />
                            </div>
                        </Link>
                    </div>
                    <div className="w-full md:w-3/5">
                        <h1 className={`text-2xl md:text-3xl text-center ${projeto.nextRight === false ? "md:text-right" : "md:text-left"}`}>{projeto.textHead}</h1>
                        <p className={`text-center ${projeto.nextRight === false ? "md:text-right" : "md:text-left"}`}>{projeto.textBody} </p>
                    </div>
                </div>
                <div className="flex justify-center w-full md:justify-start gap-3">
                    {projeto.stacks.map( (x: stackPros) => {
                      return ( <Stack key={x.url} stack={x} />)
                    })}
                </div>
            </div>
    </>
    )
}

export default Projeto;