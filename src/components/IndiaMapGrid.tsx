import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { StateData, statesData } from "../data/statesData";
import { Badge } from "./ui/Badge";
import IndiaMap from "react-svgmap-india";
import { Map, Grid, Info, Compass, HelpCircle, RefreshCw } from "lucide-react";

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
  
  // Row 7
  { id: "IN-GA", name: "Goa", abbr: "GA", gridX: 3, gridY: 7, region: "West", color: "from-amber-500 to-amber-600" },
  { id: "IN-KA", name: "Karnataka", abbr: "KA", gridX: 4, gridY: 7, region: "South", color: "from-blue-500 to-blue-600" },
  { id: "IN-AP", name: "Andhra Pradesh", abbr: "AP", gridX: 5, gridY: 7, region: "South", color: "from-blue-500 to-blue-600" },
  
  // Row 8
  { id: "IN-KL", name: "Kerala", abbr: "KL", gridX: 3, gridY: 8, region: "South", color: "from-blue-500 to-blue-600" },
  { id: "IN-TN", name: "Tamil Nadu", abbr: "TN", gridX: 4, gridY: 8, region: "South", color: "from-blue-500 to-blue-600" },
  { id: "IN-AN", name: "Andaman & Nicobar Islands", abbr: "AN", gridX: 7, gridY: 8, region: "Union Territory", color: "from-sky-400 to-sky-500" },
];

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
            (id === "CG" && selectedState.id === "IN-CT"));

        // Match region highlighting
        let isRegionHighlighted = true;
        if (activeRegion !== "All") {
          const stateObj = statesData.find(
            (s) =>
              s.id === `IN-${id}` ||
              s.id.endsWith(id) ||
              (id === "OR" && s.id === "IN-OR") ||
              (id === "CG" && s.id === "IN-CT")
          );
          const tileObj = tileStates.find(
            (t) =>
              t.id === `IN-${id}` ||
              t.id.endsWith(id) ||
              (id === "OR" && t.id === "IN-OR") ||
              (id === "CG" && t.id === "IN-CT") ||
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
            (id === "CG" && s.id === "IN-CT")
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
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedState, activeRegion, unlockedBadges, viewMode]);

  // Handle click on SVG map state
  const handleMapClick = (value: string) => {
    const stateId = `IN-${value}`;
    let matchedId = stateId;
    if (value === "OR") matchedId = "IN-OR";
    if (value === "CG") matchedId = "IN-CT";

    const stateObj = statesData.find(
      (s) => s.id === matchedId || s.id.endsWith(value) || (value === "OR" && s.id === "IN-OR")
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
    const stateObj = statesData.find(
      (s) => s.id === `IN-${id}` || s.id.endsWith(id) || (id === "OR" && s.id === "IN-OR")
    );
    const tileObj = tileStates.find((t) => t.abbr === id || t.id.endsWith(id));
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
