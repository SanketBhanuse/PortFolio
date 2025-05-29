import Image from 'next/image'
import React from 'react'
import bharatiLogo from '../assets/bharatiLogo.jpeg'
import gpmLogo from '../assets/gpmLogo.png'

const Education = () => {
    return (
        <div className='m-5 text-black'>
            {/* Title with animated underline */}
            <div className="title capitalize text-3xl font-bold text-[#537D5D] relative inline-block group cursor-pointer mb-8">
                Education
                <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#3A5A3D] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </div>

            {/* Education Cards Container */}
            <div className="space-y-6">
                {/* Bachelor's Degree */}
                <div className='edubox bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#537D5D]/30 p-6 relative overflow-hidden group'>
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#537D5D] to-[#3A5A3D] group-hover:w-2 transition-all duration-300"></div>

                    <div className="md:flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                            {/* Logo */}
                            <div className="logo shrink-0">
                                <div className="w-16 h-16 rounded-full border-4 border-[#537D5D]/20 overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <Image
                                        className='w-full h-full object-cover'
                                        src={bharatiLogo}
                                        alt="Bharati Vidyapeeth Logo"
                                    />
                                </div>
                            </div>

                            {/* Education Info */}
                            <div className="info flex-1">
                                <h3 className="text-xl font-bold text-[#537D5D] mb-1">
                                    B.E (Computer Engineering)
                                </h3>
                                <p className="text-gray-700 font-medium mb-1">
                                    Bharati Vidyapeeth College of Engineering
                                </p>
                                <p className="text-sm text-gray-500">
                                    Navi Mumbai, Maharashtra
                                </p>
                            </div>
                        </div>

                        {/* Year Badge */}
                        <div className="year shrink-0 flex justify-end mt-3">
                            <div className=" inline-block bg-gradient-to-r from-[#537D5D] to-[#3A5A3D] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                2023 - 2026
                            </div>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mt-4 flex justify-start">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                            Currently Pursuing
                        </span>
                    </div>
                </div>

                {/* Diploma */}
                <div className='edubox bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#537D5D]/30 p-6 relative overflow-hidden group'>
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#537D5D] to-[#3A5A3D] group-hover:w-2 transition-all duration-300"></div>

                    <div className="md:flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                            {/* Logo */}
                            <div className="logo shrink-0">
                                <div className="w-16 h-16 rounded-full border-4 border-[#537D5D]/20 overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <Image
                                        className='w-full h-full object-cover'
                                        src={gpmLogo}
                                        alt="Government Polytechnic Mumbai Logo"
                                    />
                                </div>
                            </div>

                            {/* Education Info */}
                            <div className="info flex-1">
                                <h3 className="text-xl font-bold text-[#537D5D] mb-1">
                                    Diploma in Computer Engineering
                                </h3>
                                <p className="text-gray-700 font-medium mb-1">
                                    Government Polytechnic Mumbai
                                </p>
                                <p className="text-sm text-gray-500">
                                    Mumbai, Maharashtra
                                </p>
                            </div>
                        </div>

                        {/* Year Badge */}
                        <div className="year shrink-0 flex justify-end mt-3">
                            <div className="inline-block bg-gradient-to-r from-[#537D5D] to-[#3A5A3D] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                2020 - 2023
                            </div>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mt-4 flex justify-start">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                            Completed
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education