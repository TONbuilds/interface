import Image from 'next/image'
import React from 'react'

const CardRecentEarn = ({ img, name, bounty, total }: { img: any; name: string; bounty: string; total: number; }) => {
    return (
        <div className='w-[32%]'>
            <div className='flex items-center justify-between gap-3 px-4 border-r border-[#FFFFFF]'>
                <div>
                    <Image src={img} height={60} width={60} alt='profile' className='flex rounded-full bg-contain bg-center'></Image>
                </div>
                <div>
                    <p className='text-black font-semibold'>{name}</p>
                    <p className='text-[#777777] font-medium text-xs'>{bounty}</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <Image src="/ton_symbol.svg" height={30} width={30} alt='profile'></Image>
                    <p className='text-[#A0AEC0] text-xs font-medium'><span className='text-[#475569] text-sm font-semibold'>{total}</span> TON</p>
                </div>
            </div>
        </div>
    )
}

export default CardRecentEarn
