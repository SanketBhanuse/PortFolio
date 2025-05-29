import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import chatAppThumbnail from '../assets/chatAppThumbnail.png'
import futureVoltThumbnail from '../assets/futureVolt/futurveVoltThumbnail.png'
import cropDemandThumbnail from '../assets/cropDemand/cropDemandThumbnail.png'
import toDoList from '../assets/To-do-list/toDoList.png'
import survellanceSecurityThumbnail from '../assets/Survellance Security/survellanceSecurityThumbnail.png'
import flyeThumbnail from '../assets/fylesystem/flyeThumbnail.png'
import batchSystem from '../assets/batchSystem/batchSystem.png'
import Image from 'next/image'

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: "Chat Application",
            type: "Full Stack",
            description: "Real-time communication platform with socket.io integration, featuring group chat, notifications, and seamless messaging experience",
            thumbnail: chatAppThumbnail, // Only show if this exists
            githubUrl: "https://github.com/SanketBhanuse/Chat-Application-Frontend",
            liveUrl: "https://bhanuse-chatapp.vercel.app/",
            technologies: ["React js", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"]
        },
        {
            id: 2,
            title: "FutureVolt",
            type: "Full Stack",
            description: "Electricity demand prediction system for Delhi using machine learning, web scraping for data collection, and intelligent forecasting algorithms",
            thumbnail: futureVoltThumbnail, // Commented out - won't show
            githubUrl: "https://github.com/SanketBhanuse/FutureVolt",
            liveUrl: "https://futurevolt.vercel.app/",
            technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Python", "Machine Learning", "Web Scraping"]
        },
        {
            id: 3,
            title: "Surveillance Security (Hackthon Grp Project)",
            type: "Full Stack",
            description: "Advanced security system that converts sketches to colorized photos and provides real-time person detection through camera surveillance",
            thumbnail: survellanceSecurityThumbnail,
            githubUrl: "https://github.com/SanketBhanuse/SECHack-Frontend-New",
            technologies: ["Next.js", "Tailwind CSS", "Python", "Computer Vision", "AI/ML", "Real-time Detection"]
        },
        {
            id: 4,
            title: "Cropdemand Prediction (Hackthon Grp Project)",
            type: "Full Stack",
            description: "Agricultural forecasting system that predicts crop demand based on historical data, seasonal patterns, and market trends using machine learning",
            thumbnail: cropDemandThumbnail,
            githubUrl: "https://github.com/SanketBhanuse/Demand_forecasting_Frontend",
            // liveUrl: "https://crop-prediction-demo.vercel.app", // Only Live URL available
            technologies: ["Next.js", "Tailwind CSS", "Python", "Machine Learning", "Data Analytics", "Predictive Modeling"]
        },
        {
            id: 5,
            title: "To-Do List Application",
            type: "Frontend",
            description: "Clean and intuitive task management application with local storage functionality for persistent data and smooth user experience",
            thumbnail: toDoList,
            githubUrl: "https://github.com/SanketBhanuse/To-Do-List",
            liveUrl: "https://bhanuse-todolist.vercel.app/",
            technologies: ["React", "Tailwind CSS", "Express", "Local Storage"]
        },
        {
            id: 6,
            title: "File Assessment Landing Page",
            type: "Frontend",
            description: "Professional landing page for file assessment services with modern design, responsive layout, and optimized user interface",
            thumbnail: flyeThumbnail,
            githubUrl: "https://github.com/SanketBhanuse/Fyle-assignment",
            liveUrl: "https://sanket-fyle-assignment.vercel.app/",
            technologies: ["React", "Tailwind CSS", "Responsive Design"]
        },
        {
            id: 7,
            title: "Batch System Assessment",
            type: "Frontend",
            description: "Modern landing page for batch system assessment platform featuring clean design, intuitive navigation, and professional presentation",
            thumbnail: batchSystem,
            githubUrl: "https://github.com/yourusername/batch-system-landing",
            liveUrl: "https://github.com/SanketBhanuse/Batchsystemtask",
            technologies: ["React", "Tailwind CSS", "Modern UI/UX"]
        }
    ];

    const openProjectModal = (project) => {
        setSelectedProject(project)
    }

    const closeProjectModal = () => {
        setSelectedProject(null)
    }

    // Function to determine grid layout based on number of images
    const getGridLayout = (mediaCount) => {
        switch (mediaCount) {
            case 1:
                return "grid-cols-1"
            case 2:
                return "grid-cols-2"
            case 3:
                return "grid-cols-2"
            case 4:
                return "grid-cols-2"
            default:
                return "grid-cols-3"
        }
    }

    return (
        <div className="px-8 py-12 bg-[#ECFAE5]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-bold text-[#537D5D] mb-2">Projects</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#537D5D] to-[#6B9C73] rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore my latest projects showcasing full-stack development and creative frontend solutions
                    </p>
                </div>

                {/* Projects Slider */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet-custom',
                        bulletActiveClass: 'swiper-pagination-bullet-active-custom'
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="projects-swiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Project Thumbnail - Only show if thumbnail exists */}
                                {project.thumbnail && (
                                    <div className="relative overflow-hidden">
                                        <Image
                                            width={100}
                                            height={100}
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Project Type Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${project.type === 'Full Stack'
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                                : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                                }`}>
                                                {project.type}
                                            </span>
                                        </div>
                                        {/* View Details Overlay */}
                                        <div
                                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                                            onClick={() => openProjectModal(project)}
                                        >
                                            <div className="flex items-center gap-2 text-white font-semibold">
                                                <FaPlay className="text-sm" />
                                                <span>View Details</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Project Info */}
                                <div className="p-6">
                                    {/* If no thumbnail, show project type badge and view details button */}
                                    {!project.thumbnail && (
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${project.type === 'Full Stack'
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                                : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                                }`}>
                                                {project.type}
                                            </span>
                                            <button
                                                onClick={() => openProjectModal(project)}
                                                className="flex items-center gap-1 text-[#537D5D] hover:text-[#2D4A32] transition-colors text-sm font-medium"
                                            >
                                                <FaPlay className="text-xs" />
                                                <span>View Details</span>
                                            </button>
                                        </div>
                                    )}

                                    <h3
                                        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#537D5D] transition-colors cursor-pointer"
                                        onClick={() => openProjectModal(project)}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-sm mb-4 line-clamp-2 cursor-pointer hover:text-gray-800 transition-colors"
                                        onClick={() => openProjectModal(project)}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Technologies - Only show if technologies exist */}
                                    {project.technologies && project.technologies.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.slice(0, 3).map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-[#CAE8BD] text-[#537D5D] text-xs rounded-md font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Action Buttons - Only show if URLs exist */}
                                    {(project.githubUrl || project.liveUrl) && (
                                        <div className="flex gap-3">
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#537D5D] text-[#537D5D] hover:bg-[#537D5D] hover:text-white transition-all duration-300 rounded-lg font-semibold text-sm ${project.liveUrl ? 'flex-1' : 'w-full'}`}
                                                >
                                                    <FaGithub />
                                                    <span>Code</span>
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#537D5D] to-[#6B9C73] text-white hover:from-[#2D4A32] hover:to-[#537D5D] transition-all duration-300 rounded-lg font-semibold text-sm ${project.githubUrl ? 'flex-1' : 'w-full'}`}
                                                >
                                                    <FaExternalLinkAlt />
                                                    <span>Live</span>
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    {/* If no action buttons available, show view details button */}
                                    {!project.githubUrl && !project.liveUrl && (
                                        <button
                                            onClick={() => openProjectModal(project)}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#537D5D] to-[#6B9C73] text-white hover:from-[#2D4A32] hover:to-[#537D5D] transition-all duration-300 rounded-lg font-semibold text-sm"
                                        >
                                            <FaPlay />
                                            <span>View Details</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#537D5D] text-[#537D5D] hover:bg-[#537D5D] hover:text-white transition-all duration-300 flex items-center justify-center">
                        <FaChevronLeft />
                    </button>
                    <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-white shadow-lg border-2 border-[#537D5D] text-[#537D5D] hover:bg-[#537D5D] hover:text-white transition-all duration-300 flex items-center justify-center">
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h3 className="text-2xl font-bold text-gray-900">
                                {selectedProject.title}
                            </h3>
                            <button
                                onClick={closeProjectModal}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
                            >
                                <FaTimes className="text-gray-600" />
                            </button>
                        </div>

                        {/* Single Image Section - Only show if thumbnail exists */}
                        {selectedProject.thumbnail && (
                            <div className="relative">
                                <Image
                                    src={selectedProject.thumbnail}
                                    alt={`${selectedProject.title} preview`}
                                    className="w-full h-80 object-cover"
                                    width={800}
                                    height={320}
                                />
                            </div>
                        )}

                        {/* Project Details */}
                        <div className="px-6 pb-6">
                            <div className="mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${selectedProject.type === 'Full Stack'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                    }`}>
                                    {selectedProject.type}
                                </span>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {selectedProject.description}
                            </p>

                            {/* Technologies - Only show if technologies exist */}
                            {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-2 bg-[#CAE8BD] text-[#537D5D] text-sm rounded-lg font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons - Only show if URLs exist */}
                            {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                                <div className="flex gap-4">
                                    {selectedProject.githubUrl && (
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 border-2 border-[#537D5D] text-[#537D5D] hover:bg-[#537D5D] hover:text-white transition-all duration-300 rounded-lg font-semibold"
                                        >
                                            <FaGithub />
                                            <span>View Code</span>
                                        </a>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#537D5D] to-[#6B9C73] text-white hover:from-[#2D4A32] hover:to-[#537D5D] transition-all duration-300 rounded-lg font-semibold"
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Styles */}
            <style jsx>{`
                .projects-swiper .swiper-pagination {
                    position: static;
                    margin-top: 2rem;
                }

                .swiper-pagination-bullet-custom {
                    width: 12px;
                    height: 12px;
                    background: #D1D5DB;
                    opacity: 1;
                    margin: 0 6px;
                    transition: all 0.3s ease;
                }

                .swiper-pagination-bullet-active-custom {
                    background: #537D5D;
                    transform: scale(1.2);
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
}

export default Project