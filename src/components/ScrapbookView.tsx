"use client";

import React, { useState } from "react";
import { CoupleMemory } from "@/types/festival";
import { Star, Heart, Calendar, Trash2, Utensils, BookHeart, Sparkles } from "lucide-react";
import { formatEventDate } from "@/lib/calendar-utils";

interface ScrapbookViewProps {
  memories: CoupleMemory[];
  onDeleteMemory: (id: string) => Promise<void>;
  onExploreCalendar: () => void;
}

export const ScrapbookView: React.FC<ScrapbookViewProps> = ({
  memories,
  onDeleteMemory,
  onExploreCalendar,
}) => {
  const [filterTraditionOnly, setFilterTraditionOnly] = useState(false);

  const displayedMemories = filterTraditionOnly
    ? memories.filter((m) => m.isAnnualTradition)
    : memories;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-rose-100 via-amber-50 to-orange-100 dark:from-stone-900 dark:via-stone-850 dark:to-stone-900 border border-rose-200/60 dark:border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-xs tracking-wider uppercase mb-1">
            <BookHeart className="w-4 h-4" />
            <span>Couple Memory Scrapbook</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
            Our Cultural Celebrations
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Every festival you celebrate together builds a lifelong shared tradition.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterTraditionOnly(!filterTraditionOnly)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
              filterTraditionOnly
                ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                : "bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${filterTraditionOnly ? "fill-white" : "text-rose-500"}`} />
            <span>Annual Traditions Only</span>
          </button>
        </div>
      </div>

      {/* Scrapbook Cards Grid */}
      {displayedMemories.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white dark:bg-stone-900 rounded-3xl border border-dashed border-stone-300 dark:border-stone-800 space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 dark:bg-stone-800 flex items-center justify-center text-rose-500">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-800 dark:text-stone-200">
            {filterTraditionOnly
              ? "No annual traditions marked yet"
              : "No celebration memories logged yet"}
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Choose a festival from the calendar, celebrate your couple date night, and log your favorite moments and photos here!
          </p>
          <button
            onClick={onExploreCalendar}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium text-xs mt-2"
          >
            Explore World Festivals
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedMemories.map((mem) => (
            <div
              key={mem._id || Math.random().toString()}
              className="group bg-white dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-48 w-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                <img
                  src={
                    mem.photoUrl ||
                    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={mem.festivalName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                {mem.isAnnualTradition && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500 text-white shadow-sm">
                    <Heart className="w-3 h-3 fill-white" />
                    <span>Annual Tradition</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-semibold text-amber-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatEventDate(mem.celebratedDate)}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s <= mem.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-stone-400/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Memory Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                    {mem.festivalName}
                  </h4>

                  {mem.dishCooked && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 mt-1 font-medium">
                      <Utensils className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">{mem.dishCooked}</span>
                    </div>
                  )}

                  {mem.partnerNotes && (
                    <p className="text-xs text-stone-600 dark:text-stone-300 mt-3 p-3 rounded-xl bg-amber-50/50 dark:bg-stone-800/40 border border-amber-100 dark:border-stone-800 italic leading-relaxed">
                      &ldquo;{mem.partnerNotes}&rdquo;
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <span className="text-[10px]">
                    Saved to {mem._id?.startsWith("local-") ? "Local Vault" : "MongoDB"}
                  </span>
                  {mem._id && (
                    <button
                      onClick={() => onDeleteMemory(mem._id!)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
