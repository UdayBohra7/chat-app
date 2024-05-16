import React from 'react'
import Button from '../../utils/Button'
import HomeLayout from '../../layouts/HomeLayout'
import verifyImage from '../../../public/verify.png'
import { Link } from 'react-router-dom'

const VerifyPage = () => {
    return (
        <HomeLayout heading={{text: "verification code", color: "primary-cta"}} image={verifyImage}>
            <div className="space-y-5">
                <div className="space-y-5 text-center">
                    <div className="flex justify-center items-center space-x-4 text-black">
                        <input
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            maxLength="1"
                            className="w-12 h-12 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <Link className="inline-block text-gray-400" to={"#"}>{"send again"}</Link>
                    <Button fullWidth={true}>verify</Button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default VerifyPage
