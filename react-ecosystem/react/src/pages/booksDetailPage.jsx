import { memo } from "react"
import { useParams, useSearchParams, use } from "react-router-dom";

const BooksDetailPage = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams({n: 1});

    return (
        <>
            <h1>BooksDetail Page</h1>
            <h2>{params.title}</h2>
            <p>Az n értéke: {searchParams.get('n')}</p>
        </>
    )
}

export default memo(BooksDetailPage);