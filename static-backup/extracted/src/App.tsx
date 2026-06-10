import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import DonationCenter from './components/DonationCenter';
import VolunteersPortal from './components/VolunteersPortal';
import ImpactStoriesPortal from './components/ImpactStoriesPortal';

import { Donation, VolunteerOpportunity, VolunteerApplication, ImpactStory, GrowthGoal } from './types';
import { initialGrowthGoals, initialOpportunities, initialImpactStories, initialDonationHistory } from './data';
import { Mail, Phone, MapPin, Anchor, Landmark, ShieldCheck } from 'lucide-react';

export default function App() {
  // Navigation & Role states
  const [activeTab, setActiveTab] = useState<'overview' | 'donations' | 'volunteer' | 'impact'>('overview');
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);

  // Growth goals tracking - synced across donations
  const [growthGoals, setGrowthGoals] = useState<GrowthGoal[]>(initialGrowthGoals);

  // Master lists
  const [donations, setDonations] = useState<Donation[]>(initialDonationHistory);
  const [opportunities, setOpportunities] = useState<VolunteerOpportunity[]>(initialOpportunities);
  const [applications, setApplications] = useState<VolunteerApplication[]>([]);
  const [stories, setStories] = useState<ImpactStory[]>(initialImpactStories);

  // Callback to handle simulated donations
  const handleAddDonation = (newDonation: Donation) => {
    // 1. Add to donation registry board
    setDonations((prev) => [newDonation, ...prev]);

    // 2. Increment growth goal amounts reactively
    setGrowthGoals((prevGoals) =>
      prevGoals.map((g) => {
        if (g.id === newDonation.campaignId) {
          return { ...g, currentAmount: g.currentAmount + newDonation.amount };
        }
        return g;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF5EB] flex flex-col justify-between selection:bg-coastal-teal/20 selection:text-coastal-teal">
      
      {/* Dynamic Top Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {activeTab === 'overview' && (
          <Overview
            growthGoals={growthGoals}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'donations' && (
          <DonationCenter
            growthGoals={growthGoals}
            donations={donations}
            onAddDonation={handleAddDonation}
          />
        )}

        {activeTab === 'volunteer' && (
          <VolunteersPortal
            opportunities={opportunities}
            setOpportunities={setOpportunities}
            applications={applications}
            setApplications={setApplications}
            isAdminMode={isAdminMode}
          />
        )}

        {activeTab === 'impact' && (
          <ImpactStoriesPortal
            stories={stories}
            setStories={setStories}
            isAdminMode={isAdminMode}
          />
        )}
      </main>

      {/* Global Interactive High Contrast Footer (Matches Page 10 precise data details) */}
      <footer className="bg-neutral-900 text-neutral-300 border-t-8 border-[#0C866D] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-12 pb-8 border-b border-white/5">
          
          {/* Logo, registration details column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0C866D] flex items-center justify-center border-1 border-[#EAA02F]">
                <Anchor className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Two-Thirds Community Foundation
              </h3>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              We are a registered Section 8 nonprofit dedicated to empowering coastal, under-resourced fishing hamlets and traditional communities across Kerala, India.
            </p>
            <div className="space-y-1 font-mono text-[10px] text-stone-500">
              <p>CIN Identification Code: U88900KL2026NPL100608</p>
              <p>Registered under Section 8(1) of the Companies Act, 2013</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-stone-200 text-sm">Strategic Modules</h4>
            <div className="grid gap-2 text-xs">
              <button onClick={() => setActiveTab('overview')} className="text-left text-stone-400 hover:text-[#EAA02F] cursor-pointer transition-colors">Vision & Mission</button>
              <button onClick={() => setActiveTab('donations')} className="text-left text-stone-400 hover:text-[#EAA02F] cursor-pointer transition-colors">Donation Targets (₹)</button>
              <button onClick={() => setActiveTab('volunteer')} className="text-left text-stone-400 hover:text-[#EAA02F] cursor-pointer transition-colors">Volunteer Opportunities</button>
              <button onClick={() => setActiveTab('impact')} className="text-left text-stone-400 hover:text-[#EAA02F] cursor-pointer transition-colors">Kerala Impact Stories</button>
            </div>
          </div>

          {/* Direct Address & Contact information page 10 detail mapping */}
          <div className="md:col-span-4 space-y-3 font-sans">
            <h4 className="font-display font-semibold text-stone-200 text-sm">Office & Operations Registry</h4>
            <div className="grid gap-2 text-xs">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-coastal-teal" />
                <span>Trivandrum Coast, Kerala, India</span>
              </p>
              <a href="tel:+919037518593" className="flex items-center gap-2 text-stone-400 hover:text-[#EAA02F] transition-colors">
                <Phone className="w-3.5 h-3.5 text-coastal-teal" />
                <span>+91 9037518593</span>
              </a>
              <a href="mailto:twothirdscommunityfoundation@gmail.com" className="flex items-center gap-2 text-stone-400 hover:text-[#EAA02F] transition-colors break-all">
                <Mail className="w-3.5 h-3.5 text-coastal-teal" />
                <span>twothirdscommunityfoundation@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal copy and design note */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} Two-Thirds Community Foundation. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-coastal-teal" />
            <span>Fully Compliant under Section 135 & 80G credits</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
