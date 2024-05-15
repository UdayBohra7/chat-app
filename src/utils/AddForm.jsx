import TextField from './TextField'

const AddForm = ({ textFields, onChange, showPassword }) => {
  return (
    <div>
        <form>
            {
                textFields?.map((input, index) => {
                    return(
                        <div key={index}>
                        {
                            input?.label && 
                            <label className="capitalize block py-1 font-medium select-none cursor-pointer" htmlFor={input?.name}>{input?.label}</label>
                        }
                         <div className={`rounded border border-gray-200 flex items-center mb-4`}>
                         {
                                input?.type==="select"?
                                <select id={input?.name} onChange={onChange}>
                                    {
                                        input?.options?.map((option) => (
                                            <option value={option?.value}>{option?.name}</option>
                                        ))
                                    }
                                </select>
                                : <TextField placeholder={input?.placeholder} type={input?.type} name={input?.name} onChange={onchange} showPassword={showPassword[input?.name]}/>
                            }
                            {
                                input?.icon && 
                                <span onClick={input?.onClick} className="px-1 opacity-75 hover:opacity-90 cursor-pointer">{input?.icon}</span>
                            }
                         </div>
                        </div>  
                    )
                })
            }
        </form>
    </div>
  )
}

export default AddForm
