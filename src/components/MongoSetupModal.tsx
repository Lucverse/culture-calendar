"use client";

import React from "react";
import { X, Database, CheckCircle2, AlertCircle, Copy, ExternalLink, HardDrive } from "lucide-react";

interface MongoSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMongoConnected: boolean;
  memoriesCount: number;
}

export const MongoSetupModal: React.FC<MongoSetupModalProps> = ({
  isOpen,
  onClose,
  isMongoConnected,
  memoriesCount,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const sampleEnv = `MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/culture_calendar?retryWrites=true&w=majority`;

  const handleCopyEnv = () => {
    navigator.clipboard.writeText(sampleEnv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 p-6 text-stone-800 dark:text-stone-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-600 dark:text-stone-300"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div
            className={`p-3 rounded-2xl ${
              isMongoConnected
                ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                : "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400"
            }`}
          >
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold">Database & Cloud Sync</h3>
            <p className="text-xs text-stone-500">MongoDB configuration status</p>
          </div>
        </div>

        {/* Current Status Card */}
        <div
          className={`p-4 rounded-2xl border mb-5 ${
            isMongoConnected
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
              : "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200"
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-1">
            {isMongoConnected ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>MongoDB Active & Connected</span>
              </>
            ) : (
              <>
                <HardDrive className="w-4 h-4 text-amber-600" />
                <span>Local Storage Mode Active (Works Offline)</span>
              </>
            )}
          </div>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            {isMongoConnected
              ? `Your memories are syncing directly to your MongoDB database! (${memoriesCount} memories stored)`
              : `The app is currently saving your couple celebrations and wishlist in your browser's local storage. You can start using it immediately!`}
          </p>
        </div>

        {/* Instructions to connect */}
        {!isMongoConnected && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              How to connect MongoDB for Cloud Sync:
            </h4>

            <ol className="space-y-3 text-xs text-stone-700 dark:text-stone-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-500">1.</span>
                <span>
                  Create a free database at{" "}
                  <a
                    href="https://www.mongodb.com/atlas/database"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-semibold underline inline-flex items-center gap-0.5"
                  >
                    MongoDB Atlas <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  (or run local MongoDB).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-rose-500">2.</span>
                <span>
                  Create a file named <code className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-rose-500 font-mono">.env.local</code> in this project folder:
                </span>
              </li>
            </ol>

            {/* Code Box */}
            <div className="relative p-3 rounded-xl bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto">
              <code>{sampleEnv}</code>
              <button
                onClick={handleCopyEnv}
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300"
                title="Copy sample env"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <li className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
              <span className="font-bold text-rose-500">3.</span>
              <span>Restart the app. It will automatically detect MongoDB and persist all memories to the cloud so both of you can access them from any phone!</span>
            </li>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium text-xs"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
