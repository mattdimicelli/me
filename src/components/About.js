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
                I’m a self-taught Front-End Web Developer with a strong work ethic and a lifelong 
                passion for learning and technology.  I coupled the open-source Odin Project web 
                development curriculum with some techniques that I previously used to master the 
                Spanish language when learning to code from February 2021 to the present.  Although 
                I’m now experienced in modern React, I made sure to put a major emphasis on learning 
                the basics, which include a strong foundation in the three core web languages.  I 
                continue to work every day to refine my front-end skills and am also becoming 
                proficient in working with Node.js, with the goal of enhancing my knowledge of the 
                full stack to the point where I’m fluent in back-end development.  Before studying 
                web development, I was an experienced Registered Nurse holding several advanced 
                certifications in my professional specialty.  
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