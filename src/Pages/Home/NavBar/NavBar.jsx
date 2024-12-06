import logo from '../../../assets/Cut.png'
import '../../../App.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const NavLink = <>
     <li><Link>Home</Link></li>
     <li><Link>About</Link></li>
     <li><Link>Our Barbers</Link></li>
     <li><Link>Contact Us</Link></li>
</>
    return (
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {NavLink}
             </ul>
          </div>
          <div className='w-16'>
          <img src={logo} alt="" srcset="" />
          </div>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavLink}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="button w-24 h-10 text-white">Login</button>
        </div>
      </div>
    );
};

export default NavBar;