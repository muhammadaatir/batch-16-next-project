import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Brand</h4>
          <p className="mt-2 text-slate-600">Small description about the company and what it does.</p>
        </div>
        <div>
          <h5 className="font-medium">Links</h5>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Contact</h5>
          <p className="mt-2 text-slate-600">hello@example.com</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-slate-500">© {new Date().getFullYear()} Brand. All rights reserved.</div>
    </footer>
  )
}

export default Footer