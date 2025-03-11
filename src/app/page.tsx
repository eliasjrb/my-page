"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projeto from "@/components/Projeto";
import Stack from "@/components/Stack";
import FaleComigo from "@/components/FaleComigo";
import { FaAngleUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <Header />

      {/* Hero Section - Modern and impactful first impression */}
      <section
        className="mx-auto py-16 min-h-[100vh] flex items-center"
        id="home"
      >
        <div className="container max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sky-600 dark:text-sky-400 font-mono text-lg md:text-xl mb-2">
              Olá, mundo!
            </h2>
            <h1 className="text-sky-950 dark:text-gray-200 text-3xl md:text-5xl font-bold mb-4">
              Eu sou{" "}
              <span className="text-sky-600 dark:text-sky-400">
                Elias Braga
              </span>
            </h1>
            <p className="font-mono text-sky-950 dark:text-gray-300 text-xl md:text-3xl mb-6 line typing">
              Desenvolvedor Web Full-stack.
            </p>
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="#projetos"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition duration-300 font-medium"
              >
                Meus Projetos
              </Link>
              <Link
                href="#sobremim"
                className="border-2 border-sky-600 text-sky-600 dark:text-sky-400 hover:bg-sky-600 hover:text-white px-6 py-3 rounded-lg transition duration-300 font-medium"
              >
                Sobre Mim
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 blur-lg opacity-75"></div>
              <Image
                src="/img/me.png"
                width={560}
                height={750}
                alt="elias braga apresentação"
                className="relative w-72 h-72 object-cover rounded-full border-4 border-sky-600 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section - Professional presentation */}
      <section
        className="py-20 bg-white dark:bg-gray-800 shadow-inner"
        id="sobremim"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              className="md:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/img/eliasbraga.jpg"
                  width={720}
                  height={970}
                  className="w-full object-cover"
                  alt="Elias Braga sobre mim"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sky-950 dark:text-gray-200 text-3xl md:text-4xl font-bold mb-6 relative">
                Sobre mim
                <span className="block h-1 w-20 bg-sky-600 mt-2"></span>
              </h2>
              <p className="text-sky-950 dark:text-gray-300 text-lg mb-4">
                Meu nome é Elias Braga, sou formado em Sistemas de Informação
                pela FATEC - Faculdade de Ciências Administrativas e de
                Tecnologia. Tenho uma grande paixão pelo Desenvolvimento Web e
                dedico meu tempo à criação de páginas e sistemas web
                responsivos, com layouts atrativos.
              </p>
              <p className="text-sky-950 dark:text-gray-300 text-lg">
                Desde 2019, venho atuando como desenvolvedor Full-stack para o
                Estado de Rondônia, uma experiência que me transformou em um
                profissional dedicado e altamente organizado. Na minha jornada
                profissional, valorizo o aprendizado contínuo, buscando
                constantemente adquirir novas habilidades. Meu foco está sempre
                nas tecnologias C# e JavaScript, e todos os dias me empenho em
                aprender algo novo para aprimorar minhas habilidades.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Showcase your work professionally */}
      <section className="py-20" id="projetos">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl text-center text-sky-950 dark:text-gray-200 font-bold mb-12 relative">
              Projetos
              <span className="block h-1 w-20 bg-sky-600 mt-2 mx-auto"></span>
            </h3>
          </motion.div>

          <Projeto
            projeto={{
              url: "https://ebgame.vercel.app",
              img: "/img/ebgame.gif",
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
                {
                  name: "javascript",
                  url: "/img/javascript.svg",
                  class: "w-10 h-10",
                },
                {
                  name: "react",
                  url: "/img/react-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "next js",
                  url: "/img/nextjs-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "html 5",
                  url: "/img/html-logo.png",
                  class: "w-10 h-10",
                },
                { name: "css 3", url: "/img/css-logo.png", class: "w-10 h-10" },
                {
                  name: "tailwind css",
                  url: "/img/tailwind-logo.png",
                  class: "w-10 h-10",
                },
              ],
            }}
          />

          <Projeto
            projeto={{
              url: "https://api-pokemon-gules.vercel.app",
              img: "/img/pokedex.gif",
              nextRight: true,
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
                {
                  name: "javascript",
                  url: "/img/javascript.svg",
                  class: "w-10 h-10",
                },
                {
                  name: "react",
                  url: "/img/react-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "next js",
                  url: "/img/nextjs-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "html 5",
                  url: "/img/html-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "tailwind css",
                  url: "/img/tailwind-logo.png",
                  class: "w-10 h-10",
                },
              ],
            }}
          />

          <Projeto
            projeto={{
              url: "https://quiz-delta-five.vercel.app",
              img: "/img/quiz.gif",
              textHead: "Quiz",
              nextRight: true,
              textBody: `O desenvolvimento de uma aplicação quiz com JavaScript,
            Next.js, React e Tailwind CSS oferece uma maneira eficaz de criar uma experiência de
            aprendizado interativa e envolvente. Com essas tecnologias, conseguimos combinar a potência
            do JavaScript, a facilidade de desenvolvimento do Next.js, a modularidade do React e a
            estilização elegante do Tailwind CSS para criar uma aplicação que é não apenas educativa,
            mas também agradável de usar.`,
              stacks: [
                {
                  name: "javascript",
                  url: "/img/javascript.svg",
                  class: "w-10 h-10",
                },
                {
                  name: "react",
                  url: "/img/react-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "next js",
                  url: "/img/nextjs-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "html 5",
                  url: "/img/html-logo.png",
                  class: "w-10 h-10",
                },
                { name: "css 3", url: "/img/css-logo.png", class: "w-10 h-10" },
                {
                  name: "tailwind css",
                  url: "/img/tailwind-logo.png",
                  class: "w-10 h-10",
                },
              ],
            }}
          />

          <Projeto
            projeto={{
              url: "https://rondoniatemtudo.sistemas.ro.gov.br",
              img: "/img/rondoniatemtudo.gif",
              textHead: "Rondônia tem tudo",
              nextRight: true,
              textBody: `A aplicação desenvolvida com HTML5, JavaScript, CSS e
              Bootstrap 5 no front-end, combinados
              com C# e .NET Core no back-end, representa o estado da arte no mundo do desenvolvimento web.
              Essas
              tecnologias, quando usadas de maneira sinérgica, resultam em uma aplicação moderna,
              poderosa,
              responsiva e altamente funcional, proporcionando aos usuários uma experiência excepcional.`,
              stacks: [
                {
                  name: "javascript",
                  url: "/img/csharp-logo.png",
                  class: "w-10 h-10",
                },
                { name: "react", url: "/img/net-logo.png", class: "w-10 h-10" },
                {
                  name: "next js",
                  url: "/img/javascript.svg",
                  class: "w-10 h-10",
                },
                {
                  name: "html 5",
                  url: "/img/html-logo.png",
                  class: "w-10 h-10",
                },
                { name: "css 3", url: "/img/css-logo.png", class: "w-10 h-10" },
                {
                  name: "tailwind css",
                  url: "/img/bootstrap-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "tailwind css",
                  url: "/img/sql-server-logo.png",
                  class: "w-10 h-10",
                },
                {
                  name: "tailwind css",
                  url: "/img/docker-logo.png",
                  class: "w-10 h-10",
                },
              ],
            }}
          />
        </div>
      </section>

      <section
        className="py-20 bg-white dark:bg-gray-800 shadow-inner"
        id="habilidades"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl text-center text-sky-950 dark:text-gray-200 font-bold mb-12 relative">
              Habilidades
              <span className="block h-1 w-20 bg-sky-600 mt-2 mx-auto"></span>
            </h3>
          </motion.div>

          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
              <Stack
                stack={{
                  name: "csharp",
                  url: "/img/csharp-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: ".net",
                  url: "/img/net-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "javascript",
                  url: "/img/javascript.svg",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "react",
                  url: "/img/react-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "next js",
                  url: "/img/nextjs-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "html 5",
                  url: "/img/html-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "css 3",
                  url: "/img/css-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "tailwind css",
                  url: "/img/tailwind-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "bootstrap",
                  url: "/img/bootstrap-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "docker",
                  url: "/img/docker-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "scrum",
                  url: "/img/scrum-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "sql server",
                  url: "/img/sql-server-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "mysql",
                  url: "/img/mysql-logo.png",
                  class: "w-24 h-24",
                }}
              />
              <Stack
                stack={{
                  name: "git",
                  url: "/img/git-logo.png",
                  class: "w-24 h-24",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <FaleComigo />

      <Footer />

      {/* Scroll to top button - with improved styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <Link
          id="topUp"
          href="#home"
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 bg-gradient-to-r from-sky-500 to-sky-600 text-white p-3 rounded-full hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg z-50 backdrop-blur-sm"
        >
          <FaAngleUp size={24} />
        </Link>
      </motion.div>

      {/* <motion.div
        className="fixed flex gap-3 bottom-4 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
         <Link
          href="https://linkedin.com/in/eliasbragaeb"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition duration-300"
        >
           <Image
            src="/img/linkedin.svg"
            width={24}
            height={24}
            className="social-icons"
            alt="logo linkedin"
          />
        </Link>
        <Link
          href="https://github.com/eliasjrb"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition duration-300"
        > 
          <Image
            src="/img/github.svg"
            width={24}
            height={24}
            className="social-icons"
            alt="logo github"
          />
        </Link>
      </motion.div> */}
    </div>
  );
}
