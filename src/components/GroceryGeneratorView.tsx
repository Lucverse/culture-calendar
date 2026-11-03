"use client";

import React, { useState } from "react";
import { Festival } from "@/types/festival";
import { generateShoppingListText } from "@/lib/calendar-utils";
import { ShoppingBag, Copy, Check, Download, CheckSquare, Square, Sparkles } from "lucide-react";

interface GroceryGeneratorViewProps {
  festivals: Festival[];
}

export const GroceryGeneratorView: React.FC<GroceryGeneratorViewProps> = ({ festivals }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    festivals.slice(0, 3).map((f) => f.id)
  );
  const [copied, setCopied] = useState(false);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectAll = () => setSelectedIds(festivals.map((f) => f.id));
  const clearAll = () => setSelectedIds([]);
  const selectNext3 = () => setSelectedIds(festivals.slice(0, 3).map((f) => f.id));

  const selectedFestivals = festivals.filter((f) => selectedIds.includes(f.id));
  const generatedText = generateShoppingListText(selectedFestivals);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `couple-festival-groceries.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-50 dark:from-stone-900 dark:via-stone-850 dark:to-stone-900 border border-emerald-200/60 dark:border-stone-800">
        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-1">
          <ShoppingBag className="w-4 h-4" />
          <span>Quick Commerce Generator</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
          Couple Feast & Grocery Cart
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Pick the upcoming cultural date nights you want to celebrate, and get an organized Blinkit/Zepto shopping list with local Indian substitutions ready to paste into WhatsApp!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Festival Selector */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
              Select Celebrations ({selectedIds.length})
            </h3>
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={selectNext3}
                className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 font-medium"
              >
                Next 3
              </button>
              <button
                onClick={selectAll}
                className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 font-medium"
              >
                All
              </button>
              <button
                onClick={clearAll}
                className="px-2 py-1 text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {festivals.map((f) => {
              const isSelected = selectedIds.includes(f.id);
              return (
                <div
                  key={f.id}
                  onClick={() => toggleSelect(f.id)}
                  className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800"
                      : "bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isSelected ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                        {f.name}
                      </p>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">
                        {f.approximateDate} • {f.feast.dishName}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-100/70 dark:bg-emerald-950">
                    {f.indianFeasibility.estimatedBudgetInINR}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Generated Text & Copy */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 border border-stone-200 dark:border-stone-800 shadow-sm flex-1 flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                  Ready-to-Paste Grocery List
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  disabled={selectedIds.length === 0}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all disabled:opacity-40"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Copied to Clipboard!" : "Copy for WhatsApp / Notes"}</span>
                </button>

                <button
                  onClick={handleDownload}
                  disabled={selectedIds.length === 0}
                  className="p-2 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-40"
                  title="Download as .txt"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {selectedIds.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-stone-400">
                <ShoppingBag className="w-10 h-10 mb-2 opacity-50" />
                <p className="text-xs">Select at least one festival from the left to generate your grocery list.</p>
              </div>
            ) : (
              <textarea
                readOnly
                value={generatedText}
                className="flex-1 w-full min-h-[380px] p-4 font-mono text-xs text-stone-800 dark:text-stone-200 bg-stone-50 dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-800 focus:outline-none resize-none leading-relaxed"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
