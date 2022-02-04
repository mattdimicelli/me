const School = ({name, degree, years, details}) => {
    return (
        <li className='flex flex-col mt-10'>
            <h3 className="text-2xl uppercase font-bold text-slate-800">{name}</h3>
            <h4 className="text-slate-500 uppercase">{degree}</h4>
            <p className="text-brownish">{years}</p>
            <p className="mt-5">{details}</p>
        </li>
    )
}
export default School;
