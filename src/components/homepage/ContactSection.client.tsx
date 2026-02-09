"use client"

import React, { useState } from 'react'
import Input from '@/components/ui/input'
import Textarea from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactSectionClient() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const fd = new FormData(form)
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      message: fd.get('message'),
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Message sent')
        form.reset()
      } else {
        setStatus('Failed to send')
      }
    } catch (err) {
      setStatus('Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600">Have a project or question? Send a message.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input name="name" placeholder="Your name" />
          <Input name="email" placeholder="Email" />
          <Textarea name="message" rows={6} placeholder="Message" className="sm:col-span-2" />
          <div className="sm:col-span-2">
            <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send message'}</Button>
          </div>
          {status && <div className="sm:col-span-2 text-slate-700">{status}</div>}
        </form>
      </div>
    </section>
  )
}
