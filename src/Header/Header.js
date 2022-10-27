import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/eduonline_logo.png';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const myFunction = () => {
    console.log("clicked");
}

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <>
            <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 h-36">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="w-28" alt="Flowbite Logo" />
                        <span className="ml-5 self-center text-4xl font-bold text-slate-700 whitespace-nowrap dark:text-white">EduOnline</span>
                    </a>
                    <div className="flex items-center">
                        {
                            user?.uid ?
                                <>
                                    <span className='text-xl font-bold text-gray-500'>{user?.displayName}</span>
                                    <button className="mr-5 ml-5 text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleLogOut}>Log out</button>
                                </>
                                :
                                <>
                                    <Link to="/login" className="mr-5 text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                                    <Link to="/register" className="mr-5 text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline">Register</Link>
                                </>
                        }
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            {user?.photoURL ?
                                <Tippy content={user?.displayName}><img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="img" /></Tippy>
                                : <Tippy content="No user logged in"><img className="w-14 h-14 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="img" /></Tippy>
                            }
                        </button>
                        <div>

                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 mb-5">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div className="">
                        <ul className="flex flex-row mt-0 space-x-10 text-md font-medium justify-end text-xl">
                            <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            <Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">FAQ</Link>
                            <Link to="/blog" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Blog</Link>

                            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
                            </label>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;