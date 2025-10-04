import { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Hero() {
  const [name, setName] = useState("Guest");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.name) {
      setName(user.name);
    }
  }, [user]);

  return (
    <div className="h-10/12 px-4 flex flex-col items-center justify-center">
      <p className="mb-4 text-center text-3xl lg:text-4xl font-medium text-indigo-400">Hello, {name}</p>
      <h1 className='text-center text-3xl lg:text-5xl font-bold text-gray-300'>What can I help with?</h1>
    </div>
  )
}
