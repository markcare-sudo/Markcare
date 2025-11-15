import React from 'react';
import { motion } from 'framer-motion';
import { cities } from '@/utils/data';
import Header from '@/components/Header';

/**
 * Services.jsx (fixed)
 * - Fully detailed, responsive Services section for MarkCare / Mark Care Pvt. Ltd.
 * - Tailwind CSS + Framer Motion for subtle animations
 * - Light background with red accents (#E53935)
 * - IMPORTANT: This version avoids importing icons from `lucide-react` to prevent
 *   build-time CDN-per-icon fetch issues. Instead it uses a small inline Icon renderer
 *   (SVG / emoji) that is bundled with the app and will not trigger external fetches.
 *
 * - The SERVICES array includes all services requested by the user.
 */

// Simple Icon renderer to avoid external icon imports.
function Icon({ name, className = 'h-8 w-8' }) {
    // Return inline SVGs for the most common icons; fallback to emoji
    const base = 'inline-block ' + className + ' flex-shrink-0';
    switch ((name || '').toLowerCase()) {
        case 'wrench':
        case 'tool':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 3L19 5" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5 8.5L21 15" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2l5 5L8 16l-5-5L12 2z" stroke="#E53935" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            );
        case 'building':
        case 'building2':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#E53935" strokeWidth="1.5" />
                    <path d="M8 7h2v2H8V7zM8 11h2v2H8v-2zM13 7h2v2h-2V7zM13 11h2v2h-2v-2z" fill="#E53935" />
                </svg>
            );
        case 'droplet':
        case 'droplets':
        case 'drop':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 3C12 3 7 8 7 12.5A5 5 0 0017 12.5C17 8 12 3 12 3z" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            );
        case 'recycle':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 12v6a1 1 0 01-1 1H12" stroke="#E53935" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 8v-2a1 1 0 011-1h6" stroke="#E53935" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 21l4-4" stroke="#E53935" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'factory':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 21h18" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 7h4v6H3V7zM9 12V7l4 3v5" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'cog':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" stroke="#E53935" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 016 15.4 1.65 1.65 0 004.5 14H4a2 2 0 010-4h.09c.62 0 1.18-.37 1.4-.96A1.65 1.65 0 008 7.6 1.65 1.65 0 009.4 6l.06-.06A2 2 0 0112 3.1a2 2 0 012.54 2.83L14 6.24A1.65 1.65 0 0015.4 7.6c.59.22.96.78.96 1.4V9a2 2 0 014 0v.09c0 .62.37 1.18.96 1.4z" stroke="#E53935" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'zap':
        case 'bolt':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="#E53935" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            );
        case 'sun':
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="12" r="3" stroke="#E53935" strokeWidth="1.25" />
                    <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="#E53935" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
            );
        case 'sparkles':
            return (
                <div className={base} aria-hidden>
                    ✨
                </div>
            );
        default:
            // fallback simple circle with first letter
            const label = (name || '?').toString().charAt(0).toUpperCase();
            return (
                <div className={base + ' rounded-full bg-[#FFF0F0] grid place-items-center text-sm font-semibold text-[#E53935]'}>{label}</div>
            );
    }
}

const SERVICES = [
    {
        id: 'ac-services',
        title: 'AC Services',
        icon: 'wrench',
        summary:
            'End-to-end AC repair, servicing & maintenance across India with quick turnaround and standardized quality.',
        details: {
            deliverables: [
                'Evaporator & condenser coil cleaning',
                'Refrigerant checks & leak fix',
                'Annual Maintenance Contracts (AMC)',
            ],
            typicalTimeline: 'Same-day servicing available',
            sla: '24–48 hour response time',
            compliance: 'Certified HVAC technicians ensuring safety and standards.',
        },
    },
    {
        id: 'commercial-ac',
        title: 'Commercial AC Services',
        icon: 'building2',
        summary:
            'Design, install, and maintain high-performance cooling for offices, hotels, hospitals, factories & data centers.',
        details: {
            deliverables: ['VRF/VRV expertise', 'Energy optimization', 'Breakdown & preventive care'],
            typicalTimeline: '3–30 days depending on project size',
            sla: '24–72 hour business response',
            compliance: 'Adheres to commercial HVAC compliance & safety codes.',
        },
    },
    {
        id: 'ro-plants',
        title: 'RO Plants',
        icon: 'droplets',
        summary:
            'Reverse Osmosis plants for drinking & process water — design, install, and upkeep for reliable purity.',
        details: {
            deliverables: ['Membrane descaling', 'Biofouling removal', 'Flow & purity restoration'],
            typicalTimeline: '1–8 weeks depending on capacity',
            sla: 'Quality check reports after every service',
            compliance: 'Meets water purity & industrial standards.',
        },
    },
    {
        id: 'wtp',
        title: 'Water Treatment Plants (WTP)',
        icon: 'recycle',
        summary:
            'Convert contaminated water into usable water for safe consumption & utility applications.',
        details: {
            deliverables: ['Kitchen, bath & utility reuse', 'Quality compliance', 'Operations support'],
            typicalTimeline: '2–12 weeks',
            sla: 'Routine inspection & maintenance support',
            compliance: 'Follows all water reuse and quality regulations.',
        },
    },
    {
        id: 'etp',
        title: 'Effluent Treatment Plants (ETP)',
        icon: 'factory',
        summary:
            'Turnkey ETP projects: design, supply, erection, commissioning, upgrades & maintenance.',
        details: {
            deliverables: ['Process engineering', 'AMC & troubleshooting', 'PLC/automation upgrades'],
            typicalTimeline: '1–6 months',
            sla: 'Dedicated project engineers assigned',
            compliance: 'Meets industrial effluent discharge standards.',
        },
    },
    {
        id: 'stp',
        title: 'Sewage Treatment Plants (STP)',
        icon: 'recycle',
        summary:
            'End-to-end STP solutions for residential, commercial & industrial clients with compliance assurance.',
        details: {
            deliverables: ['Operator training', 'Performance optimization', 'SCADA integration'],
            typicalTimeline: '2–10 months',
            sla: 'Performance audits & remote support',
            compliance: 'Adheres to environmental and discharge regulations.',
        },
    },
    {
        id: 'lift-escalator',
        title: 'Lift & Escalator',
        icon: 'cog',
        summary:
            'Installation, modernization & maintenance for elevators and escalators tailored to your building.',
        details: {
            deliverables: ['High-speed lifts', 'Freight elevators', 'Safety inspection & AMCs'],
            typicalTimeline: '3–20 weeks',
            sla: '24/7 emergency breakdown support',
            compliance: 'Follows lift & safety board regulations.',
        },
    },
    {
        id: 'inverter-generator',
        title: 'Inverter & Generator',
        icon: 'zap',
        summary:
            'Installation, repair & AMC for inverters and DG sets (5–1000 kVA) with complete electrical integration.',
        details: {
            deliverables: ['Load testing', 'Overhauling & spares', 'Emergency breakdown service'],
            typicalTimeline: '1–14 days',
            sla: '4–12 hour emergency response',
            compliance: 'Certified electrical and generator technicians.',
        },
    },
    {
        id: 'solar',
        title: 'Solar Systems',
        icon: 'sun',
        summary:
            'End-to-end solar solutions: survey, design, installation, net-metering, and proactive maintenance.',
        details: {
            deliverables: ['Performance monitoring', 'Battery & hybrid options', 'Upgrades & expansion'],
            typicalTimeline: '3–10 weeks',
            sla: 'Net-metering & subsidy guidance',
            compliance: 'Follows DISCOM regulations & safety standards.',
        },
    },
    {
        id: 'chemical-washing',
        title: 'Chemical Washing',
        icon: 'sparkles',
        summary:
            'Specialized chemical cleaning for HVAC coils, RO systems & industrial equipment to restore efficiency.',
        details: {
            deliverables: ['Scale & rust removal', 'Bio-growth control', 'Energy cost reduction'],
            typicalTimeline: '1–5 days',
            sla: 'Certified chemical handling experts',
            compliance: 'Follows hazardous material handling standards.',
        },
    },
];

export default function Services({ services = SERVICES }) {
    const [open, setOpen] = React.useState(false);

    return (
        <section id="services" className="min-h-screen bg-white text-slate-900">
            {/* Navbar */}
            <Header open={open} setOpen={setOpen} cities={cities} />

            <div className="mx-auto max-w-7xl px-4 py-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0F0] px-3 py-1 text-xs font-medium text-[#E53935]">Our Services</span>
                    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Comprehensive technical services — trusted, certified, and compliant</h2>
                    <p className="mt-3 text-gray-600">From small residential fixes to large industrial turnkey projects — we deliver predictable outcomes with clear accountability.</p>
                </div>

                {/* Services grid */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <motion.article key={s.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-2xl border border-gray-100 p-6 hover:shadow-lg">
                            <div className="flex items-start gap-4">
                                <Icon name={s.icon} className="h-8 w-8" />
                                <div>
                                    <h3 className="text-lg font-semibold">{s.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600">{s.summary}</p>
                                </div>
                            </div>

                            <div className="mt-4 grid gap-2">
                                <div className="text-sm text-gray-700">
                                    <strong>Typical timeline:</strong> {s.details.typicalTimeline}
                                </div>
                                <div className="text-sm text-gray-700"><strong>Response SLA:</strong> {s.details.sla}</div>
                                <details className="mt-3 rounded-md border border-gray-100 p-3">
                                    <summary className="cursor-pointer text-sm font-medium text-gray-800">What we deliver</summary>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                                        {s.details.deliverables.map((d, i) => (<li key={i}>{d}</li>))}
                                    </ul>

                                    <div className="mt-3 text-sm text-gray-600">
                                        <strong>Compliance:</strong> {s.details.compliance}
                                    </div>
                                </details>

                                <a href={`#/contact?service=${s.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E53935]">Request quote →</a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Deep-dive panels */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold">Our Process</h3>
                        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-gray-700">
                            <li><strong>Site survey & diagnostics:</strong> Detailed assessment with photos & baseline measurements.</li>
                            <li><strong>Design & proposal:</strong> Clear scope, BOQ, drawings, timeline and commercial terms.</li>
                            <li><strong>Execution & commissioning:</strong> Certified technicians, safety checks and performance validation.</li>
                            <li><strong>Handover & training:</strong> Operation manuals, staff training and digital records.</li>
                            <li><strong>Ongoing support:</strong> AMC, remote monitoring, spare-parts and SLA-backed service.</li>
                        </ol>

                        <div className="mt-6 flex gap-3">
                            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white">Request a site survey</a>
                            <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold">View case studies</a>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold">Safety, Warranties & Quality</h3>
                        <p className="mt-3 text-sm text-gray-700">We follow strict safety protocols for field teams, supply OEM-approved spares, and provide warranties for installations as per manufacturer terms. For chemical and large-scale projects we follow hazardous-material handling and disposal regulations.</p>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="rounded-md border border-gray-100 p-3 text-sm">
                                <div className="flex items-center gap-2"><Icon name="shield" className="h-4 w-4" /><strong>Insurance-backed work</strong></div>
                                <div className="mt-2 text-xs text-gray-600">Liability coverage for on-site work.</div>
                            </div>

                            <div className="rounded-md border border-gray-100 p-3 text-sm">
                                <div className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /><strong>Guaranteed SLAs</strong></div>
                                <div className="mt-2 text-xs text-gray-600">Defined response & resolution times for AMC clients.</div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-sm font-semibold">Typical project budgets</h4>
                            <p className="mt-2 text-sm text-gray-700">Budgets vary by scope — sample ranges (indicative):</p>
                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                                <li>Residential AC servicing: ₹500 – ₹2,500 (per service)</li>
                                <li>Rooftop solar (3–10 kW): ₹1.5L – ₹6L</li>
                                <li>Small RO system (5–20 m3/day): ₹1L – ₹5L</li>
                                <li>STP/ETP (per MLD): quoted after site assessment</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ */}
                <div className="mt-12">
                    <h3 className="text-lg font-semibold">Common Questions</h3>
                    <div className="mt-4 grid gap-3">
                        <details className="rounded-md border border-gray-100 p-3">
                            <summary className="cursor-pointer text-sm font-medium">Do you provide AMC for equipment?</summary>
                            <p className="mt-2 text-sm text-gray-700">Yes — we provide flexible AMC and long-term support packages for both residential and commercial clients.</p>
                        </details>

                        <details className="rounded-md border border-gray-100 p-3">
                            <summary className="cursor-pointer text-sm font-medium">How do you handle spare parts?</summary>
                            <p className="mt-2 text-sm text-gray-700">We use OEM-approved spares wherever possible and provide transparent part quotations. Some parts carry manufacturer warranty.</p>
                        </details>

                        <details className="rounded-md border border-gray-100 p-3">
                            <summary className="cursor-pointer text-sm font-medium">Can you deliver large industrial projects?</summary>
                            <p className="mt-2 text-sm text-gray-700">Yes — we execute turnkey industrial projects (WTP/ETP/STP, solar microgrids, HVAC) with detailed engineering, project management and performance guarantees.</p>
                        </details>
                    </div>
                </div>

                {/* CTA footer */}
                <div className="mt-12 rounded-2xl border border-gray-100 bg-gray-50 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Ready to start a project?</h3>
                        <p className="mt-1 text-sm text-gray-700">Request a site survey or a tailored proposal. We’ll provide a clear scope, timeline and budget.</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#E53935] px-4 py-2 text-sm font-semibold text-white">Request Survey</a>
                        <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold">Get a Quote</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

/*
Integration notes:
- Import this component and place under your main page.
- Replace heroImage paths with your real images and ensure they exist under /public/assets.
- Consider adding a video modal (react-player) for the overview clip.
- Tailwind plugins: aspect-ratio helpful for media boxes.
- You can feed `services` prop to override the default SERVICES list.
*/
