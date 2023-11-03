import Logout from "../logout/Logout"
import Link from "next/link"
import { useState } from 'react'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-purple-600 border-gray-200 dark:bg-gray-900" onClick={toggleMenu} >
      <div className="max-w-screen-xl mx-auto p-4 px-4 md:px-16 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <img
            src="https://i.imgur.com/LxZbfBlb.jpg"
            className="h-12 mr-2 rounded-full"
            alt="Fitnomenal Logo"
          />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
            Fitnomenal
          </span>
        </Link>
        <button
          onClick={toggleMenu} 
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${menuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`} 
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-purple-600 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-transparent hover:bg-purple-200 hover:text-purple-950 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 no-underline"
                onClick={closeMenu} 
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/goals"
                className="block py-2 pl-3 pr-4 text-white bg-transparent hover:bg-purple-200 hover:text-purple-950 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 no-underline"
                onClick={closeMenu} 
              >
                My Goals
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block py-2 pl-3 pr-4 text-white bg-transparent hover:bg-purple-200 hover:text-purple-950 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 no-underline"
                onClick={closeMenu} 
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/history"
                className="block py-2 pl-3 pr-4 text-white bg-transparent hover:bg-purple-200 hover:text-purple-950 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 no-underline"
                onClick={closeMenu} 
              >
                History
              </Link>
            </li>
            <li>
              <Link
                href="/daily-workout/workout-details"
                className="block py-2 pl-3 pr-4 text-white bg-transparent hover:bg-purple-200 hover:text-purple-950 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 no-underline"
                onClick={closeMenu} 
              >
                Continue workout
              </Link>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
