import React from 'react';
import { Anchor, ShieldCheck, HeartHandshake, Eye, BookOpen, UserCheck, EyeOff } from 'lucide-react';

interface NavigationProps {
  activeTab: 'overview' | 'donations' | 'volunteer' | 'impact';
  setActiveTab: (tab: 'overview' | 'donations' | 'volunteer' | 'impact') => void;
  isAdminMode: boolean;
  setIsAdminMode: (mode: boolean) => void;
}

export default function Navigation({
  activeTab,
  setActiveTab,
  isAdminMode,
  setIsAdminMode
}: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#f9f7f2] border-b border-[#1a1a1a]/15">
      {/* Top Banner with Registration/Compliance Info */}
      <div className="bg-[#3d5a4c] text-[#f9f7f2] text-xs px-4 py-2 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-[#1a1a1a] text-xs font-mono px-2 py-0.5 text-white uppercase tracking-wider font-bold">Kerala, India</span>
          <span className="font-mono hover:underline">Registered Section 8 (Company Act 2013)</span>
          <span className="hidden md:inline font-mono opacity-80">| CIN: U88900KL2026NPL100608</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-serif italic text-[11px] tracking-wide">✨ 100% applied solely toward charitable objects</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-6">
          
          {/* Logo & Slogan Column */}
          <div className="flex items-center gap-4 select-none">
            <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center shrink-0">
              <Anchor className="w-5.5 h-5.5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#1a1a1a] leading-none">
                  Two-Thirds <span className="text-[#3d5a4c] font-light italic">Community Foundation</span>
                </h1>
                <span className="border border-[#1a1a1a] text-[#1a1a1a] text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 bg-transparent">
                  Kerala Base
                </span>
              </div>
              <p className="text-xs text-stone-600 font-serif italic mt-1 pb-1">
                “For the two-thirds who deserve better” • Empowering Coastal & Marginalized Communities
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:self-end xl:self-center">
            <nav className="flex items-center gap-1.5 p-1 bg-transparent">
              <button
                id="nav-tab-overview"
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all cursor-pointer rounded-none border ${
                  activeTab === 'overview'
                    ? 'bg-[#1a1a1a] text-[#f9f7f2] border-[#1a1a1a]'
                    : 'text-stone-700 hover:text-[#1a1a1a] border-transparent hover:border-[#1a1a1a]/40'
                }`}
              >
                <span>Our Vision</span>
              </button>

              <button
                id="nav-tab-donations"
                onClick={() => setActiveTab('donations')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all cursor-pointer rounded-none border ${
                  activeTab === 'donations'
                    ? 'bg-[#1a1a1a] text-[#f9f7f2] border-[#1a1a1a]'
                    : 'text-stone-700 hover:text-[#1a1a1a] border-transparent hover:border-[#1a1a1a]/40'
                }`}
              >
                <span>Donations</span>
              </button>

              <button
                id="nav-tab-volunteer"
                onClick={() => setActiveTab('volunteer')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all cursor-pointer rounded-none border ${
                  activeTab === 'volunteer'
                    ? 'bg-[#1a1a1a] text-[#f9f7f2] border-[#1a1a1a]'
                    : 'text-stone-700 hover:text-[#1a1a1a] border-transparent hover:border-[#1a1a1a]/40'
                }`}
              >
                <span>Volunteer Positions</span>
              </button>

              <button
                id="nav-tab-impact"
                onClick={() => setActiveTab('impact')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all cursor-pointer rounded-none border ${
                  activeTab === 'impact'
                    ? 'bg-[#1a1a1a] text-[#f9f7f2] border-[#1a1a1a]'
                    : 'text-stone-700 hover:text-[#1a1a1a] border-transparent hover:border-[#1a1a1a]/40'
                }`}
              >
                <span>Impact Stories</span>
              </button>
            </nav>

            {/* Admin Toggle button styling strictly honest and human-labeled */}
            <button
              id="admin-mode-toggle"
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border cursor-pointer transition-all rounded-none ${
                isAdminMode
                  ? 'bg-[#3d5a4c] text-white border-[#3d5a4c]'
                  : 'bg-transparent text-stone-600 border-[#1a1a1a]/20 hover:border-[#1a1a1a]'
              }`}
              title="Toggle to post opportunities, review volunteer applications and publish impact stories"
            >
              {isAdminMode ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Admin Mode [ON]</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Staff Portal</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
