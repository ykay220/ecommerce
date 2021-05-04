import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav">
        <ul className="nav-list">
           
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
         </ul>
    </div>
    )
}

export default Navbar;
