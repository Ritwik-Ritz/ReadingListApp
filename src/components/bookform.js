import React, {useContext, useState} from 'react';
import { BookContext } from '../context/bookcontext';

const BookForm = () =>{
    const {dispatch} = useContext(BookContext);

    const [bookAuthor, setBookAuthor] = useState("");
    const [bookTitle, setBookTitle] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch({type:'ADD_BOOK', book:{title:bookTitle, author: bookAuthor}})
        setBookTitle("");
        setBookAuthor("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Book Author</label>
            <input type="text" value={bookAuthor} onChange={(e) =>setBookAuthor(e.target.value)} required />
            <label >Book Title</label>
            <input type="text" value={bookTitle} onChange={(e)=>setBookTitle(e.target.value)} required/>
            <input type="submit" value="Add Book" />
        </form>
    );
}

export default  BookForm;
