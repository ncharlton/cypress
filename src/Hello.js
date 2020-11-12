import {Link} from "react-router-dom";

function Hello() {
    return (
        <div>
            <div>Hello, world</div>
            <Link to="/">Back Home</Link>
        </div>
    )
}

export { Hello }
