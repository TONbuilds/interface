import Link from 'next/link'
import React from 'react'
import CardRecentEarn from '../cards/CardRecentEarn'

const RecentEarnings = () => {
    return (
        <div className='w-full flex justify-center items-center pt-8'>
            <div className='flex flex-col w-[70%] gap-6 bg-[#FFFFFF] p-4 border-r border-[#E7E8EC] rounded-md'>
                <div className='flex justify-between'>
                    <p className='text-[#A0AEC0] text-lg font-medium'>RECENT EARNINGS</p>
                    <Link href="/leaderboard"><button className='text-[#1E1E1E] font-medium'>Leaderboard</button></Link>
                </div>

                <div className='flex justify-center items-center gap-4 bg-[#6562FF40] py-3 rounded-md w-full'>
                    <CardRecentEarn img="/profile-icon.jpeg" name='Rahul' bounty='Jupiter 5 SOL Trading Challenge' total={500} />
                    <CardRecentEarn img="/profile-icon.jpeg" name='Rahul' bounty='Jupiter 5 SOL Trading Challenge' total={500} />
                    <CardRecentEarn img="/profile-icon.jpeg" name='Rahul' bounty='Jupiter 5 SOL Trading Challenge' total={500} />
                </div>
            </div>

        </div>
    )
}

export default RecentEarnings
