import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';

const MobileMenu = ({setShowSidebar, showSidebar}) => {

    function clickHandler() {
        showSidebar ? setShowSidebar(false) : setShowSidebar(true);
    }

    return (
        <div className="bg-brownish h-14 py-2 w-full text-salmonish flex 
        justify-end fixed lg:hidden">
            <IconContext.Provider value={{ size: "2rem" }}>
                <button 
                className="focus:border-dotted mr-4 px-2 border-1 rounded border-salmonish"
                onClick={clickHandler}
                aria-label="Open/Close Menu"
                >
                    <GiHamburgerMenu />
                </button>
            </IconContext.Provider>
        </div>
    )
}
export default MobileMenu;