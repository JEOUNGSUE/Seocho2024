import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsersCog, FaListAlt } from 'react-icons/fa';
import { IoIosLogIn, IoIosLogOut } from 'react-icons/io';

// eslint-disable-next-line react-refresh/only-export-components
export const links = [
  {
    href: '#',
    icon: FaUsersCog,
    text: 'Users',
  },
  {
    href: '#',
    icon: FaListAlt,
    text: 'todolist',
  },
  {
    href: '/login',
    icon: IoIosLogIn,
    text: 'Sign In',
  },
  {
    href: '#',
    icon: IoIosLogOut,
    text: 'Sign Up',
  },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href}>
              <link.icon /> {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
