import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../context/User';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const { loginUser, btnLoading } = UserData();
    const navigate = useNavigate('/home');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isChecked) {
            toast.error("Please agree to the terms and conditions.");
            return;
        }
        if (!role) {
            toast.error("Please choose a role.");
            return;
        }
        loginUser(email, password, role, navigate);
    };

    return (
        <div className='w-full h-screen p-4 flex justify-center items-center bg-black relative overflow-hidden'>
            <div className='max-w-md w-full p-6 rounded-lg shadow-white bg-black relative z-10 shadow-md'>
                <h1 className='text-[#08D665] text-2xl font-bold text-center mb-6'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email Address"
                            className='w-full p-2 bg-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08D665] text-white'
                            aria-label="Email Address"
                            required
                        />
                    </div>
                    <div className='mt-4'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Your Password"
                            className='w-full p-2 bg-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08D665] text-white'
                            aria-label="Password"
                            required
                        />
                    </div>
                    <div className='mt-4'>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className='w-full p-2 bg-black text-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08D665]'
                            aria-label="Choose Role"
                            required
                        >
                            <option value="">Choose Role</option>
                            <option value="member">Member</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className='mt-6 flex items-center'>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                            required
                        />
                        <label className='text-white'>I agree to the terms and conditions</label>
                    </div>
                    <div className='mt-6'>
                        <button
                            disabled={btnLoading}
                            type="submit"
                            className='w-full p-2 bg-[#08D665] text-white rounded hover:bg-[#08D650] focus:outline-none focus:ring-2 focus:ring-[#08D665]'
                            aria-label="Login Button"
                        >
                            {btnLoading ? "Please Wait..." : "Login"}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <h1 className='text-white font-bold'>Not a Member? <Link className='text-[#08D665] underline' to={'/register'}>Register</Link></h1>
                </div>
            </div>
        </div>
    );
}

export default Login;
