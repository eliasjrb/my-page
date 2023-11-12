import Image from 'next/image'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Projeto from '@/components/Projeto';
import Stack from '@/components/Stack';
import FaleComigo from '@/components/FaleComigo';
import { FaAngleUp } from "react-icons/fa6";
import Analitics from '@/components/Analitics';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';
import { Locale } from '@/config/i18n.config';

export default function Home({ params }: {params: {lang: Locale }}) {

  const dict = getDictionaryServerOnly(params.lang)
  return (
    <>
      <Header props={{
          sobre: dict.header.sobre,
          projetos: dict.header.projetos,
          habilidades: dict.header.habilidades,
          faleComigo: dict.header.faleComigo,
          linguagem: {
            nome: dict.header.linguagem.nome,
            nomeBr: dict.header.linguagem.nomeBr,
            nomeUs: dict.header.linguagem.nomeUs,
          }
          }} />
      <main>
        <section className=" mx-auto py-10 my-10 h-[70vh] md:h-[78vh]" id="home">
          <div
            className="container max-w-5xl mx-auto h-full flex flex-col flex-col-reverse  items-center md:flex-row md:justify-between">
            <div className="mt-10 md:mt-0">
              <h1 className="text-sky-950 dark:text-gray-200 text-2xl md:text-5xl mb-2">{dict.home.titulo},</h1>
              <p className="font-mono text-sky-950 dark:text-gray-200 text-xl md:text-3xl line typing">{dict.home.subTitulo}</p>
            </div>
            <div>
              <img src="/img/me.png" width={560} height={750} alt="elias braga apresentação" className="w-72 h-72 object-cover rounded-full border-4 border-sky-600 shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-10 my-10 " id="sobremim">
          <div
            className="container max-w-5xl p-3 border shadow-xl  dark:border-none rounded-lg mx-auto w-full h-full flex flex-col md:flex-row items-center md:justify-center">
            <img src="/img/eliasbraga.jpg" width={720} height={970} className="rounded-lg w-96 object-cover" alt="Elias Braga sobre mim" data-aos="fade-right"
              data-aos-delay="100" />

            <div className="ml-5">
              <h2 className="text-sky-950 dark:text-gray-200 text-2xl md:text-5xl text-gray-800 mb-3 text-center md:text-left">{dict.sobremim.titulo}</h2>
              <p className="text-sky-950 dark:text-gray-200 text-lg md:text-xl text-center md:text-left">
              {dict.sobremim.subTitulo1}
              </p>
              <p className="text-sky-950 dark:text-gray-200 text-lg md:text-xl text-center md:text-left">
              {dict.sobremim.subTitulo2}
              </p>
            </div>
          </div>

        </section>
        <section className="mb-5 py-10 my-10 " id="projetos">
          <div className="container max-w-5xl mx-auto px-4">
            <h3 className="text-2xl md:text-5xl text-center text-sky-950 dark:text-gray-200 font-semibold mb-8">{dict.projetos.nome}</h3>

            <Projeto projeto={{
              url: "https://ebgame.vercel.app",
              img: "/img/ebgame.gif",
              nextRight: true,
              textHead: dict.projetos.ebGame.titulo,
              textBody: dict.projetos.ebGame.descricao,
              stacks: [
                { name: "javascript", url: "/img/javascript.svg", class: "w-10 h-10" },
                { name: "react", url: "/img/react-logo.png", class: "w-10 h-10" },
                { name: "next js", url: "/img/nextjs-logo.png", class: "w-10 h-10" },
                { name: "html 5", url: "/img/html-logo.png", class: "w-10 h-10" },
                { name: "css 3", url: "/img/css-logo.png", class: "w-10 h-10" },
                { name: "tailwind css", url: "/img/tailwind-logo.png", class: "w-10 h-10" },
              ],
            }} />

            <Projeto projeto={{
              url: "https://api-pokemon-gules.vercel.app",
              img: "/img/quiz.gif",
              nextRight: false,
              textHead: dict.projetos.pokeDex.titulo,
              textBody: dict.projetos.pokeDex.descricao,
              stacks: [
                { name: "javascript", url: "/img/javascript.svg", class: "w-10 h-10" },
                { name: "react", url: "/img/react-logo.png", class: "w-10 h-10" },
                { name: "next js", url: "/img/nextjs-logo.png", class: "w-10 h-10" },
                { name: "html 5", url: "/img/html-logo.png", class: "w-10 h-10" },
                { name: "tailwind css", url: "/img/tailwind-logo.png", class: "w-10 h-10" },
              ],
            }} />

            <Projeto projeto={{
              url: "https://quiz-delta-five.vercel.app",
              img: "/img/quiz.gif",
              textHead: dict.projetos.quiz.titulo,
              textBody: dict.projetos.quiz.descricao,
              stacks: [
                { name: "javascript", url: "/img/javascript.svg", class: "w-10 h-10" },
                { name: "react", url: "/img/react-logo.png", class: "w-10 h-10" },
                { name: "next js", url: "/img/nextjs-logo.png", class: "w-10 h-10" },
                { name: "html 5", url: "/img/html-logo.png", class: "w-10 h-10" },
                { name: "css 3", url: "/img/css-logo.png", class: "w-10 h-10" },
                { name: "tailwind css", url: "/img/tailwind-logo.png", class: "w-10 h-10" },
              ],
            }} />

            <Projeto projeto={{
              url: "https://rondoniatemtudo.sistemas.ro.gov.br",
              img: "/img/rondoniatemtudo.gif",
              nextRight: false,
              textHead: dict.projetos.rtt.titulo,
              textBody: dict.projetos.rtt.descricao,
              stacks: [
                { name: "javascript", url: "/img/csharp-logo.png", class: "w-10 h-10" },
                { name: "react", url: "/img/net-logo.png", class: "w-10 h-10" },
                { name: "next js", url: "/img/javascript.svg", class: "w-10 h-10" },
                { name: "html 5", url: "/img/html-logo.png", class: "w-10 h-10" },
                { name: "css 3", url: "/img/css-logo.png", class: "w-10 h-10" },
                { name: "tailwind css", url: "/img/bootstrap-logo.png", class: "w-10 h-10" },
                { name: "tailwind css", url: "/img/sql-server-logo.png", class: "w-10 h-10" },
                { name: "tailwind css", url: "/img/docker-logo.png", class: "w-10 h-10" },
              ],
            }} />


          </div>
        </section>

        <section className="mb-5 py-10 my-10 " id="habilidades">
          <div className="container max-w-5xl mx-auto px-4">
            <h3 className="text-2xl md:text-5xl  text-center text-sky-950 dark:text-gray-200 font-semibold mb-8">{dict.habilidades.nome}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5">
              <Stack stack={{ name: "csharp", url: "/img/csharp-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: ".net", url: "/img/net-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "javascript", url: "/img/javascript.svg", class: "w-24 h-24" }} />
              <Stack stack={{ name: "react", url: "/img/react-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "next js", url: "/img/nextjs-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "html 5", url: "/img/html-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "css 3", url: "/img/css-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "tailwind css", url: "/img/tailwind-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "bootstrap", url: "/img/bootstrap-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "docker", url: "/img/docker-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "scrum", url: "/img/scrum-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "sql server", url: "/img/sql-server-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "mysql", url: "/img/mysql-logo.png", class: "w-24 h-24" }} />
              <Stack stack={{ name: "git", url: "/img/git-logo.png", class: "w-24 h-24" }} />
            </div>
          </div>
        </section>
        <FaleComigo props={{
          nome: dict.faleComigo.nome, 
          formNome: dict.faleComigo.formNome,
          formEmail: dict.faleComigo.formEmail,
          formAssunto: dict.faleComigo.formAssunto,
          formBotao: dict.faleComigo.formBotao
          }} />
      </main>
      <Footer props={{
          titulo: dict.footer.titulo, 
          subTitulo: dict.footer.subTitulo
          }} />
      <a id="topUp" href="#top"
        className="hideen opacity-80 fixed bottom-4 right-4 bg-sky-600 text-white px-2 py-2 rounded-full hover:bg-sky-800 transition duration-300 mr-5 mb-5">
        <FaAngleUp size={24} color="text-white" />
      </a>

      <div className="fixed flex gap-2 bottom-4 left-4">
        <a href="https://linkedin.com/in/eliasbragaeb" title="LinkedIn" target="_blank">
          <Image src="/img/linkedin.svg" width={200} height={200} className="w-8 h-8 social-icons" alt="logo linkedin" />
        </a>
        <a href="https://github.com/eliasjrb" title="Github" target="_blank">
          <Image src="/img/github.svg" width={200} height={200} className="w-8 h-8 social-icons" alt="logo github" />
        </a>
      </div>
      <Analitics />
    </>
  )
}
