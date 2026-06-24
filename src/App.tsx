import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  ChevronDown,
  Info,
  ArrowDown,
  BookOpen,
  Anchor,
  Fish,
  Leaf,
  LifeBuoy,
  GraduationCap,
  Waves,
  Activity,
  Compass,
  Calendar,
  User,
  Clock,
  ArrowLeft
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
import educareClassroom from "./assets/educare-classroom.png";
import coastalApproachBg from "./assets/coastal-approach-bg.png";
import perumathuraVillage from "./assets/perumathura-village.png";

// Import Environment Initiative images
import envImage1 from "./assets/Enviroment/image 1.webp";
import envImage2 from "./assets/Enviroment/image. 2.webp";
import envImage3 from "./assets/Enviroment/image 3.webp";
import envImage4 from "./assets/Enviroment/image 4.webp";
import envImage5 from "./assets/Enviroment/image 5.webp";
import envImage6 from "./assets/Enviroment/image 6.webp";

// Data Models
interface FocusArea {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  accomplishments: string;
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "perumathura-days",
    title: "Perumathura Days: A Gram Fellow's Exploration of a Coastal Village in Kerala",
    excerpt: "IIT Gandhinagar Gram Fellow Jaseemul Lukman explores the peninsula of Perumathura, delving into coastal resilience, community networks, and the fisherfolk's place in the Kerala model of development.",
    date: "January 21, 2026",
    author: "Jaseemul Lukman",
    readTime: "7 min read",
    image: perumathuraVillage,
    category: "Field Diaries",
    content: [
      "The last three weeks of 2023 marked a profoundly memorable period in my life, providing a remarkable conclusion to the year. As a Gram Fellow from IIT Gandhinagar, I had the privilege of residing in the enchanting coastal village of Perumathura, nestled in the Thiruvananthapuram district of Kerala, located 340 km away from my hometown during the winter break. While initially disheartened about missing out on spending the vacation with my family while my friends did, my time in Perumathura was so fulfilling that it mitigated the longing for my home and village. As an M.A. Society and Culture research student, I am particularly grateful for the invaluable ethnographic experience gained during this stint, made possible through the generosity of the remarkable individuals in this coastal haven. This blog recounts my journey, capturing the essence of my experiences during these weeks in Perumathura.",
      "Gram Fellowship of IIT Gandhinagar aims to encourage students to immerse themselves in the experience of village life. During the fellowship stay, students are expected to engage with the village community to understand their concerns, welfare, values, and beyond. The students also have the opportunity to comprehend prevailing socio-political, economic, cultural, and humanitarian factors in the community. They are encouraged to earn their livelihood and meet their needs by working for the community during their stay in the village. Gram fellows are required to spend three weeks during the winter break experiencing the life of common rural people who may not have access to sufficient resources. It is considered an opportunity for fellows to think beyond technological interventions and address the concerns of the community. Beyond that, fellows are free to conduct fieldwork with specific objectives aligned with their academic research interests.",
      "In the heart of Kerala's marine richness lies a disregarded community, the skilled fisherfolk integral to the state's identity yet often ignored in the acclaimed \"Kerala model of development\". Despite being the lifeline of Malayali diets, the fisherfolk face social prejudices based on caste and class. Nevertheless, the resilience and selflessness exhibited by fishermen in times of crisis are truly remarkable. I vividly recall their heroic efforts during the devastating 2018 flood when they brought their boats to rescue those stranded in the affected hinterland areas, including my own locality. These aspects have instilled in me a desire to delve further into the intricacies of the lives of a coastal community, thereby proposing it for the Gram Fellowship.",
      "Additionally, I am interested in studying more about the Muslim fisherfolk community, which led me in search of a suitable field. As I hail from Malabar, I first thought of selecting a coastal village in North Kerala. However, the Fellowship committee suggested exploring beyond my familiar space, leading me to the southernmost district, Thiruvananthapuram, the heart of Kerala's coastal region with the largest fishing population. Following thorough digital surveying and inquiries, I chose Perumathura, a lush hamlet nestled between Kadinamkulam backwaters and the Arabian Sea, flourishing with fishing, coir production, and a significant Muslim heritage tied to the legendary Chera King Cheraman Perumal.",
      "Perumathura is situated as a serene coastal hamlet, resembling a peninsula, nestled between the Kadinamkulam backwaters in the east, the Arabian Sea in the west, Muthalappozhi estuary in the north, and Mariyanadu in the south. Despite not being officially recognized as a single administrative unit, the people of Perumathura identify themselves within these distinct boundaries, often referring to it as \"Akhila Perumathura\" (All Perumathura). The village is scattered across three local gram panchayats: Chirayinkeezh, Azhoor, and Kadinamkulam, dividing between Chirayinkeezh and Thiruvananthapuram taluks. With their headquarters located quite a distance away from the village, the need for proper decentralization has arisen, prompting discussions about establishing a separate panchayat for Perumathura to address common challenges. Due to the absence of a vehicle, most of my exploration was conducted on foot. Nevertheless, I thoroughly enjoyed strolling through the length and breadth of Perumathura, which consistently offered picturesque visuals, providing ample material for my phone camera."
    ]
  }
];

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
    name: "Jaseemul Lukman",
    role: "Co-founder",
    bio: "PhD Scholar at Jamia Millia Islamia, leading research and advocacy projects.",
    initials: "JL"
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
    id: "educare",
    title: "Education Initiative",
    icon: BookOpen,
    tagline: "Reimagining learning and growth for coastal children",
    description: "Setting up supplementary study centres, evening tutor groups, and digital libraries across remote coastal fishing villages. We combine academic tutoring with community engagement to transform learning spaces.",
    accomplishments: "Empowered 350+ students with academic tutoring, anti-drug awareness, and scholastic awards.",
    image: educareClassroom
  },
  {
    id: "women-empowerment",
    title: "Women’s Empowerment",
    icon: Anchor,
    tagline: "Skill training, SHGs, leadership, and financial literacy",
    description: "Mobilizing local micro-savings Self-Help Groups (SHGs) to run fish value-addition facilities, craft circles, and local co-operatives. Providing direct digital financial training.",
    accomplishments: "Empowered 120+ women in financial accounting and digital banking.",
    image: empowermentWomen
  },
  {
    id: "livelihoods",
    title: "Sustainable Livelihoods",
    icon: Fish,
    tagline: "Beyond fishing: aquaculture, value addition, market links",
    description: "Diversifying income streams via safe marine cage farming, seaweed cultivation, modern drying equipment, and direct market integration that eliminates predatory middlemen.",
    accomplishments: "Established 3 cooperative fish-dryer micro-units.",
    image: coastalLivelihoods
  },
  {
    id: "environment",
    title: "Environment Projects",
    icon: Leaf,
    tagline: "Nature tools, GINTL curriculum, Coastal Walks, Sea Voices",
    description: "Helping coastal children engage deeply with local ecology through GINTL Climate Change Education, Sea Voices storytelling, and hands-on Coastal Walks.",
    accomplishments: "Successfully conducted international climate exchanges (GINTL) and Climate Week Sea Voices workshops.",
    image: mangroveRestoration
  },
  {
    id: "health",
    title: "Health & Nutrition",
    icon: LifeBuoy,
    tagline: "Supporting health access, nutrition, and sanitation",
    description: "Organizing mobile health clinics, distributing fresh iron-fortified multi-nutrient food packets list, and creating hygienic community sanitation layouts in remote coastal hamlets.",
    accomplishments: "Conducted 15+ remote check-up camps with expert pediatricians.",
    image: healthNutrition
  }
];

const realityCards: RealityCard[] = [
  {
    title: "Market & Credit Exclusion",
    tagline: "Systemic Isolation from Catch Value",
    description: "The community does not lack economic enterprise; rather, structural market designs and exploitative middleman rings intercept the true value of their catch, leaving fishers with high fuel overheads and seasonal precarity.",
    details: "Our livelihood program creates direct-to-consumer micro-dryer cooperatives that bypass exploitative intermediaries and increase local value-retention by over 40%.",
    bg: "bg-[#E0F2FE]", // Soft light sky blue
    text: "text-[#003B5C]",
    border: "border-sky-200"
  },
  {
    title: "Ecological Neglect",
    tagline: "Imposed Engineering vs. Nature's Shield",
    description: "Severe beach loss and cyclonic surges are worsened by rigid, top-down concrete engineering that fails under pressure. Traditional knowledge of shoreline buffers is discarded in favor of mainland answers.",
    details: "We champion nature-based solutions, restoring native mangrove buffers to stabilize coastal soils and shield fishers' homes, combining local wisdom with ecological science.",
    bg: "bg-[#E6FFFA]", // Soft light teal/cyan
    text: "text-[#155E75]",
    border: "border-teal-200"
  },
  {
    title: "Educational Incompatibility",
    tagline: "Rigid Systems Ignoring Coastal Rhythms",
    description: "A child from a fishing hamlet does not lack academic potential; they are excluded by rigid school systems and curricula that fail to align with the socio-economic rhythms and seasonal realities of coastal life.",
    details: "We establish community evening classrooms and digital learning hubs, offering first-generation learners tailored academic support and career coaching designed to keep them on secondary tracks.",
    bg: "bg-[#FFF9E6]", // Soft amber/gold tint
    text: "text-amber-950",
    border: "border-amber-200"
  },
  {
    title: "Institutional Credit Barriers",
    tagline: "Systemic Exclusion from Financial Access",
    description: "Women in remote hamlets carry the weight of household finance but are systematically excluded from formal credit channels and modern vocational training, leaving them vulnerable to local debt cycles.",
    details: "We fund and organize women's Self Help Groups, training them in digital banking, micro-savings, and enterprise management to establish direct financial voices and bypass credit barriers.",
    bg: "bg-[#FFF2F2]", // Soft red tint
    text: "text-red-950",
    border: "border-red-200"
  },
  {
    title: "Knowledge Displacement",
    tagline: "Disregarding Indigenous Maritime Wisdom",
    description: "Centuries-old ocean-reading, boatcraft, and traditional weather forecasting are not outdated; they are actively displaced by development paradigms that value mainland answers over coastal ecological wisdom.",
    details: "We document and integrate coastal maritime folklore into youth programs, connecting elders with students to preserve shore identity and ensure local ecological knowledge isn't lost.",
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
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") {
      return target;
    }
    return 0;
  });
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

  return <span ref={ref} suppressHydrationWarning={true}>{count}{suffix}</span>;
}

function EducarePage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      {/* 1. Immersive Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-[#003B5C]">
        <img
          src={educareClassroom}
          alt="Coastal Classroom Kerala"
          className="absolute inset-0 w-full h-full object-cover opacity-30 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-[#003B5C]/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md"
          >
            <GraduationCap className="w-3.5 h-3.5 text-secondary" />
            Coastal Educational Initiative
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight"
          >
            EDUCARE
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-secondary mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-stone-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans font-medium"
          >
            Reimagining learning and growth for the children of coastal Perumathura.
          </motion.p>
        </div>
      </section>



      {/* 2. Who We Are Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 space-y-6 text-left"
        >
          <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider block">
            Our Approach
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
            Nurturing Coastal Potential
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif italic bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
            "For the past seven years, we have been on a heartfelt journey to reimagine learning for the children of coastal Perumathura. Our work is built on a simple belief: that education should honour the unique identity, culture, and potential of every student."
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            We focus on building strong foundations for our educators, creating a curriculum that feels relevant and validating, and using teaching methods that connect with children's lives. At the heart of our effort is the classroom itself—a space of caring relationships and holistic growth. We assess students in ways that empower them, and we ensure everything we do is woven into the vibrant fabric of the Perumathura community. This integrated approach allows us to provide an education that is transformative, lighting a path forward for our children.
          </p>
        </motion.div>

        {/* Impact Stats Column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-lg space-y-6"
        >
          <h3 className="font-display font-bold text-lg text-primary text-left border-b border-stone-100 pb-3">
            Our Direct Impact
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#003B5C]">
                <CountUp target={200} suffix="+" />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Student Info Sessions
              </span>
            </div>

            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#003B5C]">
                <CountUp target={250} suffix="+" />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Parental Sessions
              </span>
            </div>

            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#003B5C]">
                <CountUp target={25} />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Teacher Training
              </span>
            </div>

            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#003B5C]">
                <CountUp target={200} suffix="+" />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Cultural Events
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Core Principles Section */}
      <section className="py-20 bg-stone-100 border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
              Foundational Principles
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {[
              {
                title: "Equity and Excellence",
                desc: "Standardizing educational opportunity to bridge socioeconomic disparities, ensuring every student has equal access to quality resources."
              },
              {
                title: "Student-Teacher Relationships",
                desc: "Fostering stable, caring mentorships inside the classroom to provide safety, boost motivation, and build student confidence."
              },
              {
                title: "Identity Development",
                desc: "Integrating maritime folklore and local heritage, helping coastal children take pride in their community identity and background."
              },
              {
                title: "Teaching The Whole Child",
                desc: "Moving beyond basic text memorization to nurture cognitive, physical, creative, and socio-emotional dimensions simultaneously."
              }
            ].map((p, i) => {
              const directionX = (i % 2 === 0) ? -50 : 50;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: directionX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/40 text-left space-y-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E0F2FE] text-primary flex items-center justify-center font-mono font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#003B5C]">{p.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Pillars Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider">
            Operational Pillars
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
            Our Six Core Programs
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {[
            {
              title: "Academic Execution",
              desc: "Building deep conceptual understanding through daily immersive tutoring. We employ regular formative checkpoints and targeted annual high-stakes exam strategies. Hands-on science and mathematics workshops transform abstract theory into practical, exciting discovery.",
              badge: "SCHOLASTIC",
              icon: BookOpen
            },
            {
              title: "Holistic Student Enrichment",
              desc: "Unlocking potential outside standard curriculum boundaries. We integrate sports like badminton and Wushu, creative arts circles, and character-building values sessions. Regular field trips transform the world into an interactive, wall-less learning environment.",
              badge: "CREATIVE & PHYSICAL",
              icon: Waves
            },
            {
              title: "Teacher Training",
              desc: "Empowering educators, the heartbeat of our project. We invest deeply in continuous upskilling workshops focusing on advanced pedagogy, curriculum design, outdoor integration, and research documentation, transforming them into innovative facilitators.",
              badge: "CAPACITY BUILDING",
              icon: Anchor
            },
            {
              title: "Strategic Collaboration",
              desc: "Forging critical alliances with leading foundations, CSR efforts, and community networks (such as KIMS CSR, Vakkom Moulavi Foundation, and Haiyya) to secure expertise, shared purpose, and a stable financial foundation for long-term scalability.",
              badge: "ALLIANCES",
              icon: Compass
            },
            {
              title: "Community & Parental Engagement",
              desc: "Bridging the gap between school and home via periodic teacher home visits and parent counseling sessions. We integrate community-wide anti-drug campaigns and child well-being initiatives to build a supportive ecosystem surrounding the student.",
              badge: "ECOSYSTEM",
              icon: LifeBuoy
            },
            {
              title: "Cultural Events",
              desc: "Celebrating heritage and fostering a sense of shared belonging. Festivities like Independence Day, Kerala Piravi, Ramadan, and our Annual Day boost student morale, strengthen community relationships, and establish deep cultural pride.",
              badge: "FESTIVALS",
              icon: Activity
            }
          ].map((pillar, i) => {
            let initialAnim = {};
            if (i % 3 === 0) {
              initialAnim = { opacity: 0, x: -50 };
            } else if (i % 3 === 1) {
              initialAnim = { opacity: 0, y: 50 };
            } else {
              initialAnim = { opacity: 0, x: 50 };
            }

            return (
              <motion.div
                key={i}
                initial={initialAnim}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: "easeOut" }}
                className="p-8 rounded-3xl border border-stone-200/40 text-left flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-600">
                    <pillar.icon className="w-3 h-3 text-secondary shrink-0" />
                    {pillar.badge}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#003B5C]">{pillar.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{pillar.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 bg-[#003B5C] text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 text-center space-y-6"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Support Educare's Educational Revolution
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
            Help us expand our coastal classrooms, fund science workshops, and upskill more teachers. Every contribution fuels direct opportunities for coastal children.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => {
                window.location.hash = "#contact";
              }}
              className="inline-block bg-secondary hover:bg-secondary-light text-white font-display font-semibold text-xs tracking-wider px-8 py-3 rounded-xl transition-all shadow-md uppercase active:scale-95 cursor-pointer"
            >
              Get In Touch to Support
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function EnvironmentPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      {/* 1. Immersive Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A3D2A]">
        <img
          src={mangroveRestoration}
          alt="Coastal Mangrove Restoration Kerala"
          className="absolute inset-0 w-full h-full object-cover opacity-30 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-[#0A3D2A]/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md"
          >
            <Leaf className="w-3.5 h-3.5 text-secondary" />
            Coastal Ecological Initiative
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight"
          >
            ENVIRONMENT INITIATIVE
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-secondary mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-stone-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans font-medium"
          >
            Empowering the next generation to protect, understand, and cherish our fragile coastal ecosystem.
          </motion.p>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 space-y-6 text-left"
        >
          <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider block">
            Our Mission
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A3D2A]">
            Restoring Shoreline Resilience
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif italic bg-white p-6 rounded-2xl border-l-4 border-emerald-600 shadow-sm">
            "As a coastal village abutting a major city, Perumathura faces multiple challenges of climate change, coastal erosion, and biodiversity loss while simultaneously holding on to a rich ecological and cultural heritage."
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            In this context, our work focuses on helping children engage deeply with their environment through nature-immersive tools and modules that make climate and ecological realities tangible while also celebrating the area's unique biodiversity. By weaving together knowledge, history, and local ecology, we aim to foster awareness, care, and stakeholdership rooted in the lived realities of Perumathura.
          </p>
        </motion.div>

        {/* Stats Column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-lg space-y-6"
        >
          <h3 className="font-display font-bold text-lg text-emerald-700 text-left border-b border-stone-100 pb-3">
            Ecology & Outreach
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#0A3D2A]">
                <CountUp target={3} />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Exchange Countries
              </span>
            </div>

            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#0A3D2A]">
                <CountUp target={120} suffix="+" />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Storytelling Youth & Elders
              </span>
            </div>

            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#0A3D2A]">
                <CountUp target={45} suffix="+" />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Shoreline Walks
              </span>
            </div>

            <div className="space-y-1 text-left">
              <span className="block text-3xl sm:text-4xl font-display font-bold text-[#0A3D2A]">
                <CountUp target={800} suffix="+" />
              </span>
              <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase leading-snug">
                Mangroves Planted & Monitored
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Core Pillars (Methodology) Section */}
      <section className="py-20 bg-stone-100 border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A3D2A]">
              Our Ecological Methodology
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 overflow-hidden">
            {[
              {
                title: "Learning From The Ground",
                desc: "Developing nature-immersive learning tools and outdoor observation modules that translate abstract climate concepts into tangible local realities."
              },
              {
                title: "Weaving Culture",
                desc: "Connecting traditional ecological knowledge (traditional navigation, oceanic forecasts, folklore) with modern climate sciences, bridging generation gaps."
              },
              {
                title: "Empower For Action",
                desc: "Providing coastal youth with the structured framework and confidence to document changes, voice shoreline issues, and participate in active conservation."
              }
            ].map((p, i) => {
              const directionX = i === 0 ? -50 : i === 2 ? 50 : 0;
              const directionY = i === 1 ? 50 : 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: directionX, y: directionY }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/40 text-left space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-mono font-bold text-sm">
                    0{i + 1}
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#0A3D2A]">{p.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5. Photo Gallery Section */}
      <section className="py-20 bg-white border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              Outreach Chronicles
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A3D2A]">
              Coastal Learning in Action
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-sans max-w-lg mx-auto">
              Real moments of field discovery, shoreline research, and community-guided environmental sessions with children in Perumathura, Kerala.
            </p>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Col 1: Spans 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="md:row-span-2 h-[350px] md:h-[600px] rounded-3xl overflow-hidden border border-stone-200/50 relative group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={envImage1}
                alt="Coastal walks field research session"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-left text-white max-w-xs space-y-1">
                <span className="text-[9px] font-mono bg-emerald-600 px-2 py-0.5 rounded text-white font-bold uppercase tracking-wider">Session Highlight</span>
                <h4 className="font-display font-semibold text-sm">Estuary Biodiversity Cataloging</h4>
              </div>
            </motion.div>

            {/* Col 2, Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-[280px] rounded-3xl overflow-hidden border border-stone-200/50 relative group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={envImage3}
                alt="Environmental lesson on the beach"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-left text-white max-w-xs space-y-1">
                <span className="text-[9px] font-mono bg-emerald-600 px-2 py-0.5 rounded text-white font-bold uppercase tracking-wider">Shore Classroom</span>
                <h4 className="font-display font-semibold text-sm">Interactive Shoreline Observations</h4>
              </div>
            </motion.div>

            {/* Col 3, Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[280px] rounded-3xl overflow-hidden border border-stone-200/50 relative group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={envImage4}
                alt="Beach erosion study"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-left text-white max-w-xs space-y-1">
                <span className="text-[9px] font-mono bg-emerald-600 px-2 py-0.5 rounded text-white font-bold uppercase tracking-wider">Field Study</span>
                <h4 className="font-display font-semibold text-sm">Coastal Walks Sand Profiling</h4>
              </div>
            </motion.div>

            {/* Col 2, Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-[280px] rounded-3xl overflow-hidden border border-stone-200/50 relative group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={envImage5}
                alt="Climate change curriculum discussion in group"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-left text-white max-w-xs space-y-1">
                <span className="text-[9px] font-mono bg-emerald-600 px-2 py-0.5 rounded text-white font-bold uppercase tracking-wider">Peer Collaboration</span>
                <h4 className="font-display font-semibold text-sm">Co-creating Ecology Modules</h4>
              </div>
            </motion.div>

            {/* Col 3, Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="h-[280px] rounded-3xl overflow-hidden border border-stone-200/50 relative group shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={envImage2}
                alt="Fishermen sharing maritime weather lore"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-left text-white max-w-xs space-y-1">
                <span className="text-[9px] font-mono bg-emerald-600 px-2 py-0.5 rounded text-white font-bold uppercase tracking-wider">Local Lore</span>
                <h4 className="font-display font-semibold text-sm">Preserving Traditional Forecasting</h4>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Projects / Initiatives Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider">
            Programs
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0A3D2A]">
            Core Environmental Projects
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {/* Project 1: Climate Change Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border border-stone-200/60 p-8 md:p-12 shadow-sm grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7 text-left space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-600">
                  <Compass className="w-3 h-3 text-secondary shrink-0" />
                  GINTL INTERNATIONAL INITIATIVE
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0A3D2A]">
                  Climate Change Curriculum
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Funded by the Global Innovation Network for Teaching and Learning (GINTL), this initiative explores how teachers perceive their role in advancing climate crisis awareness. It establishes a strong collaboration between India, Ghana, and Finland, using Finland's education expertise as a valuable reference point.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  By exchanging teaching tools and modules, the program integrates direct climate actions and regional realities into school curricula, empowering teachers to nurture ecological responsibility across continents.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6 space-y-3">
                <h4 className="font-display font-semibold text-[#0A3D2A] text-sm">Key Focus Areas:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Cross-continental pedagogy sharing (Finland, India, Ghana)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Integrating climate reality into national/local curricula</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Strengthening school teacher capacities in climate science</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-5 h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-stone-100 relative group">
              <img
                src={envImage5}
                alt="Climate change curriculum discussion"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Project 2: Sea Voices Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border border-stone-200/60 p-8 md:p-12 shadow-sm grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-5 h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-stone-100 relative group md:order-1">
              <img
                src={envImage2}
                alt="Sea Voices Storytelling Workshop"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="md:col-span-7 text-left space-y-6 md:order-2">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-600">
                  <Anchor className="w-3 h-3 text-[#B24C35] shrink-0" />
                  CLIMATE WEEK 2025 SPECIAL
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0A3D2A]">
                  Sea Voices Storytelling Workshop
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Conducted during Climate Week 2025, Sea Voices is a storytelling space connecting generations. It brings veteran fishermen together with youth to share rich traditional maritime knowledge—like sky-reading, wind directions, and fish breeding tracks.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Through drawing, creative writing, and intergenerational shoreline walks, young participants learn first-hand about sea surges, heat stress, and shifts in coastal ecology, ensuring centuries-old coastal wisdom is not lost to modernization.
                </p>
              </div>
              <div className="border-t border-stone-100 pt-6 space-y-3">
                <h4 className="font-display font-semibold text-[#0A3D2A] text-sm">Workshop Highlights:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Intergenerational dialogue (fishing elders & coastal youth)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Traditional navigation and fish migration weather wisdom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Documenting change via storytelling, art, and shoreline walks</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Project 3: The Coastal Walk Program */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border border-stone-200/60 p-8 md:p-12 shadow-sm text-left space-y-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-100 pb-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-600">
                  <Waves className="w-3 h-3 text-[#003B5C] shrink-0" />
                  FIELD EXPERIENCE
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0A3D2A]">
                  The Coastal Walk Program
                </h3>
              </div>
              <p className="text-stone-500 text-xs font-semibold font-mono uppercase tracking-widest bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100">
                TRANSFORMING HOW CHILDREN VALUE THEIR SHORELINE
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  The Coastal Walk is a hands-on structured journey that transforms passive ocean observation into active, research-based understanding. Recognizing the threats of beach erosion, plastic pollution, and habitat degradation at their doorstep, this program equips children with tools to explore their local marine ecosystem.
                </p>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">
                  Through seasonal shoreline walks, students gather water samples, catalog local estuary biodiversity, track changes in sand dunes, and identify invasive species, turning the beach into a living science lab.
                </p>
              </div>
              <div className="md:col-span-5 h-48 md:h-56 rounded-2xl overflow-hidden shadow-sm border border-stone-100 relative group">
                <img
                  src={envImage6}
                  alt="Coastal walk shoreline activities"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 space-y-2 hover:bg-stone-100/50 transition-colors">
                <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider uppercase block">Step 1: Learn</span>
                <h4 className="font-display font-semibold text-stone-800 text-sm">Coastal Ecology & Geology</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Equipping children with scientific knowledge on wave dynamics, tide patterns, soil compositions, and marine species classification.
                </p>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 space-y-2 hover:bg-stone-100/50 transition-colors">
                <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider uppercase block">Step 2: Connect</span>
                <h4 className="font-display font-semibold text-stone-800 text-sm">Local Stories & Heritage</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Sharing local history, fishing folklore, and cultural roots of maritime communities to foster an intimate, personal connection to the place.
                </p>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 space-y-2 hover:bg-stone-100/50 transition-colors">
                <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider uppercase block">Step 3: Act</span>
                <h4 className="font-display font-semibold text-stone-800 text-sm">Conservation & Solutions</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Highlighting challenges like erosion and pollution, and empowering kids with practical tools to monitor shores, document microplastics, and drive change.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 bg-[#0A3D2A] text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 text-center space-y-6"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Support the Coastal Environmental Initiative
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
            Your contributions help purchase research modules, finance shoreline walks, and scale international climate exchange curriculums for vulnerable fishing youth.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => {
                window.location.hash = "#contact";
              }}
              className="inline-block bg-secondary hover:bg-secondary-light text-white font-display font-semibold text-xs tracking-wider px-8 py-3 rounded-xl transition-all shadow-md uppercase active:scale-95 cursor-pointer"
            >
              Get In Touch to Support
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function InternshipsPage() {
  const internships = [
    {
      title: "Data Analyst Intern",
      description: "Transform raw data into actionable insights that drive our mission forward.",
      link: "https://drive.google.com/file/d/1TK9RZmn3Lq_iqF445McTvS5uQKem5Hok/view?usp=drive_link",
      icon: Activity,
      color: "border-sky-300 hover:border-sky-500",
      iconBg: "bg-sky-50 text-sky-600"
    },
    {
      title: "Education Intern",
      description: "Help shape the future by creating engaging learning experiences for the next generation.",
      link: "https://drive.google.com/file/d/11St5XT6q1CKfrNonLUyhYgvBwaCJafm2/view?usp=drive_link",
      icon: BookOpen,
      color: "border-teal-300 hover:border-teal-500",
      iconBg: "bg-teal-50 text-teal-600"
    },
    {
      title: "Health Intern",
      description: "Champion community well-being and contribute to impactful public health initiatives.",
      link: "https://drive.google.com/file/d/1eQOdKbbIemivp1KFhPTyZZzBjkk-dLS7/view?usp=drive_link",
      icon: LifeBuoy,
      color: "border-red-300 hover:border-red-500",
      iconBg: "bg-red-50 text-red-600"
    },
    {
      title: "Livelihood Intern",
      description: "Empower individuals and communities by developing sustainable skills and economic opportunities.",
      link: "https://drive.google.com/file/d/1Lm2RXmpwoysKzJSLEPsmhagHI6oekd12/view?usp=drive_link",
      icon: Fish,
      color: "border-amber-300 hover:border-amber-500",
      iconBg: "bg-amber-50 text-amber-600"
    },
    {
      title: "Culture Research Intern",
      description: "Become a storyteller for heritage, helping to document and preserve unique cultural traditions.",
      link: "https://drive.google.com/file/d/10R3m2Q9GjGR_w73rsmbETnp1mqxABfg3/view?usp=drive_link",
      icon: Compass,
      color: "border-indigo-300 hover:border-indigo-500",
      iconBg: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Research Intern - Women Empowerment",
      description: "Investigate, analyze, and advocate for solutions that advance gender equality and women’s rights.",
      link: "https://drive.google.com/file/d/1lOzsfqv92BB4fOR8TnXiM9MvuetXqyPv/view?usp=drive_link",
      icon: Anchor,
      color: "border-rose-300 hover:border-rose-500",
      iconBg: "bg-rose-50 text-rose-600"
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      {/* Hero Banner */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A3B5C]">
        <img
          src={coastalEducation}
          alt="Coastal Mentorship Kerala"
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-[#0A3B5C]/75 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 text-secondary" />
            Scholarly Opportunities
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            INTERNSHIPS
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          <p className="text-stone-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Bridging the gap between academic learning and practical application, fostering the next generation of scholars and practitioners committed to social impact.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary">
            Research &amp; Implementation Opportunities
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            We are seeking qualified interns to join our multidisciplinary research and implementation team. This program provides a scholarly platform to investigate critical issues in community welfare and empowerment. Interns will employ different methodologies to contribute to specialized projects across six focal areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((intern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300 ${intern.color}`}
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-2xl w-fit ${intern.iconBg}`}>
                  <intern.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary">{intern.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-sans">
                  {intern.description}
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={intern.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-block bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider py-3 rounded-xl transition-all shadow-sm active:scale-95 uppercase"
                >
                  Learn More &amp; Apply
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function WomenEmpowermentPage() {
  const activities = [
    {
      title: "Entrepreneurship & Craft Co-ops",
      description: "Trained 100+ women in producing eco-friendly bags, skillfully linking traditional craftsmanship with environmental sustainability and income generation.",
      icon: Anchor,
      accent: "text-amber-600 bg-amber-50"
    },
    {
      title: "Community Health & Welfare",
      description: "Organizing cancer detection camps and health awareness classes in collaboration with the State Chief Minister's Cancer Detection Programs and Snehita Women's Health Foundation.",
      icon: LifeBuoy,
      accent: "text-red-600 bg-red-50"
    },
    {
      title: "Digital & Financial Literacy",
      description: "Mobilizing micro-savings Self-Help Groups (SHGs) and training women in digital banking (UPI) and micro-enterprise financial management.",
      icon: ShieldCheck,
      accent: "text-teal-600 bg-teal-50"
    },
    {
      title: "Scholastic & Merit Awards",
      description: "Supporting deserving and talented female students to pursue their educational dreams, ensuring long-term progress for families and the shoreline.",
      icon: BookOpen,
      accent: "text-indigo-600 bg-indigo-50"
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      {/* Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-[#7F1D1D]">
        <img
          src={empowermentWomen}
          alt="Women Empowerment Kerala Coast"
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-[#7F1D1D]/70 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Anchor className="w-3.5 h-3.5 text-secondary" />
            Coastal Women's Initiative
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            WOMEN'S EMPOWERMENT
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          <p className="text-stone-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans font-medium">
            Building economic agency and social resilience for women across coastal Kerala.
          </p>
        </div>
      </section>
 
      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              Womanhood &amp; Solidarity
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary leading-tight">
              Coastal Solidarity: Nurturing Strength on the Shoreline
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              The life of women in coastal Perumathura is shaped by a complex interplay of environmental vulnerability, economic precarity, and deep-rooted social structures. The collapse of fishing due to climate change has eroded traditional household income, forcing women into insecure, low-wage work while managing heavy domestic responsibilities.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
              Our <strong>Women's Solidarity and Empowerment Initiative</strong> was launched in response to provide economic and social security to women. Since its inception in 2010, this movement has stood as a pillar of strength and support within the community, offering a cooperative voice for women to organize, learn, and grow.
            </p>
          </div>
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm grid grid-cols-2 gap-6 text-center">
            <div className="space-y-2 p-6 rounded-2xl bg-stone-50 border border-stone-100">
              <h3 className="font-display font-extrabold text-4xl text-primary">250+</h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold">Beneficiaries</p>
            </div>
            <div className="space-y-2 p-6 rounded-2xl bg-stone-50 border border-stone-100">
              <h3 className="font-display font-extrabold text-4xl text-secondary">35+</h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold">Active Members</p>
            </div>
            <div className="col-span-2 space-y-2 p-6 rounded-2xl bg-stone-50 border border-stone-100">
              <h3 className="font-display font-extrabold text-2xl text-[#0A5F8F]">15 Years</h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold">of Coastal Solidarity</p>
            </div>
          </div>
        </div>

        {/* Existing Projects Grid */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary">Core Action Areas</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {activities.map((act, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex gap-6 items-start">
                <div className={`p-3 rounded-2xl shrink-0 ${act.accent}`}>
                  <act.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-primary">{act.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed font-sans">{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Proposed Projects */}
        <div className="bg-[#FFF9E6]/50 border border-amber-200/40 p-8 sm:p-12 rounded-3xl space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-amber-700 font-mono text-xs font-bold uppercase tracking-wider">Proposed Programmes (2026-2027)</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary">Holistic Development Roadmap</h2>
            <p className="text-stone-600 text-sm font-sans max-w-3xl">
              Evidence from our 15 years of work highlights two pressing challenges that we will begin addressing with a comprehensive needs-assessment study in 2026-2027:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Programme 1: Women Led Households */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-100 shadow-sm space-y-4">
              <div className="p-2.5 bg-amber-50 rounded-xl text-amber-700 w-fit">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Women Led Households</h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                High divorce rates result in many female-headed households with limited livelihood opportunities (with only a quarter of employed women earning year-round incomes). Guided by these insights, our focus will be to co-create a strategic plan for holistic development—one that addresses economic vulnerability while strengthening the social and emotional resilience of women and their families.
              </p>
            </div>

            {/* Programme 2: Gender Volunteers */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-amber-100 shadow-sm space-y-4">
              <div className="p-2.5 bg-amber-50 rounded-xl text-amber-700 w-fit">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Gender Volunteers</h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                We are building a network of local women trained to serve as the first points of contact, listeners, and guides. As peers, they understand cultural nuances and daily struggles, making their support authentic and effective. These volunteers provide peer-to-peer guidance, identify community needs, connect women to resources, and act as champions of change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutUsPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      {/* 1. Hero Banner */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-[#003B5C]">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-[#003B5C]/70 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Anchor className="w-3.5 h-3.5 text-secondary" />
            Who We Are
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase">
            About Us
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          <p className="text-stone-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans font-medium">
            Building resilience, education, and sustainable livelihoods in partnership with coastal Kerala.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative fish silhouettes on the sides */}
        <div className="absolute top-16 -left-12 w-48 h-48 md:w-80 md:h-80 md:-left-20 opacity-[0.06] pointer-events-none select-none mix-blend-multiply z-0">
          <img src={manifestoFish} alt="" className="w-full h-full object-contain -rotate-12" />
        </div>
        <div className="absolute bottom-16 -right-12 w-48 h-48 md:w-80 md:h-80 md:-right-20 opacity-[0.06] pointer-events-none select-none mix-blend-multiply z-0">
          <img src={manifestoFish} alt="" className="w-full h-full object-contain rotate-12 scale-x-[-1]" />
        </div>

        {/* Divided Editorial Rows */}
        <div className="space-y-4 relative z-10">
          
          {/* Row 1: Who Are the Two-Thirds? */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 py-12 first:pt-0 border-b border-stone-200/50">
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-mono font-bold text-[#0A5F8F] uppercase tracking-widest block">01 / Identity</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary leading-tight">
                Who Are the Two-Thirds?
              </h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
                Two-thirds of our world is ocean. The communities living along its edges have built centuries of knowledge around it — how to read the weather, manage the catch, sustain the coastline.
              </p>
              <p className="font-display font-bold text-xl sm:text-2xl text-[#0A5F8F] leading-snug">
                We work with these communities. Not for them.
              </p>
            </div>
          </div>

          {/* Row 2: What We Believe */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 py-12 border-b border-stone-200/50">
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest block">02 / Philosophy</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary leading-tight">
                What We Believe
              </h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
                A child from a fishing hamlet isn't behind because they lack ability. They're behind because the systems around them weren't built with them in mind. We don't bring outside solutions and hand them down.
              </p>
              <p className="font-display font-bold text-xl sm:text-2xl text-secondary leading-snug">
                We start with what coastal communities already know and build from there.
              </p>
            </div>
          </div>

          {/* Row 3: What We Do */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 py-12 last:pb-0">
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest block">03 / Action</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary leading-tight">
                What We Do
              </h3>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
                We work across education, livelihoods, environment, and health — because these things aren't separate. A child's schooling is connected to their family's income, which is connected to the health of the coastline they depend on.
              </p>
              <p className="font-display font-bold text-xl sm:text-2xl text-primary leading-snug">
                So we address all of it. Together. With the community.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

interface HomePageProps {
  setCurrentView: (view: "home" | "educare" | "environment" | "internships" | "women-empowerment" | "blog" | "about-us") => void;
}

function HomePage({ setCurrentView }: HomePageProps) {
  const [growthGoals] = useState<GrowthGoal[]>(initialGrowthGoals);
  const heroRef = useRef<HTMLElement>(null);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollTop(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    setScrollTop(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const yBg = -80 + (scrollTop || 0) * 0.06;
  const yMid = -40 + (scrollTop || 0) * 0.08;
  const yText = -30 + (scrollTop || 0) * 0.75;
  const opacityText = Math.max(0, 1 - (scrollTop || 0) / 500);

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
    const N = focusAreas.length;
    const target = programRefs.current[N + index]; // Target the middle set for stability
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
    const N = focusAreas.length;

    // Find the current physical closest index
    let closestIndex = N;
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
    const middleCard = programRefs.current[N];

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

        if (nextPhysicalIndex >= 2 * N) {
          container.style.scrollBehavior = "auto";
          container.scrollLeft -= setWidth;
          setTimeout(() => {
            if (container) container.style.scrollBehavior = "smooth";
          }, 15);
          setActiveCardIndex((nextPhysicalIndex - N) % N);
        } else {
          setActiveCardIndex(nextPhysicalIndex % N);
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
    const N = focusAreas.length;

    // Find the current physical closest index
    let closestIndex = N;
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
    const middleCard = programRefs.current[N];

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

        if (prevPhysicalIndex < N) {
          container.style.scrollBehavior = "auto";
          container.scrollLeft += setWidth;
          setTimeout(() => {
            if (container) container.style.scrollBehavior = "smooth";
          }, 15);
          setActiveCardIndex((prevPhysicalIndex - N + N) % N);
        } else {
          setActiveCardIndex(prevPhysicalIndex % N);
        }

        isProgrammaticScrollRef.current = false;
      }, 500);
    }
  };

  // Sync scroll positioning to update active pill indicator
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container || isProgrammaticScrollRef.current) return;

    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const N = focusAreas.length;

    // Find the physical card closest to container center
    let closestIndex = N;
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

    // Silently wrap scroll if user goes outside [N, 2N - 1]
    const firstCard = programRefs.current[0];
    const middleCard = programRefs.current[N];
    if (firstCard && middleCard) {
      const setWidth = middleCard.offsetLeft - firstCard.offsetLeft;

      if (closestIndex < N) {
        // Scrolled too far left -> wrap to right
        container.style.scrollBehavior = "auto";
        container.scrollLeft += setWidth;
        setTimeout(() => {
          if (container) container.style.scrollBehavior = "smooth";
        }, 15);
        setActiveCardIndex((closestIndex - N + N) % N);
      } else if (closestIndex >= 2 * N) {
        // Scrolled too far right -> wrap to left
        container.style.scrollBehavior = "auto";
        container.scrollLeft -= setWidth;
        setTimeout(() => {
          if (container) container.style.scrollBehavior = "smooth";
        }, 15);
        setActiveCardIndex((closestIndex - N) % N);
      } else {
        setActiveCardIndex(closestIndex % N);
      }
    }
  };

  // Infinite cycle interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCarouselHovered && !isProgrammaticScrollRef.current) {
        scrollNext();
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  // On mount, scroll to the middle set
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const N = focusAreas.length;
      const target = programRefs.current[N]; // Index of middle first card
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
    <>
      {/* 2. Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-[140vh] md:h-[200vh] bg-[#E0F2FE]"
        style={{ backgroundColor: '#E0F2FE' }}
      >
        {/* Sticky viewport container */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

          {/* Parallax Layers */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
            {/* Sky Layer (Background) */}
            <div
              style={{ transform: `translateY(${yBg}px)` }}
              className="absolute top-0 left-0 w-full h-[130%] will-change-transform"
            >
              <img
                src={parallaxSky}
                alt="Kerala sunrise sky"
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            {/* Boats Layer (Midground) */}
            <div
              style={{ transform: `translateY(${yMid}px)` }}
              className="absolute top-0 left-0 w-full h-[130%] mix-blend-multiply will-change-transform"
            >
              <img
                src={parallaxBoats}
                alt="Fishing boats silhouettes"
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            {/* Heading Layer (Sandwiched in the middle!) */}
            <div
              style={{ 
                transform: `translateY(${yText}px)`,
                opacity: opacityText 
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10 will-change-transform"
            >
              <h1
                style={{ textShadow: "0 0 35px rgba(255, 255, 255, 0.95), 0 0 10px rgba(255, 255, 255, 0.5)" }}
                className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#003B5C] leading-[1.15] max-w-4xl"
              >
                For the <span className="text-[#B24C35] italic font-serif font-semibold">two-thirds</span> <br />
                who deserve better.
              </h1>

              {/* Floating CTA Buttons inside parallax layer */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-7 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 uppercase w-48 sm:w-auto text-center"
                >
                  Get Involved
                </a>
                <a
                  href="#about"
                  className="bg-white/85 hover:bg-white text-primary font-display font-semibold text-xs tracking-wider px-7 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 border border-primary/10 uppercase w-48 sm:w-auto text-center backdrop-blur-sm"
                >
                  Explore Manifesto
                </a>
              </div>
            </div>

            {/* Foreground Mangroves Layer (Static - no motion needed) */}
            <div className="absolute inset-0 w-full h-full mix-blend-multiply z-20">
              <img
                src={parallaxForeground}
                alt="Mangrove foliage silhouettes"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
              About Two-Thirds
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          {/* Simple Manifesto Paragraph & Button */}
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="font-sans text-stone-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Two-thirds of our world is ocean. The communities living along its edges have built centuries of knowledge around it — how to read the weather, manage the catch, and sustain the coastline. At Two-Thirds, we work across education, livelihoods, environment, and health in partnership with these communities. We do not bring outside solutions; we start with what they already know and build from there.
            </p>
            <div className="pt-4">
              <a
                href="#about-us"
                onClick={() => setCurrentView("about-us")}
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-md active:scale-95 uppercase cursor-pointer"
              >
                Read Our Full Story
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Approach Section (Immersive full-width banner inspired by Dakshin.org) */}
      <section 
        className="relative py-28 text-white overflow-hidden text-center bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${coastalApproachBg})` }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#1A2D37]/75 mix-blend-multiply z-0" />
        
        {/* Subtle decorative top and bottom gradients */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FAF9F6]/10 to-transparent pointer-events-none z-1" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none z-1" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-block text-[#2DD4BF] font-mono text-xs font-bold uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Leveraging simultaneous environmental &amp; community benefits
          </h2>
          <div className="w-12 h-1 bg-[#2DD4BF] mx-auto rounded-full" />
          <p className="text-stone-100 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-3xl mx-auto font-medium">
            Two-Thirds aims to secure local ecosystems and build community-wellbeing through integrated, grassroots-led models. We combine traditional marine wisdom with modern research to address environmental and livelihood concerns—working hand-in-hand with coastal panchayats, fishing families, and local youth to co-design active resilience.
          </p>
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
            Systemic Realities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
            The Problem is Not Theirs.
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-stone-600 text-sm leading-relaxed">
            A child from a fishing hamlet isn't behind because they lack ability. A community isn't vulnerable because they lack resilience. The problems they face are systemic—built by policies, markets, and institutions that weren't designed with them in mind.
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
                className={`px-4 py-2 text-xs font-display font-bold rounded-full border transition-all cursor-pointer flex items-center justify-center ${activeCardIndex === idx
                    ? "bg-primary border-primary text-white shadow-md"
                    : "bg-white border-stone-200 text-[#003B5C] hover:bg-stone-50"
                  }`}
              >
                <area.icon className="w-4 h-4 mr-1.5 inline-block shrink-0" />
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
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-100/80 text-primary">
                            <area.icon className="w-6 h-6 text-primary" />
                          </div>
                          {area.id === "educare" || area.id === "environment" || area.id === "women-empowerment" ? (
                            <a href={`#${area.id}`} className="hover:text-secondary hover:underline transition-all">
                              <h4 className="font-display font-bold text-lg text-[#003B5C]">{area.title}</h4>
                            </a>
                          ) : (
                            <h4 className="font-display font-bold text-lg text-[#003B5C]">{area.title}</h4>
                          )}
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

                      {(area.id === "educare" || area.id === "environment" || area.id === "women-empowerment") && (
                        <div className="pt-1">
                          <a
                            href={`#${area.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary group transition-colors uppercase tracking-wider font-display"
                          >
                            Explore Full Initiative
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      )}
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

      {/* 7.5. Field Diaries (Blog Section) */}
      <section id="blog-preview" className="py-24 bg-stone-50 border-y border-stone-200/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] font-mono text-[10px] font-bold uppercase tracking-wider">
              Field Notes
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
              Stories &amp; Diaries from the Ground
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              Read personal narratives and field reports from researchers, volunteers, and fellows working along the shores of Kerala.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-center text-left">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full"
              >
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden bg-stone-100 shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-stone-400 text-[10px] font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed font-sans line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-2">
                    <a 
                      href={"#blog/" + post.slug}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Read Story
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
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
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none" />

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
                    className="p-4 bg-[#E6FFFA] border border-teal-200 rounded-xl text-teal-800 text-xs font-semibold flex items-center justify-center gap-2 mt-4 animate-fade-in"
                  >
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Inquiry received! Our Trivandrum field officers will email you back within 24-48 hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </section>

    </>
  );
}

interface BlogPostPageProps {
  slug: string;
}

function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 text-stone-800 p-8">
        <h2 className="font-display font-bold text-2xl text-primary mb-4">Post Not Found</h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-md uppercase cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 pb-24">
      {/* 1. Immersive Hero Banner */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6 pt-16">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-secondary" />
            {post.category}
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {post.title}
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-300 text-xs sm:text-sm font-sans font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-secondary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-secondary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-secondary" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 text-left">
        {/* Back Link */}
        <div className="mb-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </a>
        </div>

        {/* Article Body */}
        <article className="prose prose-stone max-w-none space-y-8">
          {post.content.map((paragraph, index) => {
            // Apply drop cap to the first paragraph
            if (index === 0) {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans first-letter:float-left first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:mt-1"
                >
                  {paragraph}
                </motion.p>
              );
            }
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans"
              >
                {paragraph}
              </motion.p>
            );
          })}
        </article>
      </section>
    </div>
  );
}

interface NavbarProps {
  currentView: "home" | "educare" | "environment" | "internships" | "women-empowerment" | "blog" | "about-us";
  setCurrentView: (view: "home" | "educare" | "environment" | "internships" | "women-empowerment" | "blog" | "about-us") => void;
}

function Navbar({ currentView, setCurrentView }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,box-shadow] duration-300 ${isScrolled
        ? "bg-white/95 border-b border-stone-200/80 shadow-sm"
        : "bg-transparent border-b border-transparent shadow-none"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentView("home");
              window.location.hash = "";
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Two-Thirds Community Foundation Logo"
              className="w-12 h-12 object-contain rounded-xl border border-stone-200/80 bg-white p-1 transition-transform group-hover:scale-105 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight bg-gradient-to-r from-primary via-[#0A5F8F] to-[#D05A3F] bg-clip-text text-transparent leading-none drop-shadow-sm group-hover:from-[#0A5F8F] group-hover:to-secondary transition-all duration-300">
                Two-Thirds
              </span>
              <span className="text-[8px] sm:text-[9px] font-sans font-extrabold tracking-[0.2em] text-secondary uppercase leading-none mt-1 flex items-center gap-1">
                Community Foundation
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan inline-block animate-pulse"></span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-[#003B5C]">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentView("home");
                window.location.hash = "";
              }}
              className={`hover:text-secondary transition-colors font-bold ${currentView === "home" ? "text-secondary border-b-2 border-secondary" : ""}`}
            >
              Home
            </a>

            <a
              href="#about-us"
              onClick={() => setCurrentView("about-us")}
              className={`hover:text-secondary transition-colors font-bold ${currentView === "about-us" ? "text-secondary border-b-2 border-secondary" : ""}`}
            >
              About Us
            </a>
            
            {/* Educare Dropdown Submenu */}
            <div className="relative group py-2">
              <button
                className={`hover:text-secondary transition-colors font-bold flex items-center gap-1 cursor-pointer ${
                  currentView === "educare" || currentView === "internships" ? "text-secondary" : ""
                }`}
              >
                Educare
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-stone-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a
                  href="#educare"
                  onClick={() => setCurrentView("educare")}
                  className={`block px-4 py-2 text-xs font-semibold hover:bg-stone-50 hover:text-secondary ${
                    currentView === "educare" ? "text-secondary bg-stone-50" : "text-stone-700"
                  }`}
                >
                  Educare Overview
                </a>
                <a
                  href="#internships"
                  onClick={() => setCurrentView("internships")}
                  className={`block px-4 py-2 text-xs font-semibold hover:bg-stone-50 hover:text-secondary ${
                    currentView === "internships" ? "text-secondary bg-stone-50" : "text-stone-700"
                  }`}
                >
                  Internships
                </a>
              </div>
            </div>

            <a
              href="#environment"
              onClick={() => setCurrentView("environment")}
              className={`hover:text-secondary transition-colors font-bold ${currentView === "environment" ? "text-secondary border-b-2 border-secondary" : ""
                }`}
            >
              Environment
            </a>
            
            <a
              href="#women-empowerment"
              onClick={() => setCurrentView("women-empowerment")}
              className={`hover:text-secondary transition-colors font-bold ${currentView === "women-empowerment" ? "text-secondary border-b-2 border-secondary" : ""
                }`}
            >
              Women's Empowerment
            </a>

            <a
              href="#contact"
              onClick={() => setCurrentView("home")}
              className="bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-95 uppercase"
            >
              Get Involved
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
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentView("home"); setIsMobileMenuOpen(false); window.location.hash = ""; }}
                className={`py-2 border-b border-stone-100 hover:text-secondary ${currentView === "home" ? "font-bold text-secondary" : ""}`}
              >
                Home
              </a>

              <a
                href="#about-us"
                onClick={() => { setCurrentView("about-us"); setIsMobileMenuOpen(false); }}
                className={`py-2 border-b border-stone-100 hover:text-secondary ${currentView === "about-us" ? "font-bold text-secondary" : ""}`}
              >
                About Us
              </a>

              {/* Mobile Educare sub-menu */}
              <div className="flex flex-col border-b border-stone-100 py-2">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1.5">Educare Program</span>
                <a
                  href="#educare"
                  onClick={() => { setCurrentView("educare"); setIsMobileMenuOpen(false); }}
                  className={`pl-3 py-1.5 text-sm hover:text-secondary ${currentView === "educare" ? "font-bold text-secondary" : ""}`}
                >
                  — Educare Overview
                </a>
                <a
                  href="#internships"
                  onClick={() => { setCurrentView("internships"); setIsMobileMenuOpen(false); }}
                  className={`pl-3 py-1.5 text-sm hover:text-secondary ${currentView === "internships" ? "font-bold text-secondary" : ""}`}
                >
                  — Internships
                </a>
              </div>

              <a
                href="#environment"
                onClick={() => { setCurrentView("environment"); setIsMobileMenuOpen(false); }}
                className={`py-2 border-b border-stone-100 hover:text-secondary ${currentView === "environment" ? "font-bold text-secondary" : ""}`}
              >
                Environment
              </a>
              <a
                href="#women-empowerment"
                onClick={() => { setCurrentView("women-empowerment"); setIsMobileMenuOpen(false); }}
                className={`py-2 border-b border-stone-100 hover:text-secondary ${currentView === "women-empowerment" ? "font-bold text-secondary" : ""}`}
              >
                Women's Empowerment
              </a>
              <a
                href="#contact"
                onClick={() => { setCurrentView("home"); setIsMobileMenuOpen(false); }}
                className="bg-primary text-white text-center py-3 rounded-xl hover:bg-primary-light transition-all shadow-md uppercase text-xs font-bold tracking-wider"
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "educare" | "environment" | "internships" | "women-empowerment" | "blog" | "about-us">("home");
  const [selectedBlogPostSlug, setSelectedBlogPostSlug] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === "#educare" || path.includes("/educare")) {
        setCurrentView("educare");
      } else if (hash === "#environment" || path.includes("/environment")) {
        setCurrentView("environment");
      } else if (hash === "#internships" || path.includes("/internships")) {
        setCurrentView("internships");
      } else if (hash === "#women-empowerment" || path.includes("/women-empowerment")) {
        setCurrentView("women-empowerment");
      } else if (hash === "#about-us" || path.includes("/about-us")) {
        setCurrentView("about-us");
      } else if (hash.startsWith("#blog/") || path.includes("/blog/")) {
        const slug = hash.startsWith("#blog/") ? hash.substring(6) : path.split("/blog/")[1]?.split("/")[0] || "";
        if (slug) {
          setSelectedBlogPostSlug(slug);
          setCurrentView("blog");
        } else {
          setCurrentView("home");
        }
      } else {
        setCurrentView("home");
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (currentView === "home") {
      const hash = window.location.hash;
      if (hash && hash !== "#home" && !hash.startsWith("#blog/")) {
        const timer = setTimeout(() => {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  return (
    <div className="min-h-screen bg-bg-coastal text-[#1A2D37] font-sans antialiased selection:bg-primary-container selection:text-primary">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === "home" ? (
        <HomePage setCurrentView={setCurrentView} />
      ) : currentView === "about-us" ? (
        <AboutUsPage />
      ) : currentView === "educare" ? (
        <EducarePage />
      ) : currentView === "environment" ? (
        <EnvironmentPage />
      ) : currentView === "internships" ? (
        <InternshipsPage />
      ) : currentView === "women-empowerment" ? (
        <WomenEmpowermentPage />
      ) : currentView === "blog" ? (
        <BlogPostPage slug={selectedBlogPostSlug} />
      ) : (
        <HomePage setCurrentView={setCurrentView} />
      )}

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
              <a href="#about" className="text-stone-400 hover:text-secondary transition-colors">About Us</a>
              <a href="#reality" className="text-stone-400 hover:text-secondary transition-colors">Systemic Realities</a>
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
