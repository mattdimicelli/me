import { FaExternalLinkSquareAlt, FaArrowUp } from 'react-icons/fa';


const Project = ({title, description, img, imgAlt, urlRepo, urlLiveSite, sideOfScreenshot}) => {
    return (
        <li className='flex flex-col text-slate-500 mt-10 lg:flex-row lg:gap-10'>
            <div>
                <h3 className="text-2xl uppercase font-bold">
                    <a className="text-slate-800 hover:underline hover:text-slate-900" 
                    href={urlRepo} target="_blank" rel="noreferrer">
                        <FaExternalLinkSquareAlt className="inline-block mr-2" />
                        {title}
                    </a>
                </h3>
                <p className="mt-5">{description}</p>
            </div>
            
            <a target="_blank" rel="noreferrer" href={urlLiveSite}
            className={sideOfScreenshot === 'left' ?  'order-first' : 'order-none'}>
                <figure className='flex flex-col items-center'>
                    <img 
                    className='mt-5 hidden lg:block lg:max-w-md lg:max-h-96 
                    hover:outline-1 hover:outline-slate-800 hover:outline mb-5'
                    src={img} alt={imgAlt} />
                    <FaArrowUp />
                    <figcaption>Live Site</figcaption>
                </figure> 
            </a>
        </li>
    )
}
export default Project;