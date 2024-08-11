import React from 'react'
import { SearchBounty } from './search-bounty'

export const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')] bg-cover text-center pt-[150px] pb-10">
        <h1 className='text-[46.78px] font-bold text-baseblack'>The Home of Bounties</h1>
        <p className='text-[20px] w-[448.57px] my-5 mx-auto'>Where projects and talents come together to build, inspire, and innovate.</p>
        <div className="flex gap-3 justify-center">
            <button className='border-2 border-white rounded-3xl py-2 px-4 text-xs'>For Bounty Owners</button>
            <button className='border-2 border-white rounded-3xl py-2 px-8 text-xs'>For Talents</button>
        </div>
        <SearchBounty />
    </div>
  )
}
