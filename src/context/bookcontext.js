import React, {createContext, useReducer, useEffect} from 'react';
import { BookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props)=>{
    // const[books, setBooks] = useState([]);

                                        //reducer component, //initial default value, //func to override default value
    const [books, dispatch] = useReducer(BookReducer, [], ()=>{
        const localData = localStorage.getItem('books');
        return localData? JSON.parse(localData):[];
    });

    //deals with localstorage whenever there is change in books list
    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books))
    },[books]);

    // const addBook = (title, author)=>{
    //     setBooks([...books, {title:title, author:author, id:uuidv4()}])
    // };

    // const removeBook = (id) =>{
    //     setBooks(books.filter((book) => book.id!== id))
    // };

    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
};


export default BookContextProvider;