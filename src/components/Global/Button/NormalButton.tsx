const NormalButton = ({text, action}:{text:string, action: any}) => {
  return (
    <button onClick={action} className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
    {text}
  </button>
  )
}

export default NormalButton