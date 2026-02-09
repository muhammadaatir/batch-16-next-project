"use server"

import React from "react"

async function submitMessage(formData: FormData) {
  'use server'
  const name = formData.get('name')?.toString() || ''
  const message = formData.get('message')?.toString() || ''
  // Simulate server-side work (DB/email)
  console.log('Server action received', { name, message })
  // server actions must return void / Promise<void>
  return
}

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Server Action Example</h1>
      <form action={submitMessage} className="mt-4 grid gap-4">
        <input name="name" placeholder="Your name" className="border rounded p-2" />
        <textarea name="message" placeholder="Message" className="border rounded p-2" />
        <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded">Send (server action)</button>
      </form>
    </main>
  )
}
