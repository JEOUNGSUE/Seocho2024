import { GoGoal } from 'react-icons/go';
import { GrPlan } from 'react-icons/gr';
import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
  IoIosLogIn,
  IoIosLogOut,
} from 'react-icons/io';
import {
  FaChartBar,
  FaCalendarAlt,
  FaUsersCog,
  FaListAlt,
} from 'react-icons/fa';

import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

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
    href: '/Login',
    icon: IoIosLogIn,
    text: 'Sign In',
  },
  {
    href: '#',
    icon: IoIosLogOut,
    text: 'Sign Up',
  },
];

export const visitorData = [
  {
    title: 'Total Visitors',
    icon: IoIosPerson,
    count: 200,
    bgColor: 'bg-gray-100',
  },
  {
    title: 'On Leave',
    icon: IoIosEyeOff,
    count: 15,
    bgColor: 'bg-blue-100',
  },
  {
    title: 'New Join',
    icon: IoIosPersonAdd,
    count: 25,
    bgColor: 'bg-yellow-100',
  },
];

export const shortcutLink = [
  {
    title: 'Goals',
    icon: GoGoal,
  },
  {
    title: 'todolist',
    icon: GrPlan,
  },
  {
    title: 'Stats',
    icon: IoIosStats,
  },
  {
    title: 'Setting',
    icon: IoIosSettings,
  },
];
