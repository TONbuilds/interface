"use client"
import React, { useState } from 'react'
import CreateDescription from './CreateDescription'

const CreateBasics = () => {
    const [choose, setChoose] = useState(true);
    return (
        <>
            <div className={`${choose ? "flex" : "hidden"} w-[52vw] flex-col mt-10`}>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-3xl font-semibold text-[#334155]'>Create a Listing</h2>
                        <p className='text-[#94A3B8] text-lg font-medium'>Now lets learn a bit more about the work you need completed</p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Listing Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Develop a new landing page'
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Listing Slug</label>
                        <p className='text-sm text-[#94A3B8]'>This field can not be edited after a listing has been published</p>
                        <input
                            type="text"
                            name="slug"
                            id="slug"
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Skills Needed</label>
                        <input
                            type="text"
                            name="skills"
                            id="skills"
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Sub Skills Needed</label>
                        <input
                            type="text"
                            name="sub"
                            id="sub"
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Listing Geography</label>
                        <input
                            type="text"
                            name="geo"
                            id="geo"
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Point of Contact (TG / X / Email)</label>
                        <input
                            type="url"
                            name="contact"
                            id="contact"
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Deadline ( in Asia/Calcutta)</label>
                        <input
                            type="date"
                            name="deadline"
                            id="deadline"
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[#64748B] font-medium">Referred By</label>
                        <input
                            type="text"
                            name="referred"
                            id="referred"
                            className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                        />
                    </div>

                    <button className='bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full' onClick={() => { setChoose(false) }}>Continue</button>

                    <button className='bg-[#EEF2FF] py-2 rounded-lg text-[#22CC77] font-semibold w-full'>Save Draft</button>
                </div>
            </div>
            {choose ? "" : <CreateDescription />}
        </>
    )
}

export default CreateBasics
