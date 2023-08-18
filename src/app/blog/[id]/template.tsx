"use client"
import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    const [state] = useState(Math.random())
    return <div style={{backgroundColor: 'green'}}><p>Template {state}</p>{children}</div>
  }