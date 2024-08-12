import React, {useState} from 'react'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from 'react-icons/ai'
import ShinyEffect from './ShinyEffect';

const projects = [
    {
        img: project1,
        title: "Projeto #1",
        description:
          "Lista de Tarefas Front-End usando JavaScript e Jquery",
        links: {
          site: "https://lista-de-tarefas-lemon-nine.vercel.app/",
          github: "https://github.com/RaferaX/Lista-de-Tarefas",
        },
      },
      {
        img: project2,
        title: "Projeto #2",
        description: "Loja de Produtos Responsiva Front-End usando TailwindCSS com NodeJS",
        links: {
          site: "https://loja-de-produtos-pi.vercel.app/",
          github: "https://github.com/RaferaX/Loja-de-Produtos",
        },
      },
      {
        img: project3,
        title: "Projeto #3",
        description: "Primeiro Portfólio Responsivo usando HTML, CSS e JS",
        links: {
          site: "https://portfolio-atualizando-tau.vercel.app/",
          github: "https://github.com/RaferaX/portfolio-atualizando",
        },
      },
      {
        img: project4,
        title: "Projeto #4",
        description:
          "Esse projeto foi um esforço colaborativo entre colegas da faculdade, focado na doença da dengue. Utilizamos HTML, CSS e JS.",
        links: {
          site: "https://rad-paletas-ca0a19.netlify.app/",
          github: "https://github.com/RaferaX/Itiner-rio-Extensionista---Trabalho-de-Faculdade",
        },
      },
      {
        img: project5,
        title: "Projeto #5",
        description: "Portfólio Interativo usando React",
        links: {
          site: "",
          github: "https://github.com/RaferaX/Portf-lio-em-React",
        },
      }    
]

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0)

  return (
    <div className='my-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6 md:py-40' id="portfolio">


<div className='z-10 col-span-3 grid place-items-center grid-cols-1 relative'>
  <p className='text-gray-200 font-bold text-4xl -skew-y-6 '>Selecione o Projeto</p>
  <img src={arrow} className='absolute w-[50px] top-10 right-0 md:right-12' />

  <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1
   space-y-2 md:space-y-4 text-2xl'>
    {projects.map((project, index) => (
      <li
        key={index}
        onClick={() => setCurrentProject(index)}
        className={`cursor-pointer text-gray-300 rounded-lg px-2 hover:bg-slate-600
         transition duration-300 ${
          currentProject === index ? 'active-project' : ''
        }`}
      >
        {project.title}
      </li>
    ))}
  </ul>
</div>

        




        <div className='z-10 glass  w-full border-2 col-span-5'>
            <div className='w-full h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title} 
                className='w-full h-full object-cover rounded-lg mb-4'/>
            </div>


            <div className='p-6'>
              <p className='text-gray-200 my-4'>
                  {projects[currentProject].description}
              </p>
              <div className='flex space-x-4'>
                  <a href={projects[currentProject].links.site} className='px-4 py-2 bg-slate-600
                   text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>Ver Site</a>
                  <a href={projects[currentProject].links.github} className='text-2xl px-4 py-2 bg-gray-800
                   text-gray-200  rounded-lg hover:bg-gray-600 transition duration-300'>
                    <AiFillGithub/>
                    </a>
              </div>
            </div>
            
        </div>


    </div>
  )
}

export default Portfolio