"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function FaleComigo() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-sky-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-inner"
      id="falecomigo"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl text-center text-sky-950 dark:text-gray-200 font-bold mb-12 relative">
            Fale Comigo
            <span className="block h-1 w-20 bg-sky-600 mt-2 mx-auto"></span>
          </h3>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl md:text-2xl text-sky-950 dark:text-gray-200 font-bold mb-6">
                Envie uma mensagem
              </h4>
              <form
                className="space-y-4 text-gray-600 dark:text-gray-300"
                action="https://api.staticforms.xyz/submit"
                method="post"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
                    required
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200"
                    type="email"
                    required
                    name="email"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="assunto"
                    className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition duration-200 min-h-[120px]"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                    name="message"
                  ></textarea>
                </div>

                <input
                  type="hidden"
                  name="accessKey"
                  value="ede048bb-3178-4d64-a15c-fafa20278b0a"
                />
                <input
                  type="hidden"
                  name="redirectTo"
                  value="https://eliasbraga.com"
                />
                <input type="text" className="hidden" name="honeypot" />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full text-white font-medium bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 p-3 rounded-lg transition duration-300 shadow-md"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg w-full">
              <h4 className="text-xl md:text-2xl text-sky-950 dark:text-gray-200 font-bold mb-6">
                Contato direto
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Prefere uma conversa mais direta? Entre em contato comigo pelo
                WhatsApp para uma resposta mais rápida.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
              >
                <Link
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl text-lg font-medium shadow-md transition duration-300"
                  title="Me chama no WhatsApp!"
                  href="https://api.whatsapp.com/send?phone=5569992535930&text=Fala,%20Elias!%20Vim%20do%20da%20sua,%20página%20eliasbraga.com%20!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                  Falar no WhatsApp
                </Link>
              </motion.div>

              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h5 className="text-lg font-semibold text-sky-950 dark:text-gray-200 mb-4">
                  Ou me encontre nas redes sociais
                </h5>
                <div className="flex justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://linkedin.com/in/eliasbragaeb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
                  >
                    <img
                      src="/img/linkedin.svg"
                      width={24}
                      height={24}
                      alt="LinkedIn"
                    />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://github.com/eliasjrb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
                  >
                    <img
                      src="/img/github.svg"
                      width={24}
                      height={24}
                      alt="GitHub"
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
