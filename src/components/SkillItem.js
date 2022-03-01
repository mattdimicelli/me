/* eslint-disable default-case */
import { useState } from 'react';
import { FaGithub, FaReact, FaGit, FaNode, FaLinux, FaNpm, FaMarkdown } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { SiCsswizardry, SiVisualstudiocode, SiFirebase, SiTailwindcss,
    SiJavascript, SiWebpack } from 'react-icons/si';
import { DiHeroku } from 'react-icons/di';
import { RiEnglishInput } from 'react-icons/ri';

const SkillItem = ({skill}) => {

    function showCaption() {
        setCaptionClass('text-brownish mt-2');
    }

    function hideCaption() {
        setCaptionClass('invisible mt-2');
    }

    let [captionClass, setCaptionClass] = useState('invisible mt-2');
    let icon;
    switch (skill) {
        case 'HTML':
            icon = <TiHtml5 onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'CSS':
            icon = <SiCsswizardry onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'JS':
            icon = <SiJavascript onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'VS Code':
            icon = <SiVisualstudiocode onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'React':
            icon = <FaReact onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Firebase':
            icon = <SiFirebase onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Git':
            icon = <FaGit onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Github':
            icon = <FaGithub onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Heroku':
            icon = <DiHeroku onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Node':
            icon = <FaNode onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Linux':
            icon = <FaLinux onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Tailwind CSS':
            icon = <SiTailwindcss onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'npm':
            icon = <FaNpm onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'English':
            icon = <RiEnglishInput onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Webpack':
            icon = <SiWebpack onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
        case 'Markdown':
            icon = <FaMarkdown onMouseEnter={showCaption} onMouseLeave={hideCaption} />;
            break;
    }

    return (
        <li aria-label={skill} className='flex items-center justify-center flex-col w-28 h-20'>
            {icon}
            <div className={captionClass}>{skill}</div>
        </li>
    )
    
}

export default SkillItem;