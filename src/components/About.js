import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <IconContext.Provider value={{ size: '4em', color: 'white'}}>
            <article id="about" className="flex flex-col justify-center pt-28
            pb-16 px-4 border-b-1 border-slate-500 lg:min-h-screen">
                <section className="uppercase">
                    <h1 className="text-5xl font-bold sm:text-7xl">
                        <span className="text-slate-800">Matthew </span>
                        <span className="whitespace-nowrap text-brownish">
                            Di Micelli
                        </span>
                    </h1>
                    <address className="not-italic leading-relaxed">
                        <span className="text-slate-500">
                            40 Woodbury Way · Syosset, NY 11791-2718 · (516) 382-2699   
                        </span>
                        <a href="mailto:matthewdimicelli@gmail.com" 
                            className="text-brownish hover:text-browner hover:underline">
                            &nbsp;· matthewdimicelli@gmail.com
                        </a>
                    </address>
                </section>
                <section className="text-slate-500 mt-12">
                    Matthew Di Micelli is a self-taught Frontend Web Developer with a strong 
                    work ethic and a lifelong passion for learning and technology.  He used the 
                    open-source Odin Project curriculum to guide his learning from February 2021
                    to the present.  Although Matthew is now experienced in modern React, he 
                    made sure to emphasize learning the basics, which include a strong 
                    foundation in the three core web languages: JS, HTML, and CSS.  He is 
                    including older projects that were built without any frameworks in his 
                    portfolio to demonstrate that he can do so. Matthew continues to work every 
                    day to refine his skills and is also becoming proficient in working with 
                    Node.JS, with the goal of enhancing his knowledge of the full stack to the 
                    point where he is fluent in backend development.  Before initiating his web 
                    development studies, he worked as a Registered Nurse and held advanced 
                    certifications in his area.
                </section>
                <ul className='flex space-x-4 mt-12'>
                    <li className='bg-slate-700 rounded-full p-2 hover:bg-brownish'>
                        <a target="_blank" rel="noreferrer" 
                        href="https://github.com/mattdimicelli" aria-label="Github">
                            <FaGithub />
                        </a>
                    </li>
                    <li className='bg-slate-700 rounded-full p-2 hover:bg-brownish'>
                        <a target="_blank" rel="noreferrer" aria-label="LinkedIn"
                        href="https://www.linkedin.com/in/matthewdimicelli/">
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </article>
        </IconContext.Provider>
    )
}
export default About;