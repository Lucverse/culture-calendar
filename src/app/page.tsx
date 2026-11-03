"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FESTIVALS } from "@/data/festivals";
import { Festival, CoupleMemory, CultureRegion } from "@/types/festival";
import { Navbar } from "@/components/Navbar";
import { UpcomingHero } from "@/components/UpcomingHero";
import { FestivalCard } from "@/components/FestivalCard";
import { FestivalDetailModal } from "@/components/FestivalDetailModal";
import { MemoryLogModal } from "@/components/MemoryLogModal";
import { ScrapbookView } from "@/components/ScrapbookView";
import { GroceryGeneratorView } from "@/components/GroceryGeneratorView";
import { MongoSetupModal } from "@/components/MongoSetupModal";
import {
  Search,
  LayoutGrid,
  CalendarDays,
  Sparkles,
  Heart,
  Globe2,
  Calendar,
  Filter,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"calendar" | "scrapbook" | "grocery">("calendar");
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCulture, setSelectedCulture] = useState<string>("All");
  const [selectedMonth, setSelectedMonth] = useState<string>("All");
  const [selectedEffort, setSelectedEffort] = useState<string>("All");
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  // Modals state
  const [detailFestival, setDetailFestival] = useState<Festival | null>(null);
  const [logFestival, setLogFestival] = useState<Festival | null>(null);
  const [isMongoModalOpen, setIsMongoModalOpen] = useState(false);

  // Data states
  const [memories, setMemories] = useState<CoupleMemory[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isMongoConnected, setIsMongoConnected] = useState(false);

  // Load status and memories
  useEffect(() => {
    // 1. Check MongoDB status
    fetch("/api/status")
      .then((res) => res.json())
      .then((data) => {
        setIsMongoConnected(Boolean(data?.mongodb?.connected));
      })
      .catch(() => setIsMongoConnected(false));

    // 2. Fetch memories from API (with localStorage fallback)
    fetch("/api/memories")
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data && res.data.length > 0) {
          setMemories(res.data);
          localStorage.setItem("couple_memories", JSON.stringify(res.data));
        } else {
          // Check local storage
          const local = localStorage.getItem("couple_memories");
          if (local) {
            try {
              setMemories(JSON.parse(local));
            } catch (e) {
              console.error(e);
            }
          }
        }
      })
      .catch(() => {
        const local = localStorage.getItem("couple_memories");
        if (local) {
          try {
            setMemories(JSON.parse(local));
          } catch (e) {
            console.error(e);
          }
        }
      });

    // 3. Load wishlist
    const savedWishlist = localStorage.getItem("couple_wishlist");
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Toggle wishlist
  const handleToggleWishlist = (festivalId: string) => {
    let updated: string[];
    if (wishlist.includes(festivalId)) {
      updated = wishlist.filter((id) => id !== festivalId);
    } else {
      updated = [...wishlist, festivalId];
    }
    setWishlist(updated);
    localStorage.setItem("couple_wishlist", JSON.stringify(updated));
  };

  // Save memory handler
  const handleSaveMemory = async (newMemory: Partial<CoupleMemory>) => {
    try {
      const res = await fetch("/api/memories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMemory),
      });
      const data = await res.json();
      const saved: CoupleMemory = data.data || {
        ...newMemory,
        _id: "local-" + Date.now(),
        createdAt: new Date().toISOString(),
      };

      const updated = [saved, ...memories];
      setMemories(updated);
      localStorage.setItem("couple_memories", JSON.stringify(updated));
    } catch (err) {
      console.error("Error saving memory:", err);
      const fallback: CoupleMemory = {
        ...(newMemory as CoupleMemory),
        _id: "local-" + Date.now(),
        createdAt: new Date().toISOString(),
      };
      const updated = [fallback, ...memories];
      setMemories(updated);
      localStorage.setItem("couple_memories", JSON.stringify(updated));
    }
  };

  // Delete memory handler
  const handleDeleteMemory = async (id: string) => {
    try {
      if (!id.startsWith("local-")) {
        await fetch(`/api/memories?id=${id}`, { method: "DELETE" });
      }
      const updated = memories.filter((m) => m._id !== id);
      setMemories(updated);
      localStorage.setItem("couple_memories", JSON.stringify(updated));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Identify next upcoming celebration
  const upcomingFestival = useMemo(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // 1-12
    const currentDay = today.getDate();

    // Look for next celebration this year
    const sorted = [...FESTIVALS].sort((a, b) => {
      const dateA = new Date(a.date2026).getTime();
      const dateB = new Date(b.date2026).getTime();
      return dateA - dateB;
    });

    const next = sorted.find((f) => {
      const fDate = new Date(f.date2026);
      return (
        fDate.getMonth() + 1 > currentMonth ||
        (fDate.getMonth() + 1 === currentMonth && fDate.getDate() >= currentDay)
      );
    });

    return next || sorted[0];
  }, []);

  // Filtered festivals
  const filteredFestivals = useMemo(() => {
    return FESTIVALS.filter((f) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          f.name.toLowerCase().includes(q) ||
          f.culture.toLowerCase().includes(q) ||
          f.originCountry.toLowerCase().includes(q) ||
          f.tagline.toLowerCase().includes(q) ||
          f.feast.dishName.toLowerCase().includes(q) ||
          f.coupleRitual.title.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Culture
      if (selectedCulture !== "All" && f.culture !== selectedCulture) {
        return false;
      }

      // Month
      if (selectedMonth !== "All" && f.month !== parseInt(selectedMonth, 10)) {
        return false;
      }

      // Effort
      if (selectedEffort !== "All" && f.indianFeasibility.effortLevel !== selectedEffort) {
        return false;
      }

      // Wishlist
      if (showWishlistOnly && !wishlist.includes(f.id)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCulture, selectedMonth, selectedEffort, showWishlistOnly, wishlist]);

  // Group by month for timeline view
  const groupedByMonth = useMemo(() => {
    const groups: { [monthName: string]: Festival[] } = {};
    const monthsOrder = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    monthsOrder.forEach((m) => {
      groups[m] = [];
    });

    filteredFestivals.forEach((f) => {
      if (!groups[f.monthName]) {
        groups[f.monthName] = [];
      }
      groups[f.monthName].push(f);
    });

    return monthsOrder
      .filter((m) => groups[m].length > 0)
      .map((m) => ({ monthName: m, festivals: groups[m] }));
  }, [filteredFestivals]);

  const culturesList: ("All" | CultureRegion)[] = [
    "All",
    "East Asian",
    "Celtic & Western",
    "Latin American",
    "Indian & South Asian",
    "European & Mediterranean",
    "Middle Eastern & Persian",
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#0f1115] text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        memoriesCount={memories.length}
        isMongoConnected={isMongoConnected}
        onOpenMongoInfo={() => setIsMongoModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1 w-full">
        {/* TAB 1: CALENDAR & EXPLORER */}
        {activeTab === "calendar" && (
          <div className="space-y-8">
            {/* Upcoming Hero Spotlight */}
            {upcomingFestival && !searchQuery && selectedCulture === "All" && (
              <UpcomingHero
                festival={upcomingFestival}
                onOpenDetail={(f) => setDetailFestival(f)}
              />
            )}

            {/* Filter and Search Bar Section */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm space-y-4">
              {/* Search Bar + View Toggle */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by festival, tacos, dumplings, pumpkin, flowers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50/70 dark:bg-stone-850 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-stone-400 hover:text-stone-600 absolute right-3.5 top-1/2 -translate-y-1/2"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* View Mode & Wishlist toggles */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => setShowWishlistOnly(!showWishlistOnly)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      showWishlistOnly
                        ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                        : "bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700"
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${showWishlistOnly ? "fill-white" : "text-rose-500"}`} />
                    <span>Wishlist ({wishlist.length})</span>
                  </button>

                  <div className="flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded-lg transition-colors ${
                        viewMode === "grid"
                          ? "bg-white dark:bg-stone-700 text-rose-600 shadow-xs"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                      title="Grid View"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("timeline")}
                      className={`p-1.5 rounded-lg transition-colors ${
                        viewMode === "timeline"
                          ? "bg-white dark:bg-stone-700 text-rose-600 shadow-xs"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                      title="Monthly Timeline View"
                    >
                      <CalendarDays className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Culture Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mr-1 shrink-0 flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5 text-stone-400" />
                  Culture:
                </span>
                {culturesList.map((culture) => (
                  <button
                    key={culture}
                    onClick={() => setSelectedCulture(culture)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                      selectedCulture === culture
                        ? "bg-rose-500 text-white shadow-sm font-semibold"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
                    }`}
                  >
                    {culture}
                  </button>
                ))}
              </div>

              {/* Secondary Filters (Month & Effort) */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-100 dark:border-stone-800/80 text-xs">
                {/* Month Dropdown */}
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span className="text-stone-500 font-medium">Month:</span>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="px-2.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium focus:outline-none"
                  >
                    <option value="All">All 12 Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                {/* Effort Level */}
                <div className="flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-stone-400" />
                  <span className="text-stone-500 font-medium">Effort in India:</span>
                  <select
                    value={selectedEffort}
                    onChange={(e) => setSelectedEffort(e.target.value)}
                    className="px-2.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium focus:outline-none"
                  >
                    <option value="All">All Effort Levels</option>
                    <option value="Easy & Cozy">Easy & Cozy (30 mins)</option>
                    <option value="Half-Day Fun">Half-Day Fun</option>
                    <option value="Weekend Project">Weekend Project</option>
                  </select>
                </div>

                {(selectedCulture !== "All" ||
                  selectedMonth !== "All" ||
                  selectedEffort !== "All" ||
                  searchQuery ||
                  showWishlistOnly) && (
                  <button
                    onClick={() => {
                      setSelectedCulture("All");
                      setSelectedMonth("All");
                      setSelectedEffort("All");
                      setSearchQuery("");
                      setShowWishlistOnly(false);
                    }}
                    className="text-xs text-rose-500 hover:text-rose-600 underline font-medium ml-auto"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Festivals Display */}
            {filteredFestivals.length === 0 ? (
              <div className="text-center py-16 px-4 bg-white dark:bg-stone-900 rounded-3xl border border-dashed border-stone-300 dark:border-stone-800 space-y-3">
                <Sparkles className="w-10 h-10 mx-auto text-amber-500 opacity-60" />
                <h3 className="font-serif text-lg font-bold">No celebrations found</h3>
                <p className="text-xs text-stone-500">
                  Try adjusting your search or filters to discover other world celebrations.
                </p>
              </div>
            ) : viewMode === "grid" ? (
              /* Grid View */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredFestivals.map((f) => (
                  <FestivalCard
                    key={f.id}
                    festival={f}
                    onOpenDetail={(fest) => setDetailFestival(fest)}
                    onQuickLog={(fest) => setLogFestival(fest)}
                    isWishlisted={wishlist.includes(f.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            ) : (
              /* Timeline View Grouped by Month */
              <div className="space-y-10">
                {groupedByMonth.map((group) => (
                  <div key={group.monthName} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-serif font-bold text-sm">
                        {group.monthName}
                      </span>
                      <div className="flex-1 h-px bg-stone-200 dark:bg-stone-800" />
                      <span className="text-xs text-stone-400">
                        {group.festivals.length} celebration
                        {group.festivals.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.festivals.map((f) => (
                        <FestivalCard
                          key={f.id}
                          festival={f}
                          onOpenDetail={(fest) => setDetailFestival(fest)}
                          onQuickLog={(fest) => setLogFestival(fest)}
                          isWishlisted={wishlist.includes(f.id)}
                          onToggleWishlist={handleToggleWishlist}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: COUPLE SCRAPBOOK */}
        {activeTab === "scrapbook" && (
          <ScrapbookView
            memories={memories}
            onDeleteMemory={handleDeleteMemory}
            onExploreCalendar={() => setActiveTab("calendar")}
          />
        )}

        {/* TAB 3: GROCERY GENERATOR */}
        {activeTab === "grocery" && <GroceryGeneratorView festivals={FESTIVALS} />}
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-amber-200/50 dark:border-stone-800 text-center text-xs text-stone-500 bg-amber-50/30 dark:bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-800 dark:text-stone-200">
              Milan Culture Calendar
            </span>
            <span>•</span>
            <span>Celebrating love across every culture in India</span>
          </div>

          <div className="flex items-center gap-4 text-stone-500">
            <button
              onClick={() => setIsMongoModalOpen(true)}
              className="hover:text-stone-800 dark:hover:text-stone-200 underline"
            >
              MongoDB Sync Info
            </button>
            <a
              href="/api/export-ical"
              download
              className="hover:text-stone-800 dark:hover:text-stone-200 underline"
            >
              Export Full Calendar (.ics)
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <FestivalDetailModal
        festival={detailFestival}
        onClose={() => setDetailFestival(null)}
        onOpenLogMemory={(f) => setLogFestival(f)}
      />

      <MemoryLogModal
        festival={logFestival}
        onClose={() => setLogFestival(null)}
        onSaveMemory={handleSaveMemory}
      />

      <MongoSetupModal
        isOpen={isMongoModalOpen}
        onClose={() => setIsMongoModalOpen(false)}
        isMongoConnected={isMongoConnected}
        memoriesCount={memories.length}
      />
    </div>
  );
}
