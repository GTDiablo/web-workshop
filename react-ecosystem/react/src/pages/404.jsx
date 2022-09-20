import { memo, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    // useEffect(()=> {
    //     setTimeout(()=> {
    //         useNavigate('/');
    //     }, 3000);
    // }, []);

    return (
        <h1>Page not found (404)</h1>
    )
}

export default memo(NotFoundPage);