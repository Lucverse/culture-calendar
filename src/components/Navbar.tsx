"use client";

import React from "react";
import { CalendarHeart, BookHeart, ShoppingBag, Database } from "lucide-react";

interface NavbarProps {
  activeTab: "calendar" | "scrapbook" | "grocery";
  setActiveTab: (tab: "calendar" | "scrapbook" | "grocery") => void;
  memoriesCount: number;
  isMongoConnected: boolean;
  onOpenMongoInfo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  memoriesCount,
  isMongoConnected,
  onOpenMongoInfo,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-amber-50/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-amber-200/60 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab("calendar")}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
              <CalendarHeart className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  Milan
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                  For Couples
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 hidden sm:block">
                World Cultural Celebrations • Feasible in India
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === "calendar"
                  ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-sm"
                  : "text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800"
              }`}
            >
              <CalendarHeart className="w-4 h-4" />
              <span>Calendar</span>
            </button>

            <button
              onClick={() => setActiveTab("scrapbook")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all relative ${
                activeTab === "scrapbook"
                  ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-sm"
                  : "text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800"
              }`}
            >
              <BookHeart className="w-4 h-4 text-rose-500" />
              <span>Scrapbook</span>
              {memoriesCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-rose-500 text-white">
                  {memoriesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("grocery")}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === "grocery"
                  ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-sm"
                  : "text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800"
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Grocery Cart</span>
              <span className="md:hidden">Cart</span>
            </button>
          </nav>

          {/* Database indicator */}
          <div className="flex items-center">
            <button
              onClick={onOpenMongoInfo}
              title={
                isMongoConnected
                  ? "MongoDB Atlas Connected"
                  : "Using Local Couple Storage. Click to configure MongoDB."
              }
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isMongoConnected
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                  : "bg-amber-100/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-amber-300 dark:border-stone-700 hover:border-amber-400"
              }`}
            >
              <Database className={`w-3.5 h-3.5 ${isMongoConnected ? "text-emerald-500 animate-pulse" : "text-amber-600"}`} />
              <span className="hidden lg:inline">
                {isMongoConnected ? "MongoDB Active" : "Local Storage"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
