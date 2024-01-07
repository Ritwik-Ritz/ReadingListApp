import React, {useContext} from 'react';
import { BookContext } from '../context/bookcontext';

const Navbar = () =>{
    const{books} = useContext(BookContext);

    return(
        <div className='navbar'>
            <h1>BookWorm Reading List</h1>
            <p>You currently have {books.length} books to read...</p>
            <nav>
            </nav>
        </div>
    )
}

export default Navbar;
