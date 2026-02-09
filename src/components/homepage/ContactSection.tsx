import React from 'react'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600">Have a project or question? Send a message.</p>
        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input name="name" placeholder="Your name" />
          <Input name="email" placeholder="Email" />
          <Textarea name="message" rows={6} placeholder="Message" className="sm:col-span-2" />
          <div className="sm:col-span-2">
            <Button type="submit">Send message</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
