import React from 'react'
import profImg from '../assets/profileImage3.png'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaPhoneVolume, FaDownload } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Sidebar = () => {
    const personalInfo = {
        name: "Sanket Bhanuse",
        title: "Full Stack Developer",
        location: "Mumbai , India",
        email: "sanketbhanuse03@email.com",
        phone: "+91 9321686266",
        profileImage: profImg
    };

    return (
        <div className='p-5'>
            <div className='flex justify-center items-center'>
                <div className='mb-5 rounded-full overflow-hidden shadow-xl shadow-black ring-4 ring-[#ECFAE5] w-50 h-50'>
                    <Image src={personalInfo.profileImage} />
                </div>
            </div>
            <div className="Name flex justify-center items-center flex-col mb-2">
                <div className='text-3xl text-[#537D5D] font-extrabold'>{personalInfo.name}</div>
                <div>{personalInfo.title}</div>
            </div>
            <div className="text-center mb-4">
                <p className="mt-2 text-sm text-gray-600 flex items-center justify-center gap-1">
                    <span>📍</span> Mumbai, India
                </p>
                <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-semibold">✅ Open to Work</span>
                </div>
            </div>
            <div className="connects grid grid-cols-2 gap-2 mt-2">
                <a href="mailto:sanketbhanuse03@email.com" className="box cursor-pointer flex justify-center items-center border-1 border-[#537D5D] p-2 rounded-sm bg-[#ECFAE5] hover:bg-[#537D5D] hover:text-white transition-all transform-fill">
                    <IoMdMail className='text-2xl' />
                </a>
                <a href="tel:+919321686266" className="box cursor-pointer flex justify-center items-center border-1 border-[#537D5D] p-2 rounded-sm bg-[#ECFAE5] hover:bg-[#537D5D] hover:text-white transition-all transform-fill">
                    <FaPhoneVolume className='text-2xl' />
                </a>
                <a href="https://www.linkedin.com/in/sanket-bhanuse-0b38a523b/" target="_blank" className="box cursor-pointer flex justify-center items-center border-1 border-[#537D5D] p-2 rounded-sm bg-[#ECFAE5] hover:bg-[#537D5D] hover:text-white transition-all transform-fill">
                    <FaLinkedinIn className='text-2xl' />
                </a>
                <a href="https://github.com/SanketBhanuse" target="_blank" className="box cursor-pointer flex justify-center items-center border-1 border-[#537D5D] p-2 rounded-sm bg-[#ECFAE5] hover:bg-[#537D5D] hover:text-white transition-all transform-fill">
                    <FaGithub className='text-2xl' />
                </a>
            </div>
            <div className="button">
                <button
                    onClick={() => window.open("https://drive.google.com/file/d/1FPxyeHSuneyEGzXp6DP-7zak4r93dV2N/view", "_blank")}
                    className='flex gap-2 justify-center items-center px-3 py-2 w-full text-[#ECFAE5] bg-[#537D5D] hover:bg-[#ECFAE5] hover:text-black border border-[#537D5D] rounded-md transition-all transform-fill cursor-pointer mt-2'>
                    Download Resume <FaDownload className='inline-block' />
                </button>
            </div>
        </div>
    )
}

export default Sidebar