
import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Main = () => {
    return (
        <div className='bg-slate-300'>
            <Header></Header>
            
            <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:mx-72">

                <div className="bg-gray-200 shadow-lg rounded-xl w-full h-3/6 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:p-2 md:w-2/6">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-4/6">
                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;