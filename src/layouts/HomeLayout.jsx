import "../App.css"
import logo from "../../public/logo.png"

const HomeLayout = ({ children, heading, image }) => {
    return (
        <div className="max-h-screen h-screen flex gap-4 bg-primary-lt select-none font-poppins">
            <div className="max-w-[470px] w-full p-10 bg-primary text-white space-y-5">
                <img className="m-auto w-[130px] h-[100px]" src={logo} alt="logo"/>
                <div className="py-2 text-center">
                    <h2 className="font-bold leading-snug text-2xl capitalize">{heading}</h2>
                </div>
                {children}
            </div>
            <img src={image}/>
        </div>
    )
}

export default HomeLayout