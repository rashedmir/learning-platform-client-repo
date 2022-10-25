import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/eduonlineLogo.svg'

const Header = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="h-28 w-24 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EduOnline</span>
                    </a>
                    <div className="flex items-center">
                        <Link to="#" className="mr-5 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                        <Link to="#" className="mr-5 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Register</Link>
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-14 h-14 rounded-full" src="https://repto.com.bd/uploads/avatar/original/user_31_kxZdwvbH.PNG" alt="user photo" />
                        </button>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            <Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Company</Link>
                            <Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Team</Link>
                            <Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Features</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;