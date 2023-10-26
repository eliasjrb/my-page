import Image from "next/image"

export default function Stack({stack}:any) {
  return (
    <div className="flex justify-center items-center flex-col space-y-2">
      <Image src={stack.url}
        width={100}
        height={100} 
        className={`${stack.class} rounded-lg object-cover hover:border-2 hover:border-sky-600`} 
        alt={`logo ${stack.name}`} />
    </div>
  )
}