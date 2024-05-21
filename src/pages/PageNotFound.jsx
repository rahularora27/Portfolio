import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiWarningCircleBold } from "react-icons/pi";

const PageNotFound = () => {

    const navigate = useNavigate();

  return (
    <section class="bg-white dark:bg-gray-900 ">
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div class="flex flex-col items-center max-w-sm mx-auto text-center">
            <p class="p-3 text-sm font-medium text-custom-1 rounded-full">
                <div className='text-6xl'>
                    <PiWarningCircleBold />
                </div>
            </p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for doesn't exist. Here are some helpful links:</p>

            <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button onClick={() => navigate(-1)} class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 border font-semibold rounded-lg gap-x-2 sm:w-auto dark:text-gray-200 dark:border-gray-700">
                    <div>
                        <FaArrowLeftLong />
                    </div>


                    <span>Go back</span>
                </button>

                <Link to='/'>
                <button class="w-1/2 px-5 py-2 text-sm font-semibold tracking-wide text-black transition-colors duration-200 rounded-lg shrink-0 sm:w-auto dark:bg-custom-1">
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