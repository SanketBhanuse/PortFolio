import React from 'react'
import { FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt, FaCertificate } from 'react-icons/fa'
import Image from 'next/image'
import digitralrangersLogo from '../assets/digitalrangersLogo.png'

const Experience = () => {
    const experiences = [
        {
            id: 1,
            position: "Frontend Developer",
            company: "Digital Rangers",
            type: "Internship",
            duration: "Jan 2023 - Aug 2023",
            period: "8 months",
            location: "Mumbai, Maharashtra, India",
            workType: "On-site",
            companyUrl: "https://digitalrangers.in/",
            logo: digitralrangersLogo,
            certificateUrl: "https://drive.google.com/file/d/11gbCtG_YuN3fY6Fcl6qcAd3YTekjqR7y/view?usp=drive_link",
            description: [
                "Developed responsive web applications using modern frontend technologies",
                "Collaborated with design team to implement user-friendly interfaces",
                "Participated in code reviews and maintained coding standards"
            ]
        }
    ]

    return (
        <div className="px-8 py-12 bg-[#ECFAE5]">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-[#537D5D] mb-2">Experience</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#537D5D] to-[#6B9C73] rounded-full"></div>
                </div>

                {/* Experience Cards */}
                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="group relative">
                            {/* Background Card */}
                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#537D5D]/20">

                                {/* Header with Logo and Company Info */}
                                <div className="md:flex items-start gap-4 mb-4">
                                    {/* Company Logo - Clickable */}
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 hover:scale-105 transition-transform duration-200"
                                    >
                                        <div className="w-16 h-auto rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[#537D5D] transition-colors duration-200">
                                            <Image
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </a>

                                    {/* Position and Company Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between flex-wrap gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                    {exp.position}
                                                </h3>
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-[#537D5D] hover:text-[#2D4A32] font-semibold text-lg transition-colors duration-200 group/link"
                                                >
                                                    {exp.company}
                                                    <FaExternalLinkAlt className="text-sm opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                                                </a>
                                                <span className="text-gray-600 text-sm ml-2">· {exp.type}</span>
                                            </div>
                                        </div>

                                        {/* Duration and Location */}
                                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <FaCalendarAlt className="text-[#537D5D]" />
                                                <span>{exp.duration} · {exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaMapMarkerAlt className="text-[#537D5D]" />
                                                <span>{exp.location} · <span className='font-extrabold'>{exp.workType}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mt-4 md:pl-20">
                                    <ul className="space-y-2">
                                        {exp.description.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                                <span className="w-2 h-2 bg-[#537D5D] rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* View Certificate Button */}
                                {exp.certificateUrl && (
                                    <div className="mt-6 md:pl-20">
                                        <a
                                            href={exp.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#537D5D] to-[#6B9C73] text-white text-sm font-semibold rounded-lg hover:from-[#2D4A32] hover:to-[#537D5D] transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/cert"
                                        >
                                            <FaCertificate className="text-sm" />
                                            <span>View Certificate</span>
                                            <FaExternalLinkAlt className="text-xs opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200" />
                                        </a>
                                    </div>
                                )}

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#537D5D]/20 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience