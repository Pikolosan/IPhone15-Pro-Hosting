import {appleImg,searchImg,bagImg} from '../utils';
import {navLists} from '../constants';
const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex  justify-between items-center '>
            <nav className='flex w-ful screen-max-width space-x-10'>
                <img src={appleImg} alt="Alpple" width={14} height={18}/>
                <div className='flex flex-1 justify-center max-sm:hidden space-x-5'>
                   {navLists.map((nav,i) => (   /* This will itterate through each ele,store in nav, of the array and put it into div*/
                    <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>  
                        {nav}
                    </div>
                   ))} 
                </div>
                <div className='flex items-baseline gap-7 cursor-pointer max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="search" width={18} height={18}/>
                    <img src={bagImg} alt="bag" width={18} height={18}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;