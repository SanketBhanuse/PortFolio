// import React from 'react'

// const About = () => {
//     return (
//         <div className='m-5 text-black'>
//             <div className="title capitalize text-3xl font-bold text-[#537D5D] relative inline-block group cursor-pointer">
//                 About Us
//                 <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#537D5D] transition-all duration-300 ease-in-out group-hover:w-full"></div>
//             </div>
//             <div className="description mt-4">
//                 Proudly holding my Diploma in Computer Engineering from Government Polytechnic Mumbai and pursuing fourth year in Computer Engineering Bharti Vidyapeeth , Navi Mumbai. I'm ready to tackle all the exciting opportunities ahead. I love learning new computer languages, improving my coding skills, and coming up with creative solutions. #AlwaysLearning #developer
//             </div>
//         </div>
//     )
// }

// export default About



import React from 'react'

const About = () => {
    const skills = [
        { name: "HTML5", category: "Frontend" },
        { name: "CSS3", category: "Frontend" },
        { name: "JavaScript", category: "Frontend" },
        { name: "React.js", category: "Frontend" },
        { name: "Next.js", category: "Fullstack" },
        { name: "Java", category: "Programming-Language" },
        { name: "Node.js", category: "Backend" },
        { name: "MongoDB", category: "Database" },
        { name: "Shopify", category: "E-commerce" }
    ];

    const getCategoryColor = (category) => {
        const colors = {
            "Frontend": "bg-blue-100 text-blue-800 border-blue-200",
            "Backend": "bg-green-100 text-green-800 border-green-200",
            "Database": "bg-purple-100 text-purple-800 border-purple-200",
            "Fullstack": "bg-orange-100 text-orange-800 border-orange-200",
            "E-commerce": "bg-pink-100 text-pink-800 border-pink-200",
            "Programming-Language": "bg-red-100 text-orange-800 border-orange-200"
        };
        return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
    };

    return (
        <div className='m-5 text-black'>
            {/* Title with animated underline */}
            <div className="title capitalize text-3xl font-bold text-[#537D5D] relative inline-block group cursor-pointer mb-8">
                About Me
                <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#3A5A3D] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </div>

            {/* Main Content Container */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#537D5D]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#537D5D]/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                {/* Introduction */}
                <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-1 h-16 bg-gradient-to-b from-[#537D5D] to-[#3A5A3D] rounded-full"></div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#537D5D] mb-2">Web Developer</h3>
                            <p className="text-gray-600 font-medium">Passionate Full-Stack Developer</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="prose prose-gray max-w-none mb-8">
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                            Proudly holding my <span className="font-semibold text-[#537D5D]">Diploma in Computer Engineering</span> from
                            <span className="font-medium"> Government Polytechnic Mumbai</span> and currently pursuing my fourth year in
                            <span className="font-semibold text-[#537D5D]"> Computer Engineering</span> at
                            <span className="font-medium"> Bharati Vidyapeeth, Navi Mumbai</span>.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            I'm ready to tackle all the exciting opportunities ahead! I love learning new technologies,
                            improving my coding skills, and coming up with creative solutions that make a difference.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-[#537D5D] text-white rounded-full text-sm font-medium">
                                #AlwaysLearning
                            </span>
                            <span className="px-3 py-1 bg-[#537D5D] text-white rounded-full text-sm font-medium">
                                #Developer
                            </span>
                            <span className="px-3 py-1 bg-[#537D5D] text-white rounded-full text-sm font-medium">
                                #ProblemSolver
                            </span>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="border-t border-gray-200 pt-6">
                        <h4 className="text-xl font-bold text-[#537D5D] mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#537D5D] rounded-full"></div>
                            Technical Skills
                        </h4>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group relative"
                                >
                                    <div className={`
                                        px-4 py-3 rounded-lg border text-center font-medium text-sm
                                        transition-all duration-300 hover:scale-105 hover:shadow-md
                                        ${getCategoryColor(skill.category)}
                                    `}>
                                        {skill.name}
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                        {skill.category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 p-4 bg-gradient-to-r from-[#537D5D]/10 to-[#3A5A3D]/10 rounded-lg border border-[#537D5D]/20">
                        <p className="text-[#537D5D] font-medium text-center">
                            💡 Ready to collaborate on exciting projects and turn ideas into reality!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About