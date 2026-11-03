import { NextResponse } from "next/server";
import { FESTIVALS } from "@/data/festivals";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase();
  const culture = searchParams.get("culture");
  const month = searchParams.get("month");
  const effort = searchParams.get("effort");

  let filtered = [...FESTIVALS];

  if (query) {
    filtered = filtered.filter(
      (f) =>
        f.name.toLowerCase().includes(query) ||
        f.tagline.toLowerCase().includes(query) ||
        f.originCountry.toLowerCase().includes(query) ||
        f.feast.dishName.toLowerCase().includes(query) ||
        f.coupleRitual.title.toLowerCase().includes(query)
    );
  }

  if (culture && culture !== "All") {
    filtered = filtered.filter((f) => f.culture === culture);
  }

  if (month && month !== "All") {
    const monthNum = parseInt(month, 10);
    if (!isNaN(monthNum)) {
      filtered = filtered.filter((f) => f.month === monthNum);
    }
  }

  if (effort && effort !== "All") {
    filtered = filtered.filter((f) => f.indianFeasibility.effortLevel === effort);
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
}
