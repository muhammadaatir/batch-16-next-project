import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("Received contact:", data)
    // Here you would persist to a DB or send email.
    return NextResponse.json({ ok: true, data }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
