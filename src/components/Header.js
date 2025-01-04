import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Why TW" },
    { href: "/ourwork", label: "Our Work" },
    { href: "/careers", label: "Careers" }, 
    { href: "/blog", label: "Blogs" },
    { href: "/projects", label: "Projects" },
   // { href: "/services", label: "Services" }, 
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop Header */}
      <div className="bg-white z-40 fixed top-0 w-full shadow-md">
        <div className="mx-auto max-w-[1300px] flex justify-between text-xl py-3 px-4 sm:px-6">
          {/* Logo */}
          <div>
            <Link href="/">
              <img alt="Triggrs Web Solutions Logo" src="/images/logo-sm.png" className="w-[200px] h-[50px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center text-gray-700">
            {navLinks.map((item) => (
              <div
                key={item.href}
                className="transition duration-150 relative after:absolute after:bottom-0 after:mx-auto after:inset-x-0 after:w-0 after:h-0.5 after:transition-all hover:after:w-full after:bg-blue-500"
              >
                <Link href={item.href} className="nav-link menu">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="items-center lg:block hidden  justify-center">
            <Link href="/contact">
              <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"/>
                </svg>
                <span>Contact Now</span>
              </button>
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-black" aria-label="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

     {/* Mobile Dropdown Menu */}
      <div
        className={`fixed   top-0 left-0 h-full bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-[75%] z-50`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Close Button and Links */}
          <div className="py-4 px-6">
            <button className="text-gray-600 mb-4" aria-label="Close Menu" onClick={() => setIsMenuOpen(false)} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"
              > <path   strokeLinecap="round"   strokeLinejoin="round"   strokeWidth="2"   d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Links */}
            {navLinks.map((item) => (
              <div key={item.href} className="py-2">
                <Link href={item.href} className="text-black block">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact Now Button */}
          <div className="p-6">
            <Link href="/contact">
              <button className="flex items-center justify-center w-full bg-blue-500 text-white py-3 rounded-full font-medium hover:bg-blue-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2"> <path   strokeLinecap="round"   strokeLinejoin="round"   d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" /> </svg>
                <span>Contact Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
