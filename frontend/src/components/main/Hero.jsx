import { use } from "react";
import { useSelector } from "react-redux";

export default function Hero() {
  const user = useSelector((state) => state.user?.name || "Guest");
  return (
    <div className="h-10/12 px-4 flex flex-col items-center justify-center">
      <p className="mb-4 text-center text-md lg:text-xl font-bold text-gray-300">Hello {user}</p>
      <h1 className='text-center text-5xl lg:text-5xl font-bold text-gray-300'>Conversations Reimagined. Intelligence at Your Fingertips.</h1>
    </div>
  )
}
