// import React from 'react'
// import { motion } from "framer-motion";
// import Button from '../ReusableComponents/Button';

// const Banner = () => {
//     return (
//         <section id="banner" className="relative overflow-hidden">
//             <div className="absolute inset-0 -z-10">
//                 <video
//                     className="h-full w-full object-cover"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     poster="/assets/Images/Markcare16.jpg"
//                 >
//                     <source src="/assets/Videos/Markcare Banglore Video.mp4" type="video/mp4" />
//                 </video>
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/0" />
//             </div>
//             <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
//                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//                     <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-black ring-1 ring-white/20">
//                         <span className="h-2 w-2 rounded-full bg-emerald-400" /> ISO‑grade SOPs
//                     </span>
//                     <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black drop-shadow">Mark Care — Reliable Home & Industrial Services</h1>
//                     <p className="mt-3 text-lg text-black/90 max-w-2xl drop-shadow">
//                         Water Treatment Plants(WTP), AC, RO / Effluent Treatment Plants(ETP) / Sewage Treatment Plants(STP), Deasel Generator(DG), Solar, Lifts, Power Systems and more. Pan‑India engineers. On‑time delivery.
//                     </p>
//                     <div className="mt-6 flex flex-wrap gap-3">
//                         <a href="#services"><Button>Explore Services</Button></a>
//                         <a href="#contact"><Button variant="outline" className="backdrop-blur">Get Quote</Button></a>
//                     </div>
//                 </motion.div>
//                 <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="hidden lg:block">
//                     <div className="rounded-3xl overflow-hidden ring-1 ring-white/30 shadow-2xl">
//                         <img src="/assets/Images/Markcare20.jpg" alt="Technician at work" className="w-full h-[420px] object-cover" loading="lazy" />
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

// export default Banner







import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { VIDEO_CLIPS } from '@/constants/branding'

function Button({
    children,
    variant = 'solid', // 'solid' | 'outline' | 'ghost'
    size = 'md', // 'sm' | 'md' | 'lg'
    className = '',
    ...rest
}) {
    const sizeMap = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
    }

    const base = 'inline-flex items-center justify-center rounded-md font-semibold shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

    const variantMap = {
        solid: 'bg-[var(--bomco-red)] text-white hover:brightness-90 focus-visible:ring-[color:var(--bomco-red)]',
        outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5 focus-visible:ring-white/20',
        ghost: 'bg-transparent text-white hover:bg-white/3',
    }

    const classes = `${base} ${sizeMap[size] || sizeMap.md} ${variantMap[variant] || variantMap.solid} ${className}`

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    )
}

export default function Banner({
    videoSrc = VIDEO_CLIPS.Bottle1,
    poster = '/assets/Images/Markcare16.jpg',
    eyebrow = 'ISO‑grade SOPs',
    title = 'Mark Care — Reliable Home & Industrial Services',
    subtitle = `Water Treatment Plants (WTP), AC, RO, ETP, STP, DG, Solar, Lifts and Power Systems. Pan‑India engineers — on‑time delivery.`,
}) {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef(null)

    // Attempt to play video on mount — some browsers require a user gesture
    // but programmatic play usually works when muted. We handle the promise
    // to avoid unhandled rejection logs.
    useEffect(() => {
        const v = videoRef.current
        if (!v) return

        // ensure muted for autoplay policies
        v.muted = true
        const playPromise = v.play()
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true)
                })
                .catch((err) => {
                    // autoplay failed — leave the video paused, user can manually play
                    // Log only during development; in production you can remove this.
                    // console.warn('Autoplay prevented:', err)
                    setIsPlaying(false)
                })
        }

        // clean up: pause on unmount
        return () => {
            try { v.pause() } catch (e) { }
        }
    }, [videoSrc])

    const togglePlay = () => {
        const v = videoRef.current
        if (!v) return
        if (v.paused) {
            v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
        } else {
            v.pause()
            setIsPlaying(false)
        }
    }

    const toggleMute = () => {
        const v = videoRef.current
        if (!v) return
        v.muted = !v.muted
        setIsMuted(v.muted)
    }

    return (
        <section id="banner" className="relative overflow-hidden bg-slate-900" style={{ '--bomco-red': '#C1121F' }}>
            {/* Background video */}
            <div className="absolute inset-0 -z-10">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={poster}
                    preload="auto"
                    crossOrigin="anonymous"
                    aria-hidden={false}
                >
                    <source src={videoSrc} type="video/mp4" />
                    {/* Fallback text for very old browsers */}
                    Your browser does not support the video tag.
                </video>

                {/* Soft dark overlay to increase contrast for text */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/25" />

                {/* Subtle vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),transparent_40%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white ring-1 ring-white/10">
                            <span className="h-2 w-2 rounded-full bg-[var(--bomco-red)] shadow-md" />
                            <span className="font-medium">{eyebrow}</span>
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                            <span className="block drop-shadow-lg">{title}</span>
                        </h1>

                        <p className="mt-4 text-lg text-white/90 max-w-3xl leading-relaxed drop-shadow-sm">
                            {subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3 items-center">
                            <a href="#services" aria-label="Explore services">
                                <Button className="shadow-xl" size="lg">Explore Services</Button>
                            </a>

                            <a href="#contact" aria-label="Get a quote">
                                <Button variant="outline" className="backdrop-blur-sm" size="lg">Get Quote</Button>
                            </a>

                            {/* lightweight controls for video */}
                            <div className="ml-2 flex items-center gap-2">
                                <button
                                    onClick={togglePlay}
                                    className="inline-flex items-center gap-2 rounded-md bg-white/8 px-3 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/12 focus:outline-none"
                                    aria-pressed={!isPlaying}
                                >
                                    {isPlaying ? 'Pause' : 'Play'}
                                </button>

                                <button
                                    onClick={toggleMute}
                                    className="inline-flex items-center gap-2 rounded-md bg-white/8 px-3 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/12 focus:outline-none"
                                    aria-pressed={isMuted}
                                >
                                    {isMuted ? 'Muted' : 'Unmute'}
                                </button>
                            </div>
                        </div>

                        {/* trust badges / quick stats */}
                        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/6 ring-1 ring-white/10 flex items-center justify-center">🛠</div>
                                <div>
                                    <div className="font-semibold">10k+</div>
                                    <div className="text-xs">Projects delivered</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/6 ring-1 ring-white/10 flex items-center justify-center">⭐</div>
                                <div>
                                    <div className="font-semibold">4.8/5</div>
                                    <div className="text-xs">Average rating</div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-white/6 ring-1 ring-white/10 flex items-center justify-center">🌐</div>
                                <div>
                                    <div className="font-semibold">Pan‑India</div>
                                    <div className="text-xs">Service coverage</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* right column: preview card */}
                    <motion.div
                        className="hidden lg:flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.12 }}
                    >
                        <div className="w-full max-w-md rounded-3xl overflow-hidden bg-white/6 ring-1 ring-white/10 shadow-2xl backdrop-blur-sm">
                            <img
                                src="/assets/Images/Markcare20.jpg"
                                alt="Technician at work"
                                className="w-full h-[420px] object-cover"
                                loading="lazy"
                            />

                            <div className="p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Quick Site Visit</h3>
                                        <p className="text-sm text-white/80 mt-1">Schedule a free inspection & estimate</p>
                                    </div>

                                    <a href="#contact" className="self-start">
                                        <Button size="sm" variant="ghost">Book</Button>
                                    </a>
                                </div>

                                <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
                                    <div className="h-10 w-10 rounded bg-white/8 flex items-center justify-center">📍</div>
                                    <div>
                                        <div className="font-medium">Bengaluru</div>
                                        <div className="text-xs">Fast response time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
