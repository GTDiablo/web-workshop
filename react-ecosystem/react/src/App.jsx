import React from "react";
import GlobalStyle from './components/GlobalStyles'
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Welcome, Page404, BookDetail, BookList, BookNew } from "./pages";
import { Layout } from "./components";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./store";



const App = () => {

  return (
    <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="books" >
              <Route path="list" element={<BookList />} />
              <Route path="new" element={<BookNew />} />
              <Route path=":bookId" element={<BookDetail />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
    </ThemeProvider>
  )
}

export default App;