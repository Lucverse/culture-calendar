import { NextResponse } from "next/server";
import { getMongoDb, isMongoConfigured } from "@/lib/mongodb";
import { FESTIVALS } from "@/data/festivals";

export async function GET() {
  const configured = isMongoConfigured();
  let dbConnected = false;
  let memoriesCount = 0;

  if (configured) {
    try {
      const db = await getMongoDb();
      if (db) {
        await db.command({ ping: 1 });
        dbConnected = true;
        memoriesCount = await db.collection("memories").countDocuments();
      }
    } catch (e) {
      console.error("MongoDB ping error:", e);
      dbConnected = false;
    }
  }

  return NextResponse.json({
    status: "ok",
    festivalsCount: FESTIVALS.length,
    mongodb: {
      configured,
      connected: dbConnected,
    },
    memoriesCount,
  });
}
