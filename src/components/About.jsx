import React from 'react'
import project3 from '../assets/project3.png'
import project7 from '../assets/project7.png'
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiBootstrap
} from 'react-icons/di'

const About = () => {
  return (
    <div className='max-w-[1000px] mt-24 mx-auto p-6 grid grid-cols-2 gap-8 place-items-center md:py-52' id="about">

<div className='p-6'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
            <p className='text-gray-300 mb-4'>
            Busco constantemente aprender e desenvolver novas ferramentas tecnológicas, mantendo-me atualizado com as mais utilizadas no mercado atualmente.
            </p>
            <div className='flex flex-wrap gap-4 text-4xl justify-center'>
                <DiHtml5 className="text-orange-600" />
                <DiCss3 className="text-blue-600" />
                <DiBootstrap className="text-purple-600" />
                <DiJavascript1 className="text-yellow-500" />
                <DiReact className="text-blue-500" />
                <DiNodejsSmall className="text-green-500" />
            </div>

        </div>



        <div className='relative group order-2 md:order-1'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-cyan-300
             to-blue-600 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project3} alt="project 1" className='rounded-lg md:max-w-[500px]' />
            </div>
        </div>





        <div className='p-6 order-1 md:order-2'>
            <h2 className='text-gray-200 text-3xl font-bold mb-4'>Experiência no Front-End</h2>
            <p className='text-gray-300 mb-4'>
            Meu interesse e primeiro contato com desenvolvimento web começou em 2020 com o VSCode, quando decidi tentar editar e criar novos Sites e isso me ensinou muito sobre HTML,CSS e JS.

            Meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo, para o desenvolvimento e eficiência de novos sistemas e na melhoria de existentes para uma melhor experiência do usuário.
            </p>

        </div>

        
        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r
             from-cyan-300 to-blue-600 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project7} alt="project 3" className='rounded-lg md:max-w-[500px]' />
            </div>
        </div> 
    </div>
  )
}

export default About