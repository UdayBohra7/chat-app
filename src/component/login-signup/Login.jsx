import HomeLayout from '../../layouts/HomeLayout'
import Button from '../../utils/Button'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddForm from '../../utils/AddForm'
import loginImg from '../../../public/login.png'
import facebook from '../../../public/Social/facebook.png'
import twitter from '../../../public/Social/twitter.png'
import google from '../../../public/Social/google.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState({ password: false });

    const handleTogglePassword = (name) => {
        setShowPassword(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    }
    const textFields = [
        {
            placeholder: "Email address or mobile no.",
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
    ];

    return (
        <HomeLayout heading={"Login to your account"} image={loginImg}>
            <div className="space-y-7">
                <div className="space-y-7">
                    <AddForm textFields={textFields} showPassword={showPassword} />
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <input id="rememberMe" type="checkbox" className="border border-gray-300 rounded-md w-6 h-5" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <Link
                            to={"#"}
                            className="text-primary-cta hover:rotate-3 duration-300"
                        >
                            Forgot password
                        </Link>
                    </div>
                    <Button fullWidth>login</Button>
                </div>
                {/* login platform */}
                <div className="flex justify-center gap-7">
                    <div className="rounded-full p-2 bg-white" to={"#"}> <img className="rounded-full h-5" src={facebook} alt="facebook" /> </div>
                    <div className="rounded-full px-2 pt-[9px] bg-white" to={"#"}> <img className="rounded-full h-[17px]" src={twitter} alt="twitter" /> </div>
                    <div className="rounded-full p-2 bg-white" to={"#"}> <img className="rounded-full h-5" src={google} alt="google" /> </div>
                </div>
                {/* .... sign-up navigator .... */}
                <div className="flex justify-center gap-1">
                    <p>
                        Don't have an account?
                    </p>
                    <Link
                        to={"/sign-up"}
                        className="text-primary-cta hover:translate-y-1 duration-300"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Login