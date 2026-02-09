// Client-side API helper examples

export async function fetchDummyClient() {
  // Called from client components — uses relative path to internal API
  const res = await fetch('/api/dummy')
  if (!res.ok) throw new Error('Failed fetching /api/dummy')
  return res.json()
}

export async function fetchExternalClient() {
  // Example calling an external public API from the browser
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  if (!res.ok) throw new Error('External fetch failed')
  return res.json()
}
