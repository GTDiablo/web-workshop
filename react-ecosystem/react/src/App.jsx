import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from './components/GlobalStyles'
import { Routes, Route, Link } from "react-router-dom";
import { NotFoundPage, WelcomePage, TodoListPage, BooksDetailPage, BooksPage, NewBookPage } from "./pages";
import { useSelector } from "react-redux";
import { getTheme } from "./store/ui/ui.selectors";


const App = () => {
  const theme = useSelector(getTheme)

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <div>
          <Link to="/">Welcome page</Link>
          <Link to="/todos">Todos page</Link>

          <Link to="/books">Books page</Link>
          <Link to="/books/GameOfThrones">Game of Thrones</Link>
          <Link to="/books/new">New Book Page</Link>
        </div>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/todos" element={<TodoListPage />} />

          <Route path="/books" >
            <Route index element={<BooksPage />} />
            <Route path=":title" element={<BooksDetailPage />} />
            <Route path="new" element={<NewBookPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <div style={{width: '100%', height: '50px', backgroundColor: 'red'}}></div>
        <Routes>
          <Route path="/" element={<h1>Hello there!</h1>} />
        </Routes>
    </ThemeProvider>
  )
}

export default App;