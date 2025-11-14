import React from "react";
import { motion } from "framer-motion";

export default function InAction() {
    return (
        <section
            id="videos"
            className="py-16 lg:py-28 bg-gradient-to-b from-red-50 to-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading Section */}
                <div className="max-w-3xl text-center mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
                    >
                        In Action
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mt-3 text-lg text-slate-600"
                    >
                        Experience our installation standards, maintenance processes, and
                        real-world results — through short walkthroughs and live footage.
                    </motion.p>
                </div>

                {/* Video Grid */}
                <div className="mt-12 grid lg:grid-cols-2 gap-8">
                    {/* YouTube Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group aspect-video overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-lg hover:shadow-2xl hover:ring-slate-300 transition-all duration-500"
                    >
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/5qap5aO4i9A?rel=0&modestbranding=1"
                            title="Mark Care — Project Walkthrough"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </motion.div>

                    {/* Local/Hosted Video */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="relative group aspect-video overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-lg hover:shadow-2xl hover:ring-slate-300 transition-all duration-500"
                    >
                        <video
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://images.unsplash.com/photo-1581093588401-16ec8a8f8f17?q=80&w=1200&auto=format&fit=crop"
                        >
                            <source
                                src="https://cdn.coverr.co/videos/coverr-power-plant-4043/1080p.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Caption overlay */}
                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-lg font-semibold">On-Site Maintenance</h3>
                            <p className="text-sm text-gray-200">
                                A glimpse into our real-time work process.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-14 text-center"
                >
                    <a
                        href="/projects"
                        className="inline-flex items-center gap-2 px-10 py-3 rounded-full bg-slate-900 text-white font-medium text-sm shadow-md hover:shadow-xl hover:bg-slate-800 transition-all duration-300"
                    >
                        🎥 View All Projects
                    </a>
                    <p className="mt-3 text-sm text-slate-500">
                        — Explore our real-world projects and client success stories
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
