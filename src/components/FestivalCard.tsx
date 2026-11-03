"use client";

import React from "react";
import { Festival } from "@/types/festival";
import { Sparkles, Utensils, IndianRupee, Heart, CalendarPlus, ChevronRight } from "lucide-react";

interface FestivalCardProps {
  festival: Festival;
  onOpenDetail: (festival: Festival) => void;
  onQuickLog: (festival: Festival) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (festivalId: string) => void;
}

export const FestivalCard: React.FC<FestivalCardProps> = ({
  festival,
  onOpenDetail,
  onQuickLog,
  isWishlisted,
  onToggleWishlist,
}) => {
  const getEffortColor = (level: string) => {
    switch (level) {
      case "Easy & Cozy":
        return "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
      case "Half-Day Fun":
        return "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      case "Weekend Project":
        return "bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800";
      default:
        return "bg-stone-100 text-stone-800 border-stone-200";
    }
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-stone-900 rounded-3xl overflow-hidden border border-amber-100/80 dark:border-stone-800 shadow-sm hover:shadow-xl hover:border-amber-200 dark:hover:border-stone-700 transition-all duration-300">
      {/* Image Header */}
      <div className="relative h-48 w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <img
          src={festival.coverImage}
          alt={festival.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

        {/* Culture & Origin Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-stone-900/80 text-white backdrop-blur-md">
            {festival.culture}
          </span>
          <span className="px-2 py-1 rounded-full text-[11px] font-medium bg-white/80 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 backdrop-blur-md">
            {festival.originCountry}
          </span>
        </div>

        {/* Wishlist toggle */}
        {onToggleWishlist && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(festival.id);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-stone-900/40 hover:bg-stone-900/70 text-white backdrop-blur-md transition-all active:scale-90"
            title={isWishlisted ? "Remove from couple wishlist" : "Add to couple wishlist"}
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? "fill-rose-500 text-rose-500" : "text-white"
              }`}
            />
          </button>
        )}

        {/* Bottom date banner on image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 drop-shadow">
            {festival.approximateDate}
          </span>
          <span
            className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border backdrop-blur-sm ${getEffortColor(
              festival.indianFeasibility.effortLevel
            )}`}
          >
            {festival.indianFeasibility.effortLevel}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
            {festival.name}
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2 leading-relaxed">
            {festival.tagline}
          </p>

          {/* Couple feature highlights */}
          <div className="mt-4 space-y-2 pt-3 border-t border-stone-100 dark:border-stone-800/60">
            <div className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
              <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">
                <strong className="text-stone-900 dark:text-stone-100">Ritual:</strong>{" "}
                {festival.coupleRitual.title}
              </span>
            </div>

            <div className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
              <Utensils className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">
                <strong className="text-stone-900 dark:text-stone-100">Feast:</strong>{" "}
                {festival.feast.dishName}
              </span>
            </div>
          </div>
        </div>

        {/* India feasibility footer & CTA */}
        <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800">
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-3">
            <span className="flex items-center gap-1 font-medium text-stone-700 dark:text-stone-300">
              <IndianRupee className="w-3 h-3 text-emerald-600" />
              {festival.indianFeasibility.estimatedBudgetInINR}
            </span>
            <span className="text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-200/50 dark:border-amber-900/50">
              Blinkit/Zepto ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetail(festival)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-rose-600 dark:hover:bg-rose-500 text-white dark:text-stone-900 hover:text-white dark:hover:text-white font-medium text-xs transition-all shadow-sm"
            >
              <span>Explore Kit</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onQuickLog(festival)}
              className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-rose-300 dark:hover:border-rose-700 text-stone-600 dark:text-stone-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all"
              title="Log celebration memory"
            >
              <CalendarPlus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
