import { Link } from "react-router-dom"
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (

    <nav className="sticky top-0 z-50 bg-indigo-50 border-b border-indigo-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <div className="text-lg font-bold text-indigo-700">
          MyApp
        </div>
        <div className="hidden md:flex gap-10 font-medium text-slate-700 ">
          <Link to="/" className="hover:text-indigo-700">Home</Link>
          <Link to="/about" className="hover:text-indigo-700">About</Link>
          <Link to="/users" className="hover:text-indigo-700">Users</Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className={`absolute right-4 top-full mt-2 w-80 rounded  bg-white shadow-md text-center hover:text-red-800
  ${open ? "block" : "hidden"} md:hidden`}>
          <Link
            to="/"
            className="block px-4 py-2 hover:text-indigo-700"
            onClick={() => setOpen(false)}
          >Home</Link>
          
          <Link
            to="/about"
            className="block px-4 py-2 hover:text-indigo-700"
            onClick={() => setOpen(false)}
          >About</Link>

          <Link
            to="/users"
            className="block px-4 py-2 hover:text-indigo-700"
            onClick={() => setOpen(false)}
          >Users</Link>
        </div>
      </div>
    </nav>

  )
}