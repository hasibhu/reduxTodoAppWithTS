import Todo from '@/pages/Todo';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around'>
            
      
            <Link to={'/'}>TodoApp</Link>
            <Link to={'todo'}>Todo</Link>
        </div>
    );
};

export default Navbar;