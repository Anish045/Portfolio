import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold">
        A<span className="text-target">K</span>
      </p>
    </Link>
  )
}
