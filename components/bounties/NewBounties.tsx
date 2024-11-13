import React from 'react'
import CardBounty from '../cards/CardBounty';

const NewBounties = ({ company }: { company: string; }) => {
    return (
        <div className='w-full flex justify-center items-center pb-8'>
            <div className='flex flex-col w-[70%] gap-6 bg-[#FFFFFF] p-4 border-r border-[#E7E8EC] rounded-md'>
                <div className='flex justify-between'>
                    <p className='text-[#A0AEC0] text-lg font-medium'>{company}</p>
                    <button className='text-[#1E1E1E] font-medium'>View All</button>
                </div>
                <div className='bg-[#E2E8F0] h-[1px] w-full'></div>
                <div className='flex flex-col gap-[6px] w-full'>
                    <CardBounty event='SOON Genesis Hackathon' company='SOON' days={24} entries={27} img="/bounty.png" amount="40k" />
                    <CardBounty event='SOON Genesis Hackathon' company='SOON' days={24} entries={27} img="/bounty.png" amount="40k" />
                    <CardBounty event='SOON Genesis Hackathon' company='SOON' days={24} entries={27} img="/bounty.png" amount="40k" />
                    <CardBounty event='SOON Genesis Hackathon' company='SOON' days={24} entries={27} img="/bounty.png" amount="40k" />
                </div>
                <button className='border border-[#E7E8EC] py-2 w-full text-center text-[#94A3B8] rounded-md'>View All</button>
            </div>

        </div>
    )
}

export default NewBounties
