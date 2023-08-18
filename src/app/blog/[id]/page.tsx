"use client"

import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
    const pathname = usePathname();
  console.log('pathname:', pathname);
    return (
    <div>My Post: {params.id}
    <hr></hr>
    <a href="/">Home</a>
    </div>)
  }