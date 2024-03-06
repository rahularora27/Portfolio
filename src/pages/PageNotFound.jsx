import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiWarningCircleBold } from "react-icons/pi";

const PageNotFound = () => {

    const navigate = useNavigate();

  return (
    <section class="bg-white">
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div class="flex flex-col items-center max-w-sm mx-auto text-center">
            <p class="p-3 text-sm font-medium text-custom-icon-hover rounded-full">
                <div className='text-6xl'>
                    <PiWarningCircleBold />
                </div>
            </p>
            <h1 class="mt-3 text-2xl font-semibold text-custom-icon-hover md:text-3xl">Page not found</h1>
            <p class="mt-4 text-custom-icon-hover">The page you are looking for doesn't exist. Here are some helpful links:</p>

            <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <button onClick={() => navigate(-1)} class="flex items-center justify-center w-1/2 px-5 py-2 text-md hover:scale-105 transition duration-1000 text-custom-icon-hover transition-colors duration-200 border-2 border-custom-icon-hover rounded-lg gap-x-2 sm:w-auto">
                            <div>
                               <FaArrowLeftLong />
                            </div>
                            
                            <span>Go back</span>
                        </button>
                        <Link to='/'>
                        <button class="w-1/2 px-5 py-2 text-md tracking-wide hover:scale-105 transition duration-1000 text-custom-icon-hover transition-colors border-2 border-custom-icon-hover duration-200 rounded-lg shrink-0 sm:w-auto">
                            Take me home
                        </button>
                        </Link>
                    </div>
                </div>
    </div>
    </section>
  )
}

export default PageNotFound