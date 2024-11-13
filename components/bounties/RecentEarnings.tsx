import Link from 'next/link'
import React from 'react'

const RecentEarnings = () => {
    return (
        <div className='w-full flex justify-center items-center py-8'>
            <div className='flex flex-col w-[70%] gap-6 bg-[#FFFFFF] p-4 border-r border-[#E7E8EC] rounded-md'>
                <div className='flex justify-between'>
                    <p className='text-[#A0AEC0] text-lg font-medium'>RECENT EARNINGS</p>
                    <Link href="/leaderboard"><button className='text-[#1E1E1E] font-medium'>Leaderboard</button></Link>
                </div>
            </div>

        </div>
    )
}

export default RecentEarnings
