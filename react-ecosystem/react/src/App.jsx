import React from "react";
import GlobalStyle from './components/GlobalStyles'
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Welcome, Page404, BookDetail, BookList, BookNew } from "./pages";


const App = () => {

  return (
    <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="books" >
            <Route path="list" element={<BookList />} />
            <Route path="new" element={<BookNew />} />
            <Route path=":bookId" element={<BookDetail />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
    </>
  )
}

export default App;