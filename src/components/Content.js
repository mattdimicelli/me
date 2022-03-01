import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Interests from './Interests';

const Content = props => {
   
    return (
        <div className="flex-1 font-sans lg:relative lg:left-64 lg:rest-of-screen lg:px-10">
            <About />
            <Skills />
            <Projects />
            <Education />
            <Interests />
        </div>
    )
}

export default Content;