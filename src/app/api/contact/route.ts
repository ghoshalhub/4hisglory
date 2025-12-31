import { NextRequest, NextResponse } from "next/server";
import { getBrandConfig } from "@/common/brandConfig";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const cfg = getBrandConfig();

    console.log("Contact API URL:", cfg.api.contact);
    console.log("Request body:", JSON.stringify(body, null, 2));

    if (!cfg.api.contact) {
      console.error("Contact API endpoint is not configured");
      return NextResponse.json(
        { error: "Contact API endpoint is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(cfg.api.contact, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": request.headers.get("origin") || "https://www.lainland.com",
      },
      body: JSON.stringify({
        ...body,
        brand: "4hisglory",
        source: "4hisglory-lainland",
      }),
    });

    console.log("API Response status:", response.status);
    console.log("API Response headers:", Object.fromEntries(response.headers.entries()));

    let data;
    try {
      data = await response.json();
      console.log("API Response data:", data);
    } catch (e) {
      const textResponse = await response.text();
      console.error("Failed to parse JSON response:", textResponse);
      return NextResponse.json(
        { error: "Invalid response from contact API", details: textResponse },
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
        error: "Failed to submit form",
        message: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
