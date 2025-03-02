// import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
// import Menu from './assets/more.png'

const Header = () => {
    const navigate = useNavigate()
    // const [menuOpen, setMenuOpen] = useState(false);


    const handleClick = () => {
        navigate('/')
    }

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return (
        <div className="bg-feldgrau 3F5E5A flex flex-row p-4 content-center items-center justify-between">
            <div className="">
            <h1 className="font-bold text-2xl text-white" onClick={handleClick}>UZAWELD</h1>
            {/* <div className="menu-icon">
                <img className='w-16 md:w-32 lg:w-48' src={Menu} alt="" />
            </div> */}
            </div>
            <div className="flex bg-gray-100 rounded shadow-black p-2 border-black basis-1/3">
                <input className='bg-transparent text-2xs outline-none w-full' type="text" placeholder="Search..." />
            </div>
            <ul className= "flex justify-end basis-1/3 text-white">
                <li className=''><Link to='/'>Home</Link></li>
                <li className='ml-6'><Link to='/about'>About</Link></li>
                <li className='ml-6'><Link to='/contact'>Contact</Link></li>
                {/* <li><Link to='/product'>Products</Link></li> */}
            </ul>
        </div>
    );
};

export default Header;
