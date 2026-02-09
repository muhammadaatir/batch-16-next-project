import { NextResponse } from "next/server"

export async function GET() {
  const payload = {
    message: "This is dummy data from /api/dummy",
    time: new Date().toISOString(),
    items: [
      { id: 1, name: "Alpha" },
      { id: 2, name: "Beta" },
      { id: 3, name: "Gamma" },
    ],
  }

  return NextResponse.json(payload)
}
