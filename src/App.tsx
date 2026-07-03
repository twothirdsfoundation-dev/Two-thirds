// Trigger Vercel rebuild for reverted layout
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ShieldCheck,
  Menu,
  X,
  Landmark,
  ChevronRight,
  ChevronLeft,
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
import keralaBoatsBeach from "./assets/kerala-boats-beach.jpg";
import marineEcosystemDiagram from "./assets/marine-ecosystem-diagram.png";
import mangrovePlanting from "./assets/mangrove-planting.png";
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
  quote?: string;
  authorRole?: string;
  avatarInitials?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "perumathura-days",
    title: "Perumathura Days: A Gram Fellow's Exploration of a Coastal Village in Kerala",
    excerpt: "IIT Gandhinagar Gram Fellow Lukman explores the peninsula of Perumathura, delving into coastal resilience, community networks, and the fisherfolk's place in the Kerala model of development.",
    date: "January 21, 2026",
    author: "Lukman",
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
  },
  {
    id: "2",
    slug: "fathimas-story",
    title: "A New Light in the Classroom: How Educare Changed My Daughter's Future",
    excerpt: "Fathima Beevi, a coir worker from Perumathura, speaks about the evening tuition center that helped her daughter excel in reading and arithmetic, changing her school path.",
    date: "March 15, 2026",
    author: "Fathima Beevi",
    readTime: "4 min read",
    image: educareClassroom,
    category: "Impact Stories",
    quote: "Before the evening study center started, my daughter struggled with reading. Now she is the first in her class, and she wants to become a teacher herself.",
    authorRole: "Mother & Coir Worker",
    avatarInitials: "FB",
    content: [
      "Living in a coastal hamlet like Perumathura, work options for women are mostly limited to coir spinning or household work. Daily wages are small, and after a long day at the coir unit, it was hard for me to sit down and teach my children. We did not have proper desks, books, or tutors who could help my daughter, Amina, with her school homework. She was falling behind in school, struggling to read simple words in Malayalam and English.",
      "When the Two-Thirds Community Foundation opened the local evening Educare study center in our village, Amina started going there every evening. The center provided shepherded support, textbooks, study materials, and enthusiastic mentors who taught in a friendly way. The change was visible in a matter of months.",
      "Amina started enjoying her classes. Her math and reading skills improved dramatically. Last week, she brought home her school report card and she had scored the highest marks in her division. Seeing her study with confidence has changed how we look at her future. She now talks about wanting to become a school teacher one day, and I know that with the support of the Educare center, she can actually do it."
    ]
  },
  {
    id: "3",
    slug: "kunjumons-story",
    title: "Navigating Safely: How the Safety Net Project Saved My Husband at Sea",
    excerpt: "Traditional fisherman Kunjumon shares how the safety training and first-aid kits provided by the Safety Net Project helped his crew manage a mid-sea engine crisis.",
    date: "April 2, 2026",
    author: "Kunjumon",
    readTime: "5 min read",
    image: coastalLivelihoods,
    category: "Impact Stories",
    quote: "When our boat engine failed 5 miles out, the first-aid training and communication protocols we learned saved our lives. We knew exactly who to call.",
    authorRole: "Traditional Fisherman",
    avatarInitials: "KM",
    content: [
      "For traditional fishermen in Perumathura, going out to sea is a gamble we play every day. While modern trawlers have advanced navigation and backup systems, our small fiberglass boats rely entirely on outboard engines and local weather knowledge. When something goes wrong mid-sea, help is miles away and communication is extremely difficult.",
      "A few months ago, the Two-Thirds Safety Net Project held a marine safety workshop in our ward. They distributed emergency first-aid kits and trained us in emergency protocols: how to administer CPR, handle minor injuries, signal for help, and coordinate rescue using simple mobile communication links.",
      "Last week, our engine failed five miles off the coast during rough weather. Water was entering the boat, and panic started. Instead of losing our heads, we followed the exact protocol we learned. We secured the boat, used the emergency numbers provided to alert the coastal rescue team, and administered basic first aid to a crew member who cut his arm on the motor mount. Within an hour, a rescue boat reached us. The training saved our lives, and the Safety Net Project is truly a shield for the fishing families here."
    ]
  },
  {
    id: "4",
    slug: "shajithas-story",
    title: "From Housewife to Cooperative Leader: The Penma Empowerment Journey",
    excerpt: "Shajitha explains the journey of Penma Self-Help Group, which enabled coastal women to build their own local dry-fish value-addition brand.",
    date: "May 10, 2026",
    author: "Shajitha",
    readTime: "6 min read",
    image: empowermentWomen,
    category: "Impact Stories",
    quote: "We never had our own savings. Today, through our value-addition center, 25 of us are financially independent and managing our own dry-fish brand.",
    authorRole: "President, Penma SHG",
    avatarInitials: "SJ",
    content: [
      "For generations, the women of Perumathura have been dependent on whatever income their husbands brought from the sea. When the catch was poor, families struggled to buy daily groceries. Coir weaving, our traditional livelihood, was declining, leaving almost no jobs for women in the village.",
      "Through the Two-Thirds Women Empowerment initiative, we formed the Penma Self-Help Group. We began with basic savings circles and then started our own value-addition center for dry-fish production. Instead of selling the fish fresh at low market prices, we processed, dried, packaged, and branded the product ourselves.",
      "The foundation provided us with modern solar dryers and packing machines, which keep the fish hygienic and improve shelf life. Today, our cooperative consists of 25 local women. We manage our own bank accounts, track sales, and split the profits. For the first time in our lives, we have financial independence and our children can go to better colleges. We are no longer bystanders; we are builders."
    ]
  }
];

// Allow WordPress to inject active posts dynamically via window.wpPosts
export const activePosts: BlogPost[] = (typeof window !== "undefined" && (window as any).wpPosts) 
  ? (window as any).wpPosts 
  : blogPosts;


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

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
}

export const activeTeamMembers: TeamMember[] = (typeof window !== "undefined" && (window as any).wpTeamMembers) 
  ? (window as any).wpTeamMembers 
  : teamMembers;






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
            let initialAnim;
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
                <CountUp target={200} suffix="+" />
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

function GetInvolvedPage() {
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
    <div className="bg-stone-50 min-h-screen text-stone-800 pb-24 font-sans selection:bg-primary-container selection:text-primary">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-center justify-center overflow-hidden bg-[#0A3B5C]">
        <img
          src={coastalEducation}
          alt="Get Involved Kerala coast"
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-[#0A3B5C]/75 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <LifeBuoy className="w-3.5 h-3.5 text-secondary" />
            Support Our Work
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase">
            Get Involved
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          <p className="text-stone-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Join hands with us to build resilient, educated, and empowered coastal communities.
          </p>
        </div>
      </section>

      {/* 2. Three Modes of Engagement */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Mode 1: Partnerships */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-[#0A5F8F] uppercase tracking-widest block">01 / Collaboration</span>
            <h2 className="font-display font-bold text-3xl text-primary leading-tight">
              Institutional Partnerships
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We collaborate with healthcare institutions, CSR programs, research centers, and local Panchayats to implement community development models. A prime example is our long-term collaboration with **KIMS Health**, which has powered our digital literacy, webinars, and diagnostic infrastructure.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              If your organization is looking to partner on evidence-based programs in education, public health, women's cooperatives, or coastal resilience, we'd love to hear from you.
            </p>
            <div className="pt-2">
              <a
                href="mailto:twothirdsfoundation@gmail.com?subject=Institutional%20Partnership%20Inquiry"
                className="inline-block bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 uppercase"
              >
                Partner With Us
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm space-y-4">
            <h4 className="font-display font-bold text-[#0A5F8F] text-sm uppercase tracking-wider">How we partner:</h4>
            <ul className="space-y-3 text-xs text-stone-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-[#0A5F8F] font-bold">•</span>
                <span>**CSR Funding Linkages**: Aligning corporate social responsibility initiatives with actual, verified grassroots needs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A5F8F] font-bold">•</span>
                <span>**Knowledge & Research**: Collaborating with universities to gather household survey data and socio-economic evidence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A5F8F] font-bold">•</span>
                <span>**Resource Mobilization**: Co-developing infrastructure like local study centers, primary clinics, and digital libraries.</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-stone-200/60" />

        {/* Mode 2: Volunteer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-5 bg-[#003B5C] text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none" />
            <h4 className="font-display font-bold text-secondary text-sm uppercase tracking-wider">Volunteer Opportunities:</h4>
            <div className="space-y-4 text-xs text-stone-200">
              <div>
                <span className="block font-bold text-white mb-1">🎓 Evening Tutor</span>
                <p>Support primary and middle school students in our village Educare centers with foundational literacy and math.</p>
              </div>
              <div>
                <span className="block font-bold text-white mb-1">🌱 Climate & Coast Steward</span>
                <p>Help lead shoreline nature-immersive workshops and local mangrove planting drives for kids.</p>
              </div>
              <div>
                <span className="block font-bold text-white mb-1">👩 SHG Mobilizer</span>
                <p>Assist in digital banking literacy drives and cooperative value-addition facilities for women.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-[#E07A5F] uppercase tracking-widest block">02 / Grassroots Action</span>
            <h2 className="font-display font-bold text-3xl text-primary leading-tight">
              Become a Volunteer
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We started as a small, informal volunteer group in 2018. Over the years, it is the dedication of community members that has driven our educational and welfare support.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you can contribute a few hours a week to tutor children, support our diagnostic camps, or offer design, translation, or digital expertise, your presence counts.
            </p>
            <div className="pt-2">
              <a
                href="mailto:twothirdsfoundation@gmail.com?subject=Volunteer%20Registration"
                className="inline-block bg-[#E07A5F] hover:bg-[#E07A5F]/95 text-white font-display font-semibold text-xs tracking-wider px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 uppercase"
              >
                Sign Up as a Volunteer
              </a>
            </div>
          </div>
        </div>

        <hr className="border-stone-200/60" />

        {/* Mode 3: Internships */}
        <div className="space-y-12 text-left">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest block">03 / Scholarly Action</span>
            <h2 className="font-display font-bold text-3xl text-primary leading-tight">
              Research &amp; Implementation Internships
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-4xl">
              We offer structured research and implementation internships for qualified students and graduates. This program provides a platform to employ different methodologies to investigate critical issues in coastal welfare, data-driven analysis, and social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((intern, idx) => (
              <div
                key={idx}
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
                    Apply for Internship
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

function TeamPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 pb-24 font-sans selection:bg-primary-container selection:text-primary">
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-[#003B5C]">
        <img
          src={coastalApproachBg}
          alt="Two-Thirds Team Horizon"
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-[#003B5C]/75 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <User className="w-3.5 h-3.5 text-secondary" />
            Our People
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase">
            Meet the Team
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          <p className="text-stone-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Dedicated social workers, professionals, and researchers working to guide resources straight to community ideas.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {activeTeamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-stone-200/50 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md hover:border-stone-300 transition-all duration-300 group"
            >
              {/* Member Headshot / Initials badge */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dashed border-[#155E75] flex items-center justify-center bg-stone-50 transition-transform duration-300 group-hover:scale-105 shrink-0 relative">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display font-bold text-xl text-[#003B5C]">
                    {member.initials}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-primary">
                  {member.name}
                </h3>
                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-wider block">
                  {member.role}
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {member.bio}
              </p>
            </div>
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
  const pillars = [
    { title: "Education Support", desc: "We set up evening study centres and digital libraries in remote fishing hamlets so kids have a quiet, supportive place to learn and study for board exams." },
    { title: "Women's Micro-Savings", desc: "We help women form self-help groups to start micro-businesses, learn digital banking, and get fair credit without getting trapped by local loan sharks." },
    { title: "Alternative Livelihoods", desc: "We help fishers diversify their income through seaweed farming, cage culture, and modern fish dryers so they don't rely only on unpredictable daily catches." },
    { title: "Ecology & Climate Action", desc: "We teach coastal kids about their local ecosystem, restore mangrove buffers, and help them understand climate changes affecting their shores." }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 pb-24 font-sans selection:bg-primary-container selection:text-primary">

      {/* 1. Hero Banner */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-center justify-center overflow-hidden bg-[#003B5C]">
        <img
          src={coastalApproachBg}
          alt="Coastal Kerala Horizon"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-[#003B5C]/75 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Anchor className="w-3.5 h-3.5 text-secondary" />
            Our Identity
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase">
            About Us
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          <p className="text-stone-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Why we are called Two-Thirds, and the journey that brought us here.
          </p>
        </div>
      </section>

      {/* 2. Why Two-Thirds? Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8 relative z-10">
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold text-[#0A5F8F] uppercase tracking-widest block">01 / Our Name</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary leading-tight">
            Why Two-Thirds?
          </h2>
          <div className="w-12 h-1 bg-[#0A5F8F] rounded-full" />
        </div>

        <div className="space-y-6 text-stone-600 text-sm sm:text-base leading-relaxed">
          <p>
            Two-thirds of our planet is covered by oceans. The communities living along the coastlines of Kerala are at the frontlines of this massive marine environment. They have built centuries of knowledge about it — reading the weather, managing the catch, and sustaining the shores.
          </p>
          <p>
            But their lives are also shaped by the unique vulnerabilities of living on these edges. We chose the name **Two-Thirds** to represent our commitment to these coastal communities. We don't bring top-down, outside solutions. We start by listening to the villagers, building on their existing coastal wisdom, and working alongside them to address the challenges they face.
          </p>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="py-20 bg-stone-100 border-y border-stone-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#003B5C] text-white p-8 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full pointer-events-none" />
              <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest block">Core Vision</span>
              <h3 className="font-display font-bold text-2xl">Our Vision</h3>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed font-serif italic">
                "We want to see coastal fishing villages where kids get a fair shot at a great education, families have stable, alternative ways to earn a living, and youth are confident enough to lead their communities."
              </p>
            </div>

            <div className="bg-white border border-stone-200/80 p-8 rounded-3xl shadow-sm space-y-4">
              <span className="text-xs font-mono font-bold text-[#0A5F8F] uppercase tracking-widest block">Action Mission</span>
              <h3 className="font-display font-bold text-2xl text-primary">Our Mission</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                To work directly with villagers to set up community study centers, help women start micro-cooperatives, diversify income streams for fishers, and protect local shorelines—all by building on what the community already knows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Focus Pillars Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest block">02 / What We Do</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary leading-tight">
            Strategic Focus Areas
          </h2>
          <div className="w-12 h-1 bg-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/40 shadow-sm flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-stone-50 flex items-center justify-center font-mono text-xs font-bold text-[#0A5F8F] shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-sm text-[#003B5C]">{pillar.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Founder's Note Section */}
      <section className="py-20 bg-stone-900 text-white border-t-8 border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
          <div className="space-y-4 text-center">
            <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              From the Founder
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Founder's Note
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-6 text-stone-300 text-sm sm:text-base leading-relaxed">
            <p>
              This initiative started very simply back in **2018**. I began visiting the coastal wards of Chirayinkeezhu, Azhoor, and Kadinamkulam, and noticed how many kids from fishing families were dropping out of school because the standard educational system didn't fit their seasonal lives.
            </p>
            <p>
              Together with a small team of local volunteers, we started sitting down with these kids in the evenings, helping them study for public exams, and talking to their parents. For eight years, we did this voluntarily, running study groups, guidance camps, and supporting households through the pandemic.
            </p>
            <p>
              In **2026**, we incorporated as a Section 8 non-profit company. This isn't a new direction—it's just a formal way to protect the trust we've built, establish permanent learning centers, and expand our work to more shores. Two-Thirds is, and always will be, a community-first initiative built from the ground up.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="block font-bold text-white text-sm">Adil</span>
                <span className="block text-xs text-stone-400">Founder, Two-Thirds Community Foundation</span>
              </div>
              <span className="bg-secondary/20 text-secondary text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Est. 2018 • Incorporated 2026
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

interface HomePageProps {
  setCurrentView: (view: string) => void;
  areas: FocusArea[];
}

function HomePage({ setCurrentView, areas }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);

  const [scrollTop, setScrollTop] = useState(() => typeof window !== "undefined" ? window.scrollY : 0);

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const yBg = -80 + (scrollTop || 0) * 0.06;
  const yText = -30 + (scrollTop || 0) * 0.75;
  const opacityText = Math.max(0, 1 - (scrollTop || 0) / 500);




  // Programs Carousel Synchronization Ref & States
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [selectedVisualizerYear, setSelectedVisualizerYear] = useState("2026");
  const [mangroveCount, setMangroveCount] = useState(1280);
  const [isPlanted, setIsPlanted] = useState(false);
  const isProgrammaticScrollRef = useRef(false);

  // Custom pill navigation click
  const handlePillClick = (index: number) => {
    setActiveCardIndex(index);
    const container = scrollContainerRef.current;
    const N = areas.length;
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
    const N = areas.length;

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
    const N = areas.length;

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
    const N = areas.length;

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
      const N = areas.length;
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




  const duplicatedAreas = [...areas, ...areas, ...areas];

  return (
    <>
      {/* 2. Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-[140vh] md:h-[180vh] bg-[#FAF9F6] z-10"
      >
        {/* Sticky viewport container */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

          {/* Background Layer with Parallax */}
          <div
            style={{ transform: `translateY(${yBg * 0.5}px)` }}
            className="absolute inset-0 w-full h-[120%] pointer-events-none select-none z-0 will-change-transform"
          >
            <img
              src={keralaBoatsBeach}
              alt="Kerala coastal wooden boats beach"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle soft white gradient overlay from the left & bottom to blend text and transition */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
          </div>

          {/* Heading Layer (Translates upward and fades on scroll) */}
          <div
            style={{
              transform: `translateY(${yText * 0.8}px)`,
              opacity: opacityText
            }}
            className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-start justify-center h-full text-left will-change-transform mt-8"
          >
            <div className="max-w-2xl space-y-6">
              <h1
                style={{ textShadow: "0 0 40px rgba(255, 255, 255, 0.95), 0 0 15px rgba(255, 255, 255, 0.7)" }}
                className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#003B5C] leading-[1.05]"
              >
                ‘For the Two-thirds <br />
                who deserve better.
              </h1>
              
              <p
                style={{ textShadow: "0 0 25px rgba(255, 255, 255, 0.95), 0 0 5px rgba(255, 255, 255, 0.5)" }}
                className="text-stone-700 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-sans font-medium"
              >
                Empowering coastal communities through education, sustainable livelihoods, and climate action across Kerala, India.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-row gap-4 items-center justify-start pointer-events-auto">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary-light text-white font-display font-semibold text-xs tracking-wider px-8 py-4 rounded-xl transition-all shadow-md active:scale-95 uppercase w-44 sm:w-auto text-center cursor-pointer"
                >
                  Get Involved
                </a>
                <a
                  href="#about"
                  className="border-2 border-primary/25 hover:border-primary text-primary font-display font-semibold text-xs tracking-wider px-8 py-3.5 rounded-xl transition-all active:scale-95 uppercase w-44 sm:w-auto text-center cursor-pointer bg-white/20 backdrop-blur-sm"
                >
                  Our Manifesto
                </a>
              </div>
            </div>
          </div>

          {/* Bouncing scroll indicator */}
          <div 
            style={{ opacity: opacityText }}
            className="absolute bottom-8 left-0 right-0 flex justify-center z-10 pointer-events-none will-change-transform"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-primary transition-colors cursor-pointer pointer-events-auto"
            >
              <span>Scroll to Explore</span>
              <ArrowDown className="w-4 h-4 text-secondary" />
            </motion.a>
          </div>
        </div>

        {/* Beautiful multi-layered flowing transparent ocean waves at the bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg className="relative block w-full h-[70px] sm:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C300,100 500,50 800,90 C1100,130 1150,60 1200,40 L1200,120 L0,120 Z" fill="#ffffff" opacity="0.25"></path>
            <path d="M0,60 C200,120 400,80 700,110 C1000,140 1100,90 1200,80 L1200,120 L0,120 Z" fill="#ffffff" opacity="0.55"></path>
            <path d="M0,80 C300,130 600,90 900,120 C1100,140 1150,100 1200,95 L1200,120 L0,120 Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Stats & Achievements Section */}
      <section className="relative py-20 bg-white border-b border-stone-200/30 z-20 overflow-hidden">
        {/* Subtle background wind/contour wave line */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full stroke-primary stroke-[1.5] fill-none" viewBox="0 0 1440 200">
            <path d="M0,100 Q360,50 720,150 T1440,100" />
            <path d="M0,130 Q360,80 720,180 T1440,130" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          {/* Mini Wave SVG Decoration */}
          <div className="flex justify-center mb-3">
            <svg className="w-8 h-3 text-secondary" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,6 Q5,0 10,6 T20,6 T30,6 T40,6" />
              <path d="M0,10 Q5,4 10,10 T20,10 T30,10 T40,10" opacity="0.4" />
            </svg>
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase block mb-12">
            OUR IMPACT & ACHIEVEMENTS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { stat: "8+ Yrs", label: "Local Trust", desc: "Legacy of voluntary community work since 2018" },
              { stat: "120+", label: "Women Mentored", desc: "Empowered through micro-livelihoods & training" },
              { stat: "600+", label: "Students Guided", desc: "Supported via Educare learning centers" },
              { stat: "10+", label: "Collaborations", desc: "Active institutional & healthcare partners" }
            ].map((item, i) => (
              <div key={i} className="space-y-2 flex flex-col items-center">
                <h3 className="font-display font-bold text-4xl sm:text-5xl text-primary">{item.stat}</h3>
                <span className="font-sans font-semibold text-xs text-stone-800 uppercase tracking-wider block">{item.label}</span>
                <p className="text-[11px] text-stone-500 max-w-[200px] leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="pt-24 pb-40 bg-bg-coastal relative z-10">
        {/* Soft ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(224,122,95,0.03),transparent_70%)] pointer-events-none" />

        {/* Flying birds silhouette SVGs */}
        <div className="absolute right-[10%] top-[8%] flex flex-col gap-3 opacity-25 select-none pointer-events-none z-0">
          <svg className="w-8 h-4 text-primary fill-current" viewBox="0 0 24 12">
            <path d="M0,6 Q6,-2 12,4 Q18,-2 24,6 Q18,2 12,0 Q6,2 0,6 Z" />
          </svg>
          <svg className="w-5 h-2.5 text-primary fill-current ml-6" viewBox="0 0 24 12">
            <path d="M0,6 Q6,-2 12,4 Q18,-2 24,6 Q18,2 12,0 Q6,2 0,6 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center mb-3">
              <svg className="w-8 h-3 text-secondary" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0,6 Q5,0 10,6 T20,6 T30,6 T40,6" />
                <path d="M0,10 Q5,4 10,10 T20,10 T30,10 T40,10" opacity="0.4" />
              </svg>
            </div>
            <span className="inline-block text-secondary font-mono text-[10px] font-bold uppercase tracking-widest mb-2">
              OUR ABOUT SECTION
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-primary tracking-tight">
              About
            </h2>
            <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          {/* Double Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative */}
            <div className="space-y-6 text-left">
              <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
                Two-thirds of our world is ocean. The communities living along its edges have built centuries of knowledge around it, how to read the weather, manage the catch, and sustain the coastline. We have an 8-year relationship with the community, working alongside them, and this is an extension of what we observed that the shores needed. At Two-Thirds, we work across education, livelihoods, environment, and health in partnership with these communities. We do not bring outside solutions; we start with what they already know and build from there.
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

            {/* Right Column: Quote */}
            <div className="relative p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/40 shadow-sm text-left flex flex-col justify-center min-h-[250px] overflow-hidden">
              {/* Subtle topographical contour background lines in the quote card */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none z-0">
                <svg className="w-full h-full stroke-primary stroke-[1.2] fill-none" viewBox="0 0 400 250">
                  <path d="M-50,60 Q100,120 250,50 T500,80" />
                  <path d="M-50,90 Q100,150 250,80 T500,110" />
                  <path d="M-50,120 Q100,180 250,110 T500,140" />
                </svg>
              </div>

              <span className="absolute top-6 left-6 text-6xl font-serif text-secondary/15 select-none pointer-events-none">“</span>
              <p className="font-serif italic text-xl sm:text-2xl text-secondary leading-relaxed relative z-10 pl-6 pr-4">
                We do not bring outside solutions; we start with what they already know and build from there.
              </p>
              <span className="absolute bottom-6 right-6 text-6xl font-serif text-secondary/15 select-none pointer-events-none">”</span>
            </div>
          </div>
        </div>

        {/* Beautiful custom multi-layered SVG wave divider overflowing into the top of the next section */}
        <div className="absolute bottom-[-60px] sm:bottom-[-80px] left-0 right-0 h-[140px] sm:h-[180px] overflow-visible pointer-events-none z-20 select-none">
          <svg className="relative block w-full h-full overflow-visible" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.45"/>
                <stop offset="50%" stopColor="#0077B6" stopOpacity="0.65"/>
                <stop offset="100%" stopColor="#03045E" stopOpacity="0.55"/>
              </linearGradient>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.85"/>
                <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.55"/>
              </linearGradient>
            </defs>
            {/* Background Layer 1 (Darker blue wave - peaks highest) */}
            <path d="M0,30 C360,110 720,10 1080,90 C1260,110 1350,90 1440,60 L1440,200 L0,200 Z" fill="url(#wave-gradient-1)"></path>
            
            {/* Mid Layer 2 (Light blue/turquoise wave - peaks mid-high) */}
            <path d="M0,60 C240,20 480,100 720,60 C960,20 1200,120 1440,80 L1440,200 L0,200 Z" fill="url(#wave-gradient-2)"></path>
            
            {/* Front Layer 3 (Semi-transparent White wave to overlap top of the next white section beautifully) */}
            <path d="M0,100 C400,150 800,70 1200,130 C1320,140 1380,125 1440,120 L1440,200 L0,200 Z" fill="#ffffff" fillOpacity="0.85"></path>
            
            {/* Decorative Wave lines */}
            <path d="M0,20 Q360,90 720,30 T1440,40" fill="none" stroke="#FAF9F6" strokeWidth="1.5" opacity="0.6"></path>
            <path d="M0,45 Q400,75 800,25 T1440,55" fill="none" stroke="#FAF9F6" strokeWidth="1" opacity="0.4"></path>
          </svg>
        </div>
      </section>

      {/* 4.1. Dynamic Diagram Section */}
      <section className="py-24 bg-white border-b border-stone-200/30 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase block mb-2">
            INTEGRAL COASTAL ECOSYSTEM
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
            How Our Pillars Connect
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
            Sustaining coastal communities requires an interconnected approach. Each focus area directly supports local livelihoods and ecosystems.
          </p>

          {/* Interactive Circle Diagram */}
          <div className="relative w-full max-w-2xl mx-auto h-[400px] sm:h-[450px] flex items-center justify-center mt-16 mb-8">
            {/* Circular Graphic Center */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-secondary/20 p-2 bg-white shadow-lg overflow-hidden group hover:scale-105 transition-transform z-10 animate-fade-in">
              <img
                src={marineEcosystemDiagram}
                alt="Marine Ecosystem lagoon illustration"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Pointers Grid (Floating Nodes) */}
            {/* Node 1: Top-Left (Educare) */}
            <div className="absolute top-10 left-4 sm:left-12 flex flex-col items-end text-right max-w-[160px] sm:max-w-[200px] z-20">
              <div className="w-8 h-8 rounded-full bg-[#003B5C] text-white flex items-center justify-center font-bold shadow-md cursor-pointer hover:bg-secondary transition-colors mb-2 font-mono">
                1
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-primary uppercase">Educare Program</span>
              <p className="text-[10px] text-stone-500 mt-1 leading-relaxed font-sans">Afterschool tutoring and child well-being centers.</p>
            </div>

            {/* Node 2: Top-Right (Livelihoods) */}
            <div className="absolute top-10 right-4 sm:right-12 flex flex-col items-start text-left max-w-[160px] sm:max-w-[200px] z-20">
              <div className="w-8 h-8 rounded-full bg-[#003B5C] text-white flex items-center justify-center font-bold shadow-md cursor-pointer hover:bg-secondary transition-colors mb-2 font-mono">
                2
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-primary uppercase">Coir & Livelihoods</span>
              <p className="text-[10px] text-stone-500 mt-1 leading-relaxed font-sans">Sustaining shell harvesters & coir spinning families.</p>
            </div>

            {/* Node 3: Bottom-Left (Environment) */}
            <div className="absolute bottom-10 left-4 sm:left-12 flex flex-col items-end text-right max-w-[160px] sm:max-w-[200px] z-20">
              <div className="w-8 h-8 rounded-full bg-[#003B5C] text-white flex items-center justify-center font-bold shadow-md cursor-pointer hover:bg-secondary transition-colors mb-2 font-mono">
                3
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-primary uppercase">Environment</span>
              <p className="text-[10px] text-stone-500 mt-1 leading-relaxed font-sans">Estuary cleaning, plastic traps, and mangrove planting.</p>
            </div>

            {/* Node 4: Bottom-Right (Health) */}
            <div className="absolute bottom-10 right-4 sm:right-12 flex flex-col items-start text-left max-w-[160px] sm:max-w-[200px] z-20">
              <div className="w-8 h-8 rounded-full bg-[#003B5C] text-white flex items-center justify-center font-bold shadow-md cursor-pointer hover:bg-secondary transition-colors mb-2 font-mono">
                4
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-primary uppercase">Healthcare Aid</span>
              <p className="text-[10px] text-stone-500 mt-1 leading-relaxed font-sans">Primary health clinic support & diagnostic lab access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2. Timeline Section */}
      <section className="py-24 bg-bg-coastal border-b border-stone-200/30 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase block mb-2">
            OUR TIMELINE & LEGACY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
            Our Journey Since 2018
          </h2>

          {/* Timeline slider container */}
          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-200 -translate-y-1/2 z-0" />

            {/* Timeline Milestones Grid */}
            <div className="relative z-10 grid grid-cols-5 gap-2">
              {[
                { year: "2018", title: "Local Origins", desc: "Voluntary classes for coastal kids" },
                { year: "2020", title: "Safety Net", desc: "COVID medicine & food drives" },
                { year: "2022", title: "Educare Center", desc: "Formal afterschool learning rooms" },
                { year: "2024", title: "Mangroves", desc: "Planting nurseries at Perumathura" },
                { year: "2026", title: "Interactive", desc: "Dynamic coastal data mapping" }
              ].map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  {/* Circle Indicator */}
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-[#003B5C] group-hover:bg-[#003B5C] group-hover:scale-110 transition-all flex items-center justify-center shadow-md">
                    <span className="text-[10px] font-bold text-[#003B5C] group-hover:text-white font-mono">{milestone.year}</span>
                  </div>
                  {/* Labels */}
                  <span className="mt-4 font-display font-bold text-[11px] sm:text-xs text-primary uppercase block">{milestone.title}</span>
                  <p className="mt-1 text-[9px] sm:text-[10px] text-stone-500 max-w-[120px] leading-relaxed hidden sm:block font-sans">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.3. Interactive Visualizer Section */}
      <section className="py-24 bg-white border-b border-stone-200/30 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase block mb-2">
              CLIMATE TIMELINES & VISUALIZERS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
              Interactive Coastal Model
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visualizer Panel Dashboard (Left) */}
            <div className="p-8 rounded-3xl bg-[#002237] text-white shadow-xl space-y-6 flex flex-col justify-between min-h-[400px] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.1),transparent_70%)] pointer-events-none" />
              
              {/* Dashboard Header */}
              <div className="flex justify-between items-center relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#00B4D8] uppercase">MANGROVE CANOPY MODEL</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-[#00B4D8]/20 text-[#00B4D8]">LIVE STATUS</span>
              </div>

              {/* Climate Model Mock Map Graphic */}
              <div className="h-44 rounded-2xl bg-[#001726] border border-white/5 flex flex-col items-center justify-center p-4 relative z-10">
                <div className="w-full flex justify-between text-[10px] font-mono text-stone-500 mb-2">
                  <span>LAT: 8.6415° N (Perumathura)</span>
                  <span>LNG: 76.8197° E</span>
                </div>
                
                {/* Dynamic graph display based on selected year */}
                <div className="w-full flex items-end gap-3 h-24 justify-center">
                  {[
                    { year: "2018", height: "h-8", color: "bg-emerald-500/40" },
                    { year: "2020", height: "h-12", color: "bg-emerald-500/60" },
                    { year: "2022", height: "h-16", color: "bg-emerald-500/70" },
                    { year: "2024", height: "h-20", color: "bg-emerald-500/80" },
                    { year: "2026", height: "h-24", color: "bg-emerald-500" }
                  ].map((bar, i) => (
                    <div 
                      key={i} 
                      className={`w-12 transition-all duration-500 rounded-t-lg relative flex flex-col items-center ${
                        selectedVisualizerYear === bar.year ? `${bar.height} ${bar.color} ring-2 ring-emerald-400` : "h-6 bg-stone-700/50"
                      }`}
                    >
                      <span className="absolute -top-5 text-[9px] font-mono font-bold">
                        {selectedVisualizerYear === bar.year ? (
                          bar.year === "2018" ? "500" :
                          bar.year === "2020" ? "2,500" :
                          bar.year === "2022" ? "6,000" :
                          bar.year === "2024" ? "10,000" : "15,000"
                        ) : ""}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full flex justify-between text-[9px] font-mono text-stone-500 mt-2 px-1">
                  <span>2018</span>
                  <span>2020</span>
                  <span>2022</span>
                  <span>2024</span>
                  <span>2026</span>
                </div>
              </div>

              {/* Interactive buttons row */}
              <div className="flex gap-2 justify-center relative z-10">
                {["2018", "2020", "2022", "2024", "2026"].map((y) => (
                  <button
                    key={y}
                    onClick={() => setSelectedVisualizerYear(y)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                      selectedVisualizerYear === y ? "bg-[#00B4D8] text-[#002237]" : "bg-[#001726] hover:bg-stone-800 text-stone-300 border border-white/5"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanatory Content Card (Right) */}
            <div className="space-y-6 text-left">
              <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase block">
                INTERACTIVE ECOSYSTEM MAPPING
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary leading-tight">
                Simulating Climate Impact & Restoration Metrics
              </h3>
              <p className="font-sans text-stone-600 text-base leading-relaxed">
                By measuring tree canopy density, carbon capture capacity, and estuary cleanliness metrics across our active project sites, our database showcases the true environmental footprint of community-driven restoration.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-[#00B4D8] pl-4">
                  <span className="text-2xl font-bold text-primary font-display block font-mono">
                    {selectedVisualizerYear === "2018" ? "2 Tons" :
                     selectedVisualizerYear === "2020" ? "10 Tons" :
                     selectedVisualizerYear === "2022" ? "24 Tons" :
                     selectedVisualizerYear === "2024" ? "40 Tons" : "60 Tons"}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono tracking-wider block uppercase">CO₂ CAPTURED / YR</span>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <span className="text-2xl font-bold text-primary font-display block font-mono">
                    {selectedVisualizerYear === "2018" ? "92%" :
                     selectedVisualizerYear === "2020" ? "94%" :
                     selectedVisualizerYear === "2022" ? "96%" :
                     selectedVisualizerYear === "2024" ? "98%" : "99.2%"}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono tracking-wider block uppercase">ESTUARY HEALTH RATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.4. Virtual Mangrove Section */}
      <section className="py-24 bg-bg-coastal border-b border-stone-200/30 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase block">
              SUPPORT MANGROVE CANOPIES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
              Virtually Plant a Mangrove
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
              Tap the nursery card below to virtually plant a mangrove sapling and grow our community conservation counter.
            </p>

            {/* Interactive Planting Card */}
            <div className="mt-12 max-w-md mx-auto p-8 rounded-3xl bg-white border border-stone-200/40 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center space-y-6 relative overflow-hidden">
              {/* Mangrove Illustration Center */}
              <div className="w-56 h-56 rounded-2xl overflow-hidden p-1 relative">
                <img
                  src={mangrovePlanting}
                  alt="Mangrove exposed roots illustration"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Plant Stats & Counter */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block">COMMUNITY NURSERY COUNT</span>
                <span className="text-4xl font-display font-bold text-primary block font-mono">{mangroveCount.toLocaleString()}</span>
                <span className="text-[10px] text-stone-500 font-sans block">Saplings supported by site visitors</span>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setMangroveCount(prev => prev + 1);
                  setIsPlanted(true);
                  setTimeout(() => setIsPlanted(false), 2000);
                }}
                className={`w-full py-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all active:scale-95 cursor-pointer shadow-md ${
                  isPlanted ? "bg-emerald-500 text-white" : "bg-primary hover:bg-primary-light text-white"
                }`}
              >
                {isPlanted ? "🌿 Sapling Added! Thank You!" : "Virtually Support Sapling"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Dynamic Connection Map Section */}
      <section className="py-24 bg-white border-b border-stone-200/30 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest text-secondary uppercase block mb-2">
              DYNAMIC COMMUNITY CONNECTION WIDGETS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary tracking-tight">
              Our Project Coordinate Hub
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Project Locations sidebar (Left 5 Columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
              {[
                {
                  loc: "Perumathura Hub",
                  time: "2 hours ago",
                  title: "Teacher home visits completed",
                  desc: "Educare mentors visited 45 student households for weekly progress alignment."
                },
                {
                  loc: "Estuary restoration zone",
                  time: "1 day ago",
                  title: "Estuary cleaned & saplings added",
                  desc: "Volunteers cleared plastic traps and introduced 500 new mangrove saplings."
                },
                {
                  loc: "Partner Diagnostic Clinic",
                  time: "3 days ago",
                  title: "Healthcare diagnostic camp held",
                  desc: "Free diagnostic lab panels completed for 30 coastal shell harvesting families."
                }
              ].map((update, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-2xl border border-stone-200/40 bg-bg-coastal/30 hover:bg-bg-coastal hover:border-primary/20 transition-all text-left space-y-2 cursor-pointer shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-wide">{update.loc}</span>
                    <span className="text-[9px] font-mono text-stone-500">{update.time}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-primary">{update.title}</h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed font-sans">{update.desc}</p>
                </div>
              ))}
            </div>

            {/* Glowing Map Mockup (Right 7 Columns) */}
            <div className="lg:col-span-7 rounded-3xl bg-[#001726] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden min-h-[350px]">
              {/* Map background grid overlay */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              
              {/* Mock Kerala coastline outline drawing using SVG */}
              <div className="absolute inset-0 flex items-center justify-center p-8 z-0">
                <svg className="w-full h-full stroke-emerald-500/20 stroke-2 fill-none" viewBox="0 0 400 300">
                  {/* Estuary line */}
                  <path d="M50,250 C100,220 150,180 180,140 C210,100 240,60 350,50" />
                  <path d="M60,260 C110,230 160,190 190,150" />
                </svg>
              </div>

              <div className="flex justify-between items-center relative z-10">
                <span className="text-[9px] font-mono text-[#00B4D8] uppercase tracking-widest">COASTAL RESTORATION COORDINATES</span>
                <span className="text-[9px] font-mono text-stone-500 font-mono">SCALE: 1:25,000</span>
              </div>

              {/* Glowing Pulse Nodes placed absolute */}
              {/* Pin 1: Perumathura Hub */}
              <div className="absolute top-[60%] left-[45%] flex items-center gap-3 z-10 group">
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00B4D8]"></span>
                </div>
                <div className="bg-[#002237]/90 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-left opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="text-[9px] font-mono font-bold text-[#00B4D8] uppercase block">Perumathura Hub</span>
                  <span className="text-[8px] text-stone-400 font-sans block">Learning & Coir Centers</span>
                </div>
              </div>

              {/* Pin 2: Estuary Zone */}
              <div className="absolute top-[40%] left-[55%] flex items-center gap-3 z-10 group">
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                </div>
                <div className="bg-[#002237]/90 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-left opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase block">Estuary restoration zone</span>
                  <span className="text-[8px] text-stone-400 font-sans block">Mangrove Planting Zone</span>
                </div>
              </div>

              {/* Pin 3: Partner Clinic */}
              <div className="absolute top-[20%] left-[75%] flex items-center gap-3 z-10 group">
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
                </div>
                <div className="bg-[#002237]/90 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-left opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="text-[9px] font-mono font-bold text-amber-400 uppercase block">Partner Diagnostic Clinic</span>
                  <span className="text-[8px] text-stone-400 font-sans block">Healthcare Diagnostic Lab</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[9px] font-mono text-stone-500 relative z-10">
                <span>COORD: 8°38'29" N, 76°49'10" E</span>
                <span>CHANNELS OK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. Approach Section (Immersive full-width banner inspired by Dakshin.org) */}
      <section
        className="relative py-28 text-white overflow-hidden text-center bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed z-10"
        style={{ backgroundImage: `url(${coastalApproachBg})` }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#1A2D37]/75 mix-blend-multiply z-0" />

        {/* Subtle decorative top and bottom gradients */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FAF9F6]/10 to-transparent pointer-events-none z-1" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none z-1" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-block text-[#2DD4BF] font-mono text-lg sm:text-2xl font-extrabold uppercase tracking-widest">
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
            {areas.map((area, idx) => (
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
                          <a href={`#${area.id}`} className="hover:text-secondary hover:underline transition-all">
                            <h4 className="font-display font-bold text-lg text-[#003B5C]">{area.title}</h4>
                          </a>
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

                      <div className="pt-1">
                        <a
                          href={`#${area.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary group transition-colors uppercase tracking-wider font-display"
                        >
                          Explore Full Initiative
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
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


      {/* 7. Impact Stories Section */}
      <section id="impact-stories" className="py-24 bg-stone-50 border-t border-stone-200/40 relative overflow-hidden">
        {/* Soft marine glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(0,59,92,0.03),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(224,122,95,0.02),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E6FFFA] text-[#155E75] font-mono text-[10px] font-bold uppercase tracking-wider">
              Community Voices
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#003B5C]">
              Impact Stories
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              Real testimonials of transformation and empowerment along the shores of Perumathura.
            </p>
          </div>

          {/* Infinite Scrolling Ticker Wrapper */}
          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Overlay gradients to fade the edges (very premium visual effect!) */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

            <div className="animate-ticker gap-8 flex items-stretch">
              {/* Duplicate the posts array to allow seamless scrolling loop */}
              {Array(3).fill(
                activePosts.filter((post) => post.category === "Impact Stories" || post.category === "impact-stories")
              ).flat().map((post, idx) => (
                <div
                  key={`${post.id}-${idx}`}
                  onClick={() => {
                    window.location.hash = "#blog/" + post.slug;
                  }}
                  className="bg-white p-8 rounded-3xl border border-stone-200/50 shadow-sm hover:shadow-md hover:scale-[1.01] hover:border-stone-300 transition-all duration-300 flex flex-col justify-between cursor-pointer group h-[340px] w-[350px] md:w-[400px] shrink-0 relative"
                >
                  <div className="space-y-4">
                    {/* Big double quote sign */}
                    <span className="block font-serif text-5xl text-secondary leading-none -mb-4">“</span>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic font-medium font-sans line-clamp-6">
                      {post.quote}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      {/* Avatar Initials Badge */}
                      <div className="w-10 h-10 rounded-full bg-stone-50 border border-dashed border-[#155E75] flex items-center justify-center font-display font-bold text-xs text-[#003B5C]">
                        {post.avatarInitials || "CO"}
                      </div>
                      <div className="text-left leading-none">
                        <span className="block font-display font-bold text-xs text-primary mb-1">
                          {post.author}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                          {post.authorRole}
                        </span>
                      </div>
                    </div>

                    {/* Small dynamic chevron circle icon */}
                    <div className="w-8 h-8 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center transition-all group-hover:bg-primary group-hover:text-white shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7.5. Field Diaries (Blog Section) */}
      <section id="blog-preview" className="py-24 bg-stone-100/50 border-t border-stone-200/40 relative overflow-hidden">
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
            {activePosts
              .filter((post) => post.category === "Field Diaries" || post.category === "field-notes")
              .map((post) => (
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




    </>
  );
}

interface BlogPostPageProps {
  slug: string;
}

function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = activePosts.find((p) => p.slug === slug);

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
  currentView: string;
  setCurrentView: (view: string) => void;
}

function Navbar({ currentView, setCurrentView }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProgDropdownOpen, setIsProgDropdownOpen] = useState(false);
  const [isMobileProgOpen, setIsMobileProgOpen] = useState(false);

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

            {/* Programmes Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProgDropdownOpen(true)}
              onMouseLeave={() => setIsProgDropdownOpen(false)}
            >
              <button
                className={`hover:text-secondary transition-colors font-bold flex items-center gap-1.5 pb-2 pt-2 cursor-pointer ${["educare", "women-empowerment", "environment", "health"].includes(currentView) ? "text-secondary border-b-2 border-secondary" : ""}`}
              >
                Programmes
                <svg className="w-3.5 h-3.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isProgDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isProgDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-56 bg-white border border-stone-200/80 rounded-2xl shadow-xl py-3 z-50 text-left"
                  >
                    <a
                      href="#educare"
                      onClick={(e) => { e.preventDefault(); setCurrentView("educare"); setIsProgDropdownOpen(false); }}
                      className={`block px-5 py-2.5 hover:bg-stone-50 hover:text-secondary transition-colors font-semibold ${currentView === "educare" ? "text-secondary font-bold" : "text-stone-700"}`}
                    >
                      Educare
                    </a>
                    <a
                      href="#women-empowerment"
                      onClick={(e) => { e.preventDefault(); setCurrentView("women-empowerment"); setIsProgDropdownOpen(false); }}
                      className={`block px-5 py-2.5 hover:bg-stone-50 hover:text-secondary transition-colors font-semibold ${currentView === "women-empowerment" ? "text-secondary font-bold" : "text-stone-700"}`}
                    >
                      Woman Empowerment
                    </a>
                    <a
                      href="#environment"
                      onClick={(e) => { e.preventDefault(); setCurrentView("environment"); setIsProgDropdownOpen(false); }}
                      className={`block px-5 py-2.5 hover:bg-stone-50 hover:text-secondary transition-colors font-semibold ${currentView === "environment" ? "text-secondary font-bold" : "text-stone-700"}`}
                    >
                      Environment
                    </a>
                    <a
                      href="#health"
                      onClick={(e) => { e.preventDefault(); setCurrentView("health"); setIsProgDropdownOpen(false); }}
                      className={`block px-5 py-2.5 hover:bg-stone-50 hover:text-secondary transition-colors font-semibold ${currentView === "health" ? "text-secondary font-bold" : "text-stone-700"}`}
                    >
                      Health
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#team"
              onClick={() => setCurrentView("team")}
              className={`hover:text-secondary transition-colors font-bold ${currentView === "team" ? "text-secondary border-b-2 border-secondary" : ""}`}
            >
              Our Team
            </a>

            <a
              href="#get-involved"
              onClick={() => setCurrentView("get-involved")}
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

              {/* Collapsible Programmes for Mobile */}
              <div className="flex flex-col border-b border-stone-100 py-2">
                <button
                  onClick={() => setIsMobileProgOpen(!isMobileProgOpen)}
                  className="hover:text-secondary flex justify-between items-center text-left w-full font-semibold text-[#003B5C]"
                >
                  <span>Programmes</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileProgOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileProgOpen && (
                  <div className="pl-4 pt-2 pb-1 space-y-2 flex flex-col text-stone-500 font-semibold text-xs">
                    <a
                      href="#educare"
                      onClick={() => { setCurrentView("educare"); setIsMobileMenuOpen(false); }}
                      className={`hover:text-secondary py-1 ${currentView === "educare" ? "text-secondary font-bold" : ""}`}
                    >
                      Educare
                    </a>
                    <a
                      href="#women-empowerment"
                      onClick={() => { setCurrentView("women-empowerment"); setIsMobileMenuOpen(false); }}
                      className={`hover:text-secondary py-1 ${currentView === "women-empowerment" ? "text-secondary font-bold" : ""}`}
                    >
                      Woman Empowerment
                    </a>
                    <a
                      href="#environment"
                      onClick={() => { setCurrentView("environment"); setIsMobileMenuOpen(false); }}
                      className={`hover:text-secondary py-1 ${currentView === "environment" ? "text-secondary font-bold" : ""}`}
                    >
                      Environment
                    </a>
                    <a
                      href="#health"
                      onClick={() => { setCurrentView("health"); setIsMobileMenuOpen(false); }}
                      className={`hover:text-secondary py-1 ${currentView === "health" ? "text-secondary font-bold" : ""}`}
                    >
                      Health
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#team"
                onClick={() => { setCurrentView("team"); setIsMobileMenuOpen(false); }}
                className={`py-2 border-b border-stone-100 hover:text-secondary ${currentView === "team" ? "font-bold text-secondary" : ""}`}
              >
                Our Team
              </a>

              <a
                href="#get-involved"
                onClick={() => { setCurrentView("get-involved"); setIsMobileMenuOpen(false); }}
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen: BookOpen,
  Anchor: Anchor,
  Fish: Fish,
  Leaf: Leaf,
  LifeBuoy: LifeBuoy,
  Compass: Compass,
  Activity: Activity,
  Landmark: Landmark
};

const imageMap: Record<string, string> = {
  educareClassroom: educareClassroom,
  empowermentWomen: empowermentWomen,
  coastalLivelihoods: coastalLivelihoods,
  mangroveRestoration: mangroveRestoration,
  healthNutrition: healthNutrition,
  coastalEducation: coastalEducation,
  logo: logo,
  perumathuraVillage: perumathuraVillage
};

interface RawFocusArea {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  accomplishments: string;
  imageName: string;
}

const defaultProgramsData: RawFocusArea[] = [
  {
    id: "educare",
    title: "Education Initiative",
    iconName: "BookOpen",
    tagline: "Reimagining learning and growth for coastal children",
    description: "Setting up supplementary study centres, evening tutor groups, and digital libraries across remote coastal fishing villages. We combine academic tutoring with community engagement to transform learning spaces.",
    accomplishments: "Empowered 350+ students with academic tutoring, anti-drug awareness, and scholastic awards.",
    imageName: "educareClassroom"
  },
  {
    id: "women-empowerment",
    title: "Women’s Empowerment",
    iconName: "Anchor",
    tagline: "Skill training, SHGs, leadership, and financial literacy",
    description: "Mobilizing local micro-savings Self-Help Groups (SHGs) to run fish value-addition facilities, craft circles, and local co-operatives. Providing direct digital financial training.",
    accomplishments: "Empowered 120+ women in financial accounting and digital banking.",
    imageName: "empowermentWomen"
  },
  {
    id: "livelihoods",
    title: "Sustainable Livelihoods",
    iconName: "Fish",
    tagline: "Beyond fishing: aquaculture, value addition, market links",
    description: "Diversifying income streams via safe marine cage farming, seaweed cultivation, modern drying equipment, and direct market integration that eliminates predatory middlemen.",
    accomplishments: "Established 3 cooperative fish-dryer micro-units.",
    imageName: "coastalLivelihoods"
  },
  {
    id: "environment",
    title: "Environment Projects",
    iconName: "Leaf",
    tagline: "Nature tools, GINTL curriculum, Coastal Walks, Sea Voices",
    description: "Helping coastal children engage deeply with local ecology through GINTL Climate Change Education, Sea Voices storytelling, and hands-on Coastal Walks.",
    accomplishments: "Successfully conducted international climate exchanges (GINTL) and Climate Week Sea Voices workshops.",
    imageName: "mangroveRestoration"
  },
  {
    id: "health",
    title: "Health & Nutrition",
    iconName: "LifeBuoy",
    tagline: "Supporting health access, nutrition, and sanitation",
    description: "Organizing mobile health clinics, distributing fresh iron-fortified multi-nutrient food packets list, and creating hygienic community sanitation layouts in remote coastal hamlets.",
    accomplishments: "Conducted 15+ remote check-up camps with expert pediatricians.",
    imageName: "healthNutrition"
  }
];

function resolveFocusArea(raw: RawFocusArea): FocusArea {
  return {
    id: raw.id,
    title: raw.title,
    icon: iconMap[raw.iconName] || Compass,
    tagline: raw.tagline,
    description: raw.description,
    accomplishments: raw.accomplishments,
    image: imageMap[raw.imageName] || raw.imageName || coastalApproachBg
  };
}

function LivelihoodsPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 pb-24">
      {/* 1. Immersive Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-[#003B5C]">
        <img
          src={coastalLivelihoods}
          alt="Sustainable Livelihoods"
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
            <Fish className="w-3.5 h-3.5 text-secondary" />
            Coastal Livelihoods
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase"
          >
            SUSTAINABLE LIVELIHOODS
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
            Beyond traditional fishing: seaweed aquaculture, safe marine cages, and micro-drying units.
          </motion.p>
        </div>
      </section>

      {/* 2. Core Narrative Section */}
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
            Building Local Economic Power
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-serif italic bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
            "For traditional fishing communities, the ocean is both a home and a harvest. Yet, credit exclusion and predatory middlemen have historically separated fishers from the true value of their labor. We co-create alternate livelihood models that build local economic power."
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            By introducing advanced marine technologies and building micro-cooperative business models, we empower coastal families to retain more catch value and build diverse income streams. Our programs are designed to fit the seasonal rhythms of the ocean while opening up new markets for sustainable aquaculture.
          </p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-lg space-y-6 text-left"
        >
          <h3 className="font-display font-bold text-lg text-primary border-b border-stone-100 pb-3">
            Economic Milestones
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className="block font-display font-extrabold text-3xl text-secondary">
                <CountUp target={40} suffix="%" />
              </span>
              <span className="text-xs text-stone-500 font-sans font-medium">Income Increase</span>
            </div>
            <div>
              <span className="block font-display font-extrabold text-3xl text-[#155E75]">
                <CountUp target={3} />
              </span>
              <span className="text-xs text-stone-500 font-sans font-medium">Micro-Dryers Running</span>
            </div>
            <div>
              <span className="block font-display font-extrabold text-3xl text-[#155E75]">
                <CountUp target={75} suffix="+" />
              </span>
              <span className="text-xs text-stone-500 font-sans font-medium">Families Supported</span>
            </div>
            <div>
              <span className="block font-display font-extrabold text-3xl text-secondary">
                ₹35k+
              </span>
              <span className="text-xs text-stone-500 font-sans font-medium">Monthly Member Profit</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Action Programs */}
      <section className="py-20 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-display font-bold text-3xl text-[#003B5C]">Active Initiatives</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Marine Cage Farming */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200/40 shadow-sm space-y-4">
              <div className="p-2.5 bg-sky-50 rounded-xl text-sky-700 w-fit">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Safe Marine Cage Farming</h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Cultivating high-value finfish inside secure floating cages situated in bays and backwaters. Managed directly by family self-help groups, this adds a predictable income stream that complements daily sea journeys.
              </p>
            </div>

            {/* Seaweed Cultivation */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200/40 shadow-sm space-y-4">
              <div className="p-2.5 bg-teal-50 rounded-xl text-teal-700 w-fit">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Seaweed Farming</h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Providing women's groups with eco-friendly seaweed cultivation grids. This not only filters marine carbon and nitrogen, stabilizing the local shore ecosystem, but also supplies high-quality raw materials to pharmaceutical and food markets.
              </p>
            </div>

            {/* Micro-Dryers */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200/40 shadow-sm space-y-4">
              <div className="p-2.5 bg-amber-50 rounded-xl text-amber-700 w-fit">
                <Fish className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Dryer Cooperatives</h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Establishing solar-hybrid dry fish facilities owned and operated by women. Bypassing middleman auctions, they pack and label premium dry fish products, yielding 40% higher profit retention than selling raw catch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HealthPage() {
  const projects = [
    {
      title: "Project One: Participatory Health Mapping",
      desc: "This project empowers coastal communities to become co-researchers, transforming their local knowledge into actionable data. Through collaborative mapping and analysis, residents visually diagnose environmental health triggers and create tools to predict public health vulnerabilities."
    },
    {
      title: "Project Two: The Safety Net Project",
      desc: "This initiative seeks to protect the lives of Perumathura’s fishing communities by providing life-saving first-aid training and safety kits for emergencies at sea, and establishing a dedicated support desk to help families access entitled government health coverage schemes."
    }
  ];

  const services = [
    { title: "Integrated Medical Services", desc: "Access to consulting doctors, a basic diagnostic lab, and a subsidized pharmacy right in the community." },
    { title: "Proactive Wellness", desc: "Organizing healthy living workshops, a community garden, and regular yoga classes for stress relief." },
    { title: "Creative Health Education", desc: "Hosting engaging wellness festivals and digital literacy drives to promote preventative care." }
  ];

  const milestones = [
    { title: "70+ Expert webinars", desc: "Organized over 70 public webinars in partnership with KIMS Health doctors to teach symptom recognition and prevention." },
    { title: "Counselling Centre", desc: "Inaugurated in 2018 by KIMS Health Chairman Dr. Sahadulla, providing continuous guidance and mental wellness support." },
    { title: "PHC Renovation", desc: "Donated air conditioners to the renovated laboratory at Perumathura Primary Health Center to improve diagnostics." },
    { title: "1,000+ Vaccines", desc: "Successfully administered over 1,000 free COVID-19 vaccinations and provided direct cash aid to 175 families." }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 pb-24 font-sans selection:bg-primary-container selection:text-primary">
      
      {/* 1. Hero Section */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-center justify-center overflow-hidden bg-[#003B5C]">
        <img
          src={healthNutrition}
          alt="Community health event in Perumathura"
          className="absolute inset-0 w-full h-full object-cover opacity-25 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-[#003B5C]/75 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-secondary font-mono text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <LifeBuoy className="w-3.5 h-3.5 text-secondary" />
            Healthcare Initiatives
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase">
            Health & Wellness
          </h1>
          <div className="h-1 bg-secondary mx-auto rounded-full w-20" />
          <p className="text-stone-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Building a healthier, stronger Perumathura through partnerships, preventative wellness, and local healthcare support.
          </p>
        </div>
      </section>

      {/* 2. Core Vision & KIMS Partnership */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8 relative z-10">
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold text-[#0A5F8F] uppercase tracking-widest block">01 / Collaboration</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary leading-tight">
            Building a Healthier Perumathura
          </h2>
          <div className="w-12 h-1 bg-[#0A5F8F] rounded-full" />
        </div>
        
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          Our health initiatives focus on empowering the community with knowledge to make informed healthy life choices. We do this through two modes: providing accessible healthcare services and counselling, and through infrastructure development of local healthcare facilities. 
        </p>
        <p className="text-stone-600 text-base leading-relaxed">
          Through our cornerstone partnership with **KIMS Health**, we offer expert-led guidance, webinars, and mental health counselling, bringing high-quality professional support directly to Perumathura.
        </p>
      </section>

      {/* 3. The Community Health Centre Subpage Block */}
      <section className="py-20 bg-stone-100 border-y border-stone-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block text-secondary font-mono text-xs font-bold uppercase tracking-wider">
              Infrastructure Project
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary">
              The Community Health Centre
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-stone-600 text-sm">
              We are building a dedicated health centre to provide continuous, comprehensive care for the coastal community. Moving beyond crisis response, the centre will transform wellness with a space designed for holistic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/40 shadow-sm space-y-3">
                <h4 className="font-display font-bold text-sm text-[#003B5C]">{svc.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* Launch Projects */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm text-left space-y-6">
            <h3 className="font-display font-bold text-lg text-primary border-b border-stone-100 pb-3">
              Upcoming Launch Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-secondary">{proj.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Flagship Program Impact */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest block">02 / Key Initiatives &amp; Impact</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary leading-tight">
            Arogyatheeram Flagship Programs
          </h2>
          <div className="w-12 h-1 bg-secondary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/40 shadow-sm flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-stone-50 flex items-center justify-center font-mono text-xs font-bold text-[#0A5F8F] shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-sm text-[#003B5C]">{item.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

interface DynamicProgramPageProps {
  area: FocusArea;
}

function DynamicProgramPage({ area }: DynamicProgramPageProps) {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 pb-24">
      {/* 1. Immersive Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-[#003B5C]">
        <img
          src={area.image}
          alt={area.title}
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
            <area.icon className="w-3.5 h-3.5 text-secondary" />
            Strategic Initiative
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase"
          >
            {area.title}
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
            {area.tagline}
          </motion.p>
        </div>
      </section>

      {/* 2. Core Narrative Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="mb-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </a>
        </div>

        <div className="space-y-8">
          <span className="text-secondary font-mono text-xs font-bold uppercase tracking-wider block">
            Programme Overview
          </span>
          <h2 className="font-display font-bold text-3xl text-primary leading-tight">
            Nurturing Grassroots Potential
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-serif italic bg-white p-6 rounded-2xl border-l-4 border-primary shadow-sm">
            {area.description}
          </p>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/15 space-y-3">
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest block">
              Recent Accomplishments
            </span>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-sans font-medium">
              {area.accomplishments}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App({ initialView = "home" }: { initialView?: string }) {
  const [currentView, setCurrentView] = useState<string>(initialView);
  const [selectedBlogPostSlug, setSelectedBlogPostSlug] = useState<string>("");

  const areas = defaultProgramsData.map(resolveFocusArea);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      const cleanPath = path.replace(/^\/|\/$/g, '');
      const defaultRoutes = ["educare", "environment", "get-involved", "team", "women-empowerment", "about-us", "livelihoods", "health"];

      if (hash === "#educare" || path.includes("/educare")) {
        setCurrentView("educare");
      } else if (hash === "#environment" || path.includes("/environment")) {
        setCurrentView("environment");
      } else if (hash === "#get-involved" || path.includes("/get-involved") || hash === "#internships" || path.includes("/internships")) {
        setCurrentView("get-involved");
      } else if (hash === "#team" || path.includes("/team")) {
        setCurrentView("team");
      } else if (hash === "#women-empowerment" || path.includes("/women-empowerment")) {
        setCurrentView("women-empowerment");
      } else if (hash === "#livelihoods" || path.includes("/livelihoods")) {
        setCurrentView("livelihoods");
      } else if (hash === "#health" || path.includes("/health")) {
        setCurrentView("health");
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
      } else if (cleanPath !== "" && !defaultRoutes.includes(cleanPath)) {
        if (areas.some((a) => a.id === cleanPath)) {
          setCurrentView(cleanPath);
        } else {
          setCurrentView("home");
        }
      } else if (hash !== "") {
        const customId = hash.slice(1);
        if (areas.some((a) => a.id === customId)) {
          setCurrentView(customId);
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
        <HomePage setCurrentView={setCurrentView} areas={areas} />
      ) : currentView === "about-us" ? (
        <AboutUsPage />
      ) : currentView === "educare" ? (
        <EducarePage />
      ) : currentView === "environment" ? (
        <EnvironmentPage />
      ) : currentView === "get-involved" ? (
        <GetInvolvedPage />
      ) : currentView === "team" ? (
        <TeamPage />
      ) : currentView === "women-empowerment" ? (
        <WomenEmpowermentPage />
      ) : currentView === "livelihoods" ? (
        <LivelihoodsPage />
      ) : currentView === "health" ? (
        <HealthPage />
      ) : currentView === "blog" ? (
        <BlogPostPage slug={selectedBlogPostSlug} />
      ) : (() => {
        const customArea = areas.find((a) => a.id === currentView);
        if (customArea) {
          return <DynamicProgramPage area={customArea} />;
        }
        return <HomePage setCurrentView={setCurrentView} areas={areas} />;
      })()}

      {/* 10. Footer */}
      <footer className="bg-[#001726] text-stone-300 pt-24 pb-8 relative overflow-hidden z-10 border-t border-white/5">
        {/* Top organic wave SVG transition to separate content sections */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden leading-none pointer-events-none z-0">
          <svg className="relative block w-full h-full fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,80 600,0 900,40 C1050,60 1125,60 1200,40 L1200,0 L0,0 Z"></path>
          </svg>
        </div>

        {/* Seaweed SVG Silhouettes floating at the bottom background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none select-none z-0 opacity-[0.05] flex justify-between px-12 items-end">
          <svg className="w-16 h-36 text-secondary fill-current" viewBox="0 0 60 120">
            <path d="M30,120 Q15,80 30,40 T25,0 Q35,40 20,80 T30,120 Z" />
          </svg>
          <svg className="w-12 h-24 text-secondary fill-current" viewBox="0 0 60 120">
            <path d="M30,120 Q40,90 25,60 T35,0 Q20,60 35,90 T30,120 Z" />
          </svg>
          <svg className="w-20 h-44 text-secondary fill-current" viewBox="0 0 60 120">
            <path d="M30,120 Q10,65 30,25 T20,0 Q35,25 15,65 T30,120 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-12 pb-12 border-b border-white/5 text-left relative z-10">

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
              <a href="#about-us" className="text-stone-400 hover:text-secondary transition-colors">About Us</a>
              <a href="#get-involved" className="text-stone-400 hover:text-secondary transition-colors">Get Involved</a>
              <a href="#programs" className="text-stone-400 hover:text-secondary transition-colors">Strategic Focus Areas</a>
              <a href="#team" className="text-stone-400 hover:text-secondary transition-colors">Meet the Team</a>
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-800/80 hover:bg-stone-700 flex items-center justify-center transition-colors text-white" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-800/80 hover:bg-stone-700 flex items-center justify-center transition-colors text-white" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-stone-800/80 hover:bg-stone-700 flex items-center justify-center transition-colors text-white" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-stone-500 font-mono relative z-10">
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
