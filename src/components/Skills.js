import { IconContext } from 'react-icons';
import SkillItem from './SkillItem';
import spanishIconSlate from '../images/spanish-icon.png';
import spanishIconBrownish from '../images/spanish-icon-brownish.png';
import mongooseIconSlate from '../images/mongoose.png';
import mongooseIconBrownish from '../images/mongoose_brown.png';
import EJSIconSlate from '../images/ejs.png';
import EJSIconBrownish from '../images/ejs-brown.png';
import { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';

const Skills = () => {
    let [spanishIconSrc, setSpanishIconSrc] = useState(spanishIconSlate);
    let [spanishCaptionClass, setSpanishCaptionClass] = useState('invisible mt-2');
    let [mongooseIconSrc, setMongooseIconSrc] = useState(mongooseIconSlate);
    let [mongooseCaptionClass, setMongooseCaptionClass] = useState('invisible mt-2');
    let [EJSIconSrc, setEJSIconSrc] = useState(EJSIconSlate);
    let [EJSCaptionClass, setEJSCaptionClass] = useState('invisible mt-2');

    function onMouseOverIcon(icon) {
        const visibleCaptionFormatted = 'text-brownish mt-2';
        if (icon === 'Spanish') {
            setSpanishIconSrc(spanishIconBrownish);
            setSpanishCaptionClass(visibleCaptionFormatted);
        }
        else if (icon === 'Mongoose') {
            setMongooseIconSrc(mongooseIconBrownish);
            setMongooseCaptionClass(visibleCaptionFormatted);
        }
        else if (icon === 'EJS') {
            setEJSIconSrc(EJSIconBrownish);
            setEJSCaptionClass(visibleCaptionFormatted);
        }
    }

    function onMouseLeaveIcon(icon) {
        const invisibleCaption = 'invisible mt-2';
        if (icon === 'Spanish') {
            setSpanishIconSrc(spanishIconSlate);
            setSpanishCaptionClass(invisibleCaption);
        }
        else if (icon === 'Mongoose') {
            setMongooseIconSrc(mongooseIconSlate);
            setMongooseCaptionClass(invisibleCaption);
        }
        else if (icon === 'EJS') {
            setEJSIconSrc(EJSIconSlate);
            setEJSCaptionClass(invisibleCaption);
        }
    }

    return (
        <section id="skills" className="flex flex-col justify-center py-16 
        px-4 border-b-1 border-slate-500 lg:min-h-screen">
            <IconContext.Provider value={{ className: 'skill-icon' }}>
                <h2 className="uppercase text-5xl font-bold text-slate-800">Skills</h2>
                <h3 className="mt-12 uppercase text-slate-500 font-bold">
                    Languages & Tools
                </h3>
                <ul className='gap-x-5 gap-y-8 flex flex-wrap mt-8'>
                    <SkillItem skill='HTML' />
                    <SkillItem skill='CSS' />
                    <SkillItem skill='JS' />
                    <SkillItem skill='React' />
                    <SkillItem skill='VS Code' />
                    <SkillItem skill='Git' />
                    <SkillItem skill='Github' />
                    <SkillItem skill='Heroku' />
                    <SkillItem skill='Firebase' />
                    <SkillItem skill='Tailwind CSS' />
                    <SkillItem skill='npm' />
                    <SkillItem skill='English' />
                    <li onMouseOver={() => onMouseOverIcon('Spanish')} 
                        onMouseLeave={() => onMouseLeaveIcon('Spanish')}
                        className='w-28 h-20 flex flex-col justify-center items-center'>
                        <img src={spanishIconSrc} alt="Spanish" className="w-10 h-10" />
                        <div className={spanishCaptionClass}>Spanish</div>
                    </li>
                    <SkillItem skill='Webpack' />
                    <SkillItem skill='Markdown' />
                    <SkillItem skill='Linux' />
                    <SkillItem skill='MongoDB' />
                    <li onMouseOver={() => onMouseOverIcon('Mongoose')} 
                        onMouseLeave={() => onMouseLeaveIcon('Mongoose')}
                        className='w-28 h-20 flex flex-col justify-center items-center'>
                        <img src={mongooseIconSrc} alt="Mongoose" className="w-10 h-10" />
                        <div className={mongooseCaptionClass}>Mongoose</div>
                    </li>
                    <SkillItem skill='PostgreSQL' />
                    <SkillItem skill='Express' />
                    <SkillItem skill='Node.js' />
                    <li onMouseOver={() => onMouseOverIcon('EJS')} 
                        onMouseLeave={() => onMouseLeaveIcon('EJS')}
                        className='w-28 h-20 flex flex-col justify-center items-center'>
                        <img src={EJSIconSrc} alt="EJS" className="w-10 h-10" />
                        <div className={EJSCaptionClass}>EJS</div>
                    </li>
                </ul>
            </IconContext.Provider>
            <h2 className="mt-8 uppercase text-slate-500 font-bold">Workflow</h2>
            <IconContext.Provider value={{ size: '1em', color: '#64748B'}}>
                <ul className="text-slate-500">
                    <li className="mt-5">
                        <GiCheckMark className="inline-block mr-2" />
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <GiCheckMark className="inline-block mr-2" />
                        Testing (Static, Unit, Integration, e2e, & TDD)
                    </li>
                </ul>
            </IconContext.Provider>
        </section>
    )
}
export default Skills;