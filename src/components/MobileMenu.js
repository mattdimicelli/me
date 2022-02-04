import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const MobileMenu = props => {
    return (
        <div className="bg-brownish h-14 py-2 text-salmonish flex 
        justify-end md:hidden">
            <IconContext.Provider value={{ size: "2rem" }}>
                <button className="focus:border-dotted mr-4 px-2 border-1 rounded border-salmonish"><GiHamburgerMenu /></button>
            </IconContext.Provider>
        </div>
    )
}
export default MobileMenu;