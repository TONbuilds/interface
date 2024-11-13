import CreateBasics from '@/components/create-listing/CreateBasics'
import CreateNavbar from '@/components/create-listing/CreateNavbar'
import React from 'react'

const page = () => {
    return (
        <div className='w-full flex gap-6'>
            <CreateNavbar />
            <div className="w-[80%] min-h-screen overflow-y-auto flex justify-center p-6">
                <CreateBasics />
            </div>
        </div>
    )
}

export default page
