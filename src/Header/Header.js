import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/eduonlineLogo.svg'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 h-36">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="w-36 h-96 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">EduOnline</span>
                    </a>
                    <div className="flex items-center">
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
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
                                <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="img"/>
                                : <img className="w-14 h-14 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="img" />
                            }
                        </button>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-md font-medium">
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