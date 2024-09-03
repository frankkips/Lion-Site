import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Menu from './assets/more.png'

const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);


    const handleClick = () => {
        navigate('/')
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <h1 onClick={handleClick}>UZAWELD</h1>
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <img src={Menu} alt="" />
            </div>
            <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/product'>Products</Link></li>
            </ul>
        </div>
    );
};

export default Header;
