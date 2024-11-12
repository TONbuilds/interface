"use client"
import React, { useState } from 'react'
import CreateReward from './CreateReward';

const CreateDescription = () => {
    const [choose, setChoose] = useState(true);
    return (
        <div>
            <>
                <div className={`${choose ? "flex" : "hidden"} w-[52vw] flex-col mt-10`}>
                    <div className='w-full flex flex-col gap-4'>
                        <div className='flex flex-col items-center gap-2'>
                            <h2 className='text-3xl font-semibold text-[#334155]'>Description</h2>
                            <p className='text-[#94A3B8] text-lg font-medium'>Now lets learn a bit more about the work you need completed</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-[#64748B] font-medium">Description</label>
                            <textarea className='outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px] resize-none' name="description" id="description" placeholder="Describe your bounty" rows={4}></textarea>
                        </div>

                        <button className='bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full' onClick={() => { setChoose(false) }}>Continue</button>

                        <button className='bg-[#EEF2FF] py-2 rounded-lg text-[#22CC77] font-semibold w-full'>Save Draft</button>
                    </div>
                </div>
                {choose ? "" : <CreateReward />}
            </>
        </div>
    )
}

export default CreateDescription
