import profilePic from '../images/matt_face.png';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const ResponsiveSidebar = ({showSidebar, setShowSidebar}) => {
    let [activeAbout, setActiveAbout] = useState(false);
    let [activeSkills, setActiveSkills] = useState(false);
    let [activeProjects, setActiveProjects] = useState(false);
    let [activeEducation, setActiveEducation] = useState(false);
    let [activeInterests, setActiveInterests] = useState(false);

    useEffect(() => {
        const ioOptions = {
            threshold: 0.6,
        }
        const ioOptionsForProjectEl = {
            threshold: [0.2, 0.4, 0.6, 0.8],
        }
        let educationActive;
        let projectsActive;

        const ioCallback = (entries, observer) => {
            entries.forEach(entry => {
                // eslint-disable-next-line default-case
                switch (entry.target.id) {
                    case 'about':
                        setActiveAbout(entry.isIntersecting);
                        break;
                    case 'skills':
                        setActiveSkills(entry.isIntersecting);
                        break;
                    /* Since the projects section is longer than the other, at certain points the 
                    threshold might be met for both the projects and education sections.  To prevent
                    both links from turning white at same time, extra variables are used (the React 
                    state cannot be used for this bc it is not updated immediately d/t async nature)
                    */
                    case 'projects':
                       if (educationActive) break;
                       setActiveProjects(entry.isIntersecting);
                       projectsActive = entry.isIntersecting;
                       break;
                    case 'education':
                        if (projectsActive) break;
                        setActiveEducation(entry.isIntersecting);
                        educationActive = entry.isIntersecting;
                        break;
                    case 'interests':
                        setActiveInterests(entry.isIntersecting);
                        break;
                }
            });
        }
        const observer = new IntersectionObserver(ioCallback, ioOptions);
        observer.observe(document.querySelector('#about'));
        observer.observe(document.querySelector('#skills'));
        observer.observe(document.querySelector('#education'));
        observer.observe(document.querySelector('#interests'));
        const projectObserver = new IntersectionObserver(ioCallback, ioOptionsForProjectEl);
        projectObserver.observe(document.querySelector('#projects'));
    }, []);

    function clickHandler() {
        console.log('boop')
        setShowSidebar(false);
    }
    
    return (
        <div className={`bg-brownish text-salmonish flex flex-col justify-center gap-6 px-3 pb-3 
        left-0 top-14 w-screen transform transition duration-200 ease-in-out 
        ${showSidebar ? 'fixed' : '-translate-y-66 absolute'} lg:inset-y-0 lg:w-64 lg:items-center 
        lg:px-0 lg:pb-0 lg:translate-y-0 lg:fixed`}>

            <img className="hidden lg:block" src={profilePic} alt="Matthew Di Micelli profile pic"       
            />
            <nav>
                <ul className="uppercase font-sans space-y-5 font-semibold lg:space-y-6 
                lg:text-center">
                    <li className={`hover:text-brighter-salmon 
                    ${activeAbout ? 'text-white' : ''}`}>
                        <Link to="about" smooth={true} duration={500} delay={350} 
                        isDynamic={true} onClick={clickHandler}>About</Link>
                    </li>
                    <li className={`hover:text-brighter-salmon 
                    ${activeSkills ? 'text-white' : ''}`}>
                        <Link onClick={clickHandler} to="skills" smooth={true} duration={500} 
                        delay={350} isDynamic={true}>Skills</Link>
                    </li>
                    <li className={`hover:text-brighter-salmon 
                    ${activeProjects ? 'text-white' : ''}`}>
                        <Link to="projects" smooth={true} duration={500} delay={350} 
                        isDynamic={true} onClick={clickHandler}>Projects</Link>
                    </li>
                    <li className={`hover:text-brighter-salmon 
                    ${activeEducation ? 'text-white' : ''}`}>
                        <Link to="education" smooth={true} duration={500} delay={350} 
                        isDynamic={true} onClick={clickHandler}>Education</Link>
                    </li>
                    <li className={`hover:text-brighter-salmon 
                    ${activeInterests ? 'text-white' : ''}`}>
                        <Link to="interests" smooth={true} duration={500} delay={350} 
                        isDynamic={true} onClick={clickHandler}>Interests</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

export default ResponsiveSidebar;