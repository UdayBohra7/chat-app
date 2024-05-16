import React, { useState } from 'react'
import Button from '../../utils/Button';
import HomeLayout from '../../layouts/HomeLayout';
import { Eye, EyeOff, Facebook, Github, Linkedin, Twitter, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddForm from '../../utils/AddForm';
import registrationImg from '../../../public/registration.png'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState({ password: false, confirmPass: false });
    const [item, setItem] = useState({});

    const handleTogglePassword = (name) => {
        setShowPassword(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    }
    const handleChange = (event) => {
        const { name, value } = event?.target;
        setItem(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {

    }

    const textFields = [
        {
            placeholder: "Full Name",
            type: "text",
            name: "name",
        },
        {
            placeholder: "Phone Number",
            type: "number",
            name: "number",
        },
        {
            placeholder: "Email id",
            type: "text",
            name: "email",
        },
        {
            placeholder: "Password",
            type: "password",
            name: "password",
            icon: showPassword?.password ? <EyeOff /> : <Eye />,
            onClick: () => handleTogglePassword("password")
        },
        {
            placeholder: "Confirm Password",
            type: "password",
            name: "confirmPass",
            icon: showPassword?.confirmPass ? <EyeOff /> : <Eye />,
            onClick: () => handleTogglePassword("confirmPass")
        },
    ];

    return (
        <HomeLayout heading={{text: "Register"}} image={registrationImg} navigator>
            <div className="space-y-5">
                <div className="space-y-5">
                    <AddForm textFields={textFields} showPassword={showPassword} onChange={handleChange}/>
                    <div className="flex items-center justify-center gap-1">
                        <input id="rememberMe" type="checkbox" className="border border-gray-300 rounded-md w-6 h-5 animate-bounce" />
                        <label htmlFor="rememberMe">Terms & Conditions</label>
                    </div>
                    <Link to={"/sign-up/verify"}><Button onClick={handleSubmit} fullWidth>Send verification code</Button></Link>
                </div>
            </div>
        </HomeLayout>
    )
}

export default SignUp