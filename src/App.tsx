import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { StateData, statesData } from "./data/statesData";
import { IndiaMapGrid } from "./components/IndiaMapGrid";
import { StateQuiz } from "./components/StateQuiz";
import { AIGuide } from "./components/AIGuide";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/Card";
import { Badge } from "./components/ui/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/Tabs";
import { 
  Compass, 
  MapPin, 
  Award, 
  Info, 
  BookOpen, 
  Utensils, 
  Calendar, 
  Globe, 
  Sparkles, 
  Camera, 
  Milestone,
  HelpCircle,
  Menu,
  BookMarked
} from "lucide-react";

export default function App() {
  const [selectedState, setSelectedState] = React.useState<StateData | null>(statesData[0]); // Maharashtra selected by default
  const [unlockedBadges, setUnlockedBadges] = React.useState<string[]>([]);
  const [showBadgeNotification, setShowBadgeNotification] = React.useState<string | null>(null);

  const handleUnlockBadge = (badgeName: string) => {
    if (!unlockedBadges.includes(badgeName)) {
      setUnlockedBadges((prev) => [...prev, badgeName]);
      setShowBadgeNotification(badgeName);
      // Auto-hide notification after 4 seconds
      setTimeout(() => {
        setShowBadgeNotification(null);
      }, 4000);
    }
  };

  const handleSelectState = (state: StateData) => {
    setSelectedState(state);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Golden Collector Badge Notification Alert Banner */}
      <AnimatePresence>
        {showBadgeNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-amber-500/30 flex items-center gap-3.5 max-w-sm backdrop-blur-md"
          >
            <div className="bg-amber-500 p-2 rounded-full shadow-inner text-slate-950">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-black text-amber-500">Badge Earned! 🎖️</p>
              <p className="text-[11px] text-slate-300 mt-0.5 font-bold leading-tight">
                You unlocked <strong>{showBadgeNotification}</strong>! View your trophies in the collector's panel.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header Navigation */}
      <header className="border-b border-white/10 bg-slate-900/50 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center font-bold text-slate-900">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-sans font-black text-lg md:text-xl tracking-tighter uppercase text-white leading-none">
                Bharat<span className="text-amber-500 underline decoration-2 underline-offset-4">Safar</span>
              </h1>
              <span className="text-[9px] font-bold text-amber-500/80 font-mono tracking-widest uppercase block mt-1">
                Interactive India Explorer
              </span>
            </div>
          </div>

          {/* Badge Collector Counter */}
          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 py-1.5 px-4 rounded-xl">
            <Award className="h-4.5 w-4.5 text-amber-500" />
            <div className="text-left">
              <span className="text-[9px] font-bold text-slate-500 block leading-none font-mono uppercase">State Trophies</span>
              <strong className="text-xs md:text-sm text-white font-black leading-none mt-1 block">
                {unlockedBadges.length} / {statesData.length} Unlocked
              </strong>
            </div>
          </div>
        </div>
      </header>

      {/* Primary Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Pitch Board / Stats overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="lg:col-span-7 space-y-3">
            <Badge variant="primary">
              <Sparkles className="h-3 w-3 mr-1" /> Discover Incredible India
            </Badge>
            <h2 className="text-2xl md:text-4xl font-sans font-black text-white tracking-tight leading-tight">
              An Interactive Journey Across <span className="text-amber-500 underline decoration-2 decoration-amber-500/30 underline-offset-4">India's Rich Heritage</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Experience India like never before. Click any state on our custom geographic tile cartogram to unpack regional identities, learn official symbols, practice local trivia, and plan offbeat journeys using our AI-guided assistant.
            </p>
          </div>
          
          <div className="lg:col-span-5 bg-slate-950/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-full space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white text-sm tracking-tight">Your Exploration Achievements</h3>
                <p className="text-xs text-slate-400 mt-0.5">Solve state quizzes correctly to collect golden traveler medals.</p>
              </div>
              <BookMarked className="h-5 w-5 text-amber-500 shrink-0" />
            </div>

            <div className="space-y-2">
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-600 to-amber-400 h-full transition-all duration-500"
                  style={{ width: `${(unlockedBadges.length / statesData.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-500 font-mono">
                <span>0 BADGES</span>
                <span>{unlockedBadges.length} UNLOCKED</span>
                <span>{statesData.length} TOTAL</span>
              </div>
            </div>

            {unlockedBadges.length === 0 ? (
              <p className="text-[11px] text-slate-500 italic">No medals earned yet. Click a state below and pass its trivia challenge to win your first medal!</p>
            ) : (
              <div className="flex flex-wrap gap-1.5 max-h-[60px] overflow-y-auto scrollbar-thin">
                {unlockedBadges.map((badge, idx) => (
                  <Badge key={idx} variant="accent">
                    🎖️ {badge.replace(" Explorer", "")}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: MAP GRID PANEL (col-span-7) */}
          <section className="lg:col-span-7 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="border-b border-white/5 bg-white/[0.01]">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold text-white">Geographic Block Cartogram</CardTitle>
                    <CardDescription className="text-xs">
                      Arranged geographically relative to real cardinal positions. Hover and select.
                    </CardDescription>
                  </div>
                  <Milestone className="h-5 w-5 text-slate-500" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <IndiaMapGrid 
                  selectedState={selectedState} 
                  onSelectState={handleSelectState}
                  unlockedBadges={unlockedBadges}
                />
              </CardContent>
            </Card>

            {/* Quick Map Tips */}
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex gap-3 text-xs leading-relaxed text-slate-300">
              <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-500">Pro Map Tip:</strong> Traditional vector maps have small, overlapping boundaries that can make clicking small states (like Goa or Sikkim) frustrating on phones. Our styled geometric block-cartogram provides uniform click areas while maintaining perfect relative geographic positions!
              </div>
            </div>
          </section>

          {/* RIGHT SIDE: ACTIVE STATE DETAILS HUB (col-span-5) */}
          <section className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedState ? (
                <motion.div
                  key={selectedState.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="overflow-hidden">
                    {/* Visual themed state header */}
                    <div className="bg-slate-900 border-b border-white/5 p-6 relative">
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-amber-500/10 text-amber-500 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/20 text-[9px] font-bold tracking-widest font-mono">
                        <MapPin className="h-3.5 w-3.5 text-amber-500" />
                        <span>{selectedState.region.toUpperCase()} REGION</span>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-500 font-mono tracking-widest uppercase">STATE INSIGHT HUB</span>
                        <h3 className="text-4xl md:text-5xl font-serif italic font-light text-white tracking-tight mt-1">{selectedState.name}</h3>
                        <p className="text-xs text-slate-400 max-w-sm line-clamp-2 leading-relaxed mt-3">
                          {selectedState.about}
                        </p>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      {/* Interactive Tabs */}
                      <Tabs defaultValue="overview" className="space-y-5">
                        <TabsList className="grid grid-cols-4">
                          <TabsTrigger value="overview">Overview</TabsTrigger>
                          <TabsTrigger value="attractions">Attractions</TabsTrigger>
                          <TabsTrigger value="quiz">Trivia</TabsTrigger>
                          <TabsTrigger value="ai">AI Guide</TabsTrigger>
                        </TabsList>

                        {/* TAB 1: OVERVIEW */}
                        <TabsContent value="overview" className="space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-2.5">
                              <Globe className="h-5 w-5 text-amber-500 shrink-0" />
                              <div className="min-w-0">
                                <span className="text-[9px] font-bold text-slate-500 block leading-none font-mono uppercase">CAPITAL</span>
                                <strong className="text-xs font-bold text-white block truncate mt-1">{selectedState.capital}</strong>
                              </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-2.5">
                              <BookOpen className="h-5 w-5 text-amber-500 shrink-0" />
                              <div className="min-w-0">
                                <span className="text-[9px] font-bold text-slate-500 block leading-none font-mono uppercase">OFFICIAL LANGUAGE</span>
                                <strong className="text-xs font-bold text-white block truncate mt-1">{selectedState.language}</strong>
                              </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-2.5">
                              <Calendar className="h-5 w-5 text-amber-500 shrink-0" />
                              <div className="min-w-0">
                                <span className="text-[9px] font-bold text-slate-500 block leading-none font-mono uppercase">BEST TIME</span>
                                <strong className="text-xs font-bold text-white block truncate mt-1">{selectedState.bestTime}</strong>
                              </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-2.5">
                              <Camera className="h-5 w-5 text-amber-500 shrink-0" />
                              <div className="min-w-0">
                                <span className="text-[9px] font-bold text-slate-500 block leading-none font-mono uppercase">STATE ANIMAL</span>
                                <strong className="text-xs font-bold text-white block truncate mt-1">{selectedState.animal}</strong>
                              </div>
                            </div>
                          </div>

                          {/* Traditional Foods Section */}
                          <div className="border border-amber-500/10 bg-amber-500/[0.03] p-4 rounded-xl space-y-2">
                            <div className="flex items-center gap-1.5">
                              <Utensils className="h-4.5 w-4.5 text-amber-500" />
                              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Signature Regional Cuisine</h4>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                              {selectedState.food}
                            </p>
                          </div>

                          {/* Quick Explorer Progress Badge Status */}
                          <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                            <div className="flex items-center gap-1.5">
                              <Award className="h-4.5 w-4.5 text-amber-500" />
                              <span className="text-slate-400 font-medium">Trophy status:</span>
                            </div>
                            {unlockedBadges.includes(`${selectedState.name} Explorer`) ? (
                              <Badge variant="accent">
                                Unlocked Medal 🏆
                              </Badge>
                            ) : (
                              <span className="text-slate-500 font-bold italic text-[11px]">Medal Locked (Take Trivia)</span>
                            )}
                          </div>
                        </TabsContent>

                        {/* TAB 2: ATTRACTIONS */}
                        <TabsContent value="attractions" className="space-y-3.5">
                          <p className="text-xs text-slate-400 mb-2 leading-relaxed">
                            Must-visit tourist places, natural wonders, and spiritual landmarks of {selectedState.name}:
                          </p>
                          <div className="space-y-3.5 max-h-[320px] overflow-y-auto pr-1">
                            {selectedState.attractions.map((att, idx) => {
                              const categoryColors = {
                                Heritage: "bg-rose-500/10 text-rose-400 border-rose-500/20",
                                Nature: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                                Spiritual: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                                Adventure: "bg-violet-500/10 text-violet-400 border-violet-500/20",
                                Modern: "bg-sky-500/10 text-sky-400 border-sky-500/20",
                              };

                              return (
                                <div key={idx} className="p-3.5 bg-white/[0.02] border border-white/5 rounded-xl space-y-1.5 hover:border-amber-500/30 transition-all">
                                  <div className="flex items-start justify-between gap-2">
                                    <h5 className="font-bold text-white text-sm leading-tight">{att.name}</h5>
                                    <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${categoryColors[att.category as keyof typeof categoryColors]}`}>
                                      {att.category}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-400 leading-normal">{att.desc}</p>
                                </div>
                              );
                            })}
                          </div>
                        </TabsContent>

                        {/* TAB 3: TRIVIA QUIZ */}
                        <TabsContent value="quiz">
                          <StateQuiz 
                            state={selectedState} 
                            onUnlockBadge={handleUnlockBadge}
                            unlockedBadges={unlockedBadges}
                          />
                        </TabsContent>

                        {/* TAB 4: AI TRAVEL GUIDE */}
                        <TabsContent value="ai">
                          <AIGuide state={selectedState} />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <Card className="border-white/10 border-dashed bg-white/[0.01] py-16 px-6 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-full text-amber-500 shadow-inner">
                    <Compass className="h-8 w-8 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">No State Selected</h3>
                    <p className="text-xs text-slate-400 max-w-xs mt-1 leading-relaxed mx-auto">
                      Click on any colorful region block on the map of India to unpack its cultural treasures, practice trivia, and chat with local AI guides.
                    </p>
                  </div>
                </Card>
              )}
            </AnimatePresence>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-xs text-slate-500 font-semibold">
            © {new Date().getFullYear()} BharatSafar • Proudly celebrating the rich diversity of India.
          </p>
          <div className="flex justify-center gap-4 text-[11px] font-bold text-slate-600 font-mono uppercase tracking-widest">
            <span>28 STATES</span>
            <span>•</span>
            <span>8 UNION TERRITORIES</span>
            <span>•</span>
            <span>UNLIMITED SAFARS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
