import { memo } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { booksSelectors } from "../store";

export const BookDetail = () => {
    const {bookId} = useParams();
    const book = useSelector(state => booksSelectors.getBookById(state, bookId));
    return (
        <>
            {!book && <h2>Book not Found</h2>}
            {
                book && (
                    <>
                        <h1>BookDetail</h1>
                        <p>{bookId}</p>
                        <h2>{book.title}</h2>
                    </>
                )
            }
        </>
    )
}

export default memo(BookDetail);