import React from 'react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="bg-linear-to-r from-white to-sky-50 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            Build beautiful web experiences with Next.js
          </h1>
          <p className="mt-4 text-slate-600">
            Fast, accessible, and easy-to-scale starter templates and components to
            help you ship production-ready sites quickly.
          </p>
          <div className="mt-6 flex gap-4">
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#features">Learn more</a>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-80 h-56 bg-linear-to-tr from-sky-400 to-indigo-500 rounded-xl shadow-xl flex items-center justify-center text-white font-semibold">
            Hero Image
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection