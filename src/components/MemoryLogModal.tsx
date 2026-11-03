"use client";

import React, { useState } from "react";
import { Festival, CoupleMemory } from "@/types/festival";
import { X, Star, Heart, Camera, Utensils, Calendar, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface MemoryLogModalProps {
  festival: Festival | null;
  onClose: () => void;
  onSaveMemory: (memory: Partial<CoupleMemory>) => Promise<void>;
}

export const MemoryLogModal: React.FC<MemoryLogModalProps> = ({
  festival,
  onClose,
  onSaveMemory,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [isAnnualTradition, setIsAnnualTradition] = useState<boolean>(true);
  const [celebratedDate, setCelebratedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [dishCooked, setDishCooked] = useState<string>(festival?.feast.dishName || "");
  const [partnerNotes, setPartnerNotes] = useState<string>("");
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!festival) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSaveMemory({
        festivalId: festival.id,
        festivalName: festival.name,
        celebratedDate,
        rating,
        isAnnualTradition,
        partnerNotes,
        dishCooked,
        photoUrl: photoUrl || festival.coverImage,
      });

      // Celebration confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f43f5e", "#f59e0b", "#10b981", "#8b5cf6"],
      });

      onClose();
    } catch (err) {
      console.error("Failed to save memory:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-rose-500 to-amber-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold">Log Couple Memory</h3>
              <p className="text-xs text-rose-100">{festival.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-stone-800 dark:text-stone-200">
          {/* Celebrated Date */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span>When did you celebrate?</span>
            </label>
            <input
              type="date"
              required
              value={celebratedDate}
              onChange={(e) => setCelebratedDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
              How much did you both enjoy this celebration?
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-stone-300 dark:text-stone-700"
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-medium text-stone-500 dark:text-stone-400 ml-2">
                {rating === 5
                  ? "Unforgettable date!"
                  : rating === 4
                  ? "Really fun evening"
                  : rating === 3
                  ? "Nice experiment"
                  : "Needs tweaks next time"}
              </span>
            </div>
          </div>

          {/* Make Annual Tradition Toggle */}
          <div
            onClick={() => setIsAnnualTradition(!isAnnualTradition)}
            className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
              isAnnualTradition
                ? "bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200"
                : "bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Heart
                className={`w-4 h-4 ${
                  isAnnualTradition ? "fill-rose-500 text-rose-500" : "text-stone-400"
                }`}
              />
              <div>
                <p className="text-xs font-bold">Make this an Annual Tradition?</p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">
                  We want to repeat this celebration every year
                </p>
              </div>
            </div>
            <div
              className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
                isAnnualTradition ? "bg-rose-500" : "bg-stone-300 dark:bg-stone-700"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  isAnnualTradition ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </div>
          </div>

          {/* Dish Cooked */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-amber-500" />
              <span>What did you cook / eat?</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Crispy dumplings with chili crisp"
              value={dishCooked}
              onChange={(e) => setDishCooked(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>

          {/* Partner Notes & Memories */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Favorite moment or inside joke from the night:
            </label>
            <textarea
              rows={3}
              placeholder="e.g. We laughed so hard trying to pleat the dumplings. The playlist was magical and we spent two hours on the terrace..."
              value={partnerNotes}
              onChange={(e) => setPartnerNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 resize-none"
            />
          </div>

          {/* Photo URL or Image */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-blue-500" />
              <span>Photo Link (Optional):</span>
            </label>
            <input
              type="url"
              placeholder="Paste Google Photos link or image URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
            <p className="text-[10px] text-stone-500 mt-1">
              Leave blank to use the festival&apos;s aesthetic cover photo in your scrapbook!
            </p>
          </div>

          {/* Submit */}
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 text-xs font-medium hover:bg-stone-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-rose-500/20 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Saving Memory..." : "Save to Scrapbook"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
