import Link from 'next/link'
import React from 'react'

export default function NotFOund() {
  return (
    <main className='text-center'>
      <div className='my-36'>
        <h3>Page Not Found</h3>
        <p className='text-3xl'>oops! we could not find the page you were looking for</p>
        <p>Please go back to the <Link href="/" className='text-blue-700 hover:underline'>Home Page</Link></p>
      </div>
    </main>
  )
}