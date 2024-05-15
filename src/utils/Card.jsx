const Card = ({ heading, content, children }) => {
  return (
    <div className="bg-white rounded-md p-2 border-2 border-gray-500">
      <h3 className=" font-semibold mb-1">{heading}</h3>
      <p className="text-gray-700">{content}</p>
      {children}
    </div>
  )
}

export default Card