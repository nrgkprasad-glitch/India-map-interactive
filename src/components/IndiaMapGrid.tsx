import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { StateData, statesData } from "../data/statesData";
import { Badge } from "./ui/Badge";
import IndiaMap from "react-svgmap-india";
import { Map, Grid, Info, Compass, HelpCircle, RefreshCw, MapPin } from "lucide-react";

interface IndiaMapGridProps {
  selectedState: StateData | null;
  onSelectState: (state: StateData) => void;
  unlockedBadges: string[];
}

interface TileState {
  id: string;
  name: string;
  abbr: string;
  gridX: number; // 1-indexed column
  gridY: number; // 1-indexed row
  region: "North" | "South" | "East" | "West" | "Central" | "Northeast" | "Union Territory";
  color: string;
}

// Complete geographic mapping of Indian states & UTs to a 11x8 grid
const tileStates: TileState[] = [
  // Row 1
  { id: "IN-LA", name: "Ladakh", abbr: "LA", gridX: 5, gridY: 1, region: "Union Territory", color: "from-sky-400 to-sky-500" },
  { id: "IN-JK", name: "Jammu & Kashmir", abbr: "JK", gridX: 4, gridY: 1, region: "Union Territory", color: "from-sky-400 to-sky-500" },
  
  // Row 2
  { id: "IN-HP", name: "Himachal Pradesh", abbr: "HP", gridX: 4, gridY: 2, region: "North", color: "from-indigo-400 to-indigo-500" },
  { id: "IN-PB", name: "Punjab", abbr: "PB", gridX: 3, gridY: 2, region: "North", color: "from-indigo-400 to-indigo-500" },
  { id: "IN-UT", name: "Uttarakhand", abbr: "UT", gridX: 5, gridY: 2, region: "North", color: "from-indigo-400 to-indigo-500" },
  { id: "IN-CH", name: "Chandigarh", abbr: "CH", gridX: 2, gridY: 2, region: "Union Territory", color: "from-sky-400 to-sky-500" },
  
  // Row 3
  { id: "IN-HR", name: "Haryana", abbr: "HR", gridX: 3, gridY: 3, region: "North", color: "from-indigo-400 to-indigo-500" },
  { id: "IN-DL", name: "Delhi", abbr: "DL", gridX: 4, gridY: 3, region: "Union Territory", color: "from-sky-400 to-sky-500" },
  { id: "IN-UP", name: "Uttar Pradesh", abbr: "UP", gridX: 5, gridY: 3, region: "North", color: "from-indigo-400 to-indigo-500" },
  { id: "IN-SK", name: "Sikkim", abbr: "SK", gridX: 8, gridY: 3, region: "Northeast", color: "from-green-500 to-green-600" },
  { id: "IN-AR", name: "Arunachal Pradesh", abbr: "AR", gridX: 11, gridY: 3, region: "Northeast", color: "from-green-500 to-green-600" },
  
  // Row 4
  { id: "IN-RJ", name: "Rajasthan", abbr: "RJ", gridX: 2, gridY: 4, region: "West", color: "from-amber-500 to-amber-600" },
  { id: "IN-MP", name: "Madhya Pradesh", abbr: "MP", gridX: 4, gridY: 4, region: "Central", color: "from-lime-500 to-lime-600" },
  { id: "IN-BR", name: "Bihar", abbr: "BR", gridX: 6, gridY: 4, region: "East", color: "from-rose-400 to-rose-500" },
  { id: "IN-WB", name: "West Bengal", abbr: "WB", gridX: 7, gridY: 4, region: "East", color: "from-rose-400 to-rose-500" },
  { id: "IN-AS", name: "Assam", abbr: "AS", gridX: 9, gridY: 4, region: "Northeast", color: "from-green-500 to-green-600" },
  { id: "IN-NL", name: "Nagaland", abbr: "NL", gridX: 11, gridY: 4, region: "Northeast", color: "from-green-500 to-green-600" },
  
  // Row 5
  { id: "IN-GJ", name: "Gujarat", abbr: "GJ", gridX: 1, gridY: 5, region: "West", color: "from-amber-500 to-amber-600" },
  { id: "IN-CT", name: "Chhattisgarh", abbr: "CG", gridX: 4, gridY: 5, region: "Central", color: "from-lime-500 to-lime-600" },
  { id: "IN-JH", name: "Jharkhand", abbr: "JH", gridX: 6, gridY: 5, region: "East", color: "from-rose-400 to-rose-500" },
  { id: "IN-OR", name: "Odisha", abbr: "OD", gridX: 7, gridY: 5, region: "East", color: "from-rose-400 to-rose-500" },
  { id: "IN-ML", name: "Meghalaya", abbr: "ML", gridX: 9, gridY: 5, region: "Northeast", color: "from-green-500 to-green-600" },
  { id: "IN-MN", name: "Manipur", abbr: "MN", gridX: 11, gridY: 5, region: "Northeast", color: "from-green-500 to-green-600" },
  
  // Row 6
  { id: "IN-MH", name: "Maharashtra", abbr: "MH", gridX: 3, gridY: 6, region: "West", color: "from-amber-500 to-amber-600" },
  { id: "IN-TG", name: "Telangana", abbr: "TG", gridX: 5, gridY: 6, region: "South", color: "from-blue-500 to-blue-600" },
  { id: "IN-TR", name: "Tripura", abbr: "TR", gridX: 9, gridY: 6, region: "Northeast", color: "from-green-500 to-green-600" },
  { id: "IN-MZ", name: "Mizoram", abbr: "MZ", gridX: 11, gridY: 6, region: "Northeast", color: "from-green-500 to-green-600" },
  { id: "IN-DN", name: "Dadra & Nagar Haveli and Daman & Diu", abbr: "DN", gridX: 2, gridY: 6, region: "Union Territory", color: "from-sky-400 to-sky-500" },
  
  // Row 7
  { id: "IN-GA", name: "Goa", abbr: "GA", gridX: 3, gridY: 7, region: "West", color: "from-amber-500 to-amber-600" },
  { id: "IN-KA", name: "Karnataka", abbr: "KA", gridX: 4, gridY: 7, region: "South", color: "from-blue-500 to-blue-600" },
  { id: "IN-AP", name: "Andhra Pradesh", abbr: "AP", gridX: 5, gridY: 7, region: "South", color: "from-blue-500 to-blue-600" },
  
  // Row 8
  { id: "IN-KL", name: "Kerala", abbr: "KL", gridX: 3, gridY: 8, region: "South", color: "from-blue-500 to-blue-600" },
  { id: "IN-TN", name: "Tamil Nadu", abbr: "TN", gridX: 4, gridY: 8, region: "South", color: "from-blue-500 to-blue-600" },
  { id: "IN-AN", name: "Andaman & Nicobar Islands", abbr: "AN", gridX: 7, gridY: 8, region: "Union Territory", color: "from-sky-400 to-sky-500" },
  { id: "IN-LD", name: "Lakshadweep", abbr: "LD", gridX: 1, gridY: 8, region: "Union Territory", color: "from-sky-400 to-sky-500" },
  { id: "IN-PY", name: "Puducherry", abbr: "PY", gridX: 5, gridY: 8, region: "Union Territory", color: "from-sky-400 to-sky-500" },
];

const unionTerritoriesList = [
  { id: "IN-DL", name: "Delhi (NCT)", capital: "New Delhi" },
  { id: "IN-JK", name: "Jammu & Kashmir", capital: "Srinagar (S) / Jammu (W)" },
  { id: "IN-LA", name: "Ladakh", capital: "Leh" },
  { id: "IN-CH", name: "Chandigarh", capital: "Chandigarh" },
  { id: "IN-DN", name: "Dadra & Nagar Haveli and Daman & Diu", capital: "Daman" },
  { id: "IN-PY", name: "Puducherry", capital: "Puducherry" },
  { id: "IN-LD", name: "Lakshadweep", capital: "Kavaratti" },
  { id: "IN-AN", name: "Andaman & Nicobar Islands", capital: "Sri Vijaya Puram (Port Blair)" },
];

const utCoordinates: Record<string, { top: string; left: string }> = {
  "IN-DL": { top: "33%", left: "37%" },
  "IN-JK": { top: "14%", left: "30%" },
  "IN-LA": { top: "11%", left: "44%" },
  "IN-CH": { top: "26%", left: "36%" },
  "IN-DN": { top: "59%", left: "17%" },
  "IN-PY": { top: "84%", left: "42%" },
  "IN-LD": { top: "88%", left: "14%" },
  "IN-AN": { top: "83%", left: "88%" },
};

const regions = ["All", "North", "South", "East", "West", "Central", "Northeast", "Union Territory"] as const;

const fallbackStateDetails: Record<
  string,
  { capital: string; language: string; food: string; animal: string; bestTime: string }
> = {
  "IN-LA": {
    capital: "Leh",
    language: "Ladakhi, Tibetan, Urdu",
    food: "Thukpa, Skyu, Chhurpi",
    animal: "Snow Leopard",
    bestTime: "April to July",
  },
  "IN-HR": {
    capital: "Chandigarh",
    language: "Haryanvi, Hindi",
    food: "Bajra Khichri, Singri ki Sabzi",
    animal: "Blackbuck",
    bestTime: "October to March",
  },
  "IN-DL": {
    capital: "New Delhi",
    language: "Hindi, English, Punjabi",
    food: "Chole Bhature, Butter Chicken, Chaat",
    animal: "Nilgai",
    bestTime: "October to March",
  },
  "IN-SK": {
    capital: "Gangtok",
    language: "Nepali, Sikkimese, Lepcha",
    food: "Momos, Phagshapa, Gundruk",
    animal: "Red Panda",
    bestTime: "September to June",
  },
  "IN-AR": {
    capital: "Itanagar",
    language: "Nyishi, Adi, English",
    food: "Chura Sabji, Bamboo Shoot Pork",
    animal: "Mithun (Gayal)",
    bestTime: "October to April",
  },
  "IN-NL": {
    capital: "Kohima",
    language: "Naga languages, English",
    food: "Zutho, Smoked Pork with Anishi",
    animal: "Mithun",
    bestTime: "October to May",
  },
  "IN-CT": {
    capital: "Raipur",
    language: "Chhattisgarhi, Hindi",
    food: "Chhela Roti, Muthiya, Faraa",
    animal: "Wild Water Buffalo",
    bestTime: "October to March",
  },
  "IN-JH": {
    capital: "Ranchi",
    language: "Hindi, Santali, Khortha",
    food: "Litti Chokha, Dhuska, Rugra",
    animal: "Indian Elephant",
    bestTime: "October to March",
  },
  "IN-ML": {
    capital: "Shillong",
    language: "Khasi, Garo, English",
    food: "Jadoh, Doh-Khlieh, Pukhlein",
    animal: "Clouded Leopard",
    bestTime: "September to May",
  },
  "IN-MN": {
    capital: "Imphal",
    language: "Meitei (Manipuri)",
    food: "Eromba, Singju, Kangshoi",
    animal: "Sangai (Brow-antlered Deer)",
    bestTime: "October to April",
  },
  "IN-TR": {
    capital: "Agartala",
    language: "Bengali, Kokborok",
    food: "Mui Borok, Kosoi Bwtwi, Wahan Mosdeng",
    animal: "Phayre's Leaf Monkey",
    bestTime: "October to March",
  },
  "IN-MZ": {
    capital: "Aizawl",
    language: "Mizo, English",
    food: "Bai, Sawhchiar, Vawksa Rep",
    animal: "Hoolock Gibbon",
    bestTime: "October to March",
  },
};

export function IndiaMapGrid({ selectedState, onSelectState, unlockedBadges }: IndiaMapGridProps) {
  const [activeRegion, setActiveRegion] = React.useState<typeof regions[number]>("All");
  const [hoveredTile, setHoveredTile] = React.useState<string | null>(null);
  const [viewMode, setViewMode] = React.useState<"map" | "grid">("map");

  // Dynamically update interactive map paths inside the react-svgmap-india library
  React.useEffect(() => {
    if (viewMode !== "map") return;

    // Wait slightly to ensure SVG renders
    const timer = setTimeout(() => {
      const paths = document.querySelectorAll(".svgmap svg path");
      paths.forEach((path) => {
        const id = path.getAttribute("id");
        if (!id) return;

        // Reset all classes and default inline styling to ensure we override completely
        path.removeAttribute("style");
        path.classList.remove("selected-state", "region-highlighted", "region-dimmed", "badge-earned");

        // Match clicked map code to selectedState
        const isSelected =
          selectedState &&
          (selectedState.id === `IN-${id}` ||
            selectedState.id.endsWith(id) ||
            (id === "OR" && selectedState.id === "IN-OR") ||
            (id === "CG" && selectedState.id === "IN-CT") ||
            ((id === "DD" || id === "DN") && selectedState.id === "IN-DN"));

        // Match region highlighting
        let isRegionHighlighted = true;
        if (activeRegion !== "All") {
          const stateObj = statesData.find(
            (s) =>
              s.id === `IN-${id}` ||
              s.id.endsWith(id) ||
              (id === "OR" && s.id === "IN-OR") ||
              (id === "CG" && s.id === "IN-CT") ||
              ((id === "DD" || id === "DN") && s.id === "IN-DN")
          );
          const tileObj = tileStates.find(
            (t) =>
              t.id === `IN-${id}` ||
              t.id.endsWith(id) ||
              (id === "OR" && t.id === "IN-OR") ||
              (id === "CG" && t.id === "IN-CT") ||
              ((id === "DD" || id === "DN") && t.id === "IN-DN") ||
              t.abbr === id
          );
          const stateRegion = stateObj?.region || tileObj?.region;
          isRegionHighlighted = stateRegion === activeRegion;
        }

        // Check if badge earned for this state
        const stateObjForBadge = statesData.find(
          (s) =>
            s.id === `IN-${id}` ||
            s.id.endsWith(id) ||
            (id === "OR" && s.id === "IN-OR") ||
            (id === "CG" && s.id === "IN-CT") ||
            ((id === "DD" || id === "DN") && s.id === "IN-DN")
        );
        const hasBadge = stateObjForBadge && unlockedBadges.includes(`${stateObjForBadge.name} Explorer`);

        if (isSelected) {
          path.classList.add("selected-state");
        } else if (!isRegionHighlighted) {
          path.classList.add("region-dimmed");
        } else {
          path.classList.add("region-highlighted");
        }

        if (hasBadge) {
          path.classList.add("badge-earned");
        }

        // Dynamically wire mouse listeners for SVG map hovering
        const onMouseEnter = () => handleMouseOverState(id);
        const onMouseLeave = () => setHoveredTile(null);

        // Remove old events to avoid leaks
        if ((path as any)._onMouseEnter) {
          path.removeEventListener("mouseenter", (path as any)._onMouseEnter);
        }
        if ((path as any)._onMouseLeave) {
          path.removeEventListener("mouseleave", (path as any)._onMouseLeave);
        }

        path.addEventListener("mouseenter", onMouseEnter);
        path.addEventListener("mouseleave", onMouseLeave);

        (path as any)._onMouseEnter = onMouseEnter;
        (path as any)._onMouseLeave = onMouseLeave;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      const paths = document.querySelectorAll(".svgmap svg path");
      paths.forEach((path) => {
        if ((path as any)._onMouseEnter) {
          path.removeEventListener("mouseenter", (path as any)._onMouseEnter);
          delete (path as any)._onMouseEnter;
        }
        if ((path as any)._onMouseLeave) {
          path.removeEventListener("mouseleave", (path as any)._onMouseLeave);
          delete (path as any)._onMouseLeave;
        }
      });
    };
  }, [selectedState, activeRegion, unlockedBadges, viewMode]);

  // Handle click on SVG map state
  const handleMapClick = (value: string) => {
    const stateId = `IN-${value}`;
    let matchedId = stateId;
    if (value === "OR") matchedId = "IN-OR";
    if (value === "CG") matchedId = "IN-CT";
    if (value === "DD" || value === "DN") matchedId = "IN-DN";

    const stateObj = statesData.find(
      (s) =>
        s.id === matchedId ||
        s.id.endsWith(value) ||
        (value === "OR" && s.id === "IN-OR") ||
        ((value === "DD" || value === "DN") && s.id === "IN-DN")
    );

    if (stateObj) {
      onSelectState(stateObj);
      setHoveredTile(stateObj.name);
    } else {
      // Find fallback in tileStates
      const tileObj = tileStates.find((t) => t.id === matchedId || t.abbr === value);
      if (tileObj) {
        const details = fallbackStateDetails[tileObj.id] || {
          capital: "N/A",
          language: "Local Language",
          food: "Local Signature Delights",
          animal: "Information compilation in progress",
          bestTime: "October to March",
        };
        const fallbackState: StateData = {
          id: tileObj.id,
          name: tileObj.name,
          capital: details.capital,
          region: tileObj.region,
          language: details.language,
          food: details.food,
          bestTime: details.bestTime,
          animal: details.animal,
          color: tileObj.color,
          about: `${tileObj.name} is a majestic region. Specific history, official heritage landmarks, offbeat tours, and custom trivia quizzes are currently being compiled.`,
          attractions: [
            {
              name: "Majestic Landscapes",
              desc: "Explore the breathtaking scenic sights and local heritage.",
              category: "Nature",
            },
          ],
          quiz: [
            {
              question: `Which region of India is ${tileObj.name} situated in?`,
              options: ["North India", "South India", "East India", "West India"],
              answerIndex: 0,
              explanation: `${tileObj.name} is classified as part of the ${tileObj.region} region of India.`,
            },
          ],
        };
        onSelectState(fallbackState);
        setHoveredTile(tileObj.name);
      }
    }
  };

  // Get current hover name on mouseover
  const handleMouseOverState = (id: string) => {
    let matchedId = `IN-${id}`;
    if (id === "OR") matchedId = "IN-OR";
    if (id === "CG") matchedId = "IN-CT";
    if (id === "DD" || id === "DN") matchedId = "IN-DN";

    const stateObj = statesData.find(
      (s) =>
        s.id === matchedId ||
        s.id.endsWith(id) ||
        (id === "OR" && s.id === "IN-OR") ||
        ((id === "DD" || id === "DN") && s.id === "IN-DN")
    );
    const tileObj = tileStates.find(
      (t) =>
        t.abbr === id ||
        t.id.endsWith(id) ||
        ((id === "DD" || id === "DN") && t.id === "IN-DN")
    );
    setHoveredTile(stateObj?.name || tileObj?.name || id);
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Top Controls: View Mode & Region Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Toggle between Vector Map and Cardinal Grid */}
        <div className="flex bg-slate-950/80 border border-white/5 p-1 rounded-xl self-start">
          <button
            onClick={() => setViewMode("map")}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              viewMode === "map" ? "bg-amber-500 text-slate-950 font-black" : "text-slate-400 hover:text-white"
            }`}
          >
            <Map className="h-3.5 w-3.5" />
            Interactive Map
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              viewMode === "grid" ? "bg-amber-500 text-slate-950 font-black" : "text-slate-400 hover:text-white"
            }`}
          >
            <Grid className="h-3.5 w-3.5" />
            Cardinal Grid
          </button>
        </div>

        {/* Region Selector Filter */}
        <div className="flex flex-wrap gap-1 p-1 bg-slate-950/60 border border-white/5 rounded-xl max-w-full">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeRegion === region
                  ? "bg-amber-500/15 text-amber-500 border border-amber-500/30 font-black"
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Map Board */}
      <div className="relative p-6 bg-slate-950/60 border border-white/5 rounded-2xl shadow-2xl overflow-hidden min-h-[460px] flex items-center justify-center">
        {/* Directions Indicator compass style */}
        <div className="absolute top-4 left-4 flex flex-col items-center bg-slate-900/85 backdrop-blur-md p-2 rounded-lg border border-white/10 text-[9px] font-bold text-slate-500 font-mono tracking-wider z-25">
          <span className="border-b border-white/5 pb-0.5">N</span>
          <div className="flex justify-between w-10 py-0.5">
            <span>W</span>
            <span>E</span>
          </div>
          <span className="border-t border-white/5 pt-0.5">S</span>
        </div>

        {/* Floating status label */}
        <div className="absolute top-4 right-4 text-xs font-semibold text-slate-400 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 z-25 flex items-center gap-1.5">
          <Compass className="h-3.5 w-3.5 text-amber-500 animate-spin-slow" />
          {hoveredTile ? (
            <span>
              Region: <strong className="text-amber-500 font-bold">{hoveredTile}</strong>
            </span>
          ) : (
            <span>Click any state to explore</span>
          )}
        </div>

        <AnimatePresence mode="wait">
          {viewMode === "map" ? (
            <motion.div
              key="map-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center py-4"
            >
              <div className="relative w-full max-w-[500px]">
                <IndiaMap
                  onClick={handleMapClick}
                  size="100%"
                  mapColor="#1e293b"
                  strokeColor="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1px"
                  hoverColor="rgba(245, 158, 11, 0.5)"
                  className="interactive-india-svg"
                />

                {/* Highly-visible, gorgeous pinpoint marker for selected Union Territory */}
                {selectedState && utCoordinates[selectedState.id] && (
                  <motion.div
                    key={`pin-${selectedState.id}`}
                    initial={{ scale: 0, opacity: 0, y: -20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: -20 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    style={{
                      position: "absolute",
                      top: utCoordinates[selectedState.id].top,
                      left: utCoordinates[selectedState.id].left,
                    }}
                    className="z-30 pointer-events-none flex flex-col items-center -translate-x-1/2 -translate-y-[85%]"
                  >
                    {/* Floating Label */}
                    <div className="bg-slate-950/95 border-2 border-sky-400 text-white text-[11px] font-black px-2.5 py-1.5 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center gap-1.5 whitespace-nowrap mb-1">
                      <MapPin className="h-3.5 w-3.5 text-sky-400 fill-sky-400/20" />
                      <span>{selectedState.name}</span>
                    </div>

                    {/* Arrow/Stem of the Pin */}
                    <div className="w-2 h-2 bg-sky-400 rotate-45 -mt-2 mb-1 shadow-md" />

                    {/* Ring Pulse effect at the base */}
                    <div className="absolute w-10 h-10 rounded-full bg-sky-500/40 animate-ping top-[100%] mt-1 -translate-y-1/2" />
                    <div className="absolute w-3.5 h-3.5 rounded-full bg-sky-400 border-2 border-white top-[100%] mt-1 -translate-y-1/2 shadow-[0_0_10px_rgba(56,189,248,1)]" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center py-4"
            >
              <div
                className="grid grid-cols-11 gap-1.5 md:gap-2.5 w-full"
                style={{ minWidth: "440px", maxWidth: "640px", aspectRatio: "11 / 8.5" }}
              >
                {/* Loop over grid spaces */}
                {Array.from({ length: 88 }).map((_, i) => {
                  const x = (i % 11) + 1;
                  const y = Math.floor(i / 11) + 1;

                  // Find if a state is situated at this grid coordinate
                  const tile = tileStates.find((ts) => ts.gridX === x && ts.gridY === y);

                  if (!tile) {
                    // Empty space spacer grid element
                    return <div key={`spacer-${x}-${y}`} className="opacity-0 pointer-events-none" />;
                  }

                  const isSelected = selectedState?.id === tile.id;
                  const isHighlighted = activeRegion === "All" || tile.region === activeRegion;

                  // Check if user earned a badge for this state
                  const stateDb = statesData.find((sd) => sd.id === tile.id);
                  const hasBadge = stateDb && unlockedBadges.includes(`${stateDb.name} Explorer`);

                  return (
                    <motion.button
                      key={tile.id}
                      onClick={() => {
                        if (stateDb) {
                          onSelectState(stateDb);
                        } else {
                          // Create placeholder fallback StateData
                          handleMapClick(tile.abbr);
                        }
                      }}
                      onMouseEnter={() => setHoveredTile(tile.name)}
                      onMouseLeave={() => setHoveredTile(null)}
                      className={`relative flex flex-col items-center justify-center aspect-square rounded-xl transition-all duration-300 border focus:outline-none cursor-pointer ${
                        isSelected
                          ? "border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105 z-10 bg-slate-900 text-amber-400 font-black"
                          : isHighlighted
                          ? `bg-gradient-to-br ${tile.color} text-slate-950 border-transparent hover:scale-[1.04] hover:shadow-lg`
                          : "bg-white/5 text-slate-600 border-white/5 opacity-15"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isHighlighted ? 1 : 0.25,
                        scale: isSelected ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Abbreviation code */}
                      <span className="font-mono text-xs md:text-sm font-extrabold tracking-wider">{tile.abbr}</span>

                      {/* Micro full label */}
                      <span className="hidden md:block text-[8px] font-bold tracking-tight mt-0.5 truncate max-w-full px-0.5">
                        {tile.name}
                      </span>

                      {/* Badge unlocked micro indicator */}
                      {hasBadge && (
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Union Territories Quick Access */}
      <div className="flex flex-col space-y-3 bg-slate-900/40 p-5 rounded-2xl border border-white/5 shadow-inner">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-sky-400 animate-pulse" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Union Territories Quick Access
            </h4>
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/5 self-start sm:self-auto">
            Click to Explore UTs Separately
          </span>
        </div>
        <p className="text-xs text-slate-400">
          Since small island groups and specific non-contiguous federal territories can be hard to target on a standard map view, you can select and explore each Union Territory instantly below:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          {unionTerritoriesList.map((ut) => {
            const isSelected = selectedState?.id === ut.id;
            return (
              <button
                key={ut.id}
                onClick={() => {
                  const found = statesData.find((s) => s.id === ut.id);
                  if (found) {
                    onSelectState(found);
                  } else {
                    handleMapClick(ut.id.replace("IN-", ""));
                  }
                }}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-sky-500/10 border-sky-400/80 shadow-[0_0_12px_rgba(56,189,248,0.25)] scale-[1.02] z-10"
                    : "bg-slate-950/40 hover:bg-slate-900/60 border-white/5 hover:border-white/10 hover:scale-[1.01]"
                }`}
              >
                <span className={`text-xs font-bold ${isSelected ? "text-sky-400" : "text-slate-200"}`}>
                  {ut.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 font-medium truncate max-w-full">
                  Capital: <strong className="text-slate-300 font-semibold">{ut.capital}</strong>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Region Legend */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-400 bg-slate-900/40 p-4 rounded-xl border border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-indigo-400 to-indigo-500" />
          <span>North Region</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-blue-500 to-blue-600" />
          <span>South Region</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-rose-400 to-rose-500" />
          <span>East Region</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-amber-500 to-amber-600" />
          <span>West Region</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-lime-500 to-lime-600" />
          <span>Central Region</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-green-500 to-green-600" />
          <span>Northeast Region</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-sky-400 to-sky-500" />
          <span>Union Territories</span>
        </div>
      </div>
    </div>
  );
}
