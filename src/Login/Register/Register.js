import React from 'react';
import Header from '../../Header/Header';
import logo from '../../../src/eduonlineLogo.svg'

const Register = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <div className=''>
                <div className='flex items-center'>
                    <img className='w-28 mr-5' src={logo} alt='img' />
                    <h1 className='text-5xl font-bold'>EduOnline</h1>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Register;