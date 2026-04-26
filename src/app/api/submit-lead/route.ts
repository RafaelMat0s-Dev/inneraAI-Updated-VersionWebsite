import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const now = new Date().toLocaleString("pt-PT", { timeZone: "Europe/Lisbon" });

    const row = [
      now,
      body.name,
      body.email,
      body.phone,
      body.company,
      body.sector,
      body.size,
      body.revenue,
      body.challenge,
      body.timeline,
      body.source,
      body.current_tools || "",
      body.context || "",
      "Novo Lead", // Status column — update manually as you contact them
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Leads!A:N",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    // Optional: format header row on first submission
    // This is idempotent — Google Sheets ignores duplicates at row 1 if you manage it manually

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Google Sheets error:", err);
    return NextResponse.json({ success: false, error: "Failed to save lead" }, { status: 500 });
  }
}