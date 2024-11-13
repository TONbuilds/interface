import Image from 'next/image'
import React from 'react'

const CustomSearch = () => {
  return (
    <div className='w-full flex justify-center pb-8'>
      <div className='bg-gradient-to-r from-[#22CC77] via-[#22CC77] to-[#318949] h-[40px] w-full absolute'></div>
      <div className='relative flex flex-col w-[85%] gap-6 bg-[#FFFFFF] p-8 custom-box border border-[#E7E8EC] rounded-md'>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-1 w-[56%]'>
            <label>We have 452 opportunities for you</label>
            <div className='flex w-full items-center border border-[#D7DEDD] rounded-md'>
              <div className='flex items-center justify-center w-[10%] px-2'>
                <Image src="/search.svg" height={30} width={30} alt='TON' />
              </div>
              <input
                type="search"
                placeholder='Search for programs'
                name="search"
                id="search"
                className="outline-none py-[6px] w-[90%]"
              />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label>Bounty Type</label>
            <input type="text" placeholder='All Programs' name='type' className='outline-none border border-[#D7DEDD] rounded-md px-4 py-[6px]' />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Date Added</label>
            <input type="date" placeholder='All Programs' name='type' className='outline-none border border-[#D7DEDD] rounded-md px-4 py-[6px]' />
          </div>
          <div className='flex flex-col justify-end'>
            <button className='bg-[#0ACD6C] px-4 py-2 rounded-md'>Search</button>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p>Your Skills</p>
          <div className='flex items-center gap-3'>
            <div className='bg-[#D9D9D9] w-24 h-[30px] rounded-xl'>
              <p className='text-center'>skill1</p>
            </div>
            <div className='bg-[#D9D9D9] w-24 h-[30px] rounded-xl'>
              <p className='text-center'>skill2</p>
            </div>
            <div className='bg-[#D9D9D9] w-24 h-[30px] rounded-xl'>
              <p className='text-center'>skill3</p>
            </div>
            <button className='text-3xl'>+</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomSearch
