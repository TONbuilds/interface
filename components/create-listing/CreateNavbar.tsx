import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CreateNavbar = () => {
    return (
        <div className="border-r border-[#00000014] w-[20%] pt-12 h-screen sticky top-0">
            <div className='flex flex-col items-center gap-6 w-full'>
                <Link href="/create-listing" className='w-full px-6'>
                    <button className="bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full">
                        + Create New Listing
                    </button>
                </Link>
                <div className='flex h-[1px] w-full bg-[#00000014]'></div>
                <Link href="/my-listings">
                    <button className='flex justify-start w-full px-6 gap-3 items-center'>
                        <Image src="/mylisting.svg" height={25} width={25} alt='listing' className='text-[#64748B]' />
                        <p className='text-lg font-medium text-[#64748B]'>My Listings</p>
                    </button>
                </Link>
                <button className='flex justify-start w-full px-6 gap-3 items-center'>
                    <Image src="/team-setting.svg" height={25} width={25} alt='listing' className='text-[#64748B]' />
                    <p className='text-lg font-medium text-[#64748B]'>Team Settings</p>
                </button>
                <button className='flex justify-start w-full px-6 gap-3 items-center'>
                    <Image src="/help.svg" height={25} width={25} alt='listing' className='text-[#64748B]' />
                    <p className='text-lg font-medium text-[#64748B]'>Get Help</p>
                </button>
            </div>
        </div>
    )
}

export default CreateNavbar
