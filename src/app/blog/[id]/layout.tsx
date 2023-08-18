"use client"
import { useState } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
    const [state] = useState(Math.random())
    return <div style={{backgroundColor: 'yellow'}}><p>Layout: {state}</p>{children}</div>
  }