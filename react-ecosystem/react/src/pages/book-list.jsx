import { memo } from "react"
import { useSelector } from "react-redux";
import { booksSelectors } from "../store";
import {Link} from 'react-router-dom'

export const BookList = () => {
    const books = useSelector(booksSelectors.getBooks);
    return (
        <>
            <h1>BookList</h1>
            <div>
                {books.map((book) => (
                    <Link to={`/books/${book.id}`} key={book.id}>
                        <h2>{book.title}</h2>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default memo(BookList);