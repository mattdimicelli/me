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
            icon = <TiHtml5 />;
            break;
        case 'CSS':
            icon = <SiCsswizardry />;
            break;
        case 'JS':
            icon = <SiJavascript />;
            break;
        case 'VS Code':
            icon = <SiVisualstudiocode />;
            break;
        case 'React':
            icon = <FaReact />;
            break;
        case 'Firebase':
            icon = <SiFirebase />;
            break;
        case 'Git':
            icon = <FaGit />;
            break;
        case 'Github':
            icon = <FaGithub />;
            break;
        case 'Heroku':
            icon = <DiHeroku />;
            break;
        case 'Node':
            icon = <FaNode />;
            break;
        case 'Linux':
            icon = <FaLinux />;
            break;
        case 'Tailwind CSS':
            icon = <SiTailwindcss />;
            break;
        case 'npm':
            icon = <FaNpm />;
            break;
        case 'English':
            icon = <RiEnglishInput />;
            break;
        case 'Webpack':
            icon = <SiWebpack />;
            break;
        case 'Markdown':
            icon = <FaMarkdown />;
            break;
    }

    return (
        <li aria-label={skill} onMouseEnter={showCaption} onMouseLeave={hideCaption}
         className='flex items-center justify-center flex-col w-28 h-20'>
            {icon}
            <div className={captionClass}>{skill}</div>
        </li>
    )
    
}

export default SkillItem;