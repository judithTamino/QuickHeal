import { useState, type FC } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';

interface NavbarProps {}

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'DOCTORS', path: '/doctors' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar: FC<NavbarProps> = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [token, setToken] = useState<boolean>(true);

  return (
    <nav className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
      <img className='w-10 cursor-pointer' src={assets.logo} alt='logo' />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <NavLink to={path} className='py-1'>
              {name}
              <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 group relative cursor-pointer'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt='profile' />
            <img className='w-2.5' src={assets.dropdown_icon} alt='dropdown' />

            <ProfileDropdown onLogout={() => setToken(false)} />
          </div>
        ) : (
          <button
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
            onClick={() => navigate('/login')}
          >
            Create Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
