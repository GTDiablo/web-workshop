import { memo } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//
import { BookDetail as BookDetailComponent } from "../components";
import { booksSelectors } from "../store";

export const BookDetail = () => {
    const {bookId} = useParams();
    const book = useSelector(state => booksSelectors.getBookById(state, bookId));

    return (
        <>
            {!book && <h2>Book not Found</h2>}
            {
                book && <BookDetailComponent book={book} />
            }
        </>
    )
}

export default memo(BookDetail);