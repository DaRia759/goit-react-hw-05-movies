import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <h1>This page is not found</h1>

            <Link to='/'>
                <button>Go back</button>
            </Link>
        </div>
    );
};

export default NotFound;