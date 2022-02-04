import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Content = props => {
    return (
        <IconContext.Provider value={{ size: '2rem', color: 'white'}}>
            <article className="about flex-1 font-sans py-16 px-4 min-h-screen
            border-b-1 border-slate-500">
                <section className="uppercase">
                    <h1 className="text-5xl font-bold ">
                        <span className="text-slate-800">Matthew </span>
                        <span className="whitespace-nowrap text-brownish">
                            Di Micelli
                        </span>
                    </h1>
                    <address className="not-italic leading-relaxed">
                        <span className="text-slate-500">
                            40 Woodbury Way · Syosset, NY 11791-2718 · (516) 382-2699 · 
                        </span>
                        <span className="text-brownish">
                            matthewdimicelli@gmail.com
                            </span>
                    </address>
                </section>
                <section className="text-slate-500 mt-12">
                    Matthew Di Micelli is a self-taught Frontend Web Developer with 
                    a strong work ethic and a lifelong passion for learning and 
                    technology.  He used the open-source Odin Project curriculum
                    to guide his learning. Before initiating his web development 
                    studies last year, he worked as a Registered Nurse and held advanced 
                    certifications in his area.
                </section>
                <ul className='flex space-x-4 mt-12'>
                    <li className='bg-slate-700 rounded-full p-2 hover:bg-brownish'>
                        <a href="https://github.com/mattdimicelli"><FaGithub /></a>
                    </li>
                    <li className='bg-slate-700 rounded-full p-2 hover:bg-brownish'>
                        <a href="https://www.linkedin.com/in/matthewdimicelli/">
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </article>
        </IconContext.Provider>
        
    )
}

export default Content;