"use client";

import React, { useState } from "react";
import { Festival } from "@/types/festival";
import { buildGoogleCalendarUrl, formatEventDate } from "@/lib/calendar-utils";
import {
  X,
  Sparkles,
  Utensils,
  ShoppingBag,
  BookOpen,
  Music,
  Tv,
  Clock,
  IndianRupee,
  Calendar,
  Share2,
  Copy,
  Check,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

interface FestivalDetailModalProps {
  festival: Festival | null;
  onClose: () => void;
  onOpenLogMemory: (festival: Festival) => void;
}

export const FestivalDetailModal: React.FC<FestivalDetailModalProps> = ({
  festival,
  onClose,
  onOpenLogMemory,
}) => {
  const [activeTab, setActiveTab] = useState<"ritual" | "feast" | "feasibility" | "history">("ritual");
  const [copiedList, setCopiedList] = useState(false);

  if (!festival) return null;

  const googleCalUrl = buildGoogleCalendarUrl(festival);

  const handleCopyGroceries = () => {
    const list =
      `🛒 ${festival.name} - Couple Grocery List (India)\n\n` +
      `⚡ Blinkit / Zepto Items:\n` +
      festival.indianFeasibility.quickCommerceItems.map((i) => ` • [ ] ${i}`).join("\n") +
      (festival.indianFeasibility.localMarketItems.length > 0
        ? `\n\n🌸 Local Mandi / Vendor:\n` +
          festival.indianFeasibility.localMarketItems.map((i) => ` • [ ] ${i}`).join("\n")
        : "") +
      (festival.indianFeasibility.substitutions.length > 0
        ? `\n\n💡 Indian Substitutions:\n` +
          festival.indianFeasibility.substitutions
            .map((s) => ` • ${s.authenticItem} ➔ ${s.indianSubstitute} (${s.note})`)
            .join("\n")
        : "");

    navigator.clipboard.writeText(list);
    setCopiedList(true);
    setTimeout(() => setCopiedList(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col max-h-[92vh]">
        {/* Header Cover Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-stone-900 shrink-0">
          <img
            src={festival.coverImage}
            alt={festival.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-stone-200 hover:text-white backdrop-blur-md transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badges */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/80 backdrop-blur-md">
                {festival.culture}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md">
                {festival.originCountry}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-400/90 text-stone-950">
                {formatEventDate(festival.date2026)}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight">
              {festival.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 line-clamp-1 font-light">
              {festival.tagline}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 bg-amber-50/50 dark:bg-stone-900 px-4 sm:px-6 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab("ritual")}
            className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === "ritual"
                ? "border-rose-500 text-rose-600 dark:text-rose-400"
                : "border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900"
            }`}
          >
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>Couple Date Kit</span>
          </button>

          <button
            onClick={() => setActiveTab("feast")}
            className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === "feast"
                ? "border-amber-500 text-amber-600 dark:text-amber-400"
                : "border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900"
            }`}
          >
            <Utensils className="w-4 h-4 text-amber-500" />
            <span>Feast & Toast</span>
          </button>

          <button
            onClick={() => setActiveTab("feasibility")}
            className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === "feasibility"
                ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                : "border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900"
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-emerald-500" />
            <span>India Feasibility & Groceries</span>
          </button>

          <button
            onClick={() => setActiveTab("history")}
            className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === "history"
                ? "border-purple-500 text-purple-600 dark:text-purple-400"
                : "border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900"
            }`}
          >
            <BookOpen className="w-4 h-4 text-purple-500" />
            <span>History & Meaning</span>
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-stone-800 dark:text-stone-200">
          {/* TAB 1: COUPLE DATE RITUAL */}
          {activeTab === "ritual" && (
            <div className="space-y-6">
              <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/60 rounded-2xl p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-rose-900 dark:text-rose-200">
                    {festival.coupleRitual.title}
                  </h3>
                  <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-stone-800 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                    <Clock className="w-3.5 h-3.5" />
                    {festival.coupleRitual.estimatedDuration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {festival.coupleRitual.description}
                </p>
              </div>

              {/* Step by step checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                  Step-by-Step Experience Guide:
                </h4>
                <div className="space-y-2.5">
                  {festival.coupleRitual.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-800"
                    >
                      <span className="w-6 h-6 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials Needed */}
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-stone-800/40 border border-amber-200/60 dark:border-stone-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2">
                  What to have ready:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                  {festival.coupleRitual.materialsNeeded.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ambiance Kit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 mb-2">
                    <Music className="w-4 h-4" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">Music & Vibe</h4>
                  </div>
                  <p className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                    {festival.ambiance.suggestedPlaylist}
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                    {festival.ambiance.lightingAndDecor}
                  </p>
                  <a
                    href={`https://open.spotify.com/search/${encodeURIComponent(
                      festival.ambiance.spotifySearchQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-emerald-600 hover:text-emerald-700 underline"
                  >
                    <span>Search Playlist on Spotify</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2">
                    <Tv className="w-4 h-4" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">Movie / Show Pairing</h4>
                  </div>
                  <p className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                    {festival.ambiance.movieOrShowRecommendation.title}
                    {festival.ambiance.movieOrShowRecommendation.year && (
                      <span className="text-stone-500 font-normal">
                        {" "}
                        ({festival.ambiance.movieOrShowRecommendation.year})
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                    {festival.ambiance.movieOrShowRecommendation.whyWatch}
                  </p>
                  {festival.ambiance.movieOrShowRecommendation.platformHint && (
                    <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 font-medium">
                      {festival.ambiance.movieOrShowRecommendation.platformHint}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEAST & RECIPES */}
          {activeTab === "feast" && (
            <div className="space-y-6">
              {/* Main Dish */}
              <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-stone-800/40 border border-amber-200/60 dark:border-stone-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Couple Signature Meal
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                  {festival.feast.dishName}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                  {festival.feast.dishDescription}
                </p>

                <div className="mt-4 pt-3 border-t border-amber-200/40 dark:border-stone-700/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                    Quick Cooking Guide (Portioned for Two):
                  </h4>
                  <div className="space-y-2">
                    {festival.feast.quickRecipeSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                        <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">
                          {idx + 1}.
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {festival.feast.vegetarianOption && (
                  <div className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
                    <strong>🌱 Vegetarian Note:</strong> {festival.feast.vegetarianOption}
                  </div>
                )}
              </div>

              {/* Toast Drink */}
              <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Couple Toast & Drink
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mt-1">
                  {festival.feast.drinkName}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                  {festival.feast.drinkDescription}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: INDIA FEASIBILITY & GROCERIES */}
          {activeTab === "feasibility" && (
            <div className="space-y-6">
              {/* Feasibility Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <p className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400">Effort</p>
                  <p className="text-sm font-bold text-emerald-900 dark:text-emerald-200 mt-0.5">
                    {festival.indianFeasibility.effortLevel}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
                  <p className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">Budget (INR)</p>
                  <p className="text-sm font-bold text-amber-900 dark:text-amber-200 mt-0.5 flex items-center">
                    <IndianRupee className="w-3.5 h-3.5" />
                    {festival.indianFeasibility.estimatedBudgetInINR.replace("₹", "")}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
                  <p className="text-[10px] uppercase font-bold text-rose-700 dark:text-rose-400">Prep Time</p>
                  <p className="text-sm font-bold text-rose-900 dark:text-rose-200 mt-0.5">
                    {festival.indianFeasibility.prepTime}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                  <p className="text-[10px] uppercase font-bold text-purple-700 dark:text-purple-400">Where to buy</p>
                  <p className="text-xs font-bold text-purple-900 dark:text-purple-200 mt-1">
                    Blinkit / Zepto
                  </p>
                </div>
              </div>

              {/* Quick commerce shopping list */}
              <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                      Blinkit / Zepto / Instamart Items
                    </h4>
                  </div>
                  <button
                    onClick={handleCopyGroceries}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
                  >
                    {copiedList ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedList ? "Copied List!" : "Copy Grocery List"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                  {festival.indianFeasibility.quickCommerceItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800"
                    >
                      <span className="w-4 h-4 rounded border border-stone-300 dark:border-stone-600 flex items-center justify-center shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {festival.indianFeasibility.localMarketItems.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-700">
                    <p className="text-xs font-semibold text-stone-600 dark:text-stone-400 mb-2">
                      🌸 Local Indian Vendors / Sabzi Mandi:
                    </p>
                    <ul className="text-xs text-stone-700 dark:text-stone-300 space-y-1">
                      {festival.indianFeasibility.localMarketItems.map((loc, idx) => (
                        <li key={idx}>• {loc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Indian Substitution Matrix */}
              {festival.indianFeasibility.substitutions.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
                    Smart Indian Ingredient Substitutions:
                  </h4>
                  <div className="space-y-2.5">
                    {festival.indianFeasibility.substitutions.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-amber-50/60 dark:bg-stone-800/40 border border-amber-200/50 dark:border-stone-800 text-xs"
                      >
                        <div className="flex flex-wrap items-center gap-1.5 font-semibold text-stone-900 dark:text-stone-100">
                          <span className="line-through text-stone-500">{sub.authenticItem}</span>
                          <span className="text-rose-500">➔</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                            {sub.indianSubstitute}
                          </span>
                        </div>
                        <p className="text-stone-600 dark:text-stone-300 mt-1">{sub.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pro Tip */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200">
                <Lightbulb className="w-5 h-5 text-rose-500 shrink-0" />
                <div>
                  <strong className="font-semibold">Couple Pro Tip for India:</strong>
                  <p className="mt-0.5 text-stone-700 dark:text-stone-300">
                    {festival.indianFeasibility.proTip}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HISTORY & MEANING */}
          {activeTab === "history" && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                  What {festival.name} Means:
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {festival.summary}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Cultural Roots & Significance:
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {festival.culturalSignificance}
                </p>
              </div>

              <div className="flex items-start gap-2.5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200">
                <HeartHandshake className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Appreciation, Not Appropriation:</strong> Celebrating diverse cultures as a couple means learning their stories, respecting the symbolic meaning of rituals, and honoring traditions in their authentic spirit.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-stone-200 dark:border-stone-800 bg-amber-50/40 dark:bg-stone-900/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <a
              href={googleCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-xs font-medium text-stone-800 dark:text-stone-200 transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Google Calendar</span>
            </a>

            <a
              href={`/api/export-ical?id=${festival.id}`}
              download
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-xs font-medium text-stone-700 dark:text-stone-300 transition-colors shadow-sm"
              title="Download .ics event file"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Download .ics</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenLogMemory(festival);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-rose-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Log Celebration Memory</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
