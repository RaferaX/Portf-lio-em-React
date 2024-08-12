import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='mt-24 px-6 max-w-[1000px] mx-auto  grid md:grid-cols-2 place-items-center' id="contact">



            <div>
                <div className="p-2">
                    <div className="text-gray-300 my-3">
                        <h3 className="text-4xl font-semibold mb-5">Sobre <span>Mim</span></h3>
                        <p className="text-justify leading-7 w-11/12 mx-auto">
                        Me chamo Rafael leonardo da silva, tenho 20 anos Atualmente estou cursando Análise e Desenvolvimento de Sistemas 4° Semestre, Moro em Guarulhos SP Buscando constantemente aprender e crescer no universo da informática.
                        </p>     
                    </div>
                </div> 
                

                <div className="flex mt-10 items-center gap-7">
                    <div className="bg-[#333333]/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">7
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Projetos Websites</span></p>
                    </div>
                    <div className="bg-[#333333]/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">2
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Anos de Experiência</span></p>
                    </div>
                </div>



            </div>



            <form action="https://getform.io/f/placeYourEndpointHere" method="POST" 
            className=' max-w-6xl p-5 md:p-12' id="form">
                <p className='text-gray-100 font-bold text-xl mb-2'>Mande uma Mensagem!!</p>
                <input
                    type="text"
                    id="name"
                    placeholder='Seu Nome...'
                    name="name"
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <input
                    type="email"
                    id="email"
                    placeholder='Seu Email...'
                    name="email"
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <textarea
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="4"
                    placeholder='Mensagem...'
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <button type="submit" className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>Enviar Mensagem</button>
            </form>

        
    </div>
  )
}

export default Contact