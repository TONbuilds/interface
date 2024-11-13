import Image from 'next/image'
import React from 'react'

const CardBounty = ({ event, company, days, entries, img, amount, }: { event: string; company: string; days: number; entries: number; img: any; amount: string }) => {
    return (
        <div className='w-full'>
            <div className='flex flex-col gap-1 border border-[#56565624] rounded-md p-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col w-[90%]'>
                        <p className='text-[#334155] font-semibold text-2xl'>{event}</p>
                        <p className='text-[#64748B] font-medium'>{company}</p>
                        <div className='flex items-center gap-4'>
                            <p className='text-[#718096]'>Bounty</p>
                            <p className='border-x-2 px-3 text-[#718096]'>Ends in {days}d</p>
                            <div className='flex items-center gap-1'>
                                <Image src="/message-circle.svg" height={15} width={15} alt='profile' />
                                <p className='text-[#718096]'>{entries}</p>
                            </div>
                            <div className='h-4 w-4 bg-[#0ACD6C] rounded-full'></div>
                        </div>
                    </div>
                    <div className='flex w-full justify-end'>
                        <Image src={img} height={130} width={130} alt='profile' className='h-full w-[8%] rounded-lg'></Image>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src="/ton_symbol.svg" height={20} width={20} alt='profile'></Image>
                    <p className='text-[#A0AEC0]'><span className='text-[#475569] text-xl font-medium'>{amount}</span> TON</p>
                </div>
            </div>
        </div>
    )
}

export default CardBounty
