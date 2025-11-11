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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD1V9WTXAZ3C10-yxlKdwyfzU-uTLGpXGmdwQOVE0KlJ_ruP4FqlFaAI3O5T3Of48U4U&usqp=CAU",
        link: "https://tnhealth.tn.gov.in/",
    },
    {
        name: "Commissioner of Police, Egmore",
        subtitle: "Chennai – 600008",
        logo: "https://content.jdmagicbox.com/v2/comp/chennai/76/044p3013176/catalogue/police-f-2-egmore-chennai-police-1yyh734-250.jpg",
        link: "https://chennaipolice.gov.in/",
    },
    {
        name: "Anna University",
        subtitle: "Guindy, Chennai",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-8XzphnbxRbryIwx27bGxIRSHvCOve0eCw&s",
        link: "https://www.annauniv.edu/",
    },
    {
        name: "Government Peripheral Hospital",
        subtitle: "West Jafferkhanpet, Chennai",
        logo: "https://stanleymedicalcollege.ac.in/assets/uploads/logo.png",
        link: "https://tnhealth.tn.gov.in/",
    },
    {
        name: "Sathyabama University",
        subtitle: "Jeppiaar Nagar, Chennai",
        logo: "https://play-lh.googleusercontent.com/MFS-MizCjnkA9lOwhJuccQe6eY9V2vEmSOH9z4CSnxC4cUYD20HgjSw2ZLbDhMuOOcw",
        link: "https://www.sathyabama.ac.in/",
    },
    {
        name: "House of Hiranandani, OMR",
        subtitle: "Egattur, Chennai",
        logo: "https://www.houseofhiranandani.com/data-content/project_location/15.jpg?v=0.01",
        link: "https://www.houseofhiranandani.com/",
    },
    {
        name: "ICON Select by Bhagini, Mahadevapura",
        subtitle: "Bengaluru, Karnataka",
        logo: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxC09nGVHB_xLn7xnfUsTCiEJ2Rjqi_Aah3sBNh4HQ3LDX-gROP0h3WtNoUteIb7Zhg2mOWPajryvMeWh6B2gJyDg9qtqAvm3jKuLcJCupV8oBa8_qfZ3n5WE-JzoiAKKcd9bk=s1360-w1360-h1020-rw",
        link: "https://bhagini.com/icon-select-hotel/",
    },
    {
        name: "The Pride Hotel Bangalore",
        subtitle: "Richmond Rd, Bengaluru",
        logo: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2812/x_1163,y_889,w_2500,h_1095,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/pride-hotels-group/4_458716bf",
        link: "https://www.pridehotel.com/",
    },
    {
        name: "Butterfly Gandhimathi Appliances Ltd",
        subtitle: "Pudupakkam, Kelambakkam",
        logo: "https://bl-i.thgim.com/public/incoming/sgrcdv/article70245317.ece/alternates/LANDSCAPE_1200/butterfly%20gandhimathi%20appliances.jpg",
        link: "https://butterflyindia.com/",
    }
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