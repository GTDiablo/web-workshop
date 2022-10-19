import { memo } from "react"
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
//
import { booksSelectors } from "../store";
import { BookList as BookListComponent } from "../components";


export const BookList = () => {
    const books = useSelector(booksSelectors.getBooks);
    return (
        <BookListComponent books={books}/>
    )
}

export default memo(BookList);