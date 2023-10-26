import Image from 'next/image'
import Footer from '@/components/Footer';
import Projeto from '@/components/Projeto';
import Stack from '@/components/Stack';
import FaleComigo from '@/components/FaleComigo';
import { FaAngleUp } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <section className=" mx-auto py-10 my-10 h-[70vh] md:h-[78vh]" id="home">
        <div
          className="container max-w-5xl mx-auto h-full flex flex-col flex-col-reverse  items-center md:flex-row md:justify-between">
          <div className="mt-10 md:mt-0">
            <h1 className="text-sky-950 dark:text-gray-200 text-2xl md:text-5xl mb-2">Eu sou
              Elias Braga,</h1>
            <p className="font-mono text-sky-950 dark:text-gray-200 text-xl md:text-3xl line typing">Desenvolvedor Web Full-stack.</p>
          </div>
          <div>
            <Image src="/me.png" width={560} height={750} quality={100} alt="elias braga apresentação" className="w-72 h-72 object-cover rounded-full border-4 border-sky-600 shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-10 my-10 " id="sobremim">
        <div
          className="container max-w-5xl p-3 border border-sky-950  dark:border-none rounded-lg mx-auto w-full h-full flex flex-col md:flex-row items-center md:justify-center">
          <Image src="/eliasbraga.jpg" width={720} height={970} quality={100} className="rounded-lg w-96 object-cover" alt="Elias Braga sobre mim" data-aos="fade-right"
            data-aos-delay="100" />

          <div className="ml-5">
            <h2 className="text-sky-950 dark:text-gray-200 text-2xl md:text-5xl text-gray-800 mb-3 text-center md:text-left">Sobre mim</h2>
            <p className="text-sky-950 dark:text-gray-200 text-lg md:text-xl text-center md:text-left">
              Meu nome é Elias Braga, sou formado em Sistemas de Informação pela FATEC - Faculdade de Ciências
              Administrativas e de Tecnologia.
              Tenho uma grande paixão pelo Desenvolvimento Web e dedico meu tempo à criação de páginas e sistemas
              web responsivos, com layouts atrativos.
            </p>
            <p className="text-sky-950 dark:text-gray-200 text-lg md:text-xl text-center md:text-left">
              Desde 2019, venho atuando como desenvolvedor Full-stack para o Estado de Rondônia, uma experiência
              que me transformou em um profissional dedicado e altamente organizado. Na minha jornada
              profissional,
              valorizo o aprendizado contínuo, buscando constantemente adquirir novas habilidades. Meu foco está
              sempre nas tecnologias C# e JavaScript, e todos os dias me empenho em aprender algo novo para
              aprimorar minhas habilidades.
            </p>
          </div>
        </div>

      </section>
      <section className="mb-5 py-10 my-10 " id="projetos">
        <div className="container max-w-5xl mx-auto px-4">
          <h3 className="text-2xl md:text-5xl text-center text-sky-950 dark:text-gray-200 font-semibold mb-8">Projetos</h3>

          <Projeto projeto={{
            url: "https://ebgame.vercel.app",
            img: "/ebgame.gif",
            nextRight: true,
            textHead: "EB Games",
            textBody: `A aplicação desenvolvida com JavaScript, Next.js, React e
              'Tailwind CSS representa a síntese
              de
              tecnologias modernas e práticas de desenvolvimento web. Ao unir a funcionalidade dinâmica do
              JavaScript, a eficiência do Next.js, a reatividade do React e o estilo elegante do Tailwind
              CSS,
              essa aplicação oferece uma experiência de usuário envolvente e intuitiva. Este projeto
              exemplifica a
              harmonia entre essas tecnologias, proporcionando não apenas um produto final excepcional,
              mas
              também
              uma base sólida para futuros desenvolvimentos inovadores no mundo da web.`,
            stacks: [
              { name: "javascript", url: "/javascript.svg", class: "w-10 h-10" },
              { name: "react", url: "/react-logo.png", class: "w-10 h-10" },
              { name: "next js", url: "/nextjs-logo.png", class: "w-10 h-10" },
              { name: "html 5", url: "/html-logo.png", class: "w-10 h-10" },
              { name: "css 3", url: "/css-logo.png", class: "w-10 h-10" },
              { name: "tailwind css", url: "/tailwind-logo.png", class: "w-10 h-10" },
            ],
          }} />

          <Projeto projeto={{
            url: "https://api-pokemon-gules.vercel.app",
            img: "/pokedex.gif",
            nextRight: false,
            textHead: "Poke Dex",
            textBody: `Nesta jornada, mergulhei nas nuances do desenvolvimento web, explorando Next.js, React e 
              Tailwind CSS. A aplicação didática não apenas expandiu minha compreensão sobre o consumo de
              APIs, mas também me guiou habilmente pelo intricado processo de paginação. Agora, equipado
              com esse conhecimento prático, estou pronto para enfrentar desafios de desenvolvimento
              complexos. Esta experiência não apenas ampliou meu conjunto de habilidades, mas também
              reforçou minha paixão pelo aprendizado contínuo e pela resolução de problemas no mundo da
              programação. Estou ansioso para aplicar essas habilidades em projetos futuros, sabendo que
              cada desafio é uma oportunidade de crescimento e aprimoramento.`,
            stacks: [
              { name: "javascript", url: "/javascript.svg", class: "w-10 h-10" },
              { name: "react", url: "/react-logo.png", class: "w-10 h-10" },
              { name: "next js", url: "/nextjs-logo.png", class: "w-10 h-10" },
              { name: "html 5", url: "/html-logo.png", class: "w-10 h-10" },
              { name: "tailwind css", url: "/tailwind-logo.png", class: "w-10 h-10" },
            ],
          }} />

          <Projeto projeto={{
            url: "https://quiz-delta-five.vercel.app",
            img: "/quiz.gif",
            textHead: "Quiz",
            nextRight: true,
            textBody: `O desenvolvimento de uma aplicação quiz com JavaScript,
            Next.js, React e Tailwind CSS oferece uma maneira eficaz de criar uma experiência de
            aprendizado interativa e envolvente. Com essas tecnologias, conseguimos combinar a potência
            do JavaScript, a facilidade de desenvolvimento do Next.js, a modularidade do React e a
            estilização elegante do Tailwind CSS para criar uma aplicação que é não apenas educativa,
            mas também agradável de usar.`,
            stacks: [
              { name: "javascript", url: "/javascript.svg", class: "w-10 h-10" },
              { name: "react", url: "/react-logo.png", class: "w-10 h-10" },
              { name: "next js", url: "/nextjs-logo.png", class: "w-10 h-10" },
              { name: "html 5", url: "/html-logo.png", class: "w-10 h-10" },
              { name: "css 3", url: "/css-logo.png", class: "w-10 h-10" },
              { name: "tailwind css", url: "/tailwind-logo.png", class: "w-10 h-10" },
            ],
          }} />

          <Projeto projeto={{
            url: "https://rondoniatemtudo.sistemas.ro.gov.br",
            img: "/rondoniatemtudo.gif",
            textHead: "Rondônia tem tudo",
            nextRight: false,
            textBody: `A aplicação desenvolvida com HTML5, JavaScript, CSS e
              Bootstrap 5 no front-end, combinados
              com C# e .NET Core no back-end, representa o estado da arte no mundo do desenvolvimento web.
              Essas
              tecnologias, quando usadas de maneira sinérgica, resultam em uma aplicação moderna,
              poderosa,
              responsiva e altamente funcional, proporcionando aos usuários uma experiência excepcional.`,
            stacks: [
              { name: "javascript", url: "/csharp-logo.png", class: "w-10 h-10" },
              { name: "react", url: "/net-logo.png", class: "w-10 h-10" },
              { name: "next js", url: "/javascript.svg", class: "w-10 h-10" },
              { name: "html 5", url: "/html-logo.png", class: "w-10 h-10" },
              { name: "css 3", url: "/css-logo.png", class: "w-10 h-10" },
              { name: "tailwind css", url: "/bootstrap-logo.png", class: "w-10 h-10" },
              { name: "tailwind css", url: "/sql-server-logo.png", class: "w-10 h-10" },
              { name: "tailwind css", url: "/docker-logo.png", class: "w-10 h-10" },
            ],
          }} />


        </div>
      </section>

      <section className="mb-5 py-10 my-10 " id="habilidades">
        <div className="container max-w-5xl mx-auto px-4">
          <h3 className="text-2xl md:text-5xl  text-center text-sky-950 dark:text-gray-200 font-semibold mb-8">Habilidades</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5">
            <Stack stack={{ name: "csharp", url: "/csharp-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: ".net", url: "/net-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "javascript", url: "/javascript.svg", class: "w-24 h-24" }} />
            <Stack stack={{ name: "react", url: "/react-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "next js", url: "/nextjs-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "html 5", url: "/html-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "css 3", url: "/css-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "tailwind css", url: "/tailwind-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "bootstrap", url: "/bootstrap-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "docker", url: "/docker-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "scrum", url: "/scrum-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "sql server", url: "/sql-server-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "mysql", url: "/mysql-logo.png", class: "w-24 h-24" }} />
            <Stack stack={{ name: "git", url: "/git-logo.png", class: "w-24 h-24" }} />
          </div>
        </div>
      </section>


      <FaleComigo />

      <Footer />
      <a id="topUp" href="#top"
        className="hideen opacity-80 fixed bottom-4 right-4 bg-sky-600 text-white px-2 py-2 rounded-full hover:bg-sky-800 transition duration-300 mr-5 mb-5">
        <FaAngleUp size={24} color="text-white" />
      </a>

      <div className="fixed flex gap-2 bottom-4 left-4">
        <a href="https://linkedin.com/in/eliasbragaeb" title="LinkedIn" target="_blank">
            <Image src="/linkedin.svg" width={200} height={200} className="w-8 h-8 social-icons" alt="logo linkedin" />
        </a>
        <a href="https://github.com/eliasjrb" title="Github" target="_blank">
            <Image src="/github.svg" width={200} height={200} className="w-8 h-8 social-icons" alt="logo github" />
        </a>
    </div>
    </>
  )
}
