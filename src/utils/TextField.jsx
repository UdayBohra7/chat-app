const TextField = ({ type, name, placeholder, onChange, showPassword, value, textColor }) => {
    return (
        <>
            {
                type==="password"?
                <input placeholder={placeholder} className={`focus:outline-none p-2 grow ${textColor? "text-"+textColor:"text-black"}`} type={showPassword ? "text":"password"} id={name} name={name} onChange={onChange} value={value} />
                :
                <input placeholder={placeholder} className={`focus:outline-none p-2 grow ${textColor? "text-"+textColor:"text-black"}`} id={name} name={name} type={type} onChange={onChange} value={value} />
            }
        </>
    )
}

export default TextField