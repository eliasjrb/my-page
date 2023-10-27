import Image from "next/image"

export default function Header() {
  return (
    <footer className="border-t border-sky-950 dark:border-gray-200 mt-10">
      <div className="container max-w-5xl mx-auto p-4 h-30 w-full flex flex-col justify-center items-center"
        data-aos="zoom-in-up" data-aos-delay="100">
        <div className="bg-sky-600 dark:bg-transparent border border-sky-950 hover:border-1 hover:border-sky-600 hover:bg-sky-800 rounded-full">
          <a href="#top" className="rounded-full">
            <Image
              src="/img/eb-logo.svg"
              alt="Eu home"
              className=" rounded-lg object-cover"
              width={56}
              height={56}
              priority={true}
              quality={100}
            />
          </a>
        </div>
        <div className="text-center text-sky-950 dark:text-gray-200">
          <span id="data-cop"></span> por Elias Braga. <br />
          Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}