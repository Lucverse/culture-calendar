import { NextResponse } from "next/server";
import { getMongoDb, isMongoConfigured } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    if (!isMongoConfigured()) {
      return NextResponse.json({
        success: true,
        mongodbConnected: false,
        message: "MongoDB URI not configured. Client using local storage.",
        data: [],
      });
    }

    const db = await getMongoDb();
    if (!db) {
      return NextResponse.json({
        success: true,
        mongodbConnected: false,
        message: "Failed to connect to MongoDB. Client using local storage.",
        data: [],
      });
    }

    const collection = db.collection("memories");
    const memories = await collection
      .find({})
      .sort({ celebratedDate: -1, createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      mongodbConnected: true,
      data: memories.map((m) => ({
        ...m,
        _id: m._id.toString(),
      })),
    });
  } catch (error: unknown) {
    console.error("Error fetching memories from MongoDB:", error);
    return NextResponse.json(
      {
        success: false,
        mongodbConnected: false,
        error: error instanceof Error ? error.message : "Unknown error",
        data: [],
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { festivalId, festivalName, celebratedDate, rating, isAnnualTradition, partnerNotes, photoUrl, dishCooked } = body;

    if (!festivalId || !celebratedDate) {
      return NextResponse.json(
        { success: false, error: "festivalId and celebratedDate are required." },
        { status: 400 }
      );
    }

    if (!isMongoConfigured()) {
      return NextResponse.json({
        success: true,
        mongodbConnected: false,
        message: "MongoDB URI not configured. Memory can be persisted in client local storage.",
        data: {
          _id: "local-" + Date.now(),
          festivalId,
          festivalName,
          celebratedDate,
          rating: rating ?? 5,
          isAnnualTradition: Boolean(isAnnualTradition),
          partnerNotes: partnerNotes ?? "",
          photoUrl: photoUrl ?? "",
          dishCooked: dishCooked ?? "",
          createdAt: new Date().toISOString(),
        },
      });
    }

    const db = await getMongoDb();
    if (!db) {
      return NextResponse.json(
        { success: false, error: "MongoDB connection unavailable" },
        { status: 503 }
      );
    }

    const collection = db.collection("memories");
    const newMemory = {
      festivalId,
      festivalName: festivalName || "Festival Celebration",
      celebratedDate,
      rating: Number(rating) || 5,
      isAnnualTradition: Boolean(isAnnualTradition),
      partnerNotes: partnerNotes || "",
      photoUrl: photoUrl || "",
      dishCooked: dishCooked || "",
      createdAt: new Date().toISOString(),
    };

    const result = await collection.insertOne(newMemory);

    return NextResponse.json({
      success: true,
      mongodbConnected: true,
      data: {
        ...newMemory,
        _id: result.insertedId.toString(),
      },
    });
  } catch (error: unknown) {
    console.error("Error creating memory in MongoDB:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to save memory" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing memory id" }, { status: 400 });
    }

    if (!isMongoConfigured()) {
      return NextResponse.json({
        success: true,
        mongodbConnected: false,
        message: "Deleted from client storage.",
      });
    }

    const db = await getMongoDb();
    if (!db) {
      return NextResponse.json({ success: false, error: "MongoDB unavailable" }, { status: 503 });
    }

    await db.collection("memories").deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to delete" },
      { status: 500 }
    );
  }
}
