// Server-side API helper examples (call from server components or server actions)

export async function fetchExternalServer() {
  // Example: call an external API from the server (no CORS issues)
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  if (!res.ok) throw new Error('External server fetch failed')
  return res.json()
}

export async function fetchInternalDummyServer() {
  // Calling internal API from the server. Using a full URL is safer in some environments.
  // Replace BASE with your production origin if needed.
  const BASE = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  const res = await fetch(`${BASE}/api/dummy`)
  if (!res.ok) throw new Error('Internal server fetch failed')
  return res.json()
}
