const Persona = ({ src, alt }) => {
    return (
      <div className="w-[46px] h-[46px] rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={src? src:"#"} alt={alt? alt:"img"} />
      </div>
    );
  };
 
export default Persona