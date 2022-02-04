const Project = ({title, description, img, imgAlt}) => {
    return (
        <li className='flex flex-col items-center text-slate-500 mt-10'>
            <h3 className="text-black text-2xl uppercase font-bold">{title}</h3>
            <p className="mt-5">{description}</p>
            <img className="max-h-96 mt-5" src={img} alt={imgAlt} />
        </li>
    )
}
export default Project;