// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ClientCard from "@/components/ClientCard";
// import ProjectModal from "@/components/ProjectModal";
// import { CLIENTS } from "@/utils/data";

// export default function ProjectsSection({ clients = CLIENTS }) {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [activeClient, setActiveClient] = useState(null);
//     const [activeProject, setActiveProject] = useState(null);

//     const openProject = (client, project) => {
//         setActiveClient(client);
//         setActiveProject(project);
//         setModalOpen(true);
//     };

//     return (
//         <section id="projects" className="bg-neutral-950 py-16 sm:py-24">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6">
//                 <div className="mx-auto max-w-3xl text-center">
//                     <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/90">Our Clients</span>
//                     <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Selected projects & installations</h2>
//                     <p className="mt-3 text-base text-white/70">A selection of water, HVAC, STP, and industrial installations across healthcare, hospitality, institutions, and manufacturing.</p>
//                 </div>

//                 <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                     {clients.map((c, i) => (
//                         <ClientCard key={i} client={c} onOpenProject={openProject} />
//                     ))}
//                 </motion.div>

//                 <div className="mt-8 flex justify-center">
//                     <a href="/all-clients" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/6">View all clients</a>
//                 </div>
//             </div>

//             <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} client={activeClient || {}} project={activeProject || { heading: "", description: "", count: "" }} />
//         </section>
//     );
// }



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { CLIENTS } from "@/utils/data";
// import ClientCard from "@/components/ClientCard";
// import ProjectModal from "@/components/ProjectModal";

// export default function ProjectsSection({ clients = CLIENTS }) {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [activeClient, setActiveClient] = useState(null);
//     const [activeProject, setActiveProject] = useState(null);

//     const openProject = (client, project) => {
//         setActiveClient(client);
//         setActiveProject(project);
//         setModalOpen(true);
//     };

//     return (
//         <section id="projects" className="bg-[#0A0A0A] py-16 sm:py-24">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6">
//                 {/* Header */}
//                 <div className="mx-auto max-w-3xl text-center">
//                     <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90">
//                         Our Clients
//                     </span>
//                     <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
//                         Projects & Installations
//                     </h2>
//                     <p className="mt-3 text-base text-white/70">
//                         A showcase of HVAC, STP, RO, and industrial projects executed with precision and reliability across multiple sectors.
//                     </p>
//                 </div>

//                 {/* Client Grid */}
//                 <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                     {clients.map((c, i) => (
//                         <ClientCard key={i} client={c} onOpenProject={openProject} />
//                     ))}
//                 </motion.div>

//                 {/* View More Button */}
//                 <div className="mt-10 flex justify-center">
//                     <a
//                         href="/all-projects"
//                         className="inline-flex items-center gap-2 rounded-xl border border-[#E53935]/50 bg-[#E53935] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#C62828] transition"
//                     >
//                         View All Projects
//                     </a>
//                 </div>
//             </div>

//             {/* Modal */}
//             <ProjectModal
//                 open={modalOpen}
//                 onClose={() => setModalOpen(false)}
//                 client={activeClient || {}}
//                 project={activeProject || { heading: "", description: "", count: "" }}
//             />
//         </section>
//     );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";
import { cities, CLIENTS } from "@/utils/data";
import ProjectModal from "@/components/ProjectModal";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection({ clients = CLIENTS }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeClient, setActiveClient] = useState(null);
    const [activeProject, setActiveProject] = useState(null);
    const [open, setOpen] = useState(false);

    const openProject = (client, project) => {
        setActiveClient(client);
        setActiveProject(project);
        setModalOpen(true);
    };

    return (
        <section id="projects" className="min-h-screen bg-white text-slate-900">
            {/* Navbar */}
            <Header open={open} setOpen={setOpen} cities={cities} />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
                
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#E53935]/30 bg-[#E53935]/10 px-3 py-1 text-xs text-[#E53935] font-medium">
                        Our Clients
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
                        Projects & Installations
                    </h2>
                    <p className="mt-3 text-base text-gray-600">
                        Delivering end-to-end solutions in HVAC, RO, STP, and industrial projects across healthcare, education, hospitality, and manufacturing sectors.
                    </p>
                </div>

                {/* Grid */}
                <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {clients.map((client, i) => (
                        <ProjectCard key={i} client={client} onOpenProject={openProject} />
                    ))}
                </motion.div>
            </div>

            <ProjectModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                client={activeClient || {}}
                project={activeProject || { heading: "", description: "", count: "" }}
            />
        </section>
    );
}
