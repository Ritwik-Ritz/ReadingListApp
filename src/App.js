import React from 'react';

import Navbar from './components/navbar';
import BookList from './components/booklist';
import BookForm from './components/bookform';

import BookContextProvider from './context/bookcontext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
