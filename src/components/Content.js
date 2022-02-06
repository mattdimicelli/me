import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaReact, FaGit, FaNode,
     FaLinux, FaNpm } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { SiCsswizardry, SiVisualstudiocode, SiFirebase, SiTailwindcss,
    SiJavascript, SiWebpack } from 'react-icons/si';
import { DiHeroku } from 'react-icons/di';
import { GiCheckMark } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { RiEnglishInput } from 'react-icons/ri';
import libraryScreenshot from '../images/library_screenshot.png';
import battleshipScreenshot from '../images/battleship_screenshot.png';
import memoryScreenshot from '../images/memory_screenshot.png';
import calculatorScreenshot from '../images/calculator_screenshot.png';
import shrimpsScreenshot from '../images/shrimps_screenshot.png';
import todoScreenshot from '../images/todo_screenshot.png';
import spanishIconSlate from '../images/spanish-icon.png';
import spanishIconBrownish from '../images/spanish-icon-brownish.png';
import Project from './Project';
import School from './School';


const Content = props => {
    let [spanishIconSrc, setSpanishIconSrc] = useState(spanishIconSlate);

    function onMouseOverSpanish() {
        setSpanishIconSrc(spanishIconBrownish);
    }

    function onMouseLeaveSpanish() {
        setSpanishIconSrc(spanishIconSlate);
    }

    return (
        <div className="flex-1 font-sans lg:relative lg:left-64 lg:rest-of-screen
        lg:px-10">
            <IconContext.Provider value={{ size: '2rem', color: 'white'}}>
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
                                40 Woodbury Way · Syosset, NY 11791-2718 · (516) 382-2699 · 
                            </span>
                            <a href="mailto:matthewdimicelli@gmail.com" 
                            className="text-brownish hover:text-browner hover:underline">
                                matthewdimicelli@gmail.com
                            </a>
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

            <section id="skills" className="flex flex-col justify-center py-16 
            px-4 border-b-1 border-slate-500 lg:min-h-screen">
                <IconContext.Provider value={{ className: 'skill-icon' }}>
                    <h2 className="uppercase text-5xl font-bold text-slate-800">
                        Skills
                    </h2>
                    <h3 className="mt-12 uppercase text-slate-500 font-bold">
                        Languages & Tools
                    </h3>
                    <ul className='gap-x-5 gap-y-8 flex flex-wrap mt-8'>
                        <li aria-label='HTML'><TiHtml5 /></li>
                        <li aria-label='CSS'><SiCsswizardry /></li>
                        <li aria-label='JS'><SiJavascript /></li>
                        <li aria-label='VS Code'><SiVisualstudiocode /></li>
                        <li aria-label='React'><FaReact /></li>
                        <li aria-label='Firebase'><SiFirebase /></li>
                        <li aria-label='Git'><FaGit /></li>
                        <li aria-label='Github'><FaGithub /></li>
                        <li aria-label='Heroku'><DiHeroku /></li>
                        <li aria-label='Node'><FaNode /></li>
                        <li aria-label='Linux'><FaLinux /></li>
                        <li aria-label='Tailwind CSS'><SiTailwindcss /></li>
                        <li aria-label='npm'><FaNpm /></li>
                        <li aria-label='English'><RiEnglishInput /></li>
                        <li onMouseOver={onMouseOverSpanish} 
                            onMouseLeave={onMouseLeaveSpanish}>
                            <img src={spanishIconSrc} alt="Spanish" 
                            className="w-10 h-10"                              
                            />
                        </li>
                        <li aria-label='Webpack'><SiWebpack /></li>
                    </ul>
                </IconContext.Provider>
                <h2 className="mt-8 uppercase text-slate-500 font-bold">
                    Workflow
                </h2>
                <IconContext.Provider value={{ size: '1rem', color: '#64748B'}}>
                    <ul className="text-slate-500">
                        <li className="mt-5"><GiCheckMark className="inline-block mr-2" />Mobile-First, Responsive Design</li>
                        <li>
                            <GiCheckMark className="inline-block mr-2" />
                            Testing (Static, Unit, Integration, e2e, & TDD)
                        </li>
                    </ul>
                </IconContext.Provider>
            </section>
            <section id="projects" className="flex flex-col justify-center py-16 
            px-4 border-b-1 border-slate-500 text-slate-800 lg:min-h-screen">
                <h2 className="uppercase text-5xl font-bold">Sample Projects</h2>
                <ul>
                    <Project title='Book Library Using BaaS (No Framework)'
                    description="A Library app which allows the user to keep track of
                        his or her books. The app allows the user to manage his
                        or her book collection with as few or as many details 
                        as the user desires, such as the book's author, title,
                        date of publication, etc. It has advanced features 
                        such as the ability to display the books sorted by 
                        different orders, as well as providing the user with 
                        some basic stats about their collection. The app has 
                        responsive-design so that it can work on any device. 
                        Wanting to enable access to saved library data from 
                        any client, as well as allow multiple users, I 
                        implemented Google Firebase's Realtime (NoSQL) 
                        database and Authentication."
                    img={libraryScreenshot}
                    imgAlt='screenshot of library app'
                    urlRepo='https://github.com/mattdimicelli/No_Framework_Book_Library_Using_BaaS'
                    sideOfScreenshot='right'
                    urlLiveSite='https://mylibrary-mrd.web.app/'
                    />

                    <Project title='Battleship Via TDD (No Framework)'
                    description="The classic Battleship game, built via Test 
                    Driven Development (TDD). Specifically, the game's logic was
                    written separate from the DOM controller, and it was the 
                    former which was written with TDD."
                    img={battleshipScreenshot}
                    imgAlt='screenshot of battleship app'
                    urlRepo='https://github.com/mattdimicelli/No_Framework_Battleship_Via_TDD'
                    sideOfScreenshot='left'
                    urlLiveSite='https://mattdimicelli.github.io/No_Framework_Battleship_Via_TDD/'
                    />

                    <Project title='React Memory Card Game'
                    description="This game puts your memory to the test! You are
                    presented with cards, each with a random country's flag and 
                    the name of the country. The cards get shuffled any time one
                    of them is clicked. If you click on any country-card more 
                    than once, your score is reset to zero. The idea is to get 
                    the highest score possible!"
                    img={memoryScreenshot}
                    imgAlt='screenshot of memory card game'
                    urlRepo='https://github.com/mattdimicelli/React_Memory_Game'
                    sideOfScreenshot='right'
                    urlLiveSite='https://mattdimicelli.github.io/React_Memory_Game/'
                    />

                    <Project title='NICE Calculator (No Framework)'
                    description={`A basic calculator app. It evaluates a single 
                    pair of operands at at time, but allows the user to operate
                    on the result of the previous equation. I decided to do all 
                    of the "extra-credit" assignments for this project, so it 
                    also handles floats, and it has a backspace button and keyboard
                    support, and I used CSS to craft a replica of an antique
                    Sharp calculator from the 1970s.
                    
                    P.S.: Try to find the "Easter Egg". Hint: enter an equation 
                    that divides a number by something.....`}
                    img={calculatorScreenshot}
                    imgAlt='screenshot of calculator app'
                    urlRepo='https://github.com/mattdimicelli/No_Framework_Calculator'
                    sideOfScreenshot='left'
                    urlLiveSite='https://mattdimicelli.github.io/No_Framework_Calculator/'
                    />

                    <Project title="React Shrimps R' US"
                    description="This is a shopping cart app for shrimp lovers!
                    It implements routes via react-router-dom to allow navigation
                    between pages while always showing the navigation bar."
                    img={shrimpsScreenshot}
                    imgAlt="screenshot of Shrimps R'US app"
                    urlRepo="https://github.com/mattdimicelli/React_Shrimps_R_US"
                    sideOfScreenshot='right'
                    urlLiveSite='https://mattdimicelli.github.io/React_Shrimps_R_US/'
                    />

                    <Project title='Todo List Using BaaS (No Framework)'
                    description={`A ToDo app which allows the user to keep track
                    of his or her "things to do", with advanced features such as
                    optional details, due dates, and separate lists to better 
                    organize the tasks. The app has responsive-design so that it
                    can work on any device. It's actually a refactored version 
                    of an older ToDo project of mine which utilized the Web 
                    Storage API to persist the ToDo data through different 
                    browser sessions. Wanting to enable access to saved ToDo 
                    data from any client, as well as allow multiple users, I 
                    implemented Google Firebase's Firestore database and 
                    Authentication.`}
                    img={todoScreenshot}
                    imgAlt='screenshot of Todo app'
                    urlRepo='https://github.com/mattdimicelli/No_Framework_Todo_List_Using_BaaS'
                    sideOfScreenshot='left'
                    urlLiveSite='https://todo-app-e225d.web.app/'
                    />
                </ul>
            </section>
            <section id="education" className="flex flex-col justify-center py-16 
            px-4 border-b-1 border-slate-500 text-slate-800 lg:min-h-screen">
                <h2 className="uppercase text-5xl font-bold">Education</h2>
                <ul>
                    <School name='Interamerican University of Puerto Rico'
                    degree='Bachelor of Science in Nursing'
                    years='2013 - 2015'
                    details='Graduated Magna Cum Laude with 3.8 GPA' 
                    />
                    <School name='SUNY College at Geneseo'
                    degree='Bachelor of Arts in Spanish'
                    years='2007 - 2011'
                    details='Pre-Medicine Concentration with 3.1 GPA' 
                    />
                </ul>
            </section>
            <section id="interests" className="flex flex-col justify-center py-16 
            px-4 border-b-1 border-slate-500 text-slate-800 lg:min-h-screen">
                <h2 className="uppercase text-5xl font-bold">Interests</h2>
                <p className='mt-10'>Apart from being a web developer, my number one hobby is 
                enjoying the outdoors, biking on the road and off the trail.
                Indoors, I like to cook (and eat) cuisines from all over the 
                world and watch television series and movies.  I spend most of
                my free time with my beautiful wife, who I met in my previous residence
                of Tijuana, Mexico.  We both love to travel and are very proud
                of Latin American culture.  The Spanish language has also always
                been a topic of interest for me that never gets old!</p>
            </section>
        </div>
    )
}

export default Content;