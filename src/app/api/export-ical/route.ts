import { NextResponse } from "next/server";
import { FESTIVALS } from "@/data/festivals";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const festivalId = searchParams.get("id");

  const festivalsToExport = festivalId
    ? FESTIVALS.filter((f) => f.id === festivalId)
    : FESTIVALS;

  if (festivalsToExport.length === 0) {
    return NextResponse.json({ error: "Festival not found" }, { status: 404 });
  }

  // Generate standard iCalendar (.ics) content
  const icsLines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Couple Culture Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Couple's Culture Calendar",
    "X-WR-TIMEZONE:Asia/Kolkata",
  ];

  for (const f of festivalsToExport) {
    const dateFormatted = f.date2026.replace(/-/g, ""); // e.g. 20261031
    const summary = `🎉 ${f.name} (Couple Date Night)`;
    const description = `Culture: ${f.culture} (${f.originCountry})\\n\\n` +
      `Couple Activity: ${f.coupleRitual.title} (${f.coupleRitual.estimatedDuration})\\n` +
      `${f.coupleRitual.description}\\n\\n` +
      `Feast: ${f.feast.dishName} & ${f.feast.drinkName}\\n\\n` +
      `India Grocery Checklist: ${f.indianFeasibility.quickCommerceItems.slice(0, 3).join(", ")}...\\n\\n` +
      `Budget: ${f.indianFeasibility.estimatedBudgetInINR}`;

    icsLines.push("BEGIN:VEVENT");
    icsLines.push(`UID:culture-event-${f.id}-2026@coupleculture.local`);
    icsLines.push(`DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`);
    icsLines.push(`DTSTART;VALUE=DATE:${dateFormatted}`);
    icsLines.push(`DTEND;VALUE=DATE:${dateFormatted}`);
    icsLines.push(`SUMMARY:${summary}`);
    icsLines.push(`DESCRIPTION:${description}`);
    icsLines.push(`STATUS:CONFIRMED`);

    // Alarm 1: 7 days before for grocery prep
    icsLines.push("BEGIN:VALARM");
    icsLines.push("TRIGGER:-P7D");
    icsLines.push("ACTION:DISPLAY");
    icsLines.push(`DESCRIPTION:Prep reminder: Order specialty items for ${f.name} in 7 days!`);
    icsLines.push("END:VALARM");

    // Alarm 2: 1 day before
    icsLines.push("BEGIN:VALARM");
    icsLines.push("TRIGGER:-P1D");
    icsLines.push("ACTION:DISPLAY");
    icsLines.push(`DESCRIPTION:Tomorrow is ${f.name}! Check your grocery checklist.`);
    icsLines.push("END:VALARM");

    icsLines.push("END:VEVENT");
  }

  icsLines.push("END:VCALENDAR");

  const icsContent = icsLines.join("\r\n");

  return new NextResponse(icsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${festivalId ? festivalId : "couple-culture-calendar"}.ics"`,
    },
  });
}
