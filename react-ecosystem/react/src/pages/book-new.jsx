import { memo } from "react"
import { AddNewBookForm } from "../components";
//

export const BookNew = () => {
    return (
        <>
            <h1>Here you can add a new book to the list:</h1>
            <br />
            <br />
            <AddNewBookForm />
        </>
    )
}

export default memo(BookNew);