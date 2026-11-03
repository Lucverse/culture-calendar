import { Festival } from "@/types/festival";

export function getDaysUntil(targetDateStr: string): { days: number; isToday: boolean; isPast: boolean } {
  const now = new Date();
  const target = new Date(targetDateStr);

  // Strip time for clean day comparison
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const eventDate = new Date(target.getFullYear(), target.getMonth(), target.getDate());

  const diffTime = eventDate.getTime() - todayDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    days: diffDays,
    isToday: diffDays === 0,
    isPast: diffDays < 0,
  };
}

export function formatEventDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function buildGoogleCalendarUrl(festival: Festival): string {
  const dateFormatted = festival.date2026.replace(/-/g, "");
  // For all-day event in Google Calendar: YYYYMMDD/YYYYMMDD (start / end day)
  const dates = `${dateFormatted}/${dateFormatted}`;
  const title = encodeURIComponent(`🎉 ${festival.name} (Couple Date Night)`);
  const details = encodeURIComponent(
    `Cultural Origin: ${festival.culture} (${festival.originCountry})\n\n` +
      `Couple Date Activity: ${festival.coupleRitual.title} (${festival.coupleRitual.estimatedDuration})\n` +
      `${festival.coupleRitual.description}\n\n` +
      `Feast Menu: ${festival.feast.dishName} & ${festival.feast.drinkName}\n\n` +
      `Estimated Budget: ${festival.indianFeasibility.estimatedBudgetInINR}\n` +
      `Indian Quick Commerce Checklist: ${festival.indianFeasibility.quickCommerceItems.join(", ")}`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}`;
}

export function generateShoppingListText(festivals: Festival[]): string {
  let text = `🛒 COUPLE FESTIVAL SHOPPING LIST (India Quick Commerce & Mandi)\n`;
  text += `Generated for: ${festivals.map((f) => f.name).join(", ")}\n\n`;

  festivals.forEach((f) => {
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🏮 ${f.name.toUpperCase()} (${f.approximateDate})\n`;
    text += `Feast: ${f.feast.dishName}\n\n`;
    text += `⚡ Blinkit / Zepto / Instamart Items:\n`;
    f.indianFeasibility.quickCommerceItems.forEach((item) => {
      text += `  • [ ] ${item}\n`;
    });

    if (f.indianFeasibility.localMarketItems.length > 0) {
      text += `\n🌸 Local Mandi / Vendor:\n`;
      f.indianFeasibility.localMarketItems.forEach((item) => {
        text += `  • [ ] ${item}\n`;
      });
    }

    if (f.indianFeasibility.substitutions.length > 0) {
      text += `\n💡 Indian Substitutions:\n`;
      f.indianFeasibility.substitutions.forEach((sub) => {
        text += `  • ${sub.authenticItem} ➔ ${sub.indianSubstitute} (${sub.note})\n`;
      });
    }
    text += `\n`;
  });

  return text;
}
