import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <div  className="bg-black text-white py-10">
     <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-[1400px]">
      {/* Logo and Description */}
      <div>
        <img className='w-[250px]' src="/images/footertw.png"/>
        <p className="mt-4 text-sm"> We build custom websites to elevate your brand and drive growth.       </p>
        <div className="mt-4 flex space-x-4">
          <Link href="#" className="text-white hover:text-blue-400" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-xl"></i>
          </Link>
          <Link href="#" className="text-white hover:text-blue-400" aria-label="Twitter">
            <i className="fab fa-twitter text-xl"></i>
          </Link>
          <Link href="#" className="text-white hover:text-blue-400" aria-label="Facebook">
            <i className="fab fa-facebook text-xl"></i>
          </Link>
          <Link href="#" className="text-white hover:text-blue-400" aria-label="Instagram">
            <i className="fab fa-instagram text-xl"></i>
          </Link>
        </div>
        <div className='flex gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <h3>+91 6268839263 <br/>+91 9407320059</h3>
            <Link href='#'>   </Link>
        </div>
      </div>
     
      {/* Why Triggrsweb */}
      <div>
        <h2 className="text-lg font-semibold text-blue-400">Why Triggrsweb</h2>
        <ul className="mt-4 space-y-2">
          <li><Link href="#" className="hover:text-blue-400">About Triggrsweb</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Careers</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Blogs</Link></li>
        </ul>
      </div>

      {/* What We Do */}
      <div>
        <h2 className="text-lg font-semibold text-blue-400">What We Do</h2>
        <ul className="mt-4 space-y-2">
          <li><Link href="#" className="hover:text-blue-400">Development Services</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Emerging Technology</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Staffing</Link></li>
          <li><Link href="#" className="hover:text-blue-400">IT Consulting</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Digital Marketing</Link></li>
        </ul>
      </div>

      {/* Industries */}
      <div>
        <h2 className="text-lg font-semibold text-blue-400">Industries</h2>
        <ul className="mt-4 space-y-2">
          <li><Link href="#" className="hover:text-blue-400">Aerospace and Defense</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Automotive</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Banking</Link></li>
          <li><Link href="#" className="hover:text-blue-400">Utilities</Link></li>
        </ul>
      </div>
    </div>
  </div></div>
  )
}
