import CreateNavbar from '@/components/create-listing/CreateNavbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex gap-6'>
      <CreateNavbar />
      <div className="w-[80%] min-h-screen overflow-y-auto flex justify-start p-6">
        <h2 className='text-3xl font-semibold text-[#334155]'>My Listings</h2>
      </div>
    </div>
  )
}

export default page
