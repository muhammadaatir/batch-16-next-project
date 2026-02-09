import React from 'react'
import { Button } from '@/components/ui/button'

const FeatureCard = ({title, desc}: {title: string, desc: string}) => (
  <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-slate-600">{desc}</p>
  </div>
)

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Features</h2>
            <p className="mt-2 text-slate-600">What makes this starter great</p>
          </div>
          <div>
            <Button variant="ghost">See docs</Button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Blazing Fast" desc="Optimized for performance and SEO with server-side rendering." />
          <FeatureCard title="Accessible" desc="Built with semantics and accessibility best-practices in mind." />
          <FeatureCard title="Modular" desc="Composable components that you can reuse across pages." />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
