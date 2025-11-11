import {
    Phone,
    ShieldCheck,
    Wrench,
    Droplets,
    Cog,
    Sun,
    Factory,
    Recycle,
    Zap,
    Building2,
    Sparkles,
} from "lucide-react";

// Put logo images under /public/assets/clients/ (filenames below).
export const CLIENTS = [
    {
        name: "Government Royapettah Hospital",
        subtitle: "Chennai, Tamil Nadu",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Royapettah_Hospital_Chennai.jpg/640px-Royapettah_Hospital_Chennai.jpg",
        link: "https://tnhealth.tn.gov.in/",
    },
    {
        name: "Commissioner of Police, Egmore",
        subtitle: "Chennai – 600008",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Greater_Chennai_Police_Logo.png/600px-Greater_Chennai_Police_Logo.png",
        link: "https://chennaipolice.gov.in/",
    },
    {
        name: "Anna University",
        subtitle: "Guindy, Chennai",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Anna_University_Logo.svg/640px-Anna_University_Logo.svg.png",
        link: "https://www.annauniv.edu/",
    },
    {
        name: "Government Peripheral Hospital",
        subtitle: "West Jafferkhanpet, Chennai",
        logo: "https://content.jdmagicbox.com/comp/chennai/l9/044pxx44.xx44.180127171514.a9l9/catalogue/government-peripheral-hospital-w-k-kamraj-nagar-chennai-hospitals-iczq72k9re.jpg",
        link: "https://tnhealth.tn.gov.in/",
    },
    {
        name: "Sathyabama University",
        subtitle: "Jeppiaar Nagar, Chennai",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Sathyabama_University_logo.png/640px-Sathyabama_University_logo.png",
        link: "https://www.sathyabama.ac.in/",
    },
    {
        name: "House of Hiranandani, OMR",
        subtitle: "Egattur, Chennai",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/House_of_Hiranandani_logo.svg/640px-House_of_Hiranandani_logo.svg.png",
        link: "https://www.houseofhiranandani.com/",
    },
    {
        name: "ICON Select by Bhagini, Mahadevapura",
        subtitle: "Bengaluru, Karnataka",
        logo: "https://cf.bstatic.com/xdata/images/hotel/square600/215480463.webp?k=12cb18a90bce56e57e9a2ceedba68af77d66df77e3c2ac1699e6a8321d8ef6e1&o=",
        link: "https://bhagini.com/icon-select-hotel/",
    },
    {
        name: "The Pride Hotel Bangalore",
        subtitle: "Richmond Rd, Bengaluru",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/PrideHotelsLogo.png",
        link: "https://www.pridehotel.com/",
    },
    {
        name: "Butterfly Gandhimathi Appliances Ltd",
        subtitle: "Pudupakkam, Kelambakkam",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Butterfly_Gandhimathi_Appliances_logo.png/640px-Butterfly_Gandhimathi_Appliances_logo.png",
        link: "https://butterflyindia.com/",
    },
    {
        name: "Uniprofin",
        subtitle: "Client",
        logo: "https://uniprofin.com/assets/images/logo.png",
        link: "https://uniprofin.com/",
    },
];


export const cities = ["Chennai", "Bangalore", "Delhi", "Hyderabad", "Mumbai"];

export const services = [
    {
        title: "AC Services",
        icon: Wrench,
        short:
            "End-to-end AC repair, servicing & maintenance across India with quick turnaround and standardized quality.",
        bullets: [
            "Evaporator & condenser coil cleaning",
            "Refrigerant checks & leak fix",
            "Annual Maintenance Contracts (AMC)",
        ],
    },
    {
        title: "Commercial AC Services",
        icon: Building2,
        short:
            "Design, install, and maintain high-performance cooling for offices, hotels, hospitals, factories & data centers.",
        bullets: ["VRF/VRV expertise", "Energy optimization", "Breakdown & preventive care"],
    },
    {
        title: "RO Plants",
        icon: Droplets,
        short:
            "Reverse Osmosis plants for drinking & process water — design, install, and upkeep for reliable purity.",
        bullets: ["Membrane descaling", "Biofouling removal", "Flow & purity restoration"],
    },
    {
        title: "Water Treatment Plants (WTP)",
        icon: Recycle,
        short:
            "Convert contaminated water into usable water for safe consumption & utility applications.",
        bullets: ["Kitchen, bath & utility reuse", "Quality compliance", "Operations support"],
    },
    {
        title: "Effluent Treatment Plants (ETP)",
        icon: Factory,
        short:
            "Turnkey ETP projects: design, supply, erection, commissioning, upgrades & maintenance.",
        bullets: ["Process engineering", "AMC & troubleshooting", "PLC/automation upgrades"],
    },
    {
        title: "Sewage Treatment Plants (STP)",
        icon: Recycle,
        short:
            "End-to-end STP solutions for residential, commercial & industrial clients with compliance assurance.",
        bullets: ["Operator training", "Performance optimization", "SCADA integration"],
    },
    {
        title: "Lift & Escalator",
        icon: Cog,
        short:
            "Installation, modernization & maintenance for elevators and escalators tailored to your building.",
        bullets: ["High-speed lifts", "Freight elevators", "Safety inspection & AMCs"],
    },
    {
        title: "Inverter & Generator",
        icon: Zap,
        short:
            "Installation, repair & AMC for inverters and DG sets (5–1000 kVA) with complete electrical integration.",
        bullets: ["Load testing", "Overhauling & spares", "Emergency breakdown service"],
    },
    {
        title: "Solar Systems",
        icon: Sun,
        short:
            "End-to-end solar solutions: survey, design, installation, net-metering, and proactive maintenance.",
        bullets: ["Performance monitoring", "Battery & hybrid options", "Upgrades & expansion"],
    },
    {
        title: "Chemical Washing",
        icon: Sparkles,
        short:
            "Specialized chemical cleaning for HVAC coils, RO systems & industrial equipment to restore efficiency.",
        bullets: ["Scale & rust removal", "Bio-growth control", "Energy cost reduction"],
    },
];

export const features = [
    { icon: ShieldCheck, title: "Vetted Experts", text: "Hand-picked partners, trained & insured for safety and reliability." },
    { icon: Wrench, title: "Standardized Quality", text: "Documented SOPs & QA checks for consistent service delivery." },
    { icon: Phone, title: "Pan‑India Support", text: "Quick-response teams across major metros and beyond." },
];