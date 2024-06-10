// import React from 'react;'
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-[130px] w-[150px]"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
