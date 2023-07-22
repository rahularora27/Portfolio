import React from 'react'

const TopNav = () => {
  return (
    <div className='text-custom-icon p-2 mr-2'>
        <nav>
            <ul className='flex justify-end items-center space-x-4'>
                <li className=' hover:text-custom-icon-hover hover:scale-110 transition duration-500'><a href=''>Home</a></li>
                <li className='hover:text-custom-icon-hover hover:scale-110 transition duration-500'><a href=''>About</a></li>
                <li className='hover:text-custom-icon-hover hover:scale-110 transition duration-500'><a href=''>Projects</a></li>
                <li className='hover:text-custom-icon-hover hover:scale-110 transition duration-500'><a href=''>Contact?</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default TopNav