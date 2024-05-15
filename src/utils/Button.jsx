const Button = ({children, onClick, variant, size, fullWidth, isDisabled=false}) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={`capitalize select-none border-2 rounded ${fullWidth && "inline-block w-full"} ${variant==="outlined"? "border-primary-cta bg-white text-primary-cta hover:text-white hover:bg-primary-cta" : "border-primary-cta bg-primary-cta text-white hover:text-primary-cta hover:bg-white"} ${size==="small"?"py-1 px-2" :size==="big"? "py-3 px-9" : "py-2 px-5"} duration-300`}>{children}</button>
  )
}

export default Button