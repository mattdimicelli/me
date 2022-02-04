import profilePic from '../images/profile_pic_oval.webp';

const ResponsiveSidebar = props => {
    return (
        <div className="bg-brownish text-salmonish flex flex-col 
        justify-center gap-6 px-3 pb-3 absolute left-0 top-14 w-screen transform
        -translate-y-66 transition duration-200 ease-in-out lg:inset-y-0 lg:w-64 
        lg:items-center lg:px-0 lg:pb-0 lg:translate-y-0 lg:fixed" >
            <img className="hidden lg:block" src={profilePic} alt="Matthew Di Micelli profile pic"></img>
            <nav>
                <ul className="uppercase font-sans space-y-5 font-semibold lg:space-y-6 lg:text-center">
                    <li className="hover:text-brighter-salmon"><a href="#about">About</a></li>
                    <li className="hover:text-brighter-salmon"><a href="#skills">Skills</a></li>
                    <li className="hover:text-brighter-salmon"><a href="#projects">Projects</a></li>
                    <li className="hover:text-brighter-salmon"><a href="#education">Education</a></li>
                    <li className="hover:text-brighter-salmon"><a href="#interests">Interests</a></li>
                </ul>
            </nav>
        </div>
        
    )
}

export default ResponsiveSidebar;