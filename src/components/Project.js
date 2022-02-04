import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Project = ({title, description, img, imgAlt, url}) => {
    return (
        <li className='flex flex-col text-slate-500 mt-10 lg:flex-row'>
            <div>
            <h3 className="text-2xl uppercase font-bold">
                <a className="text-slate-800 hover:underline hover:text-slate-900" href={url}><FaExternalLinkSquareAlt className="inline-block mr-2" />
                    {title}
                </a>
            </h3>
            <p className="mt-5">{description}</p>
            </div>
            <img className="max-h-96 mt-5 hidden lg:block" src={img} alt={imgAlt} />
        </li>
    )
}
export default Project;