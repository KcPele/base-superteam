import React from 'react'
import { SearchBounty } from './search-bounty'
import ShinyButton from './magicui/shiny-button'
import ShimmerButton from './magicui/shimmer-button'

export const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')] bg-cover text-center pt-[150px] pb-10">
        <h1 className='text-[46.78px] font-bold text-baseblack'>The Home of Bounties</h1>
        <p className='text-[20px] w-[448.57px] my-5 mx-auto text-basewhite'>Where projects and talents come together to build, inspire, and innovate.</p>
        <div className="flex gap-3 justify-center">
        <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none p-2 tracking-tight text-basewhite">
          For Bounty Owners
        </span>
      </ShimmerButton>
        <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none p-2 tracking-tight text-basewhite">
          For Talents
        </span>
      </ShimmerButton></div>
        <SearchBounty />
    </div>
  )
}
