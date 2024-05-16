import "../App.css"
import logo from "../../public/logo.png"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const HomeLayout = ({ children, heading, image, navigator=false }) => {
    return (
        <div className="max-h-screen h-screen flex gap-4 bg-primary-lt select-none font-poppins">
            <div className="max-w-[470px] w-full p-11 bg-primary text-white space-y-5">
                <img className="m-auto w-[130px] h-[100px]" src={logo} alt="logo"/>
                <div className="flex items-center">
                    {
                        navigator &&
                        <Link to={"/"}><ArrowLeft /></Link>
                    }
                    <h2 className={`font-bold leading-snug text-2xl capitalize mx-auto text-${heading?.color}`}>{heading?.text}</h2>
                </div>
                {children}
            </div>
            <img className="ml-auto" src={image}/>
        </div>
    )
}

export default HomeLayout