import { FaGithub, FaLinkedinIn, FaReact, FaGit, FaNode,
     FaLinux, FaNpm } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { SiCsswizardry, SiVisualstudiocode, SiFirebase, SiTailwindcss,
    SiJavascript } from 'react-icons/si';
import { DiHeroku } from 'react-icons/di';
import { GiCheckMark } from 'react-icons/gi';
import { IconContext } from 'react-icons';


const Content = props => {
    return (
        <div className="flex-1 font-sans">
            <IconContext.Provider value={{ size: '2rem', color: 'white'}}>
                <article className="about py-16 px-4 min-h-screen
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

            <section className="py-16 px-4 min-h-screen border-b-1 
                border-slate-500">
                <IconContext.Provider value={{ size: '2.5rem', color: '#64748B'}}>
                    <h2 className="skills uppercase text-5xl font-bold">Skills</h2>
                    <h2 className="mt-12 uppercase text-slate-500 font-bold">
                        Languages & Tools
                    </h2>
                    <ul className='gap-x-5 gap-y-8 flex flex-wrap mt-8'>
                        <li><TiHtml5 /></li>
                        <li><SiCsswizardry /></li>
                        <li><SiJavascript /></li>
                        <li><SiVisualstudiocode /></li>
                        <li><FaReact /></li>
                        <li><SiFirebase /></li>
                        <li><FaGit /></li>
                        <li><FaGithub /></li>
                        <li><DiHeroku /></li>
                        <li><FaNode /></li>
                        <li><FaLinux /></li>
                        <li><SiTailwindcss /></li>
                        <li><FaNpm /></li>
                    </ul>
                </IconContext.Provider>
                <h2 className="mt-8 uppercase text-slate-500 font-bold">
                    Workflow
                </h2>
                <IconContext.Provider value={{ size: '1rem', color: '#64748B'}}>
                    <ul className="text-slate-500">
                        <li><GiCheckMark className="inline-block mr-2" />Mobile-First, Responsive Design</li>
                        <li>
                            <GiCheckMark className="inline-block mr-2" />
                            Testing (Static, Unit, Integration, e2e, & TDD)
                        </li>
                    </ul>
                </IconContext.Provider>
            </section>
            
            
        </div>
        
        
        
    )
}

export default Content;