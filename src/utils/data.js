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
// export const CLIENTS = [
//     {
//         name: "Government Royapettah Hospital",
//         subtitle: "Chennai, Tamil Nadu",
//         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD1V9WTXAZ3C10-yxlKdwyfzU-uTLGpXGmdwQOVE0KlJ_ruP4FqlFaAI3O5T3Of48U4U&usqp=CAU",
//         link: "https://tnhealth.tn.gov.in/",
//         projects: ["Installed and maintain HVAC and water treatment systems to ensure optimal operation and compliance with health standards."],
//     },
//     {
//         name: "Commissioner of Police, Egmore",
//         subtitle: "Chennai – 600008",
//         logo: "https://content.jdmagicbox.com/v2/comp/chennai/76/044p3013176/catalogue/police-f-2-egmore-chennai-police-1yyh734-250.jpg",
//         link: "https://chennaipolice.gov.in/",
//         projects:[]
//     },
//     {
//         name: "Anna University",
//         subtitle: "Guindy, Chennai",
//         logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-8XzphnbxRbryIwx27bGxIRSHvCOve0eCw&s",
//         link: "https://www.annauniv.edu/",
//         projects:[]
//     },
//     {
//         name: "Government Peripheral Hospital",
//         subtitle: "West Jafferkhanpet, Chennai",
//         logo: "https://stanleymedicalcollege.ac.in/assets/uploads/logo.png",
//         link: "https://tnhealth.tn.gov.in/",
//         projects:[]
//     },
//     {
//         name: "Sathyabama University",
//         subtitle: "Jeppiaar Nagar, Chennai",
//         logo: "https://play-lh.googleusercontent.com/MFS-MizCjnkA9lOwhJuccQe6eY9V2vEmSOH9z4CSnxC4cUYD20HgjSw2ZLbDhMuOOcw",
//         link: "https://www.sathyabama.ac.in/",
//         projects:[]
//     },
//     {
//         name: "House of Hiranandani, OMR",
//         subtitle: "Egattur, Chennai",
//         logo: "https://www.houseofhiranandani.com/data-content/project_location/15.jpg?v=0.01",
//         link: "https://www.houseofhiranandani.com/",
//         projects:[]
//     },
//     {
//         name: "ICON Select by Bhagini, Mahadevapura",
//         subtitle: "Bengaluru, Karnataka",
//         logo: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxC09nGVHB_xLn7xnfUsTCiEJ2Rjqi_Aah3sBNh4HQ3LDX-gROP0h3WtNoUteIb7Zhg2mOWPajryvMeWh6B2gJyDg9qtqAvm3jKuLcJCupV8oBa8_qfZ3n5WE-JzoiAKKcd9bk=s1360-w1360-h1020-rw",
//         link: "https://bhagini.com/icon-select-hotel/",
//         projects:[]
//     },
//     {
//         name: "The Pride Hotel Bangalore",
//         subtitle: "Richmond Rd, Bengaluru",
//         logo: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2812/x_1163,y_889,w_2500,h_1095,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/pride-hotels-group/4_458716bf",
//         link: "https://www.pridehotel.com/",
//         projects:[]
//     },
//     {
//         name: "Butterfly Gandhimathi Appliances Ltd",
//         subtitle: "Pudupakkam, Kelambakkam",
//         logo: "https://bl-i.thgim.com/public/incoming/sgrcdv/article70245317.ece/alternates/LANDSCAPE_1200/butterfly%20gandhimathi%20appliances.jpg",
//         link: "https://butterflyindia.com/",
//         projects:[]
//     }
// ];

export const CLIENTS = [
    {
        name: "Government Royapettah Hospital",
        subtitle: "Chennai, Tamil Nadu",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD1V9WTXAZ3C10-yxlKdwyfzU-uTLGpXGmdwQOVE0KlJ_ruP4FqlFaAI3O5T3Of48U4U&usqp=CAU",
        link: "https://tnhealth.tn.gov.in/",
        projects: [
            {
                heading: "Nephrology Department",
                description: "Installed RO plant systems for Nephrology units ensuring high-purity water for dialysis operations.",
                count: "1000 LPH × 3 units",
            },
            {
                heading: "Surgical and Cancer Blocks",
                description: "Commissioned independent RO units for Surgical and Cancer blocks to support medical equipment.",
                count: "1000 LPH × 2 units",
            },
            {
                heading: "Medical & Biochemistry Labs",
                description: "Setup RO systems for Biochemistry (500 LPH) and Medical Common Ward (1000 LPH).",
                count: "2 units",
            },
            {
                heading: "IMCH – Terrace & 1st Floor",
                description: "Installed RO systems for maternal and child health labs to maintain laboratory water standards.",
                count: "1000 LPH (Terrace) + 500 LPH (1st Floor)",
            },
        ],
    },
    {
        name: "Commissioner of Police, Egmore",
        subtitle: "Chennai – 600008",
        logo: "https://content.jdmagicbox.com/v2/comp/chennai/76/044p3013176/catalogue/police-f-2-egmore-chennai-police-1yyh734-250.jpg",
        link: "https://chennaipolice.gov.in/",
        projects: [
            {
                heading: "RO Plant Installation",
                description: "Supplied and installed industrial RO system for the Egmore Police Commissioner’s Office.",
                count: "1500 LPH",
            },
            {
                heading: "Maintenance & Quality Check",
                description: "Provides regular AMC for consistent output and water quality compliance.",
                count: "Ongoing",
            },
        ],
    },
    {
        name: "Anna University",
        subtitle: "Guindy, Chennai",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-8XzphnbxRbryIwx27bGxIRSHvCOve0eCw&s",
        link: "https://www.annauniv.edu/",
        projects: [
            {
                heading: "RO System Network",
                description: "Installed multiple capacity RO systems across departments and laboratories.",
                count: "500, 250, 1000 LPH units",
            },
            {
                heading: "Water Quality Maintenance",
                description: "Monthly service and water testing for university-wide distribution lines.",
                count: "5 buildings covered",
            },
        ],
    },
    {
        name: "Government Peripheral Hospital",
        subtitle: "West Jafferkhanpet, Chennai",
        logo: "https://stanleymedicalcollege.ac.in/assets/uploads/logo.png",
        link: "https://tnhealth.tn.gov.in/",
        projects: [
            {
                heading: "Hospital RO Systems",
                description: "Installed RO plants for critical departments including kitchen, pediatric, male, and female wards.",
                count: "1000 LPH × 7 units",
            },
            {
                heading: "Supplementary Units",
                description: "Additional compact RO systems for smaller wards and nursing sections.",
                count: "500 LPH × 2 units",
            },
        ],
    },
    {
        name: "Sathyabama University",
        subtitle: "Jeppiaar Nagar, Chennai",
        logo: "https://play-lh.googleusercontent.com/MFS-MizCjnkA9lOwhJuccQe6eY9V2vEmSOH9z4CSnxC4cUYD20HgjSw2ZLbDhMuOOcw",
        link: "https://www.sathyabama.ac.in/",
        projects: [
            {
                heading: "Campus-wide RO Setup",
                description: "Installed centralized RO plants for hostel, academic, and canteen facilities.",
                count: "Multiple 1000 LPH systems",
            },
            {
                heading: "Regular Servicing",
                description: "Handles water quality checks and preventive maintenance every quarter.",
                count: "Annual Contract",
            },
        ],
    },
    {
        name: "House of Hiranandani, OMR",
        subtitle: "Egattur, Chennai",
        logo: "https://www.houseofhiranandani.com/data-content/project_location/15.jpg?v=0.01",
        link: "https://www.houseofhiranandani.com/",
        projects: [
            {
                heading: "STP Plant Setup",
                description: "Installed 400 KLD Sewage Treatment Plant for residential complex wastewater management.",
                count: "400 KLD",
            },
            {
                heading: "Operation & Maintenance",
                description: "End-to-end operation and maintenance of STP for water recycling and discharge control.",
                count: "Ongoing O&M",
            },
        ],
    },
    {
        name: "ICON Select by Bhagini, Mahadevapura",
        subtitle: "Bengaluru, Karnataka",
        logo: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxC09nGVHB_xLn7xnfUsTCiEJ2Rjqi_Aah3sBNh4HQ3LDX-gROP0h3WtNoUteIb7Zhg2mOWPajryvMeWh6B2gJyDg9qtqAvm3jKuLcJCupV8oBa8_qfZ3n5WE-JzoiAKKcd9bk=s1360-w1360-h1020-rw",
        link: "https://bhagini.com/icon-select-hotel/",
        projects: [
            {
                heading: "RO and Softener Installation",
                description: "Installed dual RO systems and water softener plants to ensure high-quality water for hospitality operations.",
                count: "1000 LPH, 250 LPH, 200 KLD softener",
            },
            {
                heading: "AMC Services",
                description: "Comprehensive annual maintenance including water testing, filter replacement, and performance tuning.",
                count: "Ongoing contract",
            },
        ],
    },
    {
        name: "The Pride Hotel Bangalore",
        subtitle: "Richmond Rd, Bengaluru",
        logo: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2812/x_1163,y_889,w_2500,h_1095,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/pride-hotels-group/4_458716bf",
        link: "https://www.pridehotel.com/",
        projects: [
            {
                heading: "RO and STP Plant Installation",
                description: "Installed 850 LPH RO system and 100 KLD STP for full water treatment and recycling within hotel operations.",
                count: "RO 850 LPH + STP 100 KLD",
            },
            {
                heading: "Water Network Maintenance",
                description: "Handles operation, inspection, and compliance for wastewater and drinking water systems.",
                count: "Ongoing",
            },
        ],
    },
    {
        name: "Butterfly Gandhimathi Appliances Ltd",
        subtitle: "Pudupakkam, Kelambakkam",
        logo: "https://bl-i.thgim.com/public/incoming/sgrcdv/article70245317.ece/alternates/LANDSCAPE_1200/butterfly%20gandhimathi%20appliances.jpg",
        link: "https://butterflyindia.com/",
        projects: [
            {
                heading: "HVAC Installation – Split AC",
                description: "Installed energy-efficient split air conditioning systems for office and manufacturing zones.",
                count: "7 units (16.5 Ton package units)",
            },
            {
                heading: "HVAC Installation – Duct AC",
                description: "Implemented duct AC systems across production areas ensuring uniform cooling.",
                count: "42 units",
            },
            {
                heading: "Maintenance & Service Support",
                description: "Provides periodic HVAC service and system health checks for all installed units.",
                count: "Quarterly schedule",
            },
        ],
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