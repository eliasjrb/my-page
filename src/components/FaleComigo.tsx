import Image from "next/image";
import Link from "next/link";

export default function FaleComigo() {
  return (
    <section className="py-5" id="falecomigo">
      <div className="container flex max-w-5xl mx-auto px-4">
            <div className="flex flex-col text-center w-full space-y-10">
                <h1 className="text-2xl md:text-3xl mb-1 md:mb-7">Fale Comigo!</h1>
                <form className="w-full md:w-2/3 border shadow-xl p-5 rounded-lg md:mx-auto space-y-2 text-gray-600"
                    action="https://api.staticforms.xyz/submit" method="post">
                    <input id="name" className="w-full p-1 rounded-lg " required type="text" name="name" placeholder="Seu nome "
                        data-aos="fade-right" data-aos-delay="100" />
                    <input id="email" className="w-full p-1 rounded-lg" type="text" required name="email" placeholder="Seu E-mail"
                        data-aos="fade-right" data-aos-delay="200" />
                    <textarea id="assunto" className="w-full p-1 rounded-lg" placeholder="Assunto" required name="message" data-aos="fade-right"
                        data-aos-delay="300"></textarea>
                    <input type="hidden" name="accessKey" value="ede048bb-3178-4d64-a15c-fafa20278b0a" />
                    <input type="hidden" name="redirectTo" value="https://eliasbraga.com" />
                    <input type="text" className="hidden" name="honeypot" />
                    <input type="submit"  className="w-full text-lg md:text-xl text-gray-100 rounded-xl bg-sky-600 p-2"
                        value="Enviar" data-aos="fade-right" data-aos-delay="400" />
                </form>
                <div className="my-3" data-aos="fade-right" data-aos-delay="500">
                    <span>
                        <Link className="p-5 bg-green-600 text-white rounded-2xl text-lg md:text-xl ring-offset-slate-50"
                            title="Me chama no zap!"
                            href="https://api.whatsapp.com/send?phone=5569992535930&text=Fala,%20Elias!%20Vim%20do%20da%20sua,%20página%20eliasbraga.com%20!"
                            target="_blank">
                            <i className="fa-brands fa-whatsapp"></i>
                            WHATSAPP
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}