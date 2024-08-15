import Image from 'next/image'
import React from 'react'
import { FaSpinner } from 'react-icons/fa'
// import LoadingImage from "../../public/images/loading.png";

const loading = () => {
  return (
    <div className='h-screen w-full text-center text-2xl font-bold'>
      {/* <FaSpinner className='animate-spin' /> */}
      Loading...
      {/* <Image src={LoadingImage} alt='loading' height={100} width={100} className='w-full h-fit animate-spin' /> */}
    </div>
  )
}

export default loading