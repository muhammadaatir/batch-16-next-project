"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavbarProps {
    data: string;
    name: string
}

const Navbar = (props: NavbarProps) => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <div className='shadow-[0_2px_6px_#0000001f,inset_0_-1px_#dadce0] flex justify-between px-6 py-4'>
      <div>
        <p>Logo</p>  
      </div>  
      <div className='flex gap-4 underline'>
        <Link className={`${pathname === "/" && "text-blue-600"}`} href="/">Home</Link>
        <Link  className={`${pathname === "/about" && "text-blue-600"}`} href="/about">About</Link>
        <Link  className={`${pathname === "/login" && "text-blue-600"}`} href="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar