import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { NextResponse } from "next/server";

type SheetForm = {
	gender: string;
	device: string;
	platform: string;
	comp: string;
	willing: string;
};
export async function POST(req: Request, res: NextApiResponse) {
	if (req.method !== "POST") {
		return NextResponse.json({ status: 405, statusText: "OK" });
	}

	const body = await req.json();
	const { GoogleAuth } = require("google-auth-library");
	try {
		//prepare authentication
		const auth = new GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_CLIENT_EMAIL,
				private_key: process.env.GOOGLE_PRIVATE_KEY,
			},
			projectId: process.env.GOOGLE_PROJECT_ID,
			scopes: ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/spreadsheets"],
		});
		const sheets = google.sheets({
			auth: auth,
			version: "v4",
		});

		const response = await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: "Hoja!A:E",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [[body.gender, body.device, body.platform, body.comp, body.willing]],
			},
		});

		return NextResponse.json({
			data: response.data,
		});
	} catch (err: any) {
		console.log(err);
		return NextResponse.json({ status: 500, statusText: err.message });
	}
}
