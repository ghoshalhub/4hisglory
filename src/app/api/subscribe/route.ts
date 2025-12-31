import { NextRequest, NextResponse } from "next/server";
import { getBrandConfig } from "@/common/brandConfig";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const cfg = getBrandConfig();

    console.log("Subscribe API URL:", cfg.api.subscribe);
    console.log("Request body:", JSON.stringify(body, null, 2));

    if (!cfg.api.subscribe) {
      console.error("Subscribe API endpoint is not configured");
      return NextResponse.json(
        { error: "Subscribe API endpoint is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(cfg.api.subscribe, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": request.headers.get("origin") || "https://www.lainland.com",
      },
      body: JSON.stringify({
        ...body,
        brand: "4hisglory",
        source: "4hisglory-lainland",
        listId: "4hisglory-newsletter", // List identifier for 4HISGLORY
      }),
    });

    console.log("API Response status:", response.status);

    let data;
    try {
      data = await response.json();
      console.log("API Response data:", data);
    } catch (e) {
      const textResponse = await response.text();
      console.error("Failed to parse JSON response:", textResponse);
      return NextResponse.json(
        { error: "Invalid response from subscribe API", details: textResponse },
        { status: 502 }
      );
    }

    if (!response.ok) {
      console.error("API returned error:", response.status, data);
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      {
        error: "Failed to subscribe",
        message: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
