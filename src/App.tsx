import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Menu,
  X,
  Landmark,
  ChevronRight,
  ChevronLeft,
  Info,
  ArrowDown
} from "lucide-react";

// Import local images from assets
import coastalEducation from "./assets/coastal-education.png";
import empowermentWomen from "./assets/empowerment-women.png";
import mangroveRestoration from "./assets/mangrove-restoration.png";
import coastalLivelihoods from "./assets/coastal-livelihoods.png";
import logo from "./assets/logo.png";
import healthNutrition from "./assets/health-nutrition.png";
import parallaxSky from "./assets/parallax-sky.png";
import parallaxBoats from "./assets/parallax-boats.png";
import parallaxForeground from "./assets/parallax-foreground.png";
import manifestoFish from "./assets/manifesto-fish.png";

// Data Models
interface FocusArea {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  accomplishments: string;
  image: string;
}

interface RealityCard {
  title: string;
  tagline: string;
  description: string;
  details: string;
  bg: string;
  text: string;
  border: string;
}

interface GrowthGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  timeline: string;
  objectives: string[];
  details: string;
}

// Data Definition
const teamMembers = [
  {
    name: "Ahmed Sajid",
    role: "Founder & Director",
    bio: "Professional Social Worker with years of field experience in coastal community organizing.",
    initials: "AS"
  },
  {
    name: "Lijin Lowrence",
    role: "Director",
    bio: "Global technology professional based in the USA, managing international partnerships.",
    initials: "LL"
  },
  {
    name: "Jaseemul Farhan",
    role: "Co-founder",
    bio: "PhD Scholar at Jamia Millia Islamia, leading research and advocacy projects.",
    initials: "JF"
  },
  {
    name: "Khaleel Hamadan",
    role: "Member",
    bio: "Architect based in Turkey, advising on eco-friendly community infrastructure projects.",
    initials: "KH"
  }
];

const focusAreas: FocusArea[] = [
  {
    id: "edu",
    title: "Education & Youth",
    emoji: "📚",
    tagline: "Ensuring coastal children stay in school and dream big",
    description: "Setting up supplementary study centres, evening tutor groups, and digital libraries across remote coastal fishing villages. We provide learning kits and career workshops to curb high dropout rates.",
    accomplishments: "Supported 240+ students with study-mentorship circles.",
    image: coastalEducation
  },
  {
    id: "women",
    title: "Women’s Empowerment",
    emoji: "👭",
    tagline: "Skill training, SHGs, leadership, and financial literacy",
    description: "Mobilizing local micro-savings Self-Help Groups (SHGs) to run fish value-addition facilities, craft circles, and local co-operatives. Providing direct digital financial training.",
    accomplishments: "Empowered 120+ women in financial accounting and digital banking.",
    image: empowermentWomen
  },
  {
    id: "livelihoods",
    title: "Sustainable Livelihoods",
    emoji: "🐟",
    tagline: "Beyond fishing: aquaculture, value addition, market links",
    description: "Diversifying income streams via safe marine cage farming, seaweed cultivation, modern drying equipment, and direct market integration that eliminates predatory middlemen.",
    accomplishments: "Established 3 cooperative fish-dryer micro-units.",
    image: coastalLivelihoods
  },
  {
    id: "climate",
    title: "Climate & Environment",
    emoji: "🌱",
    tagline: "Mangrove restoration, awareness, disaster preparedness",
    description: "Planting native mangrove saplings to buffer cyclone surges, fighting tidal erosion and beach degradation, and carrying out coastal plastic trash extraction.",
    accomplishments: "Restored 1.2 hectares of active mangrove buffers since 2018.",
    image: mangroveRestoration
  },
  {
    id: "health",
    title: "Health & Nutrition",
    emoji: "❤️",
    tagline: "Supporting health access, nutrition, and sanitation",
    description: "Organizing mobile health clinics, distributing fresh iron-fortified multi-nutrient food packets list, and creating hygienic community sanitation layouts in remote coastal hamlets.",
    accomplishments: "Conducted 15+ remote check-up camps with expert pediatricians.",
    image: healthNutrition
  }
];

const realityCards: RealityCard[] = [
  {
    title: "Economic Instability",
    tagline: "Volatile Trades & Exploitative Rings",
    description: "Centuries-old fishing hamlets are forced into seasonal vulnerability. Near-shore stocks are depleting, fuel overheads are rising, and middlemen take the bulk of catch values.",
    details: "Traditional fishermen struggle with market integration. Our livelihood program creates direct-to-consumer micro-dryer cooperatives that increase value-retention locally by over 40%.",
    bg: "bg-[#E0F2FE]", // Soft light sky blue
    text: "text-[#003B5C]",
    border: "border-sky-200"
  },
  {
    title: "Climate Vulnerability",
    tagline: "Estuary Degradation & Beach Erosion",
    description: "Kerala's coastline experiences severe beach loss every year. Cyclonic storm surges flood houses and destroy essential equipment, forcing communities further inland.",
    details: "Standard concrete seawalls break down and worsen neighboring beaches. We champion nature-based solutions, restoring native mangrove buffers to stabilize coastal soils and shield fishers' homes.",
    bg: "bg-[#E6FFFA]", // Soft light teal/cyan
    text: "text-[#155E75]",
    border: "border-teal-200"
  },
  {
    title: "Limited School Retention",
    tagline: "Early Boat Labor & Educational Dropouts",
    description: "Coastal children often leave school in their early teens to assist on commercial trawlers and supplement family earnings, continuing the cycle of low literacy.",
    details: "We establish community evening classrooms and digital spaces, offering first-generation learners mentorship, academic tutoring, and career coaching to keep them on secondary tracks.",
    bg: "bg-[#FFF9E6]", // Soft amber/gold tint
    text: "text-amber-950",
    border: "border-amber-200"
  },
  {
    title: "Gender & Credit Barriers",
    tagline: "Marginalized Women & Credit Scarcity",
    description: "Women in remote fishing villages carry the weight of household debt but have little access to modern vocational skills, financial resources, or independent banking.",
    details: "We organize and finance women's Self Help Groups, training them in digital banking (UPI), micro-savings, shell crafts, and enterprise management to establish direct financial voices.",
    bg: "bg-[#FFF2F2]", // Soft red tint
    text: "text-red-950",
    border: "border-red-200"
  },
  {
    title: "Cultural & Lore Attrition",
    tagline: "Decentering Coastal Identity",
    description: "Centuries-old boatcraft techniques, unique maritime dialects, and traditional oceanic forecasting methods are fading as young generations migrate to overcrowded cities.",
    details: "We document and integrate coastal maritime folklore into youth programs, connecting elders with students to preserve local pride, indigenous ecological knowledge, and shore identity.",
    bg: "bg-[#F3F4F6]", // Soft slate gray
    text: "text-slate-900",
    border: "border-slate-300"
  }
];

const initialGrowthGoals: GrowthGoal[] = [
  {
    id: "goal-y1",
    title: "Year 1 - Immediate Expansion Target",
    targetAmount: 2000000, // ₹20 Lakhs
    currentAmount: 1140000, // ~57% achieved
    timeline: "2026 - 2027",
    objectives: [
      "Baseline survey of 500 family units across 5 vulnerable coastal areas",
      "Setting up permanent Community Grassroots Office in Trivandrum Coastline",
      "Launching pilot women's alternative livelihood initiative supporting 50 women directly"
    ],
    details: "Every rupee is fully audited, transparently reported on-site, and reaches coastal families directly. We provide comprehensive project development reports to all donors."
  },
  {
    id: "goal-y2",
    title: "Year 2 - Collaborative Scale-Up",
    targetAmount: 5000000, // ₹50 Lakhs
    currentAmount: 0,
    timeline: "2027 - 2028",
    objectives: [
      "Scaling structured development programs to 5 major coastal villages across central Kerala",
      "Onboarding 3-4 professional full-time community field officers",
      "Expanding high-impact programs including supplementary education sessions and weekly medicine camps"
    ],
    details: "Focuses on deep regional integration, enabling community structures to manage livelihoods and prevent forced migration of high-school youth to crowded metropolitan zones."
  }
];

// CountUp Component utilizing Framer Motion's useInView
function CountUp({
  target,
  suffix = "",
  duration = 1.5
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(12, Math.floor(totalMiliseconds / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [growthGoals] = useState<GrowthGoal[]>(initialGrowthGoals);

  // Hero Parallax Scroll Hook Setup
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1.0], ["0%", "-20%"]);
  const yMid = useTransform(scrollYProgress, [0, 1.0], ["0%", "-10%"]);
  const yFg = useTransform(scrollYProgress, [0, 1.0], ["0%", "0%"]);
  const yText = useTransform(scrollYProgress, [0, 1.0], ["-12vh", "75vh"]);

  // Clipboard Copied States
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  // Contact Form States
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formType, setFormType] = useState("General Query");
  const [formMessage, setFormMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Programs Carousel Synchronization Ref & States
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const isProgrammaticScrollRef = useRef(false);

  // Custom pill navigation click
  const handlePillClick = (index: number) => {
    setActiveCardIndex(index);
    const container = scrollContainerRef.current;
    const target = programRefs.current[5 + index]; // Target the middle set for stability
    if (container && target) {
      isProgrammaticScrollRef.current = true;
      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft - (container.clientWidth - target.clientWidth) / 2,
        behavior: "smooth"
      });
      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 500);
    }
  };

  const scrollNext = () => {
    const container = scrollContainerRef.current;
    if (!container || isProgrammaticScrollRef.current) return;

    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;

    // Find the current physical closest index
    let closestIndex = 5;
    let minDistance = Infinity;
    programRefs.current.forEach((el, index) => {
      if (el) {
        const elCenter = el.offsetLeft + el.clientWidth / 2;
        const containerCenter = scrollLeft + clientWidth / 2;
        const distance = Math.abs(elCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    const nextPhysicalIndex = closestIndex + 1;
    const target = programRefs.current[nextPhysicalIndex];
    const firstCard = programRefs.current[0];
    const middleCard = programRefs.current[5];

    if (target && firstCard && middleCard) {
      const setWidth = middleCard.offsetLeft - firstCard.offsetLeft;
      isProgrammaticScrollRef.current = true;
      
      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft - (container.clientWidth - target.clientWidth) / 2,
        behavior: "smooth"
      });

      // After the animation finishes, check if we need to wrap silently
      setTimeout(() => {
        if (!container) {
          isProgrammaticScrollRef.current = false;
          return;
        }

        if (nextPhysicalIndex >= 10) {
          container.style.scrollBehavior = "auto";
          container.scrollLeft -= setWidth;
          setTimeout(() => {
            if (container) container.style.scrollBehavior = "smooth";
          }, 15);
          setActiveCardIndex((nextPhysicalIndex - 5) % 5);
        } else {
          setActiveCardIndex(nextPhysicalIndex % 5);
        }
        
        isProgrammaticScrollRef.current = false;
      }, 500);
    }
  };

  const scrollPrev = () => {
    const container = scrollContainerRef.current;
    if (!container || isProgrammaticScrollRef.current) return;

    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;

    // Find the current physical closest index
    let closestIndex = 5;
    let minDistance = Infinity;
    programRefs.current.forEach((el, index) => {
      if (el) {
        const elCenter = el.offsetLeft + el.clientWidth / 2;
        const containerCenter = scrollLeft + clientWidth / 2;
        const distance = Math.abs(elCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    const prevPhysicalIndex = closestIndex - 1;
    const target = programRefs.current[prevPhysicalIndex];
    const firstCard = programRefs.current[0];
    const middleCard = programRefs.current[5];

    if (target && firstCard && middleCard) {
      const setWidth = middleCard.offsetLeft - firstCard.offsetLeft;
      isProgrammaticScrollRef.current = true;

      container.scrollTo({
        left: target.offsetLeft - container.offsetLeft - (container.clientWidth - target.clientWidth) / 2,
        behavior: "smooth"
      });

      // After the animation finishes, check if we need to wrap silently
      setTimeout(() => {
        if (!container) {
          isProgrammaticScrollRef.current = false;
          return;
        }

        if (prevPhysicalIndex < 5) {
          container.style.scrollBehavior = "auto";
          container.scrollLeft += setWidth;
          setTimeout(() => {
            if (container) container.style.scrollBehavior = "smooth";
          }, 15);
          setActiveCardIndex((prevPhysicalIndex + 5) % 5);
        } else {
          setActiveCardIndex(prevPhysicalIndex % 5);
        }

        isProgrammaticScrollRef.current = false;
      }, 500);
    }
  };

  // Sync scroll positioning to update active pill indicator
  const handleScroll = () => {
    if (isProgrammaticScrollRef.current) return;

    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;

    // 1. Find the closest card index
    let closestIndex = 5;
    let minDistance = Infinity;
    programRefs.current.forEach((el, index) => {
      if (el) {
        const elCenter = el.offsetLeft + el.clientWidth / 2;
        const containerCenter = scrollLeft + clientWidth / 2;
        const distance = Math.abs(elCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    // 2. Map closestIndex to 0..4 for active pill state
    setActiveCardIndex(closestIndex % 5);

    // 3. Silent wrapping
    const firstCard = programRefs.current[0];
    const middleCard = programRefs.current[5];
    if (firstCard && middleCard) {
      const setWidth = middleCard.offsetLeft - firstCard.offsetLeft;

      if (closestIndex < 5) {
        // Jump from Set 1 to equivalent in Set 2
        container.style.scrollBehavior = "auto";
        container.scrollLeft += setWidth;
        setTimeout(() => {
          if (container) container.style.scrollBehavior = "smooth";
        }, 15);
      } else if (closestIndex >= 10) {
        // Jump from Set 3 to equivalent in Set 2
        container.style.scrollBehavior = "auto";
        container.scrollLeft -= setWidth;
        setTimeout(() => {
          if (container) container.style.scrollBehavior = "smooth";
        }, 15);
      }
    }
  };

  // Carousel auto-cycling
  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  // On mount, scroll to the middle set (index 5)
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const target = programRefs.current[5];
      if (container && target) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft = target.offsetLeft - container.offsetLeft - (container.clientWidth - target.clientWidth) / 2;
        setTimeout(() => {
          if (container) container.style.scrollBehavior = "smooth";
        }, 15);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Clipboard copies
  const copyToClipboard = (text: string, type: "account" | "ifsc") => {
    navigator.clipboard.writeText(text);
    if (type === "account") {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } else {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    }
  };

  // Contact Submit Handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    }, 4000);
  };

  const duplicatedAreas = [...focusAreas, ...focusAreas, ...focusAreas];

  return (
    <div className="min-h-screen bg-bg-coastal text-[#1A2D37] font-sans antialiased selection:bg-primary-container selection:text-primary">
      
      {/* 1. Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "liquid-glass border-b border-white/20 shadow-md" 
          : "bg-transparent border-b border-transparent shadow-none"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Two-Thirds Community Foundation Logo"
                className="w-12 h-12 object-contain rounded-xl border border-stone-200/80 bg-white p-1 transition-transform group-hover:scale-105 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-primary leading-tight">
                  Two-Thirds
                </span>
                <span className="text-[10px] font-mono tracking-widest text-secondary uppercase leading-tight">
                  Community Foundation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-[#003B5C]">
              <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
              <a href="#sdg" className="hover:text-secondary transition-colors">SDG Alignment</a>
              <a href="#reality" className="hover:text-secondary transition-colors">The Problem</a>
              <a href="#programs" className="hover:text-secondary transition-colors">Our Focus</a>
              <a href="#team" className="hover:text-secondary transition-colors">Team</a>
              <a href="#financials" className="hover:text-secondary transition-colors">Financials</a>
              <a
                href="#contact"
                className="bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 uppercase"
              >
                Involved
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary hover:text-secondary focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-b border-stone-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col text-[#003B5C] font-semibold text-sm">
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-100 hover:text-secondary"
                >
                  About Us
                </a>
                <a
                  href="#sdg"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-100 hover:text-secondary"
                >
                  SDG Alignment
                </a>
                <a
                  href="#reality"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-100 hover:text-secondary"
                >
                  The Problem
                </a>
                <a
                  href="#programs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-100 hover:text-secondary"
                >
                  Our Focus
                </a>
                <a
                  href="#team"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-100 hover:text-secondary"
                >
                  Team
                </a>
                <a
                  href="#financials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 border-b border-stone-100 hover:text-secondary"
                >
                  Financials
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary text-white text-center py-3 rounded-xl hover:bg-primary-light transition-all shadow-md uppercase text-xs font-bold tracking-wider"
                >
                  Get Involved
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero Section */}
      <section 
        id="home" 
        ref={heroRef} 
        className="relative h-[160vh] md:h-[220vh] bg-[#E0F2FE]"
      >
        {/* Sticky viewport container */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          
          {/* Parallax Layers */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 isolate">
            {/* Sky Layer (Background) */}
            <motion.div 
              style={{ y: yBg }}
              className="absolute inset-0 w-full h-[130%]"
            >
              <img 
                src={parallaxSky} 
                alt="Kerala sunrise sky" 
                className="w-full h-full object-cover object-bottom"
              />
            </motion.div>
            
            {/* Boats Layer (Midground) */}
            <motion.div 
              style={{ y: yMid }}
              className="absolute inset-0 w-full h-[130%] mix-blend-multiply"
            >
              <img 
                src={parallaxBoats} 
                alt="Fishing boats silhouettes" 
                className="w-full h-full object-cover object-bottom"
              />
            </motion.div>

            {/* Heading Layer (Sandwiched in the middle!) */}
            <motion.div 
              style={{ y: yText }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10"
            >
              <h1 
                style={{ textShadow: "0 0 35px rgba(255, 255, 255, 0.95), 0 0 10px rgba(255, 255, 255, 0.5)" }}
                className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#003B5C] leading-[1.05] max-w-4xl"
              >
                For the <span className="text-[#B24C35] italic font-serif font-semibold">two-thirds</span> <br />
                who deserve better.
              </h1>
              
              {/* Floating CTA Buttons inside parallax layer */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 uppercase w-48 sm:w-auto text-center"
                >
                  Get Involved
                </a>
                <a
                  href="#about"
                  className="bg-white/85 hover:bg-white text-primary font-display font-semibold text-xs tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 border border-primary/10 uppercase w-48 sm:w-auto text-center backdrop-blur-sm"
                >
                  Explore Manifesto
                </a>
              </div>
            </motion.div>
            
            {/* Foreground Mangroves Layer */}
            <motion.div 
              style={{ y: yFg }}
              className="absolute inset-0 w-full h-[130%] mix-blend-multiply z-20"
            >
              <img 
                src={parallaxForeground} 
                alt="Mangrove foliage silhouettes" 
                className="w-full h-full object-cover object-bottom"
              />
            </motion.div>
          </div>

          {/* Subtle warm overlay beam */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none z-1" />

          {/* Feathered bottom transition gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-coastal to-transparent pointer-events-none z-20" />

          {/* Bouncing scroll indicator */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
            <motion.a
              href="#about"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-primary transition-colors cursor-pointer"
            >
              <span>Scroll to Explore</span>
              <ArrowDown className="w-4 h-4 text-secondary" />
            </motion.a>
          </div>

        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-24 bg-bg-coastal border-b border-stone-200/30 relative overflow-hidden">
        {/* Soft morning ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(224,122,95,0.04),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(0,59,92,0.03),transparent_70%)] pointer-events-none" />

        {/* Decorative fish silhouettes on the sides */}
        <div className="absolute top-16 -left-12 w-48 h-48 md:w-80 md:h-80 md:-left-20 opacity-[0.16] pointer-events-none select-none mix-blend-multiply z-0">
          <img src={manifestoFish} alt="" className="w-full h-full object-contain -rotate-12" />
        </div>
        <div className="absolute top-[28%] -right-12 w-48 h-48 md:w-80 md:h-80 md:-right-20 opacity-[0.16] pointer-events-none select-none mix-blend-multiply z-0">
          <img src={manifestoFish} alt="" className="w-full h-full object-contain rotate-12 scale-x-[-1]" />
        </div>
        <div className="absolute top-[55%] -left-12 w-48 h-48 md:w-80 md:h-80 md:-left-20 opacity-[0.16] pointer-events-none select-none mix-blend-multiply z-0">
          <img src={manifestoFish} alt="" className="w-full h-full object-contain -rotate-45" />
        </div>
        <div className="absolute bottom-16 -right-12 w-48 h-48 md:w-80 md:h-80 md:-right-20 opacity-[0.16] pointer-events-none select-none mix-blend-multiply z-0">
          <img src={manifestoFish} alt="" className="w-full h-full object-contain rotate-45 scale-x-[-1]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
                The Two-Thirds Manifesto
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#003B5C] leading-tight">
                Our Relationship with the Sea
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto rounded-full mt-4" />
            </div>

            <div className="space-y-8 text-stone-700 text-lg leading-relaxed font-sans text-left md:text-justify max-w-3xl mx-auto">
              <p className="font-display font-medium text-xl sm:text-2xl text-[#003B5C] leading-relaxed text-center italic font-serif">
                "The ocean covers more than two-thirds of our planet. It feeds nations, powers economies, connects continents, and sustains countless lives. Along its shores live communities whose knowledge, resilience, and traditions have shaped humanity's relationship with the sea for generations."
              </p>
              
              <p>
                Yet many of these communities stand at a crossroads. As the world changes, they face new challenges and new opportunities. Access to education, sustainable livelihoods, innovation, environmental stewardship, and community development has never been more important.
              </p>

              <p>
                We believe that the people who live closest to the water deserve the opportunity to thrive while preserving the identity, culture, and wisdom that make their communities unique. Our mission is to support coastal communities in building a future that is prosperous, resilient, and sustainable—one that honors both people and the oceans they call home.
              </p>

              <p>
                Together, we work to strengthen livelihoods, empower future generations, protect coastal ecosystems, and create opportunities that allow communities to flourish without leaving their heritage behind.
              </p>

              <p className="font-display font-bold text-secondary text-center text-xl mt-12 pt-6 border-t border-stone-200/60">
                Because the two-thirds of the world covered by water deserve communities that are empowered to shape their own future.
              </p>
            </div>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-stone-200/60">
            
            <div className="bg-white p-8 rounded-2xl shadow-coastal border border-stone-200/60 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-primary flex items-center justify-center font-display font-bold text-xl">
                  🌅
                </div>
                <h3 className="font-display font-bold text-xl text-[#003B5C]">
                  Our Vision
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  A world where coastal and marginalized traditional communities live with genuine dignity, access to global opportunities, and localized climate resilience.
                </p>
              </div>
              <div className="pt-6 text-[10px] font-mono text-stone-400 uppercase tracking-widest border-t border-stone-100 mt-6">
                Empowering Shorelines
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-coastal border border-stone-200/60 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-secondary flex items-center justify-center font-display font-bold text-xl">
                  ⛵
                </div>
                <h3 className="font-display font-bold text-xl text-[#003B5C]">
                  Our Mission
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  To work hand-in-hand alongside vulnerable communities to build sustainable decentralized livelihoods, advance high-school education, empower coastal women, and actively secure environment margins—through mutual grassroots trust.
                </p>
              </div>
              <div className="pt-6 text-[10px] font-mono text-stone-400 uppercase tracking-widest border-t border-stone-100 mt-6">
                Co-Created Solutions
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Stats Section (Impact Section) */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        {/* Abstract waves backdrop */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-secondary">
                <CountUp target={8} suffix="+" />
              </h3>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#E0F2FE]/80">Years of Local trust</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-secondary">
                ₹<CountUp target={50} suffix="L" />
              </h3>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#E0F2FE]/80">Target Campaign Budgets</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-secondary">
                <CountUp target={5} suffix="+" />
              </h3>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#E0F2FE]/80">Hamlets Co-Created</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-secondary">
                <CountUp target={120} suffix="+" />
              </h3>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#E0F2FE]/80">Women Mentored</p>
            </div>
            
            <div className="grid col-span-2 md:col-span-1 place-content-center pt-2 md:pt-0">
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#14B8A6]">
                  <CountUp target={240} suffix="+" />
                </h3>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#E0F2FE]/80">Students Guided</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SDG Alignment Grid */}
      <section id="sdg" className="py-24 bg-[#E0F2FE]/15 border-y border-stone-200/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-[#155E75] font-mono text-xs font-bold uppercase tracking-wider">
              Global Standards Integration
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
              Strategic Alignment with UN SDGs
            </h2>
            <div className="w-16 h-1 bg-[#155E75] mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              We align our local projects with United Nations Sustainable Development Goals (SDGs) to coordinate regional impact.
            </p>
          </div>

          {/* SDG Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#0A97D9] text-white flex items-center justify-center rounded-xl font-display font-bold text-lg">
                  14
                </div>
                <h4 className="font-display font-bold text-sm text-[#003B5C]">Life Below Water</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Supporting marine ecology, restoring coastal biodiversity, and preventing shoreline plastics dump.
                </p>
              </div>
              <div className="pt-4 text-[10px] text-[#0A97D9] font-mono font-bold uppercase border-t border-stone-100 mt-4">
                Active Anchor
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#FF3A21] text-white flex items-center justify-center rounded-xl font-display font-bold text-lg">
                  5
                </div>
                <h4 className="font-display font-bold text-sm text-[#003B5C]">Gender Equality</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Fostering women SHG banking, credit resources, and vocational trade groups.
                </p>
              </div>
              <div className="pt-4 text-[10px] text-[#FF3A21] font-mono font-bold uppercase border-t border-stone-100 mt-4">
                Active Anchor
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#4C9F38] text-white flex items-center justify-center rounded-xl font-display font-bold text-lg">
                  4
                </div>
                <h4 className="font-display font-bold text-sm text-[#003B5C]">Quality Education</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Evening classrooms, digital study packs, and student mentorship libraries.
                </p>
              </div>
              <div className="pt-4 text-[10px] text-[#4C9F38] font-mono font-bold uppercase border-t border-stone-100 mt-4">
                Active Anchor
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#3F7E44] text-white flex items-center justify-center rounded-xl font-display font-bold text-lg">
                  13
                </div>
                <h4 className="font-display font-bold text-sm text-[#003B5C]">Climate Action</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Local mangrove nurseries, storm-surge buffers, and sea erosion defenses.
                </p>
              </div>
              <div className="pt-4 text-[10px] text-[#3F7E44] font-mono font-bold uppercase border-t border-stone-100 mt-4">
                Active Anchor
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#A21942] text-white flex items-center justify-center rounded-xl font-display font-bold text-lg">
                  8
                </div>
                <h4 className="font-display font-bold text-sm text-[#003B5C]">Decent Work</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Aquaculture systems, modern dry fish equipment, and market link integrations.
                </p>
              </div>
              <div className="pt-4 text-[10px] text-[#A21942] font-mono font-bold uppercase border-t border-stone-100 mt-4">
                Active Anchor
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Reality Section (Sticky Stacking Deck) */}
      <section id="reality" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
            Critical Realities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
            The Challenges We Tackle Head-On
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-stone-600 text-sm">
            India's coastal margins are home to over 150 million people, facing unique structural challenges that require direct co-created solutions.
          </p>
        </div>

        {/* Sticky Deck Wrapper */}
        <div className="relative space-y-12 max-w-4xl mx-auto pb-12">
          {realityCards.map((card, idx) => (
            <div
              key={idx}
              className={`sticky w-full p-8 sm:p-10 rounded-2xl shadow-2xl ${card.bg} ${card.text} border ${card.border} flex flex-col justify-between h-[380px] sm:h-[360px]`}
              style={{
                top: `${110 + idx * 24}px`,
                transform: `scale(${1 - (realityCards.length - idx) * 0.015})`,
                zIndex: idx + 1
              }}
            >
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl leading-none">
                      {card.title}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-widest opacity-80 mt-1.5 font-bold">
                      {card.tagline}
                    </p>
                  </div>
                  <span className="text-stone-400 font-mono text-sm font-bold">0{idx + 1}</span>
                </div>
                
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif italic max-w-2xl">
                  "{card.description}"
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-left">
                <p className="text-xs text-stone-600 leading-relaxed max-w-xl">
                  <span className="font-bold uppercase text-[10px] block mb-0.5">Our Strategic Approach:</span>
                  {card.details}
                </p>
                <div className="flex items-center gap-1 text-xs font-bold font-mono opacity-80 shrink-0">
                  <span>Co-Designed</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 7. Programs Section (Scroll Synchronized Focus Areas) */}
      <section id="programs" className="py-24 bg-surface-low border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-primary font-mono text-xs font-bold uppercase tracking-wider">
              Operational Focus
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
              Strategic Focus Areas
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              Hover over the carousel to pause cycling. Tap on indicators to skip, or swipe the cards directly.
            </p>
          </div>

          {/* Sync Indicators/Thumbnails Row */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {focusAreas.map((area, idx) => (
              <button
                key={area.id}
                onClick={() => handlePillClick(idx)}
                className={`px-4 py-2 text-xs font-display font-bold rounded-full border transition-all cursor-pointer ${
                  activeCardIndex === idx
                    ? "bg-primary border-primary text-white shadow-md"
                    : "bg-white border-stone-200 text-[#003B5C] hover:bg-stone-50"
                }`}
              >
                <span className="mr-1">{area.emoji}</span>
                {area.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Horizontal scroll container with snap */}
          <div
            className="relative"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            onMouseDown={() => setIsCarouselHovered(true)}
            onMouseUp={() => setIsCarouselHovered(false)}
            onTouchStart={() => setIsCarouselHovered(true)}
            onTouchEnd={() => setIsCarouselHovered(false)}
          >
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 px-[15vw] md:px-[20vw] scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {duplicatedAreas.map((area, idx) => (
                <div
                  key={`${area.id}-${idx}`}
                  ref={(el) => {
                    programRefs.current[idx] = el;
                  }}
                  className="w-[70vw] md:w-[60vw] max-w-[750px] shrink-0 snap-center"
                >
                  <div className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden grid md:grid-cols-12 h-auto md:h-[380px]">
                    
                    {/* Left Column: Details */}
                    <div className="p-8 md:col-span-7 flex flex-col justify-between text-left space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl">{area.emoji}</span>
                          <h4 className="font-display font-bold text-lg text-[#003B5C]">{area.title}</h4>
                        </div>
                        <p className="text-[10px] font-mono tracking-wider font-bold text-secondary uppercase">
                          {area.tagline}
                        </p>
                        <p className="text-xs text-stone-600 leading-relaxed font-sans">
                          {area.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#E0F2FE]/40 border-l-4 border-primary">
                        <span className="font-mono font-bold text-[9px] uppercase text-primary tracking-wider block">Accomplished status:</span>
                        <p className="text-xs font-semibold text-stone-800 mt-1">{area.accomplishments}</p>
                      </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="bg-stone-100 md:col-span-5 relative h-48 md:h-full">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none" />
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Carousel navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between px-2 pointer-events-none">
              <button
                onClick={() => scrollPrev()}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-primary hover:text-secondary cursor-pointer pointer-events-auto active:scale-90 transition-transform"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollNext()}
                className="w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-primary hover:text-secondary cursor-pointer pointer-events-auto active:scale-90 transition-transform"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-24 bg-stone-50 border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E6FFFA] text-[#155E75] font-mono text-[10px] font-bold uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
              The Faces Behind the Foundation
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              A group of dedicated social workers, professionals, and researchers working to guide resources straight to community ideas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-coastal border border-stone-200/50 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:border-stone-300 transition-all duration-300 group"
              >
                {/* Avatar circle with dotted border */}
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#155E75] flex items-center justify-center bg-stone-50 transition-transform duration-300 group-hover:scale-105 shrink-0">
                  <span className="font-display font-bold text-xl text-[#003B5C]">
                    {member.initials}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-primary">
                    {member.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-wider block">
                    {member.role}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Involved/Financials Section (Budgets, Copy Board) */}
      <section id="financials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
            Budgets & Audits
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
            Expansion Funding Goals & Transparency
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-stone-600 text-sm">
            We are registered under Section 8(1) of the Companies Act, 2013 (CIN U88900KL2026NPL100608). Track our campaign expansions below.
          </p>
        </div>

        {/* Progress Bars & Bank Cards Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Goals */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <h3 className="font-display font-bold text-xl text-[#003B5C] border-b border-stone-100 pb-3">
              Budget Goals Tracking
            </h3>

            <div className="space-y-6">
              {growthGoals.map((goal) => {
                const percentage = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
                return (
                  <div key={goal.id} className="p-6 rounded-2xl bg-white shadow-coastal border border-stone-200/50 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="px-2.5 py-0.5 rounded bg-primary-container text-primary text-[10px] font-mono font-bold uppercase">
                          {goal.timeline}
                        </span>
                        <h4 className="font-display font-bold text-sm text-[#003B5C] mt-2">{goal.title}</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-400 font-mono uppercase block">Goal Target</span>
                        <span className="font-display font-bold text-sm text-secondary">₹{(goal.targetAmount / 100000).toFixed(0)} Lakhs</span>
                      </div>
                    </div>

                    {/* Progress slider bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-stone-600 font-medium">
                        <span>Audited Campaign</span>
                        <span className="font-mono text-[#155E75]">{percentage}% Funded</span>
                      </div>
                      <div className="w-full bg-stone-100 h-3.5 rounded-full overflow-hidden border border-stone-200/40">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8 }}
                          className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] text-stone-400">
                        <span>Achieved: ₹{goal.currentAmount.toLocaleString("en-IN")}</span>
                        <span>Total: ₹{goal.targetAmount.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-500">
                      <span className="font-bold text-[#003B5C] block text-[10px] uppercase tracking-wider">Objectives:</span>
                      <ul className="grid gap-1 pl-4 list-disc">
                        {goal.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                      <p className="text-[10px] italic pt-2 border-t border-dashed border-stone-100">{goal.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Bank Account Details Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-display font-bold text-xl text-[#003B5C] border-b border-stone-100 pb-3">
              Official Bank Registry
            </h3>

            <div className="p-8 rounded-2xl bg-primary text-white shadow-2xl relative overflow-hidden border border-white/10 space-y-6">
              {/* Graphic ring underlay */}
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full border-4 border-white/5 pointer-events-none" />
              <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white/2 pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Landmark className="w-6 h-6 text-secondary" />
                  <span className="font-mono text-[10px] tracking-widest uppercase opacity-75">Nongovernmental Registry</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-bold">12A / 80G Credits</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-white/50 font-mono uppercase block">Beneficiary Entity</span>
                  <p className="font-display font-bold text-sm sm:text-base tracking-wide">
                    TWO-THIRDS COMMUNITY FOUNDATION
                  </p>
                </div>

                <div className="grid gap-3 font-mono text-xs">
                  
                  {/* Account number item */}
                  <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center border border-white/5">
                    <div>
                      <span className="text-[9px] text-white/40 uppercase block font-sans">Account Number</span>
                      <span className="font-bold tracking-wider text-sm">926020011506637</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard("926020011506637", "account")}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer"
                      title="Copy Account Number"
                    >
                      {copiedAccount ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* IFSC Number item */}
                  <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center border border-white/5">
                    <div>
                      <span className="text-[9px] text-white/40 uppercase block font-sans">IFSC Code</span>
                      <span className="font-bold tracking-wider text-sm">UTIB0000028</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard("UTIB0000028", "ifsc")}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer"
                      title="Copy IFSC Code"
                    >
                      {copiedIfsc ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                  <div>
                    <span className="text-[9px] text-white/50 font-mono uppercase block">Bank Name</span>
                    <p className="font-semibold text-stone-100">Axis Bank Ltd</p>
                  </div>
                  <div>
                    <span className="text-[9px] text-white/50 font-mono uppercase block">Branch Name</span>
                    <p className="font-semibold text-stone-100">Trivandrum Main Branch</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span>Axis Bank Verified</span>
                </div>
                <span>Secured transfers only</span>
              </div>
            </div>

            {/* Meet Team Members */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 space-y-4">
              <h4 className="font-display font-bold text-sm text-[#003B5C]">Board of Directors</h4>
              <div className="grid gap-3">
                {teamMembers.map((member, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xs shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-xs text-primary">{member.name}</h5>
                      <p className="text-[9px] text-stone-400 font-mono uppercase">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 9. Contact & Get Involved Form */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden border-t-8 border-secondary">
        {/* Soft marine graphics background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              Join the Movement
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#FAF9F6] leading-tight">
              Get Involved With Our Shoreline Team
            </h2>
            <p className="text-[#E0F2FE]/80 text-sm leading-relaxed">
              We recruit and onboard volunteers, coordinate academic partnerships, and handle CSR programs. Drop us a line and let's configure collaboration!
            </p>

            <div className="space-y-4 text-xs font-mono text-[#E0F2FE]/90">
              <div className="flex items-center gap-3">
                <MapPin className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span>Trivandrum Coastline, Kerala, India</span>
              </div>
              <a href="tel:+919037518593" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span>+91 9037518593</span>
              </a>
              <a href="mailto:twothirdscommunityfoundation@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors break-all">
                <Mail className="w-4.5 h-4.5 text-secondary shrink-0" />
                <span>twothirdscommunityfoundation@gmail.com</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div className="text-stone-300 text-xs">
                <span className="font-bold text-[#E0F2FE] block text-[10px] uppercase font-mono tracking-wider">Registration Code:</span>
                U88900KL2026NPL100608. Under section 12A/80G tax claims.
              </div>
            </div>
          </div>

          {/* Right Column: Form wrapper */}
          <div className="lg:col-span-7 bg-white text-[#1A2D37] p-8 rounded-3xl shadow-2xl border border-white/20">
            <h3 className="font-display font-bold text-lg text-primary mb-6 text-left">
              Send an Inquiry Message
            </h3>

            <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-stone-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Bindu Sajeev"
                    className="p-3 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-primary text-primary"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-stone-400 uppercase">Email Address</label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. bindu@gmail.com"
                    className="p-3 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-primary text-primary"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-stone-400 uppercase">Inquiry Type</label>
                <select
                  value={formType}
                  onChange={(e) => setFormType(e.target.value)}
                  className="p-3 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-primary text-primary"
                >
                  <option value="General Query">General Query / Question</option>
                  <option value="Volunteer Opportunity">Volunteer Onboarding</option>
                  <option value="Donation / CSR Grant">Donation & CSR Partnerships</option>
                  <option value="Youth Mentorship">Youth Classroom Program</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-stone-400 uppercase">Message</label>
                <textarea
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="How would you like to collaborate with us?"
                  className="p-3 text-xs bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-1 focus:ring-primary text-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white text-xs font-display font-semibold tracking-wider py-4 rounded-xl cursor-pointer shadow-md transition-colors active:scale-98 uppercase"
              >
                Send Message
              </button>

              <AnimatePresence>
                {isFormSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-[#E6FFFA] border border-teal-200 rounded-xl text-teal-800 text-xs font-semibold text-center mt-4"
                  >
                    🎉 Inquiry received! Our Trivandrum field officers will email you back within 24-48 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t-8 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-12 pb-12 border-b border-white/5 text-left">
          
          {/* Logo & description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Two-Thirds Logo"
                className="w-10 h-10 object-contain rounded-lg bg-white p-1"
              />
              <h3 className="font-display font-bold text-base text-white">
                Two-Thirds Community Foundation
              </h3>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Registered Section 8 nonprofit dedicated to empowering coastal fishing hamlets and traditional communities across Kerala, India through education, sustainable livelihoods, and climate resilience.
            </p>
            <div className="space-y-1 font-mono text-[10px] text-stone-500">
              <p>CIN Identification Code: U88900KL2026NPL100608</p>
              <p>Registered under Section 8(1) of the Companies Act, 2013</p>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-stone-200 text-sm">Focus Anchors</h4>
            <div className="grid gap-2 text-xs">
              <a href="#about" className="text-stone-400 hover:text-secondary transition-colors">Our Vision & Mission</a>
              <a href="#reality" className="text-stone-400 hover:text-secondary transition-colors">Coastal Challenges</a>
              <a href="#programs" className="text-stone-400 hover:text-secondary transition-colors">Strategic Focus Areas</a>
              <a href="#team" className="text-stone-400 hover:text-secondary transition-colors">Meet the Team</a>
              <a href="#financials" className="text-stone-400 hover:text-secondary transition-colors">Funding Goals & Bank details</a>
            </div>
          </div>

          {/* Social Icons & Certification */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-stone-200 text-sm">Regulatory Compliance</h4>
            <div className="text-xs text-stone-400 space-y-2">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                <span>Fully compliant with Section 135 & 80G tax exemptions.</span>
              </p>
              <p className="text-[10px] font-mono text-stone-500 leading-normal">
                Donations are audit-logged and eligible for Corporate Social Responsibility credit allocations under Indian tax guidelines.
              </p>
            </div>
            
            {/* Custom Brand SVG Icons (lucide does not contain brands) */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors text-white" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors text-white" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors text-white" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} Two-Thirds Community Foundation. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span>Under section 80G credits, Income Tax Department, India</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
