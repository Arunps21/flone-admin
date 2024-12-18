import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]'>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold'>Flone.</h1>
            <h6 className='text-xs ml-[2px] text-gray-500 leading-3'>Admin Panel</h6>
        </div>
        <button className='bg-black text-white px-4 py-2'>Logout</button>
    </div>
  )
}

export default NavBar