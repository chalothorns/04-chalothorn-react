import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="p-4 border-b">
            <ul className="flex justify-end gap-8 px-10 py-2 text-3xl font-bold">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/owner">Owner</Link>
                </li>
            </ul>
        </nav>
    )
}