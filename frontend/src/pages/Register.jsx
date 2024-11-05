import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../context/User';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { registerUser, btnLoading } = UserData();
    const navigate = useNavigate('/login');

    function submitHandler(e) {
        e.preventDefault();
        registerUser(name, email, password, navigate);
    }
    return (
        <div className='w-full h-screen p-4 flex justify-center items-center bg-black relative overflow-hidden'>
            <div className='max-w-md w-full p-6 rounded-lg shadow-white bg-black relative z-10 shadow-md'>
                <h1 className='text-[#08D665] text-2xl font-bold text-center mb-6'>Register</h1>
                <form onSubmit={submitHandler}>
                    <div className='mt-4'>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Full Name"
                            className='w-full p-2 bg-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08D665] text-white'
                            required
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email Address"
                            className='w-full p-2 bg-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08D665] text-white'
                            required
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className='w-full p-2 bg-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08D665] text-white'
                            required
                        />
                    </div>
                    <div className='mt-6'>
                        <button
                        disabled={btnLoading}
                            type="submit"
                            className='w-full p-2 bg-[#08D665] text-white rounded hover:bg-[#08D650] focus:outline-none focus:ring-2 focus:ring-[#08D665]'
                        >
                            {btnLoading ? "Please Wait..." : "Register"}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <h1 className='text-white font-bold'>Have account? <Link className='text-[#08D665] underline' to={'/login'}>Login</Link></h1>
                </div>
            </div>
        </div>
    );
}

export default Register;
