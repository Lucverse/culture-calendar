"use client";

import React from "react";
import { Festival } from "@/types/festival";
import { getDaysUntil, formatEventDate, buildGoogleCalendarUrl } from "@/lib/calendar-utils";
import { Sparkles, Calendar, Utensils, Clock, ChevronRight, Share2 } from "lucide-react";

interface UpcomingHeroProps {
  festival: Festival;
  onOpenDetail: (festival: Festival) => void;
}

export const UpcomingHero: React.FC<UpcomingHeroProps> = ({ festival, onOpenDetail }) => {
  const countdown = getDaysUntil(festival.date2026);
  const googleCalUrl = buildGoogleCalendarUrl(festival);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 text-white shadow-2xl border border-stone-800">
      {/* Background Cover Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${festival.coverImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />

      <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[380px]">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              Next Celebration
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-stone-200 backdrop-blur-sm">
              {festival.culture} • {festival.originCountry}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400 text-stone-950 shadow-md shadow-amber-400/20">
              {countdown.isToday
                ? "🎉 Today is the Day!"
                : countdown.days > 0
                ? `⏳ In ${countdown.days} days`
                : "Recent celebration"}
            </span>
          </div>
        </div>

        {/* Center Content */}
        <div className="my-6 max-w-3xl">
          <p className="text-sm font-medium text-amber-300 tracking-wide uppercase">
            {formatEventDate(festival.date2026)} • {festival.approximateDate}
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2 leading-tight">
            {festival.name}
          </h2>
          <p className="text-base sm:text-lg text-stone-300 mt-3 font-light leading-relaxed">
            {festival.tagline}
          </p>

          {/* Quick couple highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-stone-400">Couple Ritual</p>
                <p className="text-xs sm:text-sm font-medium text-stone-200 line-clamp-1">
                  {festival.coupleRitual.title}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Utensils className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-stone-400">Couple Feast</p>
                <p className="text-xs sm:text-sm font-medium text-stone-200 line-clamp-1">
                  {festival.feast.dishName}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-stone-400">Prep in India</p>
                <p className="text-xs sm:text-sm font-medium text-stone-200">
                  {festival.indianFeasibility.prepTime} • {festival.indianFeasibility.estimatedBudgetInINR}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onOpenDetail(festival)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-medium text-sm sm:text-base shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Open Date-in-a-Box Kit</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-stone-200 font-medium text-xs sm:text-sm backdrop-blur-sm border border-white/10 transition-colors"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Add to Google Calendar</span>
          </a>

          <a
            href={`/api/export-ical?id=${festival.id}`}
            download
            className="flex items-center gap-1.5 px-3 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-stone-300 text-xs transition-colors"
            title="Download .ics for Apple/Outlook"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>.ics</span>
          </a>
        </div>
      </div>
    </div>
  );
};
