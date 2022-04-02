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
                            40 Woodbury Way · Syosset, NY 11791-2718 · (516) 382-2699 ·&nbsp;
                        </span>
                        <a href="mailto:matthewdimicelli@gmail.com" 
                            className="text-brownish hover:text-browner hover:underline">
                            matthewdimicelli@gmail.com
                        </a>
                    </address>
                </section>
                <section className="text-slate-500 mt-12">
                    <p>I’m a <strong>Full Stack Web Developer</strong>, previously a Registered 
                    Nurse. Just as I learned to speak fluent Spanish as an adult, I motivated myself
                    through the hard work of learning to program via a structured, renowned, and 
                    purposeful curriculum called the Odin Project, similar to a bootcamp. Taking 
                    this initiative was an extension of my lifelong love of tech. I am skilled in 
                    JS, HTML, and CSS, as well as the MERN (MongoDB, Express.js, React, NodeJS) 
                    stack. I am now seeking professional opportunities in coding.</p>  
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