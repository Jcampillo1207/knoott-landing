'use server'

import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

type form = { 
    gender: string, 
    device: string, 
    platform: string, 
    comp: string, 
    willing:string 
};

export const postSheetsData = async (form: form) => {
   //prepare authentication

		const auth = new GoogleAuth({
			credentials: {
				client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
				private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
			},
			projectId: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
			scopes: ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/spreadsheets"],
		});

		const sheets = google.sheets({
			auth: auth,
			version: "v4",
		});

		console.log(sheets)

		console.log( process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID)

		const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            range: "Hoja!A:E",
            valueInputOption: "USER_ENTERED",
            requestBody: {
				values: [[form.gender, form.device, form.platform, form.comp, form.willing]],
			},
        })

        console.log(response.data)

        return response.data
}
