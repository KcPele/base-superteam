import React from 'react'

export default function Loading() {
  return (
    <main className='text-center h-screen'>
      <div className='w-fit h-fit m-auto'>
        <h1 className='text-[#000775 my-3]'>Loading<span className='animate-bounce'>...</span></h1>
        <p>Hopefully not for too long :)</p>
      </div>
    </main>
  )
}