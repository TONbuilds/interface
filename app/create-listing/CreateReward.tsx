import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CreateReward = () => {
    return (
        <>
            <div className={`w-[52vw] flex-col mt-10`}>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-3xl font-semibold text-[#334155]'>Add the Reward Amount</h2>
                        <p className='text-[#94A3B8] text-lg font-medium'>Decide the compensation amount for your listing</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Select Token</label>
                        <input
                            type="search"
                            placeholder='TON'
                            name="token"
                            id="token"
                            className="outline-none border border-[#D7DEDD] px-4 py-[6px]"
                        />
                        <div className='flex justify-between items-center'>
                            <p className="text-[#64748B] font-medium">1 Prize</p>
                            <p className="text-[#64748B] font-medium">0 TON Total</p>
                        </div>
                    </div>

                    <div className='flex h-[1px] w-full bg-[#00000014]'></div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">First Prize</label>
                        <div className='flex w-full items-center border border-[#D7DEDD]'>
                            <input
                                type="prize"
                                placeholder='5000'
                                name="token"
                                id="token"
                                className="outline-none border-r border-[#D7DEDD] px-4 py-[6px] w-[85%]"
                            />
                            <div className='flex items-center justify-center w-[15%]'>
                                <Image src="/ton_symbol.svg" height={30} width={30} alt='TON' />
                                <p>TON</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex h-[1px] w-full bg-[#00000014]'></div>

                    <div className='flex items-center gap-3 w-full mt-6'>
                        <button className='py-2 text-[#334155] border border-[#334155] font-semibold w-full'>+ Add Individual Prize</button>
                        <button className='py-2 bg-[#EEF2FF] border border-transparent text-[#64748B] font-semibold w-full'>+ Add Bonus Prize</button>
                    </div>

                    <Link href="/my-listings">
                        <button className='bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 text-white w-full'>Publish Now</button>
                    </Link>

                    <div className='flex items-center gap-3 w-full'>
                        <button className='bg-[#EEF2FF] border border-transparent py-2 text-[#22CC77] font-semibold w-full'>Save Draft</button>
                        <button className='py-2 border border-[#318949] text-[#64748B] font-semibold w-full'>Preview</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateReward
