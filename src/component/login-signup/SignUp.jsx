import React, { useState } from 'react'
import Button from '../../utils/Button';
import HomeLayout from '../../layouts/HomeLayout';
import { Eye, EyeOff, Facebook, Github, Linkedin, Twitter, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddForm from '../../utils/AddForm';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState({password: false, confirmPass: false});
    const [item, setItem] = useState({});

    const handleTogglePassword = (name) => {
        setShowPassword(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    }
    const onChange = (event) => {
        const {name, value} = event?.target;
        setItem(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const textFields = [
        {
            label: "your name",
            type: "text",
            name: "name",
        },
        {
            label: "email address",
            type: "text",
            name: "email",
        },
        {
            label: "phone number",
            type: "number",
            name: "number",
        },
        {
            label: "password",
            type: "password",
            name: "password",
            icon: showPassword?.password ? <EyeOff />:<Eye />,
            onClick: () => handleTogglePassword("password")
        },
        {
            label: "confirm password",
            type: "password",
            name: "confirmPass",
            icon: showPassword?.confirmPass ? <EyeOff />:<Eye />,
            onClick: () => handleTogglePassword("confirmPass")
        },
    ];

    return (
        <HomeLayout heading={"sign up"} message={"Hi! Thanks for choosing us"}>
            <div className="space-y-5">
                <AddForm textFields={textFields} showPassword={showPassword} onChange={onChange}/>
                <Button variant={"contained"} fullWidth>sign up</Button>
            </div>
            {/* ..... */}
            <div>
                <p className="w-full border-b text-center">
                    <span className="bg-white relative top-2 text-sm px-[10px]">
                        or Login With
                    </span>
                </p>
                <div className="flex gap-2 justify-evenly mt-7">
                    <div className="h-[40px] w-[40px] px-[10px] py-[10px] hover:cursor-pointer opacity-90 hover:opacity-100 rounded border border-[#1e2e4f]">
                        <Facebook className="w-5 h-4 text-[#3b5998]" />
                    </div>
                    <div className="h-[40px] w-[40px] px-[10px] py-[10px] hover:cursor-pointer opacity-90 hover:opacity-100 rounded border border-[#55acee]">
                        <Twitter className="w-5 h-4 text-[#55acee]" />
                    </div>
                    <div className="h-[40px] w-[40px] px-[10px] py-[10px] hover:cursor-pointer opacity-90 hover:opacity-100 rounded border border-[#007bb6]">
                        <Linkedin className="w-5 h-4 text-[#007bb6]" />
                    </div>
                    <div className="h-[40px] w-[40px] px-[10px] py-[10px] hover:cursor-pointer opacity-90 hover:opacity-100 rounded border border-[#444]">
                        <Github className="w-5 h-4 text-[#444]" />
                    </div>
                </div>
            </div>
            {/* ..... */}
            <div>
                <p className="w-full border-b text-center">
                    <span className="bg-white relative top-2 text-sm px-[10px]">
                        Already have an account?
                    </span>
                </p>
                <Link
                    to={"/"}
                    className="rounded transition-all duration-300 w-full mt-7 flex justify-center text-danger border border-danger hover:bg-danger hover:text-white py-2"
                >
                    <UserRound className="h-4 mt-1" />
                    Login
                </Link>
            </div>
        </HomeLayout>
    )
}

export default SignUp