"use client"
import Image from 'next/image'
import Button from '../components/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathname = usePathname();
  console.log('pathname:', pathname);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Pippo</p>
      <Button></Button>
      <ul>
      {['1', '2', '3'].map((id) => (
        <li key={id}>
          <Link href={`/blog/${id}`}>{id}</Link>
        </li>
      ))}
    </ul>
    </main>
  )
}
