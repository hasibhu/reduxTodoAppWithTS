
import { ModeToggle } from '@/themeProviders/mode-toggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around'>
            
      
            <Link to={'/'}>TodoApp</Link>
            <Link to={'todo'}>Todo</Link>


            <div>
                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;